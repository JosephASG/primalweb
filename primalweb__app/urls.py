from django.urls import path
from primalweb__app import views

urlpatterns = [
    path('home', views.home, name='home'),
    path('descargas', views.downloads, name='descargas'),
]