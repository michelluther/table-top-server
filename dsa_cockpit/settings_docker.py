"""
Docker-specific Django settings for dsa_cockpit project.
"""
import os
import environ
from .settings import *

# Initialize environment variables
env = environ.Env(
    DEBUG=(bool, False),
    SECRET_KEY=(str, 'fallback-secret-key'),
    DB_NAME=(str, 'dsa_cockpit'),
    DB_USER=(str, 'dsauser'),
    DB_PASSWORD=(str, 'dsapassword'),
    DB_HOST=(str, 'db'),
    DB_PORT=(int, 5432),
    REDIS_URL=(str, 'redis://redis:6379/0'),
    ALLOWED_HOSTS=(list, ['localhost', '127.0.0.1']),
)

# Override settings for Docker environment
DEBUG = env('DEBUG')
SECRET_KEY = env('SECRET_KEY')

# Allowed hosts
ALLOWED_HOSTS = env('ALLOWED_HOSTS')

# Database configuration for PostgreSQL
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': env('DB_NAME'),
        'USER': env('DB_USER'),
        'PASSWORD': env('DB_PASSWORD'),
        'HOST': env('DB_HOST'),
        'PORT': env('DB_PORT'),
        'OPTIONS': {
            'connect_timeout': 60,
        },
        'CONN_MAX_AGE': 600,
    }
}

# Redis configuration for Channels
CHANNEL_LAYERS = {
    "default": {
        "BACKEND": "channels_redis.core.RedisChannelLayer",
        "CONFIG": {
            "hosts": [env('REDIS_URL')],
            "capacity": 1500,
            "expiry": 10,
        },
    },
}

# Cache configuration
CACHES = {
    'default': {
        'BACKEND': 'django_redis.cache.RedisCache',
        'LOCATION': env('REDIS_URL'),
        'OPTIONS': {
            'CLIENT_CLASS': 'django_redis.client.DefaultClient',
        }
    }
}

# Static files configuration
STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'static')

# Media files configuration
MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')

# Use WhiteNoise for static files in production
if not DEBUG:
    MIDDLEWARE.insert(1, 'whitenoise.middleware.WhiteNoiseMiddleware')
    STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'

# Security settings for production
if not DEBUG:
    SECURE_BROWSER_XSS_FILTER = True
    SECURE_CONTENT_TYPE_NOSNIFF = True
    SECURE_HSTS_SECONDS = 31536000
    SECURE_HSTS_INCLUDE_SUBDOMAINS = True
    SECURE_HSTS_PRELOAD = True
    X_FRAME_OPTIONS = 'DENY'

# Logging configuration
LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'formatters': {
        'verbose': {
            'format': '{levelname} {asctime} {module} {process:d} {thread:d} {message}',
            'style': '{',
        },
        'simple': {
            'format': '{levelname} {message}',
            'style': '{',
        },
    },
    'handlers': {
        'console': {
            'class': 'logging.StreamHandler',
            'formatter': 'verbose',
        },
        'file': {
            'class': 'logging.FileHandler',
            'filename': '/app/logs/django.log',
            'formatter': 'verbose',
        },
    },
    'root': {
        'handlers': ['console', 'file'],
        'level': 'INFO',
    },
    'loggers': {
        'django': {
            'handlers': ['console', 'file'],
            'level': 'INFO',
            'propagate': False,
        },
        'dsa_starter': {
            'handlers': ['console', 'file'],
            'level': 'DEBUG' if DEBUG else 'INFO',
            'propagate': False,
        },
    },
}

# CORS settings for containers
CORS_ALLOWED_ORIGINS = [
    f"http://{host}:3000" for host in ALLOWED_HOSTS  # React development
] + [
    f"http://{host}" for host in ALLOWED_HOSTS
] + [
    f"https://{host}" for host in ALLOWED_HOSTS
]

CORS_ALLOW_CREDENTIALS = True