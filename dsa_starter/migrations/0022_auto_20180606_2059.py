# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-06-06 18:59
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('dsa_starter', '0021_auto_20180519_1319'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='character',
            name='attack_basis',
        ),
        migrations.RemoveField(
            model_name='character',
            name='magieresistenz',
        ),
        migrations.RemoveField(
            model_name='character',
            name='parade_basis',
        ),
    ]
