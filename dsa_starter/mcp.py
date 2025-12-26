# DSA MCP Server Tools Configuration
# Create MCP tools for DSA tabletop RPG management system

from mcp_server import ModelQueryToolset, MCPToolset
from dsa_starter.characterModels import Character, Race, HeroType, Skill, Spell, SkillType, SpellType
from dsa_starter.adventureModels import Adventure, Fight, FightParticipation
from dsa_starter.npcGenerator import NPCType
from dsa_starter.nonPlayerCharacter import Character as NPC
import random
import re


# Character Management Tools
class CharacterQueryTool(ModelQueryToolset):
    """Tools for managing player characters in the DSA campaign."""
    model = Character

    def get_queryset(self):
        """Filter to show only player characters by default."""
        return super().get_queryset().filter(isHero=True)


class AdventureQueryTool(ModelQueryToolset):
    """Tools for managing adventures and campaigns."""
    model = Adventure


class FightQueryTool(ModelQueryToolset):
    """Tools for managing combat encounters."""
    model = Fight


class FightParticipationTool(ModelQueryToolset):
    """Tools for managing combat participants."""
    model = FightParticipation


# Game Rules and Reference Tools (Read-only)
class SkillQueryTool(ModelQueryToolset):
    """List all available skills in the DSA rule system with their requirements and dice rolls."""
    model = Skill


class SpellQueryTool(ModelQueryToolset):
    """List all available spells and magic abilities with casting requirements."""
    model = Spell


class SkillTypeQueryTool(ModelQueryToolset):
    """List skill categories and types for character development."""
    model = SkillType


class SpellTypeQueryTool(ModelQueryToolset):
    """List magic schools and spell categories."""
    model = SpellType


class RaceQueryTool(ModelQueryToolset):
    """List all available character races (Human, Elf, Dwarf, etc.)."""
    model = Race


class HeroTypeQueryTool(ModelQueryToolset):
    """List all available character classes/professions (Warrior, Mage, etc.)."""
    model = HeroType


# NPC Management Tools
class NPCTypeQueryTool(ModelQueryToolset):
    """List all available NPC templates with combat stats and equipment."""
    model = NPCType


class NPCQueryTool(ModelQueryToolset):
    """Tools for managing non-player characters."""
    model = NPC


# Custom DSA Game Tools
class DSAGameTools(MCPToolset):
    """Custom tools for DSA tabletop RPG gameplay mechanics."""
    
    def generate_fantasy_names(self, race_type: str, gender: str, count: int = 5) -> list:
        """Generate fantasy names for NPCs based on race and gender.
        
        Args:
            race_type: Type of race (human, elf, dwarf, etc.)
            gender: Gender for name generation (M/F)  
            count: Number of names to generate (default: 5)
            
        Returns:
            List of generated fantasy names
        """
        from dsa_starter.npcGenerator import generateNames
        names = generateNames(race_type, gender)
        # If the generator returns empty list, provide some sample names
        if not names:
            sample_names = {
                'human': {
                    'M': ['Thorsten', 'Alderich', 'Bor', 'Gunnar', 'Halvar'],
                    'F': ['Alrike', 'Boronida', 'Dragea', 'Elaria', 'Firun']
                },
                'elf': {
                    'M': ['Auelian', 'Celebran', 'Daeron', 'Elrion', 'Galdor'],
                    'F': ['Arwen', 'Celebrian', 'Elaria', 'Galadriel', 'Nimrodel']
                },
                'dwarf': {
                    'M': ['Baldin', 'Dain', 'Gimli', 'Thorek', 'Uzbad'],
                    'F': ['Disa', 'Gilda', 'Nala', 'Thora', 'Vera']
                }
            }
            names = sample_names.get(race_type.lower(), sample_names['human']).get(gender, sample_names['human']['M'])
        
        return names[:count] if len(names) >= count else names

    def roll_dice(self, dice_formula: str) -> dict:
        """Roll dice using DSA dice notation (e.g., '1W6+3', '3W20').
        
        Args:
            dice_formula: Dice formula in DSA notation
            
        Returns:
            Dict with individual rolls, total, and formula used
        """
        # Parse dice formula (basic implementation)
        match = re.match(r'(\d+)W(\d+)([+-]\d+)?', dice_formula.upper())
        if not match:
            return {"error": "Invalid dice formula", "formula": dice_formula}
            
        num_dice = int(match.group(1))
        die_sides = int(match.group(2))
        modifier = int(match.group(3)) if match.group(3) else 0
        
        rolls = [random.randint(1, die_sides) for _ in range(num_dice)]
        total = sum(rolls) + modifier
        
        return {
            "formula": dice_formula,
            "rolls": rolls,
            "modifier": modifier,
            "total": total
        }

    def perform_skill_check(self, character_id: int, skill_name: str, modifier: int = 0) -> dict:
        """Perform a skill check for a character using DSA rules.
        
        Args:
            character_id: ID of the character performing the check
            skill_name: Name of the skill to check
            modifier: Difficulty modifier (positive = easier, negative = harder)
            
        Returns:
            Dict with check results, success/failure, and remaining skill points
        """
        try:
            character = Character.objects.get(id=character_id)
            skill = Skill.objects.get(name__icontains=skill_name)
            
            # Get character's attributes for the skill check
            attr1_value = getattr(character, skill.dice1, 0)
            attr2_value = getattr(character, skill.dice2, 0) 
            attr3_value = getattr(character, skill.dice3, 0)
            
            # Roll 3W20 for skill check
            roll1 = random.randint(1, 20)
            roll2 = random.randint(1, 20)
            roll3 = random.randint(1, 20)
            
            # Calculate success (simplified DSA rules)
            skill_points = 10  # Would get from ActualSkill model in a full implementation
            remaining_points = skill_points + modifier
            
            if roll1 <= attr1_value: 
                remaining_points -= 0
            else: 
                remaining_points -= (roll1 - attr1_value)
            
            if roll2 <= attr2_value: 
                remaining_points -= 0  
            else: 
                remaining_points -= (roll2 - attr2_value)
            
            if roll3 <= attr3_value: 
                remaining_points -= 0
            else: 
                remaining_points -= (roll3 - attr3_value)
            
            success = remaining_points >= 0
            
            return {
                "character": character.name,
                "skill": skill.name,
                "attributes": [skill.dice1, skill.dice2, skill.dice3],
                "attribute_values": [attr1_value, attr2_value, attr3_value],
                "rolls": [roll1, roll2, roll3],
                "skill_points": skill_points,
                "modifier": modifier,
                "remaining_points": remaining_points,
                "success": success,
                "quality": remaining_points if success else 0
            }
            
        except Exception as e:
            return {"error": str(e)}

    def get_adventure_summary(self, adventure_id: int) -> dict:
        """Get a comprehensive summary of an adventure with all NPCs, fights, and status.
        
        Args:
            adventure_id: ID of the adventure
            
        Returns:
            Dict with adventure details, NPCs, fights, and current status
        """
        try:
            adventure = Adventure.objects.get(id=adventure_id)
            
            # Get related fights and NPCs
            fights = Fight.objects.filter(adventure=adventure_id)
            fight_data = []
            
            for fight in fights:
                participants = FightParticipation.objects.filter(fight=fight)
                participant_data = []
                
                for p in participants:
                    if p.character:
                        participant_data.append({
                            "type": "character",
                            "name": p.character.name,
                            "position": p.get_position_display() if hasattr(p, 'get_position_display') else "Unknown",
                            "initiative": getattr(p, 'initiative', 0)
                        })
                    elif p.npc:
                        participant_data.append({
                            "type": "npc", 
                            "name": p.npc.name,
                            "position": p.get_position_display() if hasattr(p, 'get_position_display') else "Unknown",
                            "initiative": getattr(p, 'initiative', 0)
                        })
                
                fight_data.append({
                    "id": fight.id,
                    "name": fight.name,
                    "next_up": fight.nextUp,
                    "participants": participant_data
                })
            
            return {
                "adventure": {
                    "id": adventure.id,
                    "name": adventure.name,
                    "is_active": adventure.isActive
                },
                "fights": fight_data,
                "total_fights": len(fight_data)
            }
            
        except Exception as e:
            return {"error": str(e)}