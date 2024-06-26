# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-04-18 15:19
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('dsa_starter', '0003_auto_20170418_1538'),
    ]

    operations = [
        migrations.CreateModel(
            name='HeroType',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='Krieger', max_length=200)),
            ],
        ),
        migrations.AddField(
            model_name='character',
            name='experience',
            field=models.SmallIntegerField(default=0),
        ),
        migrations.AddField(
            model_name='character',
            name='life',
            field=models.SmallIntegerField(default=30),
        ),
        migrations.AlterField(
            model_name='character',
            name='name',
            field=models.CharField(default='tbd', max_length=200),
        ),
        migrations.AlterField(
            model_name='character',
            name='type',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='dsa_starter.HeroType'),
        ),
    ]
