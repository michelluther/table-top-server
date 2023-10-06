# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin
from dsa_starter.characterModels import Character, Race, HeroType, Skill, SkillType, SkillGroup, ActualSkill, \
    WeaponSkillDistribution, Weapon, CharacterHasWeapon, Armor, CharacterHasArmor, Spell, SpellType, ActualSpellSkill, InventoryItem
from dsa_starter.adventureModels import AdventureLocation, AdventureCharacter, Adventure, Fight, FightParticipation, AdventureImage
from dsa_starter.npcGenerator import NPCType
from dsa_starter.nonPlayerCharacter import NonPlayerCharacter
from dsa_starter.ruleModels import Ascensions

class SkillInline(admin.StackedInline):
    model = ActualSkill
    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        if db_field.name == "car":
            kwargs["queryset"] = Car.objects.filter(owner=request.user)
        return super().formfield_for_foreignkey(db_field, request, **kwargs)

class SpellInline(admin.StackedInline):
    model = ActualSpellSkill
    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        if db_field.name == "car":
            kwargs["queryset"] = Car.objects.filter(owner=request.user)
        return super().formfield_for_foreignkey(db_field, request, **kwargs)
    
class WeaponInline(admin.StackedInline):
    model = CharacterHasWeapon
    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        if db_field.name == "car":
            kwargs["queryset"] = Car.objects.filter(owner=request.user)
        return super().formfield_for_foreignkey(db_field, request, **kwargs)
    
class WeaponSkillDistributionInline(admin.StackedInline):
    model = WeaponSkillDistribution
    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        if db_field.name == "car":
            kwargs["queryset"] = Car.objects.filter(owner=request.user)
        return super().formfield_for_foreignkey(db_field, request, **kwargs)

class CharacterAdmin(admin.ModelAdmin):
    model = Character
    inlines = [
        SkillInline,
        SpellInline,
        WeaponInline,
        WeaponSkillDistributionInline
    ]
    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        if db_field.name == "car":
            kwargs["queryset"] = Car.objects.filter(owner=request.user)
        return super().formfield_for_foreignkey(db_field, request, **kwargs)

# Register your models here.
# admin.site.register(Character)

admin.site.register(Character, CharacterAdmin)
admin.site.register(Race)
admin.site.register(HeroType)
admin.site.register(Skill)
admin.site.register(SkillGroup)
admin.site.register(SkillType)
admin.site.register(ActualSkill)
admin.site.register(Fight)
admin.site.register(FightParticipation)
admin.site.register(Adventure)
admin.site.register(AdventureImage)
admin.site.register(AdventureCharacter)
admin.site.register(AdventureLocation)
admin.site.register(WeaponSkillDistribution)
admin.site.register(Weapon)
admin.site.register(CharacterHasWeapon)
admin.site.register(Armor)
admin.site.register(CharacterHasArmor)
admin.site.register(Spell)
admin.site.register(SpellType)
admin.site.register(ActualSpellSkill)
admin.site.register(InventoryItem)
admin.site.register(Ascensions)
admin.site.register(NPCType)
admin.site.register(NonPlayerCharacter)

