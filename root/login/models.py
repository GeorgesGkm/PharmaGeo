from django.db import models
from django.contrib.auth.models import User
# Create your models here.

# Create your models here.
class Order (models.Model):
    data_created = models.DateTimeField(auto_now_add=True, null=True)


class Customer(models.Model):
    user = models.OneToOneField(User, null=True, on_delete=models.CASCADE)
    name = models.CharField(max_length=200, null=True)
    phone = models.CharField(max_length=200, null=True)
    email = models.EmailField(max_length=200, null=True)
    date_created = models.DateTimeField(auto_now_add=True, null=True)

    def __str__(self):
        return self.name
