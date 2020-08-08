from __future__ import unicode_literals
import os

from django.db import models
from django.utils import timezone


class Ascensions(models.Model):
    id = models.AutoField(primary_key=True)
    level = models.SmallIntegerField(default=1)
    cost_a = models.SmallIntegerField(default=1)
    cost_b = models.SmallIntegerField(default=1)
    cost_c = models.SmallIntegerField(default=1)
    cost_d = models.SmallIntegerField(default=1)
    cost_e = models.SmallIntegerField(default=1)
    cost_f = models.SmallIntegerField(default=1)
    cost_g = models.SmallIntegerField(default=1)
    cost_h = models.SmallIntegerField(default=1)

    def __str__(self):
        return str(self.level)