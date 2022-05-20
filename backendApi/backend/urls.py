

from django.urls import path, include
# from .views import ArticleList,article_details
from .views import ArticlesViewSet, articleViewset, UserViewSet,EstudianteViewSet, ProfesorViewSet
from rest_framework.routers import DefaultRouter


router= DefaultRouter()
router.register('articles', ArticlesViewSet, basename='articles')
router.register('estudiantes', EstudianteViewSet, basename='estudiantes')
router.register('profesor', ProfesorViewSet, basename='profesor')
router.register('users', UserViewSet)



urlpatterns = [
    path('api/', include(router.urls)),
    # path('articles/', ArticleList.as_view()),
    # path('articles/<int:id>/', article_details.as_view()),

]