from django.db import models
import fantasynames as fantasynames
from dsa_starter.characterModels import Race

def generateNames(type, gender):
    nameGenerators = {
        'dwarf': fantasynames.dwarf,
        'human': fantasynames.human,
        'elf': fantasynames.elf,
    } 
    # generate 10 names via fantasynames using type and gender
    
    names = []
    i = 0
    while i < 10:
        names.append(nameGenerators.get(type)(gender=gender))
        i += 1
    return names

def generateNPC(templateId, name):
    print('nothing yet')    


class NPCType(models.Model):

    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200, default="Söldner")
    race = models.ForeignKey("Race", on_delete=models.CASCADE)
    attack = models.SmallIntegerField(default=12)
    parade = models.SmallIntegerField(default=10)
    weapon_1_name = models.CharField(max_length=200, default="Schwert")
    weapon_1_damage = models.CharField(max_length=8, default="1W+4")
    weapon_1_attack = models.SmallIntegerField(default=12)
    weapon_1_parade = models.SmallIntegerField(default=10)
    weapon_2_name = models.CharField(max_length=200, default="Dolch")
    weapon_2_damage = models.CharField(max_length=8, default="1W+1")
    weapon_2_attack = models.SmallIntegerField(default=12)
    weapon_2_parade = models.SmallIntegerField(default=10)
    initiative = models.SmallIntegerField(default=2)
    ruestung = models.SmallIntegerField(default=1)
    life = models.SmallIntegerField(default=30)
    magic_energy = models.SmallIntegerField(default=0)
    knowsMagic = models.BooleanField(default=False)

    
    def __str__(self):
        return self.name

