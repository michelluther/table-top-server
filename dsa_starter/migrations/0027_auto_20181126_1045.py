# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-11-26 09:45
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('dsa_starter', '0026_auto_20180903_2030'),
    ]

    operations = [
        migrations.CreateModel(
            name='AdventureImages',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('avatar', models.ImageField(blank=True, null=True, upload_to='my_fav_path')),
                ('caption', models.CharField(default='tbd', max_length=200)),
                ('adventure', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='dsa_starter.Adventure')),
            ],
        ),
        migrations.AddField(
            model_name='fightcharacterparticipation',
            name='position',
            field=models.CharField(choices=[('B', 'Back'), ('F', 'Front'), ('VF', 'Very Front')], default='B', max_length=1),
        ),
    ]
