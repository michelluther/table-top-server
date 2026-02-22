#!/usr/bin/env python
import os
import sys
import django

if __name__ == "__main__":
    # Use Docker settings when running in container
    if os.environ.get('DJANGO_SETTINGS_MODULE') is None:
        if os.environ.get('DOCKER_CONTAINER'):
            os.environ.setdefault("DJANGO_SETTINGS_MODULE", "dsa_cockpit.settings_docker")
        else:
            os.environ.setdefault("DJANGO_SETTINGS_MODULE", "dsa_cockpit.settings")
    
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)