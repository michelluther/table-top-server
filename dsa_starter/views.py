# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.core.exceptions import ObjectDoesNotExist
from django.http import JsonResponse
from django.http import HttpResponse, HttpResponseNotFound
from rest_framework.decorators import api_view
from rest_framework.response import Response
from dsa_starter.characterModels import Character, ActualSkill, Skill, SkillType, SkillGroup, Spell, SpellType
from dsa_starter.serializers import (CharacterSerializer, SkillSerializer, SpellSerializer, SkillTypeSerializer, 
                                          SkillGroupSerializer, SpellTypeSerializer, AdventureSerializer, 
                                          AdventureCharacterSerializer, AscensionSerializer, NPCTypeSerializer, 
                                          FightSerializer)
from dsa_starter.adventureModels import Adventure, AdventureImage, AdventureCharacter, Fight
from dsa_starter.npcGenerator import generateNames, NPCType
from dsa_starter.user import RightsSupport

from django.contrib.auth.decorators import login_required, permission_required

from dsa_starter.ruleModels import Ascensions

# from channels.handler import AsgiHandler

import jsonpickle
from django.shortcuts import render

# Create your views here.

@api_view(['GET'])
def skills(request):
    skills_data = Skill.objects.all()
    serializer = SkillSerializer(skills_data, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def skill_types(request):
    skillTypes = SkillType.objects.all()
    serializer = SkillTypeSerializer(skillTypes, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def skill_groups(request):
    skillGroups = SkillGroup.objects.all()
    serializer = SkillGroupSerializer(skillGroups, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def spells(request):
    spells = Spell.objects.all()
    serializer = SpellSerializer(spells, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def spell_types(request):
    spellTypes = SpellType.objects.all()
    serializer = SpellTypeSerializer(spellTypes, many=True)
    return Response(serializer.data)

# @permission_required('app.use_rest_api', raise_exception=True)
@api_view(['GET'])
def character_list(request):
    characters = Character.objects.filter(isHero=True)
    serializer = CharacterSerializer(characters, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def adventure_list(request):
    adventures = Adventure.objects.all()
    serializer = AdventureSerializer(adventures, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def adventureById(request, adventureId):
    try:
        adventure = Adventure.objects.get(pk=int(adventureId))
        serializer = AdventureSerializer(adventure)
        return Response(serializer.data)
    except ObjectDoesNotExist:
        return HttpResponseNotFound('<h1>Adventure not found</h1>')


@api_view(['GET'])
def adventureNPCs(request, adventureId):
    adventureCharacters = AdventureCharacter.objects.filter(adventure=adventureId)
    serializer = AdventureCharacterSerializer(adventureCharacters, many=True)
    return Response(serializer.data)

 
@api_view(['GET'])
def adventureFights(request, adventureId):
    adventureFights = Fight.objects.filter(adventure=adventureId)
    serializer = FightSerializer(adventureFights, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def ascensions(request):
    ascensions = Ascensions.objects.all()
    serializer = AscensionSerializer(ascensions, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def npcTypes(request):
    npcTypes = NPCType.objects.all()
    serializer = NPCTypeSerializer(npcTypes, many=True)
    return Response(serializer.data)


def nameList(request):
    gender = request.GET.get('gender')
    type = request.GET.get('type')
    generatedNames = generateNames(type, gender)
    
    return HttpResponse(jsonpickle.encode(generatedNames, True), content_type='application/json')