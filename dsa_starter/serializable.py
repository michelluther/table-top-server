from dsa_starter.characterModels import Character, ActualSkill, Skill, SkillType, SkillGroup, ActualSpellSkill, Spell, SpellType, CharacterHasWeapon, Weapon, CharacterHasArmor, Armor, WeaponSkillDistribution, InventoryItem, EIGENSCHAFTEN
from dsa_starter.adventureModels import Adventure, AdventureImage, AdventureCharacter, AdventureLocation, FightParticipation


class SkillSerializable():

    def __init__(self, skill):
        self.id = skill.id
        self.name = skill.name
        self.type = skill.type.id
        self.behinderung = skill.behinderung
        self.isWeaponSkill = skill.weaponSkill

        if skill.dice1 != '':
            self.dice1 = {'id': skill.dice1,
                          'name': EIGENSCHAFTEN[skill.dice1]}
            self.dice2 = {'id': skill.dice2,
                          'name': EIGENSCHAFTEN[skill.dice2]}
            self.dice3 = {'id': skill.dice3,
                          'name': EIGENSCHAFTEN[skill.dice3]}


class SkillTypeSerializable():

    def __init__(self, skillType):
        self.name = skillType.name
        self.skill_group = dict(
            id=skillType.skill_group.id, name=skillType.skill_group.name)
        self.id = skillType.id


class SkillGroupSerializable():
    def __init__(self, skillGroup):
        self.name = skillGroup.name
        self.costsPerIncrease = skillGroup.cost_per_increase
        self.title = skillGroup.title
        self.id = skillGroup.id


class CharacterSerializable():

    def __init__(self, character):
        self.assign_character_attributes(character)
        character_skills = self.get_character_skills(character)
        self.assign_character_skills(character_skills)
        character_spells = self.get_character_spells(character)
        self.assign_character_spells(character_spells)


    def assign_character_attributes(self, character):
        self.id = character.id
        self.gender = character.gender
        self.name = character.name

        self.avatar = character.avatar.url
        self.avatar_small = character.avatar_small.url

        self.assign_race(character.race)
        self.assign_hero_type(character.type)

        self.culture = character.culture
        self.social_rank = character.social_rank
        self.size = character.size

        # eigenschaften
        self.MU = character.MU
        self.KL = character.KL
        self.IN = character.IN
        self.CH = character.CH
        self.FF = character.FF
        self.GE = character.GE
        self.KO = character.KO
        self.KK = character.KK

        self.experience = character.experience
        self.experience_used = character.experience_used
        self.life = character.life
        self.life_lost = character.life_lost
        self.magic_energy = character.magic_energy
        self.magic_energy_lost = character.magic_energy_lost

        self.magieresistenz = (character.KO +
                               character.MU + character.KL) / 5
        self.attack_basis = round(
            (character.MU + character.GE + character.KK) / 5)
        self.parade_basis = round(
            (character.IN + character.GE + character.KK) / 5)
        self.ini_basis = round(
            (character.MU + character.MU + character.IN + character.GE) / 5)

        self.fernkampf_basis = round(
            (character.IN + character.FF + character.KK)/5)

        self.weapons = self.assign_weapons()
        self.weaponSkillDistributions = self.assign_weapon_skill_distributions(
            character)

        self.armor = character.armor

        self.assign_inventory_items()
        self.assign_armor()

        self.money_dukaten = character.money_dukaten
        self.money_silbertaler = character.money_silbertaler
        self.money_heller = character.money_heller
        self.money_kreuzer = character.money_kreuzer

        self.hair_color = character.hair_color
        self.eye_color = character.eye_color
        self.weight = character.weight

    def get_character_skills(self, character):
        return ActualSkill.objects.filter(character=character.pk)

    def assign_character_skills(self, skills):
        self.skills = []
        for skill in skills:
            skill_serializable = self.get_skill(skill)
            self.skills.append(skill_serializable)

    def assign_character_spells(self, spells):
        self.spells = []
        for spell in spells:
            spell_serializable = self.get_spell(spell)
            self.spells.append(spell_serializable)

    def get_character_spells(self, character):
        return ActualSpellSkill.objects.filter(character=character.pk)

    def assign_weapon_skill_distributions(self, character):
        serializedWeaponSkillDistributions = []
        weaponSkillDistributions = WeaponSkillDistribution.objects.filter(
            character=character.id)
        for weaponSkillDistribution in weaponSkillDistributions:
            serializedWeaponSkillDistributions.append(dict(skill=weaponSkillDistribution.skill.id,
                                                           attack=weaponSkillDistribution.attack,
                                                           parade=weaponSkillDistribution.parade))
        return serializedWeaponSkillDistributions

    def assign_weapons(self):
        weaponAssignments = CharacterHasWeapon.objects.filter(
            character=self.id)
        weapons = []
        for weaponAssignment in weaponAssignments:
            weapons.append(WeaponSerializable(weaponAssignment.weapon))
        return weapons
    
    def assign_armor(self):
        armorAssignments = CharacterHasArmor.objects.filter(
            character=self.id)
        self.armor = []
        for armorAssignment in armorAssignments:
            self.armor.append(ArmorSerializable(armorAssignment.armor))

    def get_skill(self, skill):
        return dict(assignmentId = skill.pk, id=skill.skill.id, value=skill.value)

    def get_spell(self, spell):
        return dict(assignmentId = spell.pk, id=spell.spell.id, value=spell.value)

    def assign_race(self, race):
        self.race = dict(name=race.name, id=race.id)

    def assign_hero_type(self, type):
        self.hero_type = dict(id=type.id, name=type.name)
        self.knows_magic = type.knowsMagic

    def assign_inventory_items(self):
        self.inventoryItems = []
        inventoryItems = InventoryItem.objects.filter(
            character=self.id
        )
        for inventoryItem in inventoryItems:
            self.inventoryItems.append(InventoryItemSerializable(inventoryItem))

class SpellSerializable():
    def __init__(self, spell):
        self.id = spell.id
        self.name = spell.name
        self.dice1 = spell.dice1
        self.dice2 = spell.dice2
        self.dice3 = spell.dice3
        self.type = spell.type.id
        

class SpellTypeSerializable():
    def __init__(self, spellType):
        self.id = spellType.id
        self.name = spellType.name
        

class AdventureSerializable():

    def __init__(self, adventure):
        self.id = adventure.id
        self.name = adventure.name
        self.active = adventure.isActive
        self.images = self.assign_images(adventure)
        self.characters = self.assign_characters(adventure)

    def assign_images(self, adventure):
        images_serializable = []
        images = AdventureImage.objects.filter(adventure=adventure.id,isActive=1)
        for image in images:
            images_serializable.append(
                dict(url=image.image.url, caption=image.caption,sequence=image.sequenceInAdventure))
        return images_serializable

    def assign_characters(self, adventure):
        characters_serializable = []
        characters = AdventureCharacter.objects.filter(adventure=adventure.id,isActive=1)
        for character in characters:
            characters_serializable.append(
                AdventureCharacterSerializable(character)
            )
        return characters_serializable

class AdventureCharacterSerializable:
    def __init__(self, adventureCharacter):

        self.sequence=adventureCharacter.sequenceInAdventure
        if(adventureCharacter.character):
            self.character = CharacterSerializable(adventureCharacter.character)
            self.name = adventureCharacter.character.name
            self.imageUrl = adventureCharacter.character.avatar_small.url
        else:
            self.npc = NPCSerializable(adventureCharacter.npc)
            self.name = adventureCharacter.npc.name
            if adventureCharacter.npc.avatar_small:
                self.imageUrl = adventureCharacter.npc.avatar_small.url
        
class NPCSerializable:
    def __init__(self, npc):
        self.id = npc.id
        self.name = npc.name
        self.assign_race(npc.race)
        self.attack = npc.attack
        self.parade = npc.parade
        self.weapon_1_name = npc.weapon_1_name
        self.weapon_1_damage = npc.weapon_1_damage
        self.weapon_1_attack = npc.weapon_1_attack
        self.weapon_1_parade = npc.weapon_1_parade
        self.weapon_2_name = npc.weapon_2_name
        self.weapon_2_damage = npc.weapon_2_damage
        self.weapon_2_attack = npc.weapon_2_attack
        self.weapon_2_parade = npc.weapon_2_parade
        self.initiative = npc.initiative
        self.ruestung = npc.ruestung
        self.life = npc.life
        self.magic_energy = npc.magic_energy
        self.knowsMagic = npc.knowsMagic

    def assign_race(self, race):
        self.race = dict(name=race.name, id=race.id)
        
class WeaponSerializable():

    def __init__(self, weapon):
        self.id = weapon.id
        self.name = weapon.name
        self.tp_dice = weapon.hit_dices
        self.tp_add_points = weapon.hit_add_points
        self.skill = weapon.skill.id
        self.extra_tp_from_kk = weapon.hit_extra_from_kk

class ArmorSerializable():

    def __init__(self, armor):
        self.id = armor.id
        self.name = armor.name
        self.rs = armor.ruestungs_schutz
        self.be = armor.behinderung

class InventoryItemSerializable():

    def __init__(self, inventoryItem):
        self.id = inventoryItem.id
        self.name = inventoryItem.name
        self.amount = inventoryItem.amount
        self.weight = inventoryItem.weight
        self.unit = inventoryItem.unit

class AscensionSerializable():

    def __init__(self, ascension):
        self.level = ascension.level
        self.cost_a = ascension.cost_a
        self.cost_b = ascension.cost_b
        self.cost_c = ascension.cost_c
        self.cost_d = ascension.cost_d
        self.cost_e = ascension.cost_e
        self.cost_f = ascension.cost_f
        self.cost_g = ascension.cost_g
        self.cost_h = ascension.cost_h

class NPCTypeSerializable():

    def __init__(self, npcType):
        self.id = npcType.id
        self.name = npcType.name
        self.race = npcType.race
        self.attack = npcType.attack
        self.parade = npcType.parade
        self.weapon_1_name = npcType.weapon_1_name
        self.weapon_1_damage = npcType.weapon_1_damage
        self.weapon_2_name = npcType.weapon_2_name
        self.weapon_2_damage = npcType.weapon_2_damage
        self.initiative = npcType.initiative
        self.ruestung = npcType.ruestung
        self.life = npcType.life
        self.magic_energy = npcType.magic_energy
        self.knowsMagic = npcType.knowsMagic

class FightSerializable():
    def __init__(self, fight):
        self.name = fight.name
        self.id = fight.id

        self.participations = []
        participations = FightParticipation.objects.filter(fight=fight)
        for participation in participations:
            self.participations.append(FigthParticipationSerializable(participation))
        if(fight.nextUp != 0):
            nextUp = FigthParticipationSerializable(FightParticipation.objects.get(pk=fight.nextUp))
            self.nextUp = nextUp

class FigthParticipationSerializable():
    def __init__(self, fightParticipation):
        if(fightParticipation.character):
            self.participantType = "character"
            self.participant = CharacterSerializable(fightParticipation.character)
        else:
            self.participantType = "npc"
            self.participantId = NPCSerializable(fightParticipation.npc)
        self.initiative = fightParticipation.calculatedInitiative
        