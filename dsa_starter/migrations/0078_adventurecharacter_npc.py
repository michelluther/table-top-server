# Generated by Django 3.2.19 on 2023-05-29 06:46

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('dsa_starter', '0077_remove_adventurecharacter_npc'),
    ]

    operations = [
        migrations.AddField(
            model_name='adventurecharacter',
            name='npc',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='dsa_starter.nonplayercharacter'),
        ),
    ]