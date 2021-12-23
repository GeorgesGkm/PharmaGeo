from django.db import models


# Create your models here.


class Pharma(models.Model):
    username = models.CharField(max_length=50)
    address = models.CharField(max_length=300)
    coordX = models.FloatField()
    coordY = models.FloatField()


