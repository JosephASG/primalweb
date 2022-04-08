from django.shortcuts import render, HttpResponse

# vista home

def home(request):
    return render(request, "index.html")

def downloads(request):
    return render(request, "descargas.html")