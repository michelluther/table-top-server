# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-09-03 18:07
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('dsa_starter', '0024_nonplayercharacter'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='FightCharactParticipation',
            new_name='FightCharacterParticipation',
        ),
    ]