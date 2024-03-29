# Generated by Django 4.0.4 on 2022-05-18 19:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0002_rename_aticle_article'),
    ]

    operations = [
        migrations.CreateModel(
            name='Estudiantes',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=100, verbose_name='Nombre')),
                ('apellido', models.CharField(max_length=100, verbose_name='Apellido')),
                ('numero', models.IntegerField(verbose_name='Numero De Identificacion')),
                ('correo', models.EmailField(max_length=254, verbose_name='Correo')),
                ('programa', models.CharField(max_length=100, verbose_name='programa')),
            ],
        ),
    ]
