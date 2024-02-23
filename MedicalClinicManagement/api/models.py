# api/models.py
from django.db import models
from django.contrib.auth.models import User

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    avatar = models.ImageField(upload_to='avatars/')

    def __str__(self):
        return self.user.username
    
class Medicine(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.name
    
class Schedule(models.Model):
    SHIFT_CHOICES = [
        ('Morning', 'Morning'),
        ('Afternoon', 'Afternoon'),
        ('Night', 'Night'),
    ]

    doctor = models.ForeignKey(User, on_delete=models.CASCADE, related_name='doctor_schedules')
    nurse = models.ForeignKey(User, on_delete=models.CASCADE, related_name='nurse_schedules')
    date = models.DateField()
    shift = models.CharField(max_length=10, choices=SHIFT_CHOICES)

    def __str__(self):
        return f"{self.doctor.username} - {self.date} - {self.shift}"
    
class PatientAppointment(models.Model):
    patient = models.ForeignKey(User, on_delete=models.CASCADE)
    appointment_date = models.DateTimeField()
    confirmed = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.patient.username} - {self.appointment_date}"
