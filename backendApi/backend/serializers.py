from dataclasses import fields
from pyexpat import model
from statistics import mode
from rest_framework import serializers
from .models import Article, Estudiantes, clases, Profesor,Asignaturas
from django.contrib.auth.models import User
from rest_framework.authtoken.views import Token
# class ArticleSerializers(serializers.Serializer):
#     title = serializers.CharField(max_length=100)
#     description=serializers.CharField(max_length=400)

#     def create(self, validated_data):
#         return Article.objects.create(validated_data)
    
#     def update(self, instance, validated_data):
#         instance.title= validated_data.get('title', instance.title)
#         instance.description= validated_data.get('description', instance.description)

class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ['id', 'title','description']

class EstudianteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Estudiantes
        fields = ['id', 'nombre','apellido','numero','correo','programa']

class ClaseSerializer(serializers.ModelSerializer):
    class Meta:
        model= clases
        fields=['id', 'nombre','estudiante','asignatura']
    
class PorfesorSerializer(serializers.ModelSerializer):
    class Meta:
        model= Profesor
        fields=['id', 'nombre','apellido']

class AsignaturasSerializer(serializers.ModelSerializer):
    class Meta:
        model=Asignaturas
        fields=['id','nombre','salon','horario','profesor']

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username','password']

        extra_kwargs={'password':{
            'write_only':True,
            'required' : True
        }}

    def create(self, validated_data):
        user=User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user

