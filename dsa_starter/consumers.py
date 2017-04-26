from django.http import HttpResponse
from channels.handler import AsgiHandler
from channels import message

import json

from channels import Group


def ws_connect(message):
    print("Connected, HAHAHAH \n")
    message.reply_channel.send({"accept": True})
    Group("heroes").add(message.reply_channel)


def ws_message(message):
    # Make standard HTTP response - access ASGI path attribute directly

    print("I would like to reply to a request, HAHAHAH \n")

    print(message)

    Group("heroes").send({
        "text": message.content['text'],
    })

def ws_disconnect(message):
    Group("heroes").discard(message.reply_channel)

    