# Installation

This application runs with python 3.6. Anything newer fails. Upgrade is planned, but not there yet


# Running the app for development

# Switching to the virtual environment

`source dsavenv/bin/activate`

Since it is a django app, call

`python manage.py runserver`

making the app available over the network

`python manage.py runserver 0.0.0.0:8000`

# to dos

## Cloud-readiness

- [ ] Test on elastic beanstalk
- [ ] Find the newest sqlite-db-version
- [ ] Make the frontend play nice when delivered by the django app
  - [x] Consider different ports
  - [ ] How does routing work in here?
    - [ ] Set up separate directory for app? 
    - [ ] Or use S3 for this?
      - [ ] If we use S3, how do we make sure that this works in development as well as in production?... we do not serve via S3 in development anyway ...
- [ ] Login für REST
- [ ] Login für WebSocket-Kommunikation
- [ ] Login für Angular-App anbinden

- vielleicht doch das mit dem serializable irgendwie weg machen ... das ist doch nur Aufwand eigentlich

- [ ] NPCs aufbauen
  - [x] CharacterModels müssen NPCs unterstützen
  - [x] NPC Abenteuer hinzufügen
  - [ ] Basiswerte?


- [ ] NPC-Generator
  - [ ] Templates?
  - [ ] Namen einbauen?
  - [ ] 

- [x] "Rasse": Tulamidin, Thorwaller etc.
- [ ] Sprachen
- [ ] Alter
- [ ] modifikatoren (rasse, sonderfertigkeiten etc.)
- [ ] sonderfertigkeiten
- [ ] gute und schlechte Eigenschaften
- [ ] rüstung-model

done
- [x] money
- [x] key values for WeaponSkillDistribution
- [x] waffen-model
- [x] magic