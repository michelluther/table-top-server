# Generated by Django 3.2.19 on 2023-10-02 22:36

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('dsa_starter', '0090_alter_fightparticipation_id'),
    ]

    operations = [
        migrations.CreateModel(
            name='Species',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(default='Mensch', max_length=200)),
            ],
        ),
        migrations.AddField(
            model_name='nonplayercharacter',
            name='species',
            field=models.ForeignKey(default='1', on_delete=django.db.models.deletion.CASCADE, to='dsa_starter.species'),
            preserve_default=False,
        ),
    ]