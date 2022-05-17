

from django.urls import path
from .views import ArticleList,article_details

urlpatterns = [
 
    path('articles/', ArticleList.as_view()),
    path('articles/<int:id>/', article_details.as_view()),

]