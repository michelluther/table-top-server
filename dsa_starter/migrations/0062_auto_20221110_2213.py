# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2022-11-10 21:13
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('dsa_starter', '0061_adventureimage_isactive'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='AdventureCharacters',
            new_name='AdventureCharacter',
        ),
    ]
