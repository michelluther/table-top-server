# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2019-07-20 13:31
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dsa_starter', '0037_auto_20190720_1530'),
    ]

    operations = [
        migrations.AlterField(
            model_name='attribute',
            name='id',
            field=models.CharField(default='', max_length=2, primary_key=True, serialize=False),
        ),
    ]
