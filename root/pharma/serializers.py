from rest_framework import serializers
from .models import Pharma


class PharmaSerialzer(serializers.ModelSerializer):
    class Meta:
        model = Pharma
        fields = '__all__'
