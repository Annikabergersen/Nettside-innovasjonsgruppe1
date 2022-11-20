from django.shortcuts import render
from django.http import HttpResponse, QueryDict, JsonResponse
from django.middleware import csrf
from .models import SensorData

def index(request):
    print("Dette blir printa i terminalen")
    context = {} # Tom dictionary som blir brukt senere!
    all_sensor_data = SensorData.objects.all() #Henter ut all sensordata fra databasen. 
    context['all_sensor_data'] = all_sensor_data #Legger sensordata til som en variabel som kan brukes i Template.
    return render(request, "elsysapp/index.html", context)

# Create your views here.
# Legg til dette etter index-funksjonen:

def person1(request):
    print("Dette blir printa i terminalen")
    context = {} # Tom dictionary som blir brukt senere!
    return render(request, "elsysapp/person1.html", context)

def person2(request):
    print("Dette blir printa i terminalen")
    context = {} # Tom dictionary som blir brukt senere!
    return render(request, "elsysapp/person2.html", context)

def person3(request):
    print("Dette blir printa i terminalen")
    context = {} # Tom dictionary som blir brukt senere!
    return render(request, "elsysapp/person3.html", context)

def logginn_post(request):
    if request.method == "POST":
        csrf.get_token(request)
        return HttpResponse("elsysapp/logginn_post.php")
    elif request.method == "GET":
        """Dette MÅ være med! Sikkerhetsgreier."""
        csrf.get_token(request)
        return HttpResponse("elsysapp/logginn_post.php")
    


def sensor(request):
    if request.method == "POST":
        data =  QueryDict(request.body) # Gjør data fra request om til en dictionary
        sensor_id = 0
        sensor_value = 0
        sensor_id = data['sensorID'] # Lagrer sensor_id til requesten 
        sensor_value = data['sensorData'] # Lagrer sensorverdien til requesten
        
        s = SensorData(data = sensor_value,sensor_id = sensor_id)
        s.save()
    
        # Skriv koden for å lage og lagre et sensorobjekt her. 

        return HttpResponse("")

    elif request.method == "GET":
        """Dette MÅ være med! Sikkerhetsgreier."""
        csrf.get_token(request)
        return HttpResponse("")

def chart(request):
    labels = [] # Holder navnene på stolpene i stolediagrammet.
    data = []   # Holder høyden til stolpene i diagrammet.

    objects = SensorData.objects    # Queryset som holder alle databaseobjektene.

    ids = set()                                                    # Et set er en liste som ikke kan inneholde duplikater.
    [ids.add(id[0]) for id in objects.values_list("sensor_id")]    # List comprehension. Hent ut alle sensor_id fra databasen og legg dem til i ids.
    ids = list(ids)                                                # Gjør tilbake til liste for enkelhets skyld.

    counts = []
    counts = [0] * len(ids)    # Liste som skal holde antall objekter pr. sensor_id
    for i, id in enumerate(ids):
        counts[i] = counts[i] + objects.filter(sensor_id=id).count()

    labels = ["{}".format(id) for id in ids]    # Lagre alle sensor_id med 'Sensor ' foran.
    labels = counts
    data = counts

    return JsonResponse(data={
        'labels': labels,
        'data': data,
    })