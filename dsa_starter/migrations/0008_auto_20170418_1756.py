# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-04-18 15:56
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dsa_starter', '0007_auto_20170418_1750'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='skilltype',
            name='behinderung',
        ),
        migrations.AddField(
            model_name='skill',
            name='behinderung',
            field=models.CharField(default='', max_length=4),
        ),
        migrations.AddField(
            model_name='skilltype',
            name='name',
            field=models.CharField(default='', max_length=50),
        ),
    ]
