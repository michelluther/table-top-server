# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin
from dsa_starter.characterModels import Character, Race, HeroType, Skill, SkillType, SkillGroup, ActualSkill, WeaponSkillDistribution, Weapon, CharacterHasWeapon
from dsa_starter.adventureModels import Adventure, Fight, FightCharacterParticipation, AdventureImage
from dsa_starter.nonPlayerCharacter import NonPlayerCharacter

# Register your models here.
admin.site.register(Character)
admin.site.register(Race)
admin.site.register(HeroType)
admin.site.register(Skill)
admin.site.register(SkillGroup)
admin.site.register(SkillType)
admin.site.register(ActualSkill)
admin.site.register(Fight)
admin.site.register(FightCharacterParticipation)
admin.site.register(NonPlayerCharacter)
admin.site.register(Adventure)
admin.site.register(AdventureImage)
admin.site.register(WeaponSkillDistribution)
admin.site.register(Weapon)
admin.site.register(CharacterHasWeapon)
