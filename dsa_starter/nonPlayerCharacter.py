# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import os

from django.db import models
from django.utils import timezone
from .characterModels import Character

class Species(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200, default="Mensch")

class NonPlayerCharacter(models.Model):

    GENDER_CHOICES = (
        ('M', 'Male'),
        ('F', 'Female'),
    )
    avatar_small = models.ImageField(upload_to='my_fav_path', blank=True, null=True)
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200, default="Söldner")
    species = models.ForeignKey("Species", on_delete=models.CASCADE)
    race = models.ForeignKey("Race", on_delete=models.CASCADE)
    attack = models.SmallIntegerField(default=12)
    parade = models.SmallIntegerField(default=10)
    weapon_1_name = models.CharField(max_length=200, default="Schwert")
    weapon_1_damage = models.CharField(max_length=8, default="1W+4")
    weapon_1_attack = models.SmallIntegerField(default=12)
    weapon_1_parade = models.SmallIntegerField(default=10)
    weapon_2_name = models.CharField(max_length=200, default="Dolch")
    weapon_2_damage = models.CharField(max_length=8, default="1W+1")
    weapon_2_attack = models.SmallIntegerField(default=12)
    weapon_2_parade = models.SmallIntegerField(default=10)
    initiative = models.SmallIntegerField(default=2)
    ruestung = models.SmallIntegerField(default=1)
    life = models.SmallIntegerField(default=30)
    magic_energy = models.SmallIntegerField(default=0)
    knowsMagic = models.BooleanField(default=False)


    def __str__(self):
        return self.name


class NonPlayerCharacterHasWeapon(models.Model):
    character = models.ForeignKey("NonPlayerCharacter",on_delete=models.CASCADE)
    weapon = models.ForeignKey("Weapon",on_delete=models.CASCADE)

    def __str__(self):
        return self.character.name + " / " + self.weapon.name