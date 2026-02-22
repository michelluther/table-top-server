# Docker Containerization Plan for DSA Tabletop RPG Management App

## Current Setup Analysis

Your app is a Django application with:
- WebSocket support via Django Channels and ASGI
- REST API capabilities 
- Currently using SQLite database
- Existing basic Dockerfile (but outdated - Python 3.7)
- CORS enabled for cross-origin requests

## Containerization Plan

### 1. **Update Application Container**

**Issues to address:**
- Dockerfile uses outdated Python 3.7 (should use 3.11+ for better performance and security)
- Uses development server (`runserver`) instead of production-ready server
- No proper handling of static files
- No environment variable configuration

**Changes needed:**
- Update to modern Python version
- Use Gunicorn + Daphne for production deployment
- Add proper static file handling
- Environment-based configuration

### 2. **Database Migration Strategy**

**Current:** SQLite (not suitable for containers)
**Target:** PostgreSQL in separate container

**Required changes:**
- Update Django settings to use PostgreSQL
- Add psycopg2 to requirements
- Create database initialization scripts
- Handle data migration from existing SQLite

### 3. **Multi-Container Architecture**

**Services needed:**
1. **Application Container** - Django app with Gunicorn/Daphne
2. **Database Container** - PostgreSQL
3. **Redis Container** - For Django Channels (WebSocket support)
4. **Nginx Container** (optional) - Reverse proxy and static file serving

### 4. **Container Communication & Networking**

**Requirements:**
- Internal network for service communication
- External access for REST API (port 8000/80)
- External access for WebSocket connections (same port, different protocol)
- Database port should NOT be exposed externally

### 5. **Data Persistence**

**Volumes needed:**
- PostgreSQL data volume
- Static files volume
- Media files volume (for avatars, etc.)

### 6. **Environment Configuration**

**Environment variables to implement:**
- Database connection settings
- Django secret key
- Debug mode setting
- Allowed hosts configuration
- Redis connection for Channels

## Implementation Steps

### Step 1: Create docker-compose.yml
Set up multi-container orchestration with PostgreSQL, Redis, and the Django app.

### Step 2: Update Dockerfile
- Upgrade to Python 3.11+
- Add production server setup
- Proper static file handling
- Multi-stage build for optimization

### Step 3: Environment Configuration
- Create `.env` file template
- Update Django settings for container environment
- Add database configuration

### Step 4: Database Migration
- Add PostgreSQL dependencies
- Create database initialization scripts
- Data migration scripts from SQLite

### Step 5: Production Configuration
- Configure Gunicorn for HTTP requests
- Configure Daphne for WebSocket connections
- Set up proper logging
- Health checks

### Step 6: Networking & Security
- Configure proper port exposure
- Set up internal networks
- Secure database access
- CORS configuration for containers

## Files to Create/Modify

### New Files:
- `docker-compose.yml` - Multi-container orchestration
- `.env.example` - Environment variables template
- `docker/entrypoint.sh` - Container startup script
- `docker/wait-for-it.sh` - Database connection waiting script
- `nginx.conf` - Nginx configuration (if using reverse proxy)

### Files to Modify:
- `Dockerfile` - Update for production deployment
- `requirements.txt` - Add PostgreSQL and production dependencies
- `dsa_cockpit/settings.py` - Environment-based configuration
- `dsa_cockpit/settings_docker.py` - Docker-specific settings
- `.gitignore` - Add Docker and environment files

## Migration Strategy

### Data Migration:
1. Export data from current SQLite database
2. Set up PostgreSQL container
3. Run Django migrations on PostgreSQL
4. Import data into PostgreSQL
5. Verify data integrity

### Deployment Strategy:
1. Development environment with Docker Compose
2. Test all functionality (REST API, WebSockets, database operations)
3. Production-ready configuration
4. CI/CD pipeline integration (future consideration)

## Security Considerations

- Use environment variables for sensitive data
- Don't expose database ports externally
- Implement proper CORS settings for production
- Use non-root user in containers
- Regular security updates for base images
- Secrets management for production deployment

## Performance Optimizations

- Multi-stage Docker builds to reduce image size
- Use Alpine Linux base images where possible
- Implement proper caching strategies
- Configure connection pooling for database
- Optimize static file serving

## Monitoring & Logging

- Container health checks
- Application logging to stdout/stderr
- Database query monitoring
- WebSocket connection monitoring
- Resource usage tracking