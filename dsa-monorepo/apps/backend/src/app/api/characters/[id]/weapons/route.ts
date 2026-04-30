/**
 * Character Weapons API Route
 *
 * POST /api/characters/[id]/weapons - Assigns a weapon to character
 */

import { NextRequest, NextResponse } from 'next/server';
import { withAuth } from '@/lib/auth-middleware';
import { prisma } from '@/lib/prisma';

/**
 * Assign weapon to character
 *
 * Requires authentication.
 * Creates weapon assignment for the character.
 */
export const POST = withAuth(
  async (request: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
    try {
      const { id } = await params;
      const characterId = parseInt(id);

      if (isNaN(characterId)) {
        return NextResponse.json(
          { error: 'Invalid character ID' },
          { status: 400 }
        );
      }

      const body = await request.json();
      const { weapon_id } = body;

      if (!weapon_id || typeof weapon_id !== 'number') {
        return NextResponse.json(
          { error: 'weapon_id is required and must be a number' },
          { status: 400 }
        );
      }

      // Verify character exists
      const character = await prisma.dsa_starter_character.findUnique({
        where: { id: characterId },
      });

      if (!character) {
        return NextResponse.json(
          { error: 'Character not found' },
          { status: 404 }
        );
      }

      // Verify weapon exists
      const weapon = await prisma.dsa_starter_weapon.findUnique({
        where: { id: weapon_id },
      });

      if (!weapon) {
        return NextResponse.json(
          { error: 'Weapon not found' },
          { status: 404 }
        );
      }

      // Check if character already has this weapon
      const existing = await prisma.dsa_starter_characterhasweapon.findFirst({
        where: {
          character_id: characterId,
          weapon_id: weapon_id,
        },
      });

      if (existing) {
        return NextResponse.json(
          { error: 'Character already has this weapon' },
          { status: 400 }
        );
      }

      // Create weapon assignment
      const assignment = await prisma.dsa_starter_characterhasweapon.create({
        data: {
          character_id: characterId,
          weapon_id: weapon_id,
        },
        include: {
          dsa_starter_weapon: {
            include: {
              dsa_starter_skill: true,
            },
          },
        },
      });

      return NextResponse.json({ assignment }, { status: 201 });
    } catch (error) {
      console.error('[API] Error assigning weapon:', error);
      return NextResponse.json(
        { error: 'Failed to assign weapon' },
        { status: 500 }
      );
    }
  }
);
