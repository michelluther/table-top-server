# -*- coding: utf-8 -*-
from rest_framework import serializers
from dsa_starter.characterModels import (
    Character, Race, HeroType, ActualSkill, ActualSpellSkill, 
    Skill, SkillType, SkillGroup, Spell, SpellType,
    Weapon, CharacterHasWeapon, Armor, CharacterHasArmor,
    WeaponSkillDistribution, InventoryItem, EIGENSCHAFTEN
)
from dsa_starter.adventureModels import (
    Adventure, AdventureImage, AdventureCharacter, AdventureLocation,
    Fight, FightParticipation
)
from dsa_starter.ruleModels import Ascensions
from dsa_starter.npcGenerator import NPCType
from dsa_starter.nonPlayerCharacter import Character as NPC


class RaceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Race
        fields = ['id', 'name']


class HeroTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = HeroType
        fields = ['id', 'name', 'knowsMagic']


class SkillGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = SkillGroup
        fields = ['id', 'name', 'title', 'cost_per_increase']
        
    def to_representation(self, instance):
        data = super().to_representation(instance)
        data['costsPerIncrease'] = data.pop('cost_per_increase')  # Match original naming
        return data


class SkillTypeSerializer(serializers.ModelSerializer):
    skill_group = SkillGroupSerializer(read_only=True)
    
    class Meta:
        model = SkillType
        fields = ['id', 'name', 'skill_group']


class SkillSerializer(serializers.ModelSerializer):
    type = serializers.PrimaryKeyRelatedField(read_only=True)
    dice1 = serializers.SerializerMethodField()
    dice2 = serializers.SerializerMethodField()
    dice3 = serializers.SerializerMethodField()
    
    class Meta:
        model = Skill
        fields = ['id', 'name', 'type', 'behinderung', 'weaponSkill', 'dice1', 'dice2', 'dice3']
        
    def to_representation(self, instance):
        data = super().to_representation(instance)
        data['isWeaponSkill'] = data.pop('weaponSkill')  # Match original naming
        return data
    
    def get_dice1(self, obj):
        if obj.dice1:
            return {'id': obj.dice1, 'name': EIGENSCHAFTEN.get(obj.dice1, '')}
        return None
    
    def get_dice2(self, obj):
        if obj.dice2:
            return {'id': obj.dice2, 'name': EIGENSCHAFTEN.get(obj.dice2, '')}
        return None
    
    def get_dice3(self, obj):
        if obj.dice3:
            return {'id': obj.dice3, 'name': EIGENSCHAFTEN.get(obj.dice3, '')}
        return None


class SpellTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = SpellType
        fields = ['id', 'name']


class SpellSerializer(serializers.ModelSerializer):
    type = serializers.PrimaryKeyRelatedField(read_only=True)
    complexity = serializers.StringRelatedField(read_only=True)
    
    class Meta:
        model = Spell
        fields = ['id', 'name', 'dice1', 'dice2', 'dice3', 'type', 'complexity']


class WeaponSerializer(serializers.ModelSerializer):
    skill = serializers.PrimaryKeyRelatedField(read_only=True)
    
    class Meta:
        model = Weapon
        fields = ['id', 'name', 'hit_dices', 'hit_add_points', 'skill', 'hit_extra_from_kk']
        
    def to_representation(self, instance):
        data = super().to_representation(instance)
        # Match original field names
        data['tp_dice'] = data.pop('hit_dices')
        data['tp_add_points'] = data.pop('hit_add_points')
        data['extra_tp_from_kk'] = data.pop('hit_extra_from_kk')
        return data


class ArmorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Armor
        fields = ['id', 'name', 'ruestungs_schutz', 'behinderung']
        
    def to_representation(self, instance):
        data = super().to_representation(instance)
        # Match original field names
        data['rs'] = data.pop('ruestungs_schutz')
        data['be'] = data.pop('behinderung')
        return data


class InventoryItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = InventoryItem
        fields = ['id', 'name', 'amount', 'weight', 'unit']


class ActualSkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = ActualSkill
        fields = ['id', 'skill', 'value']
        
    def to_representation(self, instance):
        return {
            'assignmentId': instance.id,
            'id': instance.skill.id,
            'value': instance.value
        }


class ActualSpellSkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = ActualSpellSkill
        fields = ['id', 'spell', 'value']
        
    def to_representation(self, instance):
        return {
            'assignmentId': instance.id,
            'id': instance.spell.id,
            'value': instance.value
        }


class WeaponSkillDistributionSerializer(serializers.ModelSerializer):
    skill = serializers.PrimaryKeyRelatedField(read_only=True)
    
    class Meta:
        model = WeaponSkillDistribution
        fields = ['skill', 'attack', 'parade']


class CharacterSerializer(serializers.ModelSerializer):
    race = RaceSerializer(read_only=True)
    hero_type = HeroTypeSerializer(source='type', read_only=True)
    knows_magic = serializers.SerializerMethodField()
    
    # Related fields
    skills = serializers.SerializerMethodField()
    spells = serializers.SerializerMethodField()
    weapons = serializers.SerializerMethodField()
    armor = serializers.SerializerMethodField()
    weaponSkillDistributions = serializers.SerializerMethodField()
    inventoryItems = serializers.SerializerMethodField()
    
    # Computed fields
    magieresistenz = serializers.SerializerMethodField()
    attack_basis = serializers.SerializerMethodField()
    parade_basis = serializers.SerializerMethodField()
    ini_basis = serializers.SerializerMethodField()
    fernkampf_basis = serializers.SerializerMethodField()
    
    class Meta:
        model = Character
        fields = [
            'id', 'gender', 'name', 'avatar', 'avatar_small',
            'race', 'hero_type', 'knows_magic', 'culture', 'social_rank', 'size',
            'MU', 'KL', 'IN', 'CH', 'FF', 'GE', 'KO', 'KK',
            'experience', 'experience_used', 'life', 'life_lost',
            'magic_energy', 'magic_energy_lost', 'armor',
            'money_dukaten', 'money_silbertaler', 'money_heller', 'money_kreuzer',
            'hair_color', 'eye_color', 'weight',
            'skills', 'spells', 'weapons', 'weaponSkillDistributions',
            'inventoryItems',
            'magieresistenz', 'attack_basis', 'parade_basis', 'ini_basis', 'fernkampf_basis'
        ]
    
    def get_knows_magic(self, obj):
        return obj.type.knowsMagic
    
    def get_skills(self, obj):
        actual_skills = ActualSkill.objects.filter(character=obj)
        return ActualSkillSerializer(actual_skills, many=True).data
    
    def get_spells(self, obj):
        actual_spells = ActualSpellSkill.objects.filter(character=obj)
        return ActualSpellSkillSerializer(actual_spells, many=True).data
    
    def get_weapons(self, obj):
        weapon_assignments = CharacterHasWeapon.objects.filter(character=obj)
        weapons = [assignment.weapon for assignment in weapon_assignments]
        return WeaponSerializer(weapons, many=True).data
    
    def get_armor(self, obj):
        armor_assignments = CharacterHasArmor.objects.filter(character=obj)
        armors = [assignment.armor for assignment in armor_assignments]
        return ArmorSerializer(armors, many=True).data
    
    def get_weaponSkillDistributions(self, obj):
        distributions = WeaponSkillDistribution.objects.filter(character=obj)
        return WeaponSkillDistributionSerializer(distributions, many=True).data
    
    def get_inventoryItems(self, obj):
        items = InventoryItem.objects.filter(character=obj)
        return InventoryItemSerializer(items, many=True).data
    
    def get_magieresistenz(self, obj):
        return (obj.KO + obj.MU + obj.KL) / 5
    
    def get_attack_basis(self, obj):
        return round((obj.MU + obj.GE + obj.KK) / 5)
    
    def get_parade_basis(self, obj):
        return round((obj.IN + obj.GE + obj.KK) / 5)
    
    def get_ini_basis(self, obj):
        return round((obj.MU + obj.MU + obj.IN + obj.GE) / 5)
    
    def get_fernkampf_basis(self, obj):
        return round((obj.IN + obj.FF + obj.KK) / 5)


# Additional serializers for remaining endpoints
class AscensionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ascensions
        fields = ['level', 'cost_a', 'cost_b', 'cost_c', 'cost_d', 'cost_e', 'cost_f', 'cost_g', 'cost_h']


class NPCTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = NPCType
        fields = [
            'id', 'name', 'race', 'attack', 'parade',
            'weapon_1_name', 'weapon_1_damage', 'weapon_2_name', 'weapon_2_damage',
            'initiative', 'ruestung', 'life', 'magic_energy', 'knowsMagic'
        ]


class NPCSerializer(serializers.ModelSerializer):
    race = RaceSerializer(read_only=True)
    
    class Meta:
        model = NPC
        fields = [
            'id', 'name', 'race', 'attack', 'parade',
            'weapon_1_name', 'weapon_1_damage', 'weapon_1_attack', 'weapon_1_parade',
            'weapon_2_name', 'weapon_2_damage', 'weapon_2_attack', 'weapon_2_parade',
            'initiative', 'ruestung', 'life', 'magic_energy', 'knowsMagic'
        ]


class AdventureImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdventureImage
        fields = ['url', 'caption', 'sequence']
        
    def to_representation(self, instance):
        return {
            'url': instance.image.url if instance.image else '',
            'caption': instance.caption,
            'sequence': instance.sequenceInAdventure
        }


class AdventureCharacterSerializer(serializers.ModelSerializer):
    character = CharacterSerializer(read_only=True)
    npc = NPCSerializer(read_only=True)
    name = serializers.SerializerMethodField()
    imageUrl = serializers.SerializerMethodField()
    
    class Meta:
        model = AdventureCharacter
        fields = ['sequence', 'character', 'npc', 'name', 'imageUrl']
        
    def to_representation(self, instance):
        data = {
            'sequence': instance.sequenceInAdventure
        }
        
        if instance.character:
            data['character'] = CharacterSerializer(instance.character).data
            data['name'] = instance.character.name
            data['imageUrl'] = instance.character.avatar_small.url if instance.character.avatar_small else ''
        else:
            data['npc'] = NPCSerializer(instance.npc).data
            data['name'] = instance.npc.name
            data['imageUrl'] = instance.npc.avatar_small.url if hasattr(instance.npc, 'avatar_small') and instance.npc.avatar_small else ''
        
        return data


class FightParticipationSerializer(serializers.ModelSerializer):
    participant = serializers.SerializerMethodField()
    participantType = serializers.SerializerMethodField()
    participantId = serializers.SerializerMethodField()
    
    class Meta:
        model = FightParticipation
        fields = ['participantType', 'participant', 'participantId', 'initiative']
        
    def get_participantType(self, obj):
        return "character" if obj.character else "npc"
    
    def get_participant(self, obj):
        if obj.character:
            return CharacterSerializer(obj.character).data
        return None
    
    def get_participantId(self, obj):
        if not obj.character:
            return NPCSerializer(obj.npc).data
        return None
    
    def to_representation(self, instance):
        data = super().to_representation(instance)
        data['initiative'] = instance.calculatedInitiative
        return data


class FightSerializer(serializers.ModelSerializer):
    participations = serializers.SerializerMethodField()
    nextUp = serializers.SerializerMethodField()
    
    class Meta:
        model = Fight
        fields = ['name', 'id', 'participations', 'nextUp']
    
    def get_participations(self, obj):
        participations = FightParticipation.objects.filter(fight=obj)
        return FightParticipationSerializer(participations, many=True).data
    
    def get_nextUp(self, obj):
        if obj.nextUp != 0:
            try:
                next_participation = FightParticipation.objects.get(pk=obj.nextUp)
                return FightParticipationSerializer(next_participation).data
            except FightParticipation.DoesNotExist:
                pass
        return None


class AdventureSerializer(serializers.ModelSerializer):
    active = serializers.BooleanField(source='isActive', read_only=True)
    images = serializers.SerializerMethodField()
    characters = serializers.SerializerMethodField()
    
    class Meta:
        model = Adventure
        fields = ['id', 'name', 'active', 'images', 'characters']
    
    def get_images(self, obj):
        images = AdventureImage.objects.filter(adventure=obj, isActive=True)
        return AdventureImageSerializer(images, many=True).data
    
    def get_characters(self, obj):
        characters = AdventureCharacter.objects.filter(adventure=obj, isActive=True)
        return AdventureCharacterSerializer(characters, many=True).data