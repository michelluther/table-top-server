# Generated by Django 3.2.19 on 2023-06-13 04:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dsa_starter', '0088_fightparticipation_calculatedinitiative'),
    ]

    operations = [
        migrations.AddField(
            model_name='fight',
            name='nextUp',
            field=models.IntegerField(default=0),
        ),
    ]
