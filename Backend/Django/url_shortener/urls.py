"""url_shortener URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

from ninja import NinjaAPI, Schema

from django.conf import settings
from django.conf.urls.static import static

from url_app.api.v1.routers.decode_url import router as decode_url_router
from url_app.api.v1.routers.encode_url import router as encode_url_router

from pathlib import Path

#next for ninja api we add the routers.
api = NinjaAPI()
api.add_router("/encode_url",encode_url_router)
api.add_router("/decode_url",decode_url_router)

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/",api.urls)
]

#We can also add the option for settings debug or other things here.