from django.http import HttpResponse
from channels.handler import AsgiHandler
from channels import message
from dsa_starter.models import Character

import json

from channels import Group


def ws_connect(message):
    print("Connected, HAHAHAH \n")
    message.reply_channel.send({"accept": True})
    Group("heroes").add(message.reply_channel)


def ws_message(message):
    # Make standard HTTP response - access ASGI path attribute directly

    data = json.loads(message.content['text'])
    print(message.content['text'])
    #print(dict(heroId=12,name="harald").heroId)
    print(data["heroId"])

    character = Character.objects.get(pk=data["heroId"])
    character.life_lost = character.life_lost - data["value"]
    character.save()

    Group("heroes").send({
        "text": message.content['text'],
    })

def ws_disconnect(message):
    Group("heroes").discard(message.reply_channel)

    