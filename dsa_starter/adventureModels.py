# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import os

from django.db import models
from django.utils import timezone
from .characterModels import Character


class Adventure(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200, default="")

    isActive = models.BooleanField(default=False)

    def __str__(self):
        return self.name


class Fight(models.Model):
    id = models.AutoField(primary_key=True)
    adventure = models.ForeignKey("Adventure", default=1)
    name = models.CharField(max_length=200, default="")

    def __str__(self):
        return self.name

    def __unicode__(self):  # You have __str__
        return self.name


class FightCharacterParticipation(models.Model):
    POSITION_CHOICES = (
        ('B', 'Back'),
        ('F', 'Front'),
        ('VF', 'Very Front'),
    )

    fight = models.ForeignKey("Fight", default=1)
    character = models.ForeignKey("Character", default=1)
    position = models.CharField(
        max_length=1, choices=POSITION_CHOICES, default="B")

    def __str__(self):
        return self.fight.name + ' ' + self.character.name


class AdventureImage(models.Model):
    id = models.AutoField(primary_key=True)
    image = models.ImageField(upload_to='', blank=True, null=True)
    caption = models.CharField(max_length=200, default="tbd")

    adventure = models.ForeignKey("Adventure")
