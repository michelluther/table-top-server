# Generated by Django 3.2.19 on 2023-06-11 12:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dsa_starter', '0085_nonplayercharacter_avatar_small'),
    ]

    operations = [
        migrations.AddField(
            model_name='fightcharacterparticipation',
            name='isGood',
            field=models.BooleanField(default=True),
        ),
    ]