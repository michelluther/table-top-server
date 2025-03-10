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

    isHero = models.BooleanField(default=True)

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
    race = models.ForeignKey("Race",on_delete=models.CASCADE)
    type = models.ForeignKey("HeroType",on_delete=models.CASCADE)
    
    money_dukaten = models.SmallIntegerField(default=0)
    money_silbertaler = models.SmallIntegerField(default=0)
    money_heller = models.SmallIntegerField(default=0)
    money_kreuzer = models.SmallIntegerField(default=0)

    armor = models.SmallIntegerField(default=1)

    culture = models.CharField(max_length=200, default="")

    social_rank = models.SmallIntegerField(default=0)

    size = models.SmallIntegerField(default=175)

    # eigenschaften
    MU = models.SmallIntegerField(default=0)
    KL = models.SmallIntegerField(default=0)
    IN = models.SmallIntegerField(default=0)
    CH = models.SmallIntegerField(default=0)
    FF = models.SmallIntegerField(default=0)
    GE = models.SmallIntegerField(default=0)
    KO = models.SmallIntegerField(default=0)
    KK = models.SmallIntegerField(default=0)

    experience = models.SmallIntegerField(default=0)
    experience_used = models.SmallIntegerField(default=0)
    life = models.SmallIntegerField(default=30)
    life_lost = models.SmallIntegerField(default=0)
    magic_energy = models.SmallIntegerField(default=30)
    magic_energy_lost = models.SmallIntegerField(default=30)

    magic_energy = models.SmallIntegerField(default=30)
    magic_energy_lost = models.SmallIntegerField(default=0)

    hair_color = models.CharField(max_length=200, default="")
    eye_color = models.CharField(max_length=200, default="")

    weight = models.SmallIntegerField(default=70)
                                           
    created_date = models.DateTimeField(
        default=timezone.now)

    def publish(self):
        self.created_date = timezone.now()
        self.save()

    def __str__(self):
        return self.name

    def __unicode__(self):  # You have __str__
        return self.name

    def setAttribute(self, attribute, value):
        setattr(self, attribute, value)
    
    def __getitem__(self, key):
        return getattr(self, key)

class WeaponSkillDistribution(models.Model):

    attack = models.SmallIntegerField(default=0)
    parade = models.SmallIntegerField(default=0)
    character = models.ForeignKey("Character", default=1, on_delete=models.CASCADE)
    skill = models.ForeignKey("Skill", default=1,on_delete=models.CASCADE)

    def __str__(self):
        return self.character.name + " - " + self.skill.name


class ActualSkill(models.Model):

    value = models.SmallIntegerField(default=0)
    skill = models.ForeignKey("Skill",on_delete=models.CASCADE)
    character = models.ForeignKey("Character", default=1,on_delete=models.CASCADE)

    def __str__(self):
        return self.character.name + " - " + self.skill.name + " - " + str(self.value)

class ActualSpellSkill(models.Model):

    value = models.SmallIntegerField(default=0)
    spell = models.ForeignKey("Spell",on_delete=models.CASCADE)
    character = models.ForeignKey("Character", default=1,on_delete=models.CASCADE)

    def __str__(self):
        return self.character.name + " - " + self.spell.name + " - " + str(self.value)


class Weapon(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200)
    skill = models.ForeignKey("Skill",on_delete=models.CASCADE)
    hit_dices = models.SmallIntegerField(default=1)
    hit_add_points = models.SmallIntegerField(default=2)
    hit_extra_from_kk = models.SmallIntegerField(default=14)

    def __str__(self):
        return self.name

    def __unicode__(self):  # You have __str__
        return self.name



class CharacterHasWeapon(models.Model):
    character = models.ForeignKey("Character",on_delete=models.CASCADE)
    weapon = models.ForeignKey("Weapon",on_delete=models.CASCADE)

    def __str__(self):
        return self.character.name + " / " + self.weapon.name

class Armor(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200)
    ruestungs_schutz = models.SmallIntegerField(default=1)
    behinderung = models.SmallIntegerField(default=2)

    def __str__(self):
        return self.name

    def __unicode__(self):  # You have __str__
        return self.name

class CharacterHasArmor(models.Model):
    character = models.ForeignKey("Character",on_delete=models.CASCADE)
    armor = models.ForeignKey("Armor",on_delete=models.CASCADE)

    def __str__(self):
        return self.character.name + " / " + self.armor.name

class Skill(models.Model):

    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200, default="")
    type = models.ForeignKey("SkillType",on_delete=models.CASCADE)
    behinderung = models.CharField(max_length=4, default="")
    weaponSkill = models.BooleanField(default=False)

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
    skill_group = models.ForeignKey("SkillGroup",on_delete=models.CASCADE)

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
        return self.name + ": " + self.title

    def __unicode__(self):  # You have __str__
        return self.name

class Spell(models.Model):

    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200, default="")
    type = models.ForeignKey("SpellType",on_delete=models.CASCADE)
    complexity = models.ForeignKey("SkillGroup", on_delete=models.CASCADE)

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
    character = models.ForeignKey("Character",on_delete=models.CASCADE)
    
    name = models.CharField(max_length=200, default="")
    amount = models.SmallIntegerField(default=1)
    unit = models.CharField(
        max_length=2, choices=UNITS.items(), default="SK")
    weight = models.SmallIntegerField(default=1)

    def __str__(self):
        return self.name

    def __unicode__(self):  # You have __str__
        return self.name
