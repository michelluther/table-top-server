/**
 * Character Armor API Route
 *
 * POST /api/characters/[id]/armor - Assigns armor to character
 */

import { NextRequest, NextResponse } from 'next/server';
import { withAuth } from '@/lib/auth-middleware';
import { prisma } from '@/lib/prisma';

/**
 * Assign armor to character
 *
 * Requires authentication.
 * Creates armor assignment for the character.
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
      const { armor_id } = body;

      if (!armor_id || typeof armor_id !== 'number') {
        return NextResponse.json(
          { error: 'armor_id is required and must be a number' },
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

      // Verify armor exists
      const armor = await prisma.dsa_starter_armor.findUnique({
        where: { id: armor_id },
      });

      if (!armor) {
        return NextResponse.json(
          { error: 'Armor not found' },
          { status: 404 }
        );
      }

      // Check if character already has this armor
      const existing = await prisma.dsa_starter_characterhasarmor.findFirst({
        where: {
          character_id: characterId,
          armor_id: armor_id,
        },
      });

      if (existing) {
        return NextResponse.json(
          { error: 'Character already has this armor' },
          { status: 400 }
        );
      }

      // Create armor assignment
      const assignment = await prisma.dsa_starter_characterhasarmor.create({
        data: {
          character_id: characterId,
          armor_id: armor_id,
        },
        include: {
          dsa_starter_armor: true,
        },
      });

      return NextResponse.json({ assignment }, { status: 201 });
    } catch (error) {
      console.error('[API] Error assigning armor:', error);
      return NextResponse.json(
        { error: 'Failed to assign armor' },
        { status: 500 }
      );
    }
  }
);
