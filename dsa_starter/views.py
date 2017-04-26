# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.http import JsonResponse
from django.http import HttpResponse
from dsa_starter.models import Character

from channels.handler import  AsgiHandler

from django.core import serializers
from django.shortcuts import render

# Create your views here.


def character_list(request):
    characters = Character.objects.all()
    response = serializers.serialize("json", characters)
    return HttpResponse(response, content_type='application/json')


def character_detail(request):
    character_id = request.get_full_path().split('/')[2]
    character = Character.objects.get(pk=character_id)
    response = serializers.serialize("json", [character])
    return HttpResponse(response, content_type='application/json')

