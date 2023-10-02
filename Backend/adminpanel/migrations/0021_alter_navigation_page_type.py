# Generated by Django 4.2.5 on 2023-10-02 09:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('adminpanel', '0020_globalsettings_qr_code'),
    ]

    operations = [
        migrations.AlterField(
            model_name='navigation',
            name='page_type',
            field=models.CharField(blank=True, choices=[('Home', 'Home'), ('Slider', 'Slider'), ('Home/About', 'Home/About'), ('Safari', 'Safari'), ('Reviews', 'Reviews'), ('About', 'About'), ('Achievements', 'Achievements'), ('Services', 'Services'), ('Services_1', 'Services_1'), ('Features', 'Features'), ('Rooms & Suites', 'Rooms & Suites'), ('Rooms & Suites_1', 'Rooms & Suites_1'), ('Video_Gallery', 'Video_Gallery'), ('Video_Gallery_1', 'Video_Gallery_1'), ('Image_Gallery', 'Image_Gallery'), ('Image_Gallery_1', 'Image_Gallery_1'), ('Contact', 'Contact'), ('Group', 'Group')], max_length=50, null=True),
        ),
    ]
