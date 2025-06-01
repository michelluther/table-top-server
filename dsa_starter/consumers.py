from dsa_starter.characterModels import Character, ActualSkill, Skill, SkillType, CharacterHasWeapon, Weapon, Armor, CharacterHasArmor, InventoryItem, ActualSpellSkill, Spell
from dsa_starter.adventureModels import Fight, FightParticipation, Adventure
from dsa_starter.nonPlayerCharacter import NonPlayerCharacter
from asgiref.sync import async_to_sync
import json

# from channels import Group
from channels.generic.websocket import WebsocketConsumer

def updateLife(data):
    character = Character.objects.get(pk=data["heroId"])
    character.life_lost = character.life_lost - data["value"]
    character.save()

def updateMagic(data):
    character = Character.objects.get(pk=data["heroId"])
    character.magic_energy_lost = character.magic_energy_lost - data["value"]
    character.save()

def updateAttribute(data):
    character = Character.objects.get(pk=data["heroId"])
    character.setAttribute(data["attribute"], data["value"])
    character.experience_used += data["price"]
    character.save()

def addInventoryItem(data):
    character = Character.objects.get(pk=data["heroId"])
    name = data["name"]
    amount = data["amount"]
    weight = data["weight"]
    inventoryItem = InventoryItem.objects.create(character=character, name=name, amount=amount, unit='SK', weight=weight)
    inventoryItem.save()
    data["inventoryId"] = inventoryItem.id

def updateInventoryItem(data):
    character = Character.objects.get(pk=data["heroId"])
    inventoryItem = InventoryItem.objects.get(pk=data["inventoryItemId"])
    inventoryItem.amount = data["amount"]
    inventoryItem.save()


def deleteInventory(data):
    character = Character.objects.get(pk=data["heroId"])
    inventoryItem = InventoryItem.objects.get(pk=data["inventoryItemId"])
    inventoryItem.delete()

# def removeInventoryItem(data):

def addWeapon(data):
    character = Character.objects.get(pk=data["heroId"])
    skill = Skill.objects.get(pk=data["skill"])
    weapon = Weapon.objects.create(name=data["weaponName"], skill=skill, hit_dices=data["damageDice"], hit_add_points=data["damageAddPoints"], hit_extra_from_kk=data["extraPointsFromKk"])
    weapon.save()
    characterHasWeapon = CharacterHasWeapon.objects.create(character=character, weapon=weapon)
    characterHasWeapon.save()
    data["weaponId"] = weapon.id

def deleteWeapon(data):
    character = Character.objects.get(pk=data["heroId"])
    weapon = Weapon.objects.get(pk=data["weaponId"])
    characterHasWeapon = CharacterHasWeapon.objects.get(character=character, weapon=weapon)
    characterHasWeapon.delete()
    weapon.delete()

def addArmor(data):
    character = Character.objects.get(pk=data["heroId"])
    armor = Armor.objects.create(name=data["armorName"], ruestungs_schutz=data["armorRS"], behinderung=data["armorBE"])
    armor.save()
    characterHasArmor = CharacterHasArmor.objects.create(character=character, armor=armor)
    characterHasArmor.save()
    data["armorId"] = armor.id

def deleteArmor(data):
    character = Character.objects.get(pk=data["heroId"])
    armor = Armor.objects.get(pk=data["armorId"])
    characterHasArmor = CharacterHasArmor.objects.get(character=character, armor=armor)
    characterHasArmor.delete()
    armor.delete()


def updateSkill(data):
    try:
        actualSkill = ActualSkill.objects.get(pk=data["assignmentId"])
        hero = Character.objects.get(pk=data["heroId"])
    except:
        skill = Skill.objects.get(pk=data["skillId"])
        actualSkill = ActualSkill.objects.create(value=data["value"], skill=skill, character=hero)
    actualSkill.value = data["value"]
    hero.experience_used += data["price"]
    hero.save()
    actualSkill.save()

def updateSpell(data):
    try:
        actualSpell = ActualSpellSkill.objects.get(pk=data["assignmentId"])
        hero = Character.objects.get(pk=data["heroId"])
    except:
        spell = Spell.objects.get(pk=data["spellId"])
        actualSpell = ActualSpellSkill.objects.create(value=data["value"], spell=spell, character=hero)
    actualSpell.value = data["value"]
    hero.experience_used += data["price"]
    hero.save()
    actualSpell.save()

def addExperiencePoints(data):
    character = Character.objects.get(pk=data["heroId"])
    character.experience = character.experience + data["additionalPoints"]
    character.save()

def updateAccountEntry(data):
    character = Character.objects.get(pk=data["heroId"])
    if data['unit'] == 'dukaten':     # we are currently using python 2.7 ... no match statements here ...
        character.money_dukaten = data['amount']
    elif data['unit'] == 'silbertaler':    
        character.money_silbertaler = data['amount']
    elif data['unit'] == 'heller':    
        character.money_heller = data['amount']
    else:    
        character.money_kreuzer = data['amount']
    character.save()

def sendImage(data):
    print('I do not persist this kind of thing')

def generateNPC(data):
    print('I will generate an NPC.')

def startFight(data):
    adventure= Adventure.objects.get(pk=data.get('params').get("adventureId"))
    fight = Fight.objects.create(name=data.get('params').get("name"), adventure=adventure)
    participants = data.get('params').get("participants")
    fight.save()
    for participant in participants:
        if participant.get('isCharacter') == True:
            character = Character.objects.get(pk=participant.get("id"))
            fightParticipant = FightParticipation.objects.create(character=character, fight=fight, calculatedInitiative=participant.get("initiative"))
            fightParticipant.save()
        else:
            npc = NonPlayerCharacter.objects.get(pk=participant.get("id"))
            fightParticipant = FightParticipation.objects.create(npc=npc, fight=fight, calculatedInitiative=participant.get("initiative"))
            fightParticipant.save()

def setNextUp(data):
    params = data.get('params')
    fight = Fight.objects.get(pk=params.get('fight'))
    fight.nextUp = params.get('nextUp')
    fight.save()

def doNothing(data):
    print('I do not persist this kind of thing')

messageTypeMap = {
    'lifeUpdate': updateLife,
    'magicUpdate': updateMagic,
    'updateAttribute': updateAttribute,
    'updateSkill': updateSkill,
    'updateSpell': updateSpell,
    'addInventoryItem': addInventoryItem,
    'updateInventoryItem': updateInventoryItem,
    'deleteInventoryItem': deleteInventory,
    'addWeapon': addWeapon,
    'deleteWeapon': deleteWeapon,
    'addArmor': addArmor,
    'deleteArmor': deleteArmor,
    'addExperiencePoints': addExperiencePoints,
    'updateAccountEntry': updateAccountEntry,
    'setCurrentWeapon': doNothing,
    'sendImage': sendImage,
    'createNPC': generateNPC,
    'startFight': startFight,
    'startTimer': doNothing,
    'timerFinished': doNothing,
    'timerStopped': doNothing
    # 'updateCurrentWeapon': 
}

class HeroConsumer(WebsocketConsumer):
    groups = ["heroes"]

    def connect(self):
        async_to_sync(self.channel_layer.group_add)(
            "heroes", self.channel_name
        )
        print('connection received to heroes')
        self.accept()


    def receive(self, text_data=None):
        # Make standard HTTP response - access ASGI path attribute directly
        print('data received at heroes')
        data = json.loads(text_data)
        character = Character.objects.get(pk=data["heroId"])
        messageTypeMap.get(data['type'])(data)
        async_to_sync(self.channel_layer.group_send)(
            "heroes", {"type": "hero_update", "message": text_data}
        )
        print('data sent via heroes')

    def disconnect(self, close_code):
        # nothing happens here
        print('heroes connection closed')

    def hero_update(self, event):
        message = event["message"]

        # Send message to WebSocket
        self.send(text_data=message)

class RemoteControlConsumer(WebsocketConsumer):

    groups = ["remoteControlReceiver"]

    def connect(self):
        async_to_sync(self.channel_layer.group_add)(
            "remoteControlReceiver", self.channel_name
        )
        self.accept()
        print('connection received to remote control')


    def receive(self, text_data=None, bytes_data=None):
        # Make standard HTTP response - access ASGI path attribute directly
        data = json.loads(text_data)
        
        messageTypeMap.get(data['type'])(data)
        if(data.get('target') != 'self'):
            async_to_sync(self.channel_layer.group_send)(
                "remoteControlReceiver", {"type": "remote_control_instruction", "message": text_data}
            )
            print('data sent via remote control')
        else:
            print('got something for everyone')

    def remote_control_instruction(self, event):
        message = event["message"]

        # Send message to WebSocket
        self.send(text_data=message)
        

    def disconnect(self, close_code):
        # nothing happens here
        print('remote control sender connection closed') 