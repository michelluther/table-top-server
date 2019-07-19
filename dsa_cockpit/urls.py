"""dsa_cockpit URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from dsa_starter.views import character_list, skills, skill_types, skill_groups, spells, spell_types, adventure_list

from django.conf.urls.static import static
from django.conf import settings


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^characters', character_list, name='character_list'),
    url(r'^skills', skills, name='skills'),
    url(r'^spells', spells, name='spells'),
    url(r'^skillTypes', skill_types, name='skillTypes'),
    url(r'^spellTypes', spell_types, name='spellTypes'),
    url(r'^skillGroups', skill_groups, name='skillGroups'),
    url(r'^adventures', adventure_list, name='adventures'),

]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
