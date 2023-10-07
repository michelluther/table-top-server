# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.core.exceptions import ObjectDoesNotExist
from django.http import JsonResponse
from django.http import HttpResponse, HttpResponseNotFound
from dsa_starter.characterModels import Character, ActualSkill, Skill, SkillType, SkillGroup, Spell, SpellType
from dsa_starter.serializable import CharacterSerializable, SkillSerializable, SkillTypeSerializable, SkillGroupSerializable, SpellSerializable, SpellTypeSerializable, AdventureSerializable, AdventureCharacterSerializable, AscensionSerializable, NPCTypeSerializable, FightSerializable
from dsa_starter.adventureModels import Adventure, AdventureImage, AdventureCharacter, Fight
from dsa_starter.npcGenerator import generateNames, NPCType
from dsa_starter.user import RightsSupport

from django.contrib.auth.decorators import login_required, permission_required

from dsa_starter.ruleModels import Ascensions

# from channels.handler import AsgiHandler

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


def spells(request):
    spells = Spell.objects.all()
    spells_serializable = []
    for spell in spells:
        spell_serializable = SpellSerializable(spell)
        spells_serializable.append(spell_serializable)
    response = jsonpickle.encode(spells_serializable, True)
    return HttpResponse(response, content_type='application/json')


def spell_types(request):
    spellTypes = SpellType.objects.all()
    spellTypes_serializable = []
    for spellType in spellTypes:
        spellType_serializable = SpellTypeSerializable(spellType)
        spellTypes_serializable.append(spellType_serializable)
    response = jsonpickle.encode(spellTypes_serializable, True)
    return HttpResponse(response, content_type='application/json')

# @permission_required('app.use_rest_api', raise_exception=True)

def character_list(request):
    characters = Character.objects.filter(isHero=True)
    characters_serializable = []
    for character in characters:
        character_serializable = CharacterSerializable(character)
        characters_serializable.append(character_serializable)

    response = jsonpickle.encode(characters_serializable, True)
    #response = jsonpickle.dumps(characters_serializable)
    return HttpResponse(response, content_type='application/json')


def adventure_list(request):
    adventures = Adventure.objects.all()
    adventures_serializable = []
    for adventure in adventures:
        adventure_serializable = AdventureSerializable(adventure)
        adventures_serializable.append(adventure_serializable)
    response = jsonpickle.encode(adventures_serializable, True)
    return HttpResponse(response, content_type='application/json')


def adventureById(request, adventureId):
    try:
        adventure = Adventure.objects.get(pk=int(adventureId))
        adventure_serializable = AdventureSerializable(adventure)
        response = jsonpickle.encode(adventure_serializable, True)
        return HttpResponse(response, content_type='application/json')        
    except ObjectDoesNotExist:
        return HttpResponseNotFound('<h1>Adventure not found</h1>')


def adventureNPCs(request, adventureId):
    adventureCharacters = AdventureCharacter.objects.filter(adventure=adventureId)
    characters_serializable = []
    for character in adventureCharacters:
        character_serializable = AdventureCharacterSerializable(character)
        characters_serializable.append(character_serializable)
    response = jsonpickle.encode(characters_serializable, True)
    return HttpResponse(response, content_type='application/json')

 
def adventureFights(request, adventureId):
    adventureFights = Fight.objects.filter(adventure=adventureId)
    fights_serializable = []
    for fight in adventureFights:
        fight_serializable = FightSerializable(fight)
        fights_serializable.append(fight_serializable)
    response = jsonpickle.encode(fights_serializable, True)
    return HttpResponse(response, content_type='application/json')


def ascensions(request):
    ascensions = Ascensions.objects.all()
    response = []
    for ascension in ascensions:
        response.append(AscensionSerializable(ascension)        )

    return HttpResponse(jsonpickle.encode(response, True), content_type='application/json')


def npcTypes(request):
    npcTypes = NPCType.objects.all();
    response = []
    for npcType in npcTypes:
        response.append(NPCTypeSerializable(npcType))
    return HttpResponse(jsonpickle.encode(response, True), content_type='application/json')


def nameList(request):
    gender = request.GET.get('gender')
    type = request.GET.get('type')
    generatedNames = generateNames(type, gender)
    
    return HttpResponse(jsonpickle.encode(generatedNames, True), content_type='application/json')