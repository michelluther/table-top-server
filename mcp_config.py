"""
Configuration file for DSA MCP Server
Defines which models and operations are exposed as MCP tools
"""

# Models to expose with full CRUD operations
FULL_CRUD_MODELS = [
    {
        'model': 'dsa_starter.characterModels.Character',
        'name_prefix': 'character',
        'description': 'Player characters in the DSA campaign',
        'list_filters': {'isHero': True}  # Only show player characters by default
    },
    {
        'model': 'dsa_starter.adventureModels.Adventure', 
        'name_prefix': 'adventure',
        'description': 'Adventures and campaigns'
    },
    {
        'model': 'dsa_starter.adventureModels.Fight',
        'name_prefix': 'fight', 
        'description': 'Combat encounters'
    },
    {
        'model': 'dsa_starter.nonPlayerCharacter.Character',
        'name_prefix': 'npc',
        'description': 'Non-player characters'
    }
]

# Models to expose as read-only (list and retrieve only)
READONLY_MODELS = [
    {
        'model': 'dsa_starter.characterModels.Skill',
        'name_prefix': 'skill',
        'description': 'Available skills and abilities'
    },
    {
        'model': 'dsa_starter.characterModels.Spell',
        'name_prefix': 'spell',
        'description': 'Available spells and magic'
    },
    {
        'model': 'dsa_starter.characterModels.Race',
        'name_prefix': 'race', 
        'description': 'Character races'
    },
    {
        'model': 'dsa_starter.characterModels.HeroType',
        'name_prefix': 'hero_type',
        'description': 'Character classes and professions'
    },
    {
        'model': 'dsa_starter.characterModels.SkillType',
        'name_prefix': 'skill_type',
        'description': 'Skill categories'
    },
    {
        'model': 'dsa_starter.characterModels.SpellType', 
        'name_prefix': 'spell_type',
        'description': 'Magic schools and spell types'
    },
    {
        'model': 'dsa_starter.npcGenerator.NPCType',
        'name_prefix': 'npc_type',
        'description': 'NPC templates and archetypes'
    }
]

# Custom tool definitions
CUSTOM_TOOLS = [
    {
        'name': 'generate_fantasy_names',
        'description': 'Generate fantasy names for NPCs based on race and gender',
        'parameters': {
            'race_type': {'type': 'string', 'description': 'Race type (human, elf, dwarf, etc.)'},
            'gender': {'type': 'string', 'description': 'Gender (M/F)'},
            'count': {'type': 'integer', 'description': 'Number of names to generate', 'default': 5}
        }
    },
    {
        'name': 'roll_dice', 
        'description': 'Roll dice using DSA notation (e.g., 1W6+3, 3W20)',
        'parameters': {
            'dice_formula': {'type': 'string', 'description': 'Dice formula in DSA notation'}
        }
    },
    {
        'name': 'perform_skill_check',
        'description': 'Perform a skill check for a character using DSA rules',
        'parameters': {
            'character_id': {'type': 'integer', 'description': 'ID of the character'},
            'skill_name': {'type': 'string', 'description': 'Name of the skill to check'},
            'modifier': {'type': 'integer', 'description': 'Difficulty modifier', 'default': 0}
        }
    },
    {
        'name': 'get_adventure_summary',
        'description': 'Get a comprehensive summary of an adventure with all NPCs, fights, and status',
        'parameters': {
            'adventure_id': {'type': 'integer', 'description': 'ID of the adventure'}
        }
    }
]

# Server configuration
SERVER_CONFIG = {
    'name': 'dsa-tabletop-server',
    'version': '1.0.0',
    'description': 'MCP Server for DSA (Das Schwarze Auge) Tabletop RPG Management',
    'host': '127.0.0.1',
    'port': 8000
}