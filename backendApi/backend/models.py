from django.db import models

# Create your models here.

class Article(models.Model):
    title = models.CharField(max_length=100)
    description=models.TextField()
    
    def __str__(self):
        return self.title

class Estudiantes(models.Model):
    id=models.AutoField(primary_key=True)
    nombre=models.CharField(max_length=100,verbose_name='Nombre')
    apellido=models.CharField(max_length=100,verbose_name='Apellido')
    numero=models.IntegerField(verbose_name='Numero De Identificacion')
    correo=models.EmailField(verbose_name='Correo')
    programa=models.CharField(max_length=100,verbose_name='programa')
    
    def __str__(self):
        fila="nombre: " + self.nombre +" - " + "apellido:"+ "-"+self.apellido
        return fila