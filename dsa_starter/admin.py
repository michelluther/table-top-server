# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin
from .models import Character
from .models import Race
from .models import HeroType
from .models import Skill
from .models import SkillType
from .models import SkillGroup
from .models import ActualSkill

admin.site.register(Character)
admin.site.register(Race)
admin.site.register(HeroType)
admin.site.register(Skill)
admin.site.register(SkillGroup)
admin.site.register(SkillType)
admin.site.register(ActualSkill)

# Register your models here.
