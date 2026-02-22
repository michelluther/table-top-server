# Installation

This application runs with python 3.13.

# Running the app for development

# Switching to the virtual environment

`source dsavenv_313/bin/activate`

Since it is a django app, call

`python manage.py runserver`

making the app available over the network

`python manage.py runserver 0.0.0.0:8000`

## Deployment

```shell
eb create -d -r eu-central-1 --single
```

# To dos

## Abenteuerverwaltung

MPC-basierte Abenteuerverwaltung soll es ermöglichen, dass man in der Vorbereitung eines Abenteuers bestimmte Elemente, die man während des Abenteuers gut gebrauchen kann, der App verfügbar machen kann.

### NPC-Erstellung

1. Erzeugung aus der Abenteuerbeschreibung heraus.

In einer Abenteuerbeschreibung ist werden Charaktere beschrieben. Für diese hätte man gerne eine Repräsentation in der App, damit man für sie bspw. auch Proben ausführen kann. Schritt eins ist aber natürlich erst mal, dass man die Charaktere erst mal in die App bekommt.

2. Erzeugung aus Vorlagen heraus.

Einfache Charaktere und Gegner wie Wölfe, einfache Gardisten etc. braucht man ja auch noch .... Diese sollen auch Ad-hoc erzeugt werden können. bspw. wenn man einen Kampf beginnt. Hierfür bräuchte es dann vielleicht eher so etwas wie eine "Aktion" oder so was, was man bei einem GPT erzeugen kann.

## Locations

Über das Django-Frontend kann man aktuell Abenteuer anlegen etc.

- [ ] 

- [ ] NPCs aufbauen
  - [x] CharacterModels müssen NPCs unterstützen
  - [x] NPC Abenteuer hinzufügen
  - [ ] Basiswerte?

- [ ] NPC-Generator
  
  - [ ] Templates?
  - [ ] Namen einbauen?



# Was noch fehlt

- [ ] Sprachen

- [ ] Alter

- [ ] Modifikatoren (rasse, sonderfertigkeiten etc.)

- [ ] Sonderfertigkeiten

- [ ] gute und schlechte Eigenschaften

- [ ] Rüstungsmodel
