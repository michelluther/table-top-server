# Multi-stage build for production
FROM python:3.11-alpine AS builder

# Install build dependencies
RUN apk add --no-cache --virtual .build-deps \
    gcc \
    musl-dev \
    postgresql-dev \
    python3-dev \
    # Pillow dependencies
    freetype-dev \
    fribidi-dev \
    harfbuzz-dev \
    jpeg-dev \
    lcms2-dev \
    libimagequant-dev \
    openjpeg-dev \
    tcl-dev \
    tiff-dev \
    tk-dev \
    zlib-dev \
    g++ \
    zeromq-dev

# Create virtual environment
RUN python -m venv /opt/venv
ENV PATH="/opt/venv/bin:$PATH"

# Install Python dependencies
COPY requirements.txt .
RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt

# Production stage
FROM python:3.11-alpine AS production

# Install runtime dependencies
RUN apk add --no-cache \
    postgresql-libs \
    curl \
    supervisor

# Create non-root user
RUN addgroup -g 1000 dsauser && \
    adduser -D -s /bin/sh -u 1000 -G dsauser dsauser

# Copy virtual environment from builder stage
COPY --from=builder /opt/venv /opt/venv
ENV PATH="/opt/venv/bin:$PATH"

# Set work directory
WORKDIR /app

# Copy application code
COPY --chown=dsauser:dsauser . .

# Create required directories
RUN mkdir -p /app/static /app/media /app/logs && \
    chown -R dsauser:dsauser /app

# Copy entrypoint script
COPY docker/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Copy supervisor configuration
COPY docker/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Expose port
EXPOSE 8000

# Switch to non-root user
USER dsauser

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
    CMD curl -f http://localhost:8000/admin/ || exit 1

# Run entrypoint script
ENTRYPOINT ["/entrypoint.sh"]
