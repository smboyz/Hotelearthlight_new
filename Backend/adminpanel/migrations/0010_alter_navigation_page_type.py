# Generated by Django 4.2.4 on 2023-08-25 10:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('adminpanel', '0009_alter_navigation_page_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='navigation',
            name='page_type',
            field=models.CharField(blank=True, choices=[('Home', 'Home'), ('Home/About_1', 'Home/About_1'), ('Slider', 'Slider'), ('Home/About', 'Home/About'), ('Group', 'Group'), ('Work_1', 'Work_1'), ('Work_2', 'Work_2'), ('We', 'We'), ('Recruit', 'Recruit'), ('Recruit_1', 'Recruit_1'), ('Process', 'Process'), ('Clients', 'Clients'), ('Clients_1', 'Clients_1'), ('About Company', 'About Company'), ('Our Message', 'Our Message'), ('Our Commitment', 'Our Commitment'), ('Vision', 'Vision'), ('Mission', 'Mission'), ('Organizational', 'Organizational'), ('Registration', 'Registration'), ('Registration_1', 'Registration_1'), ('UNSKILLED', 'UNSKILLED'), ('SKILLED', 'SKILLED'), ('SEMISKILLED', 'SEMISKILLED'), ('SKILLED 1', 'SKILLED 1'), ('SKILLED 2', 'SKILLED 2'), ('SKILLED 3', 'SKILLED 3'), ('Demand Letter', 'Demand Letter'), ('Procedure', 'Procedure'), ('Procedure_1', 'Procedure_1'), ('Documents', 'Documents'), ('Newspaper', 'Newspaper'), ('Newspaper_1', 'Newspaper_1'), ('Gallery', 'Gallery'), ('Gallery_1', 'Gallery_1'), ('Contact', 'Contact')], max_length=50, null=True),
        ),
    ]
