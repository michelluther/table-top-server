import os
from django.core.asgi import get_asgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'dsa_cockpit.settings')
asgi_application = get_asgi_application()

from channels.routing import ProtocolTypeRouter, URLRouter
from channels.security.websocket import AllowedHostsOriginValidator
from channels.auth import AuthMiddlewareStack
from django.urls import path
from dsa_starter.consumers import HeroConsumer, RemoteControlConsumer

application = ProtocolTypeRouter({
  "http": asgi_application,
  "websocket": AllowedHostsOriginValidator(
        AuthMiddlewareStack(
            URLRouter([
                path('heroes', HeroConsumer.as_asgi()),
                path('remoteControl', RemoteControlConsumer.as_asgi()),
            ])
        )
    )
  ## IMPORTANT::Just HTTP for now. (We can add other protocols later.)
})