from django.urls import path
from primalwebapp import views

urlpatterns = [
    path('', views.home, name='home'),
    path('descargas', views.downloads, name='descargas'),
]