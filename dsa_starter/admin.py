# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin
from dsa_starter.character import Character, Race, HeroType, Skill, SkillType, SkillGroup, ActualSkill, WeaponSkillDistribution
from dsa_starter.adventureModels import Adventure, Fight, FightCharacterParticipation
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

class WeaponSkillDistributionAdmin(admin.ModelAdmin):

    list_display = ['attack']

    def get_changeform_initial_data(self, request):
        return {'parade': 12}

    def change_view(self, request, object_id, form_url='', extra_context=None):
        extra_context = extra_context or {}


admin.site.register(WeaponSkillDistribution, WeaponSkillDistributionAdmin)

