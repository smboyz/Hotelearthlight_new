# Generated by Django 4.2.5 on 2023-10-04 11:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('adminpanel', '0030_alter_bookroom_check_in_alter_bookroom_check_out'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bookroom',
            name='check_in',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='bookroom',
            name='check_out',
            field=models.CharField(max_length=50, null=True),
        ),
    ]