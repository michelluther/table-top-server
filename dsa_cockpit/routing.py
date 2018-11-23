from channels.routing import route
from dsa_starter.consumers import message_to_heroes, connect_to_heroes, disconnect_from_heroes, connect_to_remoteControl_sender, connect_to_remoteControl_receiver, disconnect_from_remoteControl_receiver, disconnect_from_remoteControl_sender, message_to_remote_control_receivers

channel_routing = [
    route("websocket.connect", connect_to_heroes, path=r"^/heroes"),
    route("websocket.receive", message_to_heroes, path=r"^/heroes"),
    route("websocket.disconnect", disconnect_from_heroes, path=r"^/heroes"),
    route("websocket.connect", connect_to_remoteControl_receiver, path=r"^/remoteControlReceiver"),
    route("websocket.connect", connect_to_remoteControl_sender, path=r"^/remoteControlSender"),
    route("websocket.receive", message_to_remote_control_receivers, path=r"^/remoteControlSender"),
    route("websocket.disconnect", disconnect_from_remoteControl_sender, path=r"^/remoteControlSender"),
    route("websocket.disconnect", disconnect_from_remoteControl_receiver, path=r"^/remoteControlReceiver"),

]