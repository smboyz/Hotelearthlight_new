# Generated by Django 4.2.5 on 2023-10-03 11:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('adminpanel', '0025_alter_navigation_page_type'),
    ]

    operations = [
        migrations.CreateModel(
            name='BookRoom',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('check_in', models.CharField(max_length=50, null=True)),
                ('check_out', models.CharField(max_length=50, null=True)),
                ('adults', models.CharField(max_length=50, null=True)),
                ('children', models.CharField(max_length=50, null=True)),
                ('bed_type', models.CharField(max_length=50, null=True)),
                ('room_type', models.CharField(max_length=50, null=True)),
            ],
        ),
        migrations.DeleteModel(
            name='Comment',
        ),
    ]
