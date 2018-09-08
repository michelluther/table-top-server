from dsa_starter.character import Character, ActualSkill, Skill, SkillType, SkillGroup

class SkillSerializable():

    def __init__(self, skill):
        self.id = skill.id
        self.name = skill.name
        self.type = skill.type.id
        self.behinderung = skill.behinderung

        self.dice1 = skill.dice1
        self.dice2 = skill.dice2
        self.dice3 = skill.dice3

class SkillTypeSerializable():

    def __init__(self, skillType):
        self.name = skillType.name
        self.skill_group = dict(id=skillType.skill_group.id,name=skillType.skill_group.name)
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
        self.mut = character.mut
        self.klugheit = character.klugheit
        self.intuition = character.intuition
        self.charisma = character.charisma
        self.fingerfertigkeit = character.fingerfertigkeit
        self.gewandheit = character.gewandheit
        self.konstitution = character.konstitution
        self.koerperkraft = character.koerperkraft

        self.experience = character.experience
        self.life = character.life
        self.life_lost = character.life_lost
        self.experience_used = character.experience_used

        self.magieresistenz = (character.konstitution + character.mut + character.klugheit) / 5
        self.attack_basis = round(( character.mut + character.gewandheit + character.koerperkraft ) / 5)
        self.parade_basis = round(( character.intuition + character.gewandheit + character.koerperkraft ) / 5)
        self.ini_basis = round(( character.mut + character.mut + character.intuition + character.gewandheit ) / 5)

        self.fernkampf_basis = round((character.intuition + character.fingerfertigkeit + character.koerperkraft)/5)

    def get_character_skills(self, character):
        return ActualSkill.objects.filter(character=character.pk)

    def assign_character_skills(self, skills):
        self.skills = []
        for skill in skills:
            skill_serializable = self.get_skill(skill)
            self.skills.append(skill_serializable)


    def get_skill(self, skill):
        return dict(id=skill.skill.id, value=skill.value)

    def assign_race(self, race):
        self.race = dict(name=race.name, id=race.id )

    def assign_hero_type(self, type):
        self.hero_type = dict(id=type.id,name=type.name)