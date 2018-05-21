# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.http import JsonResponse
from django.http import HttpResponse
from dsa_starter.models import Character, ActualSkill, Skill, SkillType, SkillGroup
from dsa_starter.serializable import CharacterSerializable, SkillSerializable, SkillTypeSerializable, SkillGroupSerializable

from channels.handler import  AsgiHandler

import jsonpickle
from django.shortcuts import render

# Create your views here.

def skills(request):
    skillsData = Skill.objects.all()
    skills_serializable = []
    for skill in skillsData:
        skill_serializable = SkillSerializable(skill)
        skills_serializable.append(skill_serializable)
    response = jsonpickle.encode(skills_serializable, True)
    return HttpResponse(response, content_type='application/json')

def skill_types(request):
    skillTypes = SkillType.objects.all()
    skillTypes_serializable = []
    for skillType in skillTypes:
        skillType_serializable = SkillTypeSerializable(skillType)
        skillTypes_serializable.append(skillType_serializable)
    response = jsonpickle.encode(skillTypes_serializable, True)
    return HttpResponse(response, content_type='application/json')

def skill_groups(request):
    skillGroups = SkillGroup.objects.all()
    skillGroups_serializable = []
    for skillGroup in skillGroups:
        skillGroup_serializable = SkillGroupSerializable(skillGroup)
        skillGroups_serializable.append(skillGroup_serializable)
    response = jsonpickle.encode(skillGroups_serializable, True)
    return HttpResponse(response, content_type='application/json')




def character_list(request):
    characters = Character.objects.all()
    characters_serializable = []
    for character in characters:
        character_serializable = CharacterSerializable(character)
        characters_serializable.append(character_serializable)

    response = jsonpickle.encode(characters_serializable, True)
    #response = jsonpickle.dumps(characters_serializable)
    return HttpResponse(response, content_type='application/json')


def character_detail(request):
    character_id = request.get_full_path().split('/')[2]
    character = Character.objects.get(pk=character_id)
    response = 'huhu'
    return HttpResponse(response, content_type='application/json')


