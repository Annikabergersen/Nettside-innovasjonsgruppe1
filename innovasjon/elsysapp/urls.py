from django.contrib import admin
from django.urls import path
from .views import index, sensor, chart, person1, person2, person3, logginn_post #Relativ import av viewsfunksjonen


appname = "elsysapp"
urlpatterns = [
    path('', index, name='index'),
    path('sensor/', sensor, name = 'sensor'),
    path('chart/', chart, name = "chart"),
    path('person1/', person1, name='person1'),
    path('person2/', person2, name='person2'),
    path('person3/', person3, name='person3'),
    path('loggin_post/', logginn_post, name='logginn_post')
]
