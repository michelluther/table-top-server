# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-04-26 22:10
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dsa_starter', '0015_auto_20170427_0000'),
    ]

    operations = [
        migrations.AddField(
            model_name='character',
            name='life_lost',
            field=models.SmallIntegerField(default=30),
        ),
    ]
