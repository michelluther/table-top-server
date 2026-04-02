# syntax=docker/dockerfile:1

# Build stage
FROM --platform=$BUILDPLATFORM node:20-alpine AS builder
WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./
RUN npm ci

# Copy source code and build
COPY . .
RUN npm run build

# Debug: Check build output structure
RUN echo "=== Build output structure ===" && ls -la /app/
RUN echo "=== Hero-app directory ===" && ls -la /app/hero-app/
RUN echo "=== Hero-app contents ===" && find /app/hero-app/ -type f | head -10

# Production stage
FROM nginx:alpine
COPY --from=builder /app/hero-app/ /usr/share/nginx/html/

# Debug: Check what actually got copied
RUN echo "=== Nginx html directory ===" && ls -la /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]