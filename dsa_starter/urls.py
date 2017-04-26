from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.character_list, name='character_list')
]