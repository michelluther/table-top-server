from dsa_starter.characterModels import Character, ActualSkill, Skill, SkillType, CharacterHasWeapon, Weapon, Armor, CharacterHasArmor, InventoryItem

import json

from channels import Group

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
    except:
        skill = Skill.objects.get(pk=data["skillId"])
        hero = Character.objects.get(pk=data["heroId"])
        actualSkill = ActualSkill.objects.create(value=data["value"], skill=skill, character=hero)
    actualSkill.value = data["value"]
    actualSkill.save()


messageTypeMap = {
    'lifeUpdate': updateLife,
    'magicUpdate': updateMagic,
    'updateAttribute': updateAttribute,
    'updateSkill': updateSkill,
    'addInventoryItem': addInventoryItem,
    'updateInventoryItem': updateInventoryItem,
    'deleteInventoryItem': deleteInventory,
    'addWeapon': addWeapon,
    'deleteWeapon': deleteWeapon,
    'addArmor': addArmor,
    'deleteArmor': deleteArmor
    # 'removeInventor': removeInventoryItem
}

def connect_to_heroes(message):
    print("Connected to heroes service \n")
    message.reply_channel.send({"accept": True})
    Group("heroes").add(message.reply_channel)


def message_to_heroes(message):
    # Make standard HTTP response - access ASGI path attribute directly
    data = json.loads(message.content['text'])
    character = Character.objects.get(pk=data["heroId"])
    messageTypeMap.get(data['type'])(data)
    
    Group("heroes").send({
        "text": json.dumps(data),
    })


def disconnect_from_heroes(message):
    Group("heroes").discard(message.reply_channel)


def connect_to_remoteControl_receiver(message):
    print("Connected to remoteControl-Receiver service \n")
    message.reply_channel.send({"accept": True})
    Group("remoteControlReceiver").add(message.reply_channel)


def connect_to_remoteControl_sender(message):
    print("Connected to remote control sender service \n")
    message.reply_channel.send({"accept": True})
    Group("remoteControlSender").add(message.reply_channel)


def disconnect_from_remoteControl_receiver(message):
    Group("remoteControlSender").discard(message.reply_channel)


def disconnect_from_remoteControl_sender(message):
    Group("remoteControlSender").discard(message.reply_channel)


def message_to_remote_control_receivers(message):
    # Make standard HTTP response - access ASGI path attribute directly
    data = json.loads(message.content['text'])
    print(data)
    Group("remoteControlReceiver").send({
        "text": message.content['text'],
    })
