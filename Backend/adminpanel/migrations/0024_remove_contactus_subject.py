# Generated by Django 4.2.5 on 2023-10-02 11:38

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('adminpanel', '0023_alter_navigation_date'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='contactus',
            name='subject',
        ),
    ]