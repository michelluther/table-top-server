# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import os

from django.db import models
from django.utils import timezone
from .character import Character

class NonPlayerCharacter(models.Model):

    GENDER_CHOICES = (
        ('M', 'Male'),
        ('F', 'Female'),
    )

    id = models.AutoField(primary_key=True)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES, default="M")

    avatar = models.ImageField(upload_to='my_fav_path', blank=True, null=True)
    avatar_small = models.ImageField(upload_to='my_fav_path', blank=True, null=True)

    name = models.CharField(max_length=200, default="tbd")
    race = models.ForeignKey("Race")
    type = models.ForeignKey("HeroType")

    iniitiative = models.SmallIntegerField(default=0)

    attack = models.SmallIntegerField(default=0)
    parade = models.SmallIntegerField(default=0)

    hit_points = models.CharField(max_length=6, default="1W6+4")