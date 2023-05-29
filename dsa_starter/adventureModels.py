# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import os

from django.db import models
from django.utils import timezone
from .characterModels import Character
from .nonPlayerCharacter import Character as NPC


class Adventure(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200, default="")

    isActive = models.BooleanField(default=False)

    def __str__(self):
        return self.name


class Fight(models.Model):
    id = models.AutoField(primary_key=True)
    adventure = models.ForeignKey("Adventure", default=1,on_delete=models.CASCADE)
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

    fight = models.ForeignKey("Fight", default=1,on_delete=models.CASCADE)
    character = models.ForeignKey("Character", default=1,on_delete=models.CASCADE)
    position = models.CharField(
        max_length=2, choices=POSITION_CHOICES, default="B")

    def __str__(self):
        return self.fight.name + ' ' + self.character.name

class AdventureSection(models.Model):
    id = models.AutoField(primary_key=True)
    sequenceInAdventure = models.SmallIntegerField(default=0)


class AdventureImage(models.Model):
    id = models.AutoField(primary_key=True)
    image = models.ImageField(upload_to='', blank=True, null=True)
    isActive = models.BooleanField(default=False)
    caption = models.CharField(max_length=200, default="tbd")
    sequenceInAdventure = models.SmallIntegerField(default=0)
    adventure = models.ForeignKey("Adventure",on_delete=models.CASCADE)

    def __str__(self):
        return "Adventure " + str(self.adventure) + ": " + str(self.sequenceInAdventure) + " " + self.caption

class AdventureCharacter(models.Model):
    id = models.AutoField(primary_key=True)
    adventure = models.ForeignKey("Adventure", on_delete=models.DO_NOTHING, default="1")
    sequenceInAdventure = models.SmallIntegerField(default=0)
    isActive = models.BooleanField(default=False)
    character = models.ForeignKey("Character", 
                                  on_delete=models.DO_NOTHING, 
                                  default=None,
                                  blank=True,
                                  null=True)
    npc = models.ForeignKey("NonPlayerCharacter", 
                            on_delete=models.DO_NOTHING, 
                            default=None,
                            blank=True,
                            null=True)



    adventure = models.ForeignKey("Adventure",on_delete=models.CASCADE)

    def __str__(self):
        if(self.character != None):
            return str(self.adventure) + ": " + str(self.character)
        else:
            return str(self.adventure) + ": " + str(self.npc)


class AdventureLocation(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200, default="tbd")
    image = models.ImageField(upload_to='', blank=True, null=True)
    isActive = models.BooleanField(default=False)

    adventure = models.ForeignKey("Adventure",on_delete=models.CASCADE)

    def __str__(self):
        return "Adventure " + str(self.adventure) + ": " + str(self.sequenceInAdventure) + " " + self.name
