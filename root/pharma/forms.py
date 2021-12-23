from django import forms
from .models import Pharma


class PharmaForm(forms.ModelForm):
    class Meta:
        model = Pharma
        fields = '__all__'
