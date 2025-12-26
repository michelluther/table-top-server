# DSA MCP Server

This is a Model Context Protocol (MCP) server that exposes your DSA (Das Schwarze Auge / The Dark Eye) tabletop RPG management system as tools for AI agents.

## Installation

The Django MCP server library has already been installed. The required dependencies are:
- `django-mcp-server>=0.5.7`
- `django>=4.0`
- `djangorestframework>=3.15.0`

## Available MCP Tools

### Character Management
- **list_characters** - List all player characters in the campaign
- **get_character** - Get detailed character information including stats and equipment  
- **create_character** - Create new player character with attributes
- **update_character** - Modify character stats, equipment, experience, health

### Adventure Management
- **list_adventures** - List all available adventures and campaigns
- **get_adventure** - Get detailed adventure information with NPCs and encounters
- **create_adventure** - Create new adventure or campaign

### Combat Management  
- **list_fights** - List combat encounters, optionally filtered by adventure
- **create_fight** - Create new combat encounter within an adventure
- **add_fight_participant** - Add characters/NPCs to combat with position and initiative

### Game Rules & Reference
- **list_skills** - List available skills with requirements and dice rolls
- **list_spells** - List spells and magic abilities with casting requirements
- **list_skill_types** - List skill categories for character development
- **list_spell_types** - List magic schools and spell categories
- **list_races** - List character races (Human, Elf, Dwarf, etc.)
- **list_hero_types** - List character classes/professions (Warrior, Mage, etc.)

### NPC Management
- **list_npc_types** - List NPC templates with combat stats and equipment
- **list_npcs** - List all non-player characters
- **create_npc** - Create new NPC from template or custom attributes

### Custom DSA Tools
- **generate_fantasy_names** - Generate fantasy names for NPCs by race and gender
- **roll_dice** - Roll dice using DSA notation (e.g., '1W6+3', '3W20')
- **perform_skill_check** - Perform skill checks using DSA rules with 3W20 rolls

## Usage

### Starting the Server

```bash
# Option 1: Use the startup script
./start_mcp_server.sh

# Option 2: Manual startup
source ./dsavenv_313/bin/activate
python mcp_server.py
```

### Connecting AI Agents

The server exposes tools that AI agents can use to:

1. **Manage Characters**: Create, read, update player characters with all DSA stats
2. **Run Adventures**: Create and manage adventure campaigns with NPCs
3. **Handle Combat**: Set up fights, manage initiative, track participants  
4. **Apply Game Rules**: Roll dice, perform skill checks, reference spells/skills
5. **Generate Content**: Create NPCs with generated names and stats

### Example Tool Usage

```json
{
  "tool": "create_character",
  "arguments": {
    "name": "Thorin Eisenbart",
    "race": 3,
    "type": 1,
    "MU": 14,
    "KL": 12,
    "IN": 13,
    "CH": 10,
    "FF": 11,
    "GE": 15,
    "KO": 16,
    "KK": 17
  }
}
```

```json
{
  "tool": "perform_skill_check", 
  "arguments": {
    "character_id": 1,
    "skill_name": "Schwimmen",
    "modifier": -2
  }
}
```

```json
{
  "tool": "roll_dice",
  "arguments": {
    "dice_formula": "1W6+4"
  }
}
```

## Configuration

Edit `mcp_config.py` to customize:
- Which models are exposed as tools
- Available operations (CRUD vs read-only)
- Custom tool definitions
- Server settings

## Development

### Adding New Tools

To add custom tools, modify `mcp_server.py`:

```python
@server.tool("custom_tool_name")
async def custom_tool(param1: str, param2: int) -> dict:
    """Tool description."""
    # Implementation
    return {"result": "success"}
```

### Django Integration

The server uses your existing Django models and database. Make sure:
- Django settings are properly configured
- Database migrations are up to date
- Required models are accessible

## Troubleshooting

### Common Issues

1. **Django Configuration Error**
   ```bash
   python manage.py check
   ```

2. **Database Issues**
   ```bash
   python manage.py migrate
   ```

3. **Import Errors**
   - Ensure virtual environment is activated
   - Check DJANGO_SETTINGS_MODULE is set correctly

### Logs

The MCP server provides detailed logging. Check console output for:
- Tool registration confirmations
- Error messages
- Request/response details

## DSA Rule System Integration

This MCP server implements core DSA mechanics:

- **Attributes (Eigenschaften)**: MU, KL, IN, CH, FF, GE, KO, KK
- **Skill Checks**: 3W20 rolls against attribute values
- **Combat**: Initiative, attack/parade, damage calculations
- **Magic**: Spell casting with complexity and energy costs
- **Character Development**: Experience points and skill advancement

The tools respect DSA rules while providing flexibility for house rules and custom campaigns.