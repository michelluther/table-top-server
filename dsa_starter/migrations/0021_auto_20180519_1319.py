# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-05-19 11:19
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dsa_starter', '0020_weaponskilldistribution'),
    ]

    operations = [
        migrations.AddField(
            model_name='weaponskilldistribution',
            name='attack',
            field=models.SmallIntegerField(default=0),
        ),
        migrations.AddField(
            model_name='weaponskilldistribution',
            name='parade',
            field=models.SmallIntegerField(default=0),
        ),
    ]
