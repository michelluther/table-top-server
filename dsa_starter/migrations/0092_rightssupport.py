# Generated by Django 3.2.19 on 2023-10-02 23:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dsa_starter', '0091_auto_20231003_0036'),
    ]

    operations = [
        migrations.CreateModel(
            name='RightsSupport',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
            options={
                'permissions': (('use_rest_api', 'Use the REST API'), ('use_web_sockets', 'Use Websockets communication')),
                'managed': False,
                'default_permissions': (),
            },
        ),
    ]