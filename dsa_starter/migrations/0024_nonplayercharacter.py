# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-09-03 18:05
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('dsa_starter', '0023_fight_fightcharactparticipation'),
    ]

    operations = [
        migrations.CreateModel(
            name='NonPlayerCharacter',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('gender', models.CharField(choices=[('M', 'Male'), ('F', 'Female')], default='M', max_length=1)),
                ('avatar', models.ImageField(blank=True, null=True, upload_to='my_fav_path')),
                ('avatar_small', models.ImageField(blank=True, null=True, upload_to='my_fav_path')),
                ('name', models.CharField(default='tbd', max_length=200)),
                ('iniitiative', models.SmallIntegerField(default=0)),
                ('attack', models.SmallIntegerField(default=0)),
                ('parade', models.SmallIntegerField(default=0)),
                ('hit_points', models.CharField(default='1W6+4', max_length=6)),
                ('race', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='dsa_starter.Race')),
                ('type', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='dsa_starter.HeroType')),
            ],
        ),
    ]