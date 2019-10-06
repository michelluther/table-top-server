from dsa_starter.characterModels import Character

import json

from channels import Group


def connect_to_heroes(message):
    print("Connected to heroes service \n")
    message.reply_channel.send({"accept": True})
    Group("heroes").add(message.reply_channel)


def message_to_heroes(message):
    # Make standard HTTP response - access ASGI path attribute directly
    data = json.loads(message.content['text'])
    character = Character.objects.get(pk=data["heroId"])
    if data["type"] == "lifeUpdate":
        character.life_lost = character.life_lost - data["value"]
    elif data["type"] == "magicUpdate":
        character.magic_energy_lost = character.magic_energy_lost - data["value"]

    character.save()
    Group("heroes").send({
        "text": message.content['text'],
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
