# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2023-04-15 15:59
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('dsa_starter', '0065_auto_20221111_2225'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='adventureimage',
            name='section',
        ),
    ]