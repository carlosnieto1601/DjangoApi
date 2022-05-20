
from django.shortcuts import render, HttpResponse
from .models import Article, Estudiantes, Profesor,clases,Asignaturas
from .serializers import ArticleSerializer, EstudianteSerializer, UserSerializer, ClaseSerializer, PorfesorSerializer,AsignaturasSerializer
from django.http import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status 
from rest_framework.decorators import APIView
from rest_framework import viewsets
from django.shortcuts import get_object_or_404
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework import mixins
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User
# from django.views.decorators.csrf import csrf_exempt
# Create your views here.

#minuto 1:40:13

class articleViewset(viewsets.GenericViewSet, mixins.ListModelMixin, mixins.CreateModelMixin,
mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin ):
    queryset=Article.objects.all()
    serializer_class=ArticleSerializer
    authentication_classes=(TokenAuthentication,)
    permission_classes=[IsAuthenticated]

class ArticlesViewSet(viewsets.ViewSet):
    permission_classes=[IsAuthenticated]
    authentication_classes=(TokenAuthentication,)
    def list(self,request):
        article = Article.objects.all()
        serializer =ArticleSerializer(article, many=True)
        return Response(serializer.data)
    
    def create(self,request):
        serializer= ArticleSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def retrieve(self, request, pk=None):
        queryset= Article.objects.all()
        article= get_object_or_404(queryset, pk=pk)
        serializer= ArticleSerializer(article)
        return Response(serializer.data)

    def update(self, request, pk=None):
        article=Article.objects.get(pk=pk)
        serializer= ArticleSerializer(article,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def destroy(self, request, pk=None):
        article=Article.objects.get(pk=pk)
        article.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class EstudianteViewSet(viewsets.ViewSet):
    # permission_classes=[IsAuthenticated]
    # authentication_classes=(TokenAuthentication,)
    def list(self,request):
        estudiante = Estudiantes.objects.all()
        serializer =EstudianteSerializer(estudiante, many=True)
        return Response(serializer.data)
    
    def create(self,request):
        serializer= EstudianteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def retrieve(self, request, pk=None):
        queryset= Estudiantes.objects.all()
        article= get_object_or_404(queryset, pk=pk)
        serializer= EstudianteSerializer(article)
        return Response(serializer.data)

    def update(self, request, pk=None):
        estudiante=Estudiantes.objects.get(pk=pk)
        serializer= EstudianteSerializer(estudiante,data=request.data,)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def destroy(self, request, pk=None):
        estudiante=Estudiantes.objects.get(pk=pk)
        estudiante.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class ProfesorViewSet(viewsets.ViewSet):
    # permission_classes=[IsAuthenticated]
    # authentication_classes=(TokenAuthentication,)
    def list(self,request):
        profesor = Profesor.objects.all()
        serializer =PorfesorSerializer(profesor, many=True)
        return Response(serializer.data)
    
    def create(self,request):
        serializer= PorfesorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def retrieve(self, request, pk=None):
        queryset= Profesor.objects.all()
        article= get_object_or_404(queryset, pk=pk)
        serializer= PorfesorSerializer(article)
        return Response(serializer.data)

    def update(self, request, pk=None):
        estudiante=Profesor.objects.get(pk=pk)
        serializer= PorfesorSerializer(estudiante,data=request.data,)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def destroy(self, request, pk=None):
        estudiante=Profesor.objects.get(pk=pk)
        estudiante.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class ArticleList(APIView):
    def get(self, request):
        article = Article.objects.all()
        serializer =ArticleSerializer(article, many=True)
        return Response(serializer.data)
    
    def post(self, request):
         serializer =ArticleSerializer(data=request.data)
         if serializer.is_valid():
             serializer.save()
             return Response(serializer.data, status=status.HTTP_201_CREATED)
         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class article_details(APIView):
   
    def get_object(self,id):
        try:
            return Article.objects.get(id=id)

        except Article.description:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def get(self,request, id):
        article = self.get_object(id)
        serializer =ArticleSerializer(article)
        return Response(serializer.data)

    def put(self, request, id):
        article = self.get_object(id)
        serializer= ArticleSerializer(article, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        article = self.get_object(id)
        article.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class UserViewSet(viewsets.ModelViewSet):
    queryset= User.objects.all()
    serializer_class= UserSerializer














# # @csrf_exempt
# @api_view(['GET','POST'])
# def article_list(request):
#     if request.method == 'GET':
#         articles = Article.objects.all()
#         serializer =ArticleSerializer(articles, many=True)
#         return Response(serializer.data)

#     elif request.method=='POST':
#         serializer =ArticleSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# # @csrf_exempt
# @api_view(['GET','PUT','DELETE'])
# def article_details(request, pk):
#     try:
#         article= Article.objects.get(pk=pk)

#     except Article.description:
#         return Response(status=status.HTTP_404_NOT_FOUND)
    
#     if request.method == 'GET':
#         serializer = ArticleSerializer(article)
#         return Response(serializer.data)
    
#     elif request.method=='PUT':
#         # data= JSONParser().parse(request)
#         serializer= ArticleSerializer(article, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
#     elif request.method == 'DELETE':
#         article.delete()
#         return HttpResponse(status=status.HTTP_204_NO_CONTENT)


