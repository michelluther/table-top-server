# Quick Start Guide for Docker Setup

## Development Setup

1. Copy environment file:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` file with your preferred settings:
   - Set DEBUG=True for development
   - Change SECRET_KEY to a secure value
   - Modify database credentials if needed

3. Build and start services:
   ```bash
   docker-compose up --build
   ```

4. Access the application:
   - Web interface: http://localhost:8000
   - Admin interface: http://localhost:8000/admin
   - Default superuser (dev only): admin/admin123

## Production Setup

1. Copy environment file:
   ```bash
   cp .env.example .env
   ```

2. Configure production settings in `.env`:
   ```bash
   DEBUG=False
   SECRET_KEY=your-very-secure-secret-key
   ALLOWED_HOSTS=yourdomain.com,www.yourdomain.com
   ```

3. Start with Nginx reverse proxy:
   ```bash
   docker-compose --profile production up -d
   ```

## Useful Commands

### Database Management
```bash
# Run migrations
docker-compose exec web python manage.py migrate

# Create superuser
docker-compose exec web python manage.py createsuperuser

# Access database
docker-compose exec db psql -U dsauser -d dsa_cockpit
```

### Service Management
```bash
# View logs
docker-compose logs -f web
docker-compose logs -f db

# Restart services
docker-compose restart web

# Update and rebuild
docker-compose down
docker-compose up --build
```

### Data Migration from SQLite
```bash
# Export from SQLite (run on host)
python manage.py dumpdata > data_backup.json

# Import to PostgreSQL (run in container)
docker-compose exec web python manage.py loaddata data_backup.json
```