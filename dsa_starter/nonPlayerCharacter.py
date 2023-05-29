# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import os

from django.db import models
from django.utils import timezone
from .characterModels import Character

class NonPlayerCharacter(models.Model):

    GENDER_CHOICES = (
        ('M', 'Male'),
        ('F', 'Female'),
    )

    id = models.AutoField(primary_key=True)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES, default="M")
    avatar_small = models.ImageField(upload_to='my_fav_path', blank=True, null=True)

    name = models.CharField(max_length=200, default="tbd")
    race = models.ForeignKey("Race",on_delete=models.CASCADE)
    type = models.ForeignKey("HeroType",on_delete=models.CASCADE)

    initiative = models.SmallIntegerField(default=0)

    attack = models.SmallIntegerField(default=0)
    parade = models.SmallIntegerField(default=0)

    hit_points = models.CharField(max_length=6, default="1W6+4")

    def __str__(self):
        return self.name


class NonPlayerCharacterHasWeapon(models.Model):
    character = models.ForeignKey("NonPlayerCharacter",on_delete=models.CASCADE)
    weapon = models.ForeignKey("Weapon",on_delete=models.CASCADE)

    def __str__(self):
        return self.character.name + " / " + self.weapon.name