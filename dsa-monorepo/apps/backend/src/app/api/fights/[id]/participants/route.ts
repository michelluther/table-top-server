/**
 * Fight Participants API Route
 *
 * POST /api/fights/[id]/participants - Add participant to fight
 */

import { NextRequest, NextResponse } from 'next/server';
import { withAuth } from '@/lib/auth-middleware';
import { prisma } from '@/lib/prisma';

/**
 * Add participant to fight
 *
 * Requires authentication.
 * Adds a character or NPC to the fight with initiative and position.
 */
export const POST = withAuth(
  async (request: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
    try {
      const { id } = await params;
      const fightId = parseInt(id);

      if (isNaN(fightId)) {
        return NextResponse.json(
          { error: 'Invalid fight ID' },
          { status: 400 }
        );
      }

      const body = await request.json();
      const {
        character_id,
        npc_id,
        calculatedInitiative,
        isGood,
        position,
      } = body;

      // Validate that either character_id or npc_id is provided, but not both
      if ((!character_id && !npc_id) || (character_id && npc_id)) {
        return NextResponse.json(
          { error: 'Must provide either character_id or npc_id, but not both' },
          { status: 400 }
        );
      }

      if (typeof calculatedInitiative !== 'number') {
        return NextResponse.json(
          { error: 'calculatedInitiative must be a number' },
          { status: 400 }
        );
      }

      if (typeof isGood !== 'boolean') {
        return NextResponse.json(
          { error: 'isGood must be a boolean' },
          { status: 400 }
        );
      }

      if (!position || typeof position !== 'string') {
        return NextResponse.json(
          { error: 'position is required and must be a string' },
          { status: 400 }
        );
      }

      // Verify fight exists
      const fight = await prisma.dsa_starter_fight.findUnique({
        where: { id: fightId },
      });

      if (!fight) {
        return NextResponse.json(
          { error: 'Fight not found' },
          { status: 404 }
        );
      }

      // If character_id provided, verify character exists
      if (character_id) {
        const character = await prisma.dsa_starter_character.findUnique({
          where: { id: character_id },
        });
        if (!character) {
          return NextResponse.json(
            { error: 'Character not found' },
            { status: 404 }
          );
        }
      }

      // If npc_id provided, verify NPC exists
      if (npc_id) {
        const npc = await prisma.dsa_starter_nonplayercharacter.findUnique({
          where: { id: npc_id },
        });
        if (!npc) {
          return NextResponse.json(
            { error: 'NPC not found' },
            { status: 404 }
          );
        }
      }

      // Create participant
      const participant = await prisma.dsa_starter_fightparticipation.create({
        data: {
          fight_id: fightId,
          character_id: character_id || null,
          npc_id: npc_id || null,
          calculatedInitiative,
          isGood,
          position,
        },
        include: {
          dsa_starter_character: {
            select: {
              id: true,
              name: true,
              life: true,
              life_lost: true,
            },
          },
          dsa_starter_nonplayercharacter: {
            select: {
              id: true,
              name: true,
              life: true,
            },
          },
        },
      });

      return NextResponse.json({ participant }, { status: 201 });
    } catch (error) {
      console.error('[API] Error adding participant to fight:', error);
      return NextResponse.json(
        { error: 'Failed to add participant' },
        { status: 500 }
      );
    }
  }
);
