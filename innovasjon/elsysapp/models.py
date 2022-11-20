from django.db import models

# Create your models here.
class SensorData(models.Model): #definerer klassen
    data = models.CharField(max_length=128)
    sensor_id = models.IntegerField()
    timestamp = models.DateField(auto_now_add=True)

    def __str__(self):
        return "data: {}, sensor_id: {}".format(self.data, self.sensor_id)
# Create your models here.
