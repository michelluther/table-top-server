# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import os

from django.db import models
from django.utils import timezone

EIGENSCHAFTEN = dict(
    {"GE": "Gewandheit",
     "KK": "Körperkraft",
     "KO": "Konstitution",
     "KL": "Klugheit",
     "MU": "Mut",
     "CH": "Charisma",
     "FF": "Fingerfertigkeit",
     "IN": "Intuition"}
)

UNITS = dict(
    {"SK": "Stück",
     "ST": "Stein",
     "UZ": "Unze",
     "SR": "Skrupel",
     "MS": "Maß",
     "SN": "Schank",
     "FX": "Flux"}
)


class Race(models.Model):
    name = models.TextField(default="Mensch")

    def __str__(self):
        return self.name

    def __unicode__(self):  # You have __str__
        return self.name


class HeroType(models.Model):
    name = models.CharField(max_length=200, default="Krieger")
    knowsMagic = models.BooleanField(default=False)

    def __str__(self):
        return self.name

    def __unicode__(self):  # You have __str__
        return self.name

# Create your models here.


class Character(models.Model):

    GENDER_CHOICES = (
        ('M', 'Male'),
        ('F', 'Female'),
    )

    id = models.AutoField(primary_key=True)
    gender = models.CharField(
        max_length=1, choices=GENDER_CHOICES, default="M")

    avatar = models.ImageField(upload_to='', blank=True, null=True)
    avatar_small = models.ImageField(upload_to='', blank=True, null=True)

    name = models.CharField(max_length=200, default="tbd")
    race = models.ForeignKey("Race")
    type = models.ForeignKey("HeroType")
    
    money_dukaten = models.SmallIntegerField(default=0)
    money_silbertaler = models.SmallIntegerField(default=0)
    money_heller = models.SmallIntegerField(default=0)
    money_kreuzer = models.SmallIntegerField(default=0)

    armor = models.SmallIntegerField(default=1)

    culture = models.CharField(max_length=200, default="")

    social_rank = models.SmallIntegerField(default=0)

    size = models.SmallIntegerField(default=175)

    # eigenschaften
    mut = models.SmallIntegerField(default=0)
    klugheit = models.SmallIntegerField(default=0)
    intuition = models.SmallIntegerField(default=0)
    charisma = models.SmallIntegerField(default=0)
    fingerfertigkeit = models.SmallIntegerField(default=0)
    gewandheit = models.SmallIntegerField(default=0)
    konstitution = models.SmallIntegerField(default=0)
    koerperkraft = models.SmallIntegerField(default=0)

    experience = models.SmallIntegerField(default=0)
    experience_used = models.SmallIntegerField(default=0)
    life = models.SmallIntegerField(default=30)
    life_lost = models.SmallIntegerField(default=0)
    magic_energy = models.SmallIntegerField(default=30)
    magic_energy_lost = models.SmallIntegerField(default=30)

    magic_energy = models.SmallIntegerField(default=30)
    magic_energy_lost = models.SmallIntegerField(default=0)

    ini_basis = models.SmallIntegerField(default=0)

    created_date = models.DateTimeField(
        default=timezone.now)

    def publish(self):
        self.created_date = timezone.now()
        self.save()

    def __str__(self):
        return self.name

    def __unicode__(self):  # You have __str__
        return self.name


class WeaponSkillDistribution(models.Model):

    attack = models.SmallIntegerField(default=0)
    parade = models.SmallIntegerField(default=0)
    character = models.ForeignKey("Character", default=1)
    skill = models.ForeignKey("Skill", default=1)

    def __str__(self):
        return self.character.name + " - " + self.skill.name


class ActualSkill(models.Model):

    value = models.SmallIntegerField(default=0)
    skill = models.ForeignKey("Skill")
    character = models.ForeignKey("Character", default=1)

    def __str__(self):
        return self.character.name + " - " + self.skill.name + " - " + str(self.value)

class ActualSpellSkill(models.Model):

    value = models.SmallIntegerField(default=0)
    spell = models.ForeignKey("Spell")
    character = models.ForeignKey("Character", default=1)

    def __str__(self):
        return self.character.name + " - " + self.spell.name + " - " + str(self.value)


class Weapon(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200)
    skill_type = models.ForeignKey("Skill")
    hit_dices = models.SmallIntegerField(default=1)
    hit_add_points = models.SmallIntegerField(default=2)

    def __str__(self):
        return self.name

    def __unicode__(self):  # You have __str__
        return self.name


class CharacterHasWeapon(models.Model):
    character = models.ForeignKey("Character")
    weapon = models.ForeignKey("Weapon")

    def __str__(self):
        return self.character.name + " / " + self.weapon.name


class Skill(models.Model):

    # EIGENSCHAFTEN = (
    #     ("GE", "Gewandheit"),
    #     ("KK", "Körperkraft"),
    #     ("KO", "Konstitution"),
    #     ("KL", "Klugheit"),
    #     ("MU", "Mut"),
    #     ("CH", "Charisma"),
    #     ("FF", "Fingerfertigkeit"),
    #     ("IN", "Intuition")
    # )
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200, default="")
    type = models.ForeignKey("SkillType")
    behinderung = models.CharField(max_length=4, default="")

    dice1 = models.CharField(
        max_length=2, choices=EIGENSCHAFTEN.items(), default="")
    dice2 = models.CharField(
        max_length=2, choices=EIGENSCHAFTEN.items(), default="")
    dice3 = models.CharField(
        max_length=2, choices=EIGENSCHAFTEN.items(), default="")

    basis = models.BooleanField()

    def __str__(self):
        return self.name

    def __unicode__(self):  # You have __str__
        return self.name



class SkillType(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50, default="")
    skill_group = models.ForeignKey("SkillGroup")

    def __str__(self):
        return self.name

    def __unicode__(self):  # You have __str__
        return self.name


class SkillGroup(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=1, default="D")
    title = models.CharField(max_length=50, default="")
    cost_per_increase = models.SmallIntegerField(default=5)

    def __str__(self):
        return self.title

    def __unicode__(self):  # You have __str__
        return self.name

class Spell(models.Model):

    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200, default="")
    type = models.ForeignKey("SpellType")

    dice1 = models.CharField(
        max_length=2, choices=EIGENSCHAFTEN.items(), default="")
    dice2 = models.CharField(
        max_length=2, choices=EIGENSCHAFTEN.items(), default="")
    dice3 = models.CharField(
        max_length=2, choices=EIGENSCHAFTEN.items(), default="")

    basis = models.BooleanField()

    def __str__(self):
        return self.name

    def __unicode__(self):  # You have __str__
        return self.name


class SpellType(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50, default="")

    def __str__(self):
        return self.name

    def __unicode__(self):  # You have __str__
        return self.name

class InventoryItem(models.Model):
    id = models.AutoField(primary_key=True)
    character = models.ForeignKey("Character")
    
    name = models.CharField(max_length=200, default="")
    amount = models.SmallIntegerField(default=1)
    unit = models.CharField(
        max_length=2, choices=UNITS.items(), default="SK")

    def __str__(self):
        return self.name

    def __unicode__(self):  # You have __str__
        return self.name
