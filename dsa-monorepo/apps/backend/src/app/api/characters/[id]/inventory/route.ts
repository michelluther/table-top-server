/**
 * Character Inventory API Route
 *
 * GET /api/characters/[id]/inventory - Returns character's inventory items
 * POST /api/characters/[id]/inventory - Adds item to character's inventory
 */

import { NextRequest, NextResponse } from 'next/server';
import { withAuth } from '@/lib/auth-middleware';
import { prisma } from '@/lib/prisma';

/**
 * Get character's inventory
 *
 * Requires authentication.
 * Returns all inventory items for a character.
 */
export const GET = withAuth(
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

      const items = await prisma.dsa_starter_inventoryitem.findMany({
        where: {
          character_id: characterId,
        },
        orderBy: {
          name: 'asc',
        },
      });

      return NextResponse.json({ items });
    } catch (error) {
      console.error('[API] Error fetching inventory:', error);
      return NextResponse.json(
        { error: 'Failed to fetch inventory' },
        { status: 500 }
      );
    }
  }
);

/**
 * Add item to character's inventory
 *
 * Requires authentication.
 * Creates a new inventory item for the character.
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
      const { name, amount, unit, weight } = body;

      // Validate required fields
      if (!name || typeof name !== 'string') {
        return NextResponse.json(
          { error: 'Item name is required' },
          { status: 400 }
        );
      }

      if (typeof amount !== 'number' || amount < 1) {
        return NextResponse.json(
          { error: 'Amount must be a positive number' },
          { status: 400 }
        );
      }

      if (!unit || typeof unit !== 'string') {
        return NextResponse.json(
          { error: 'Unit is required' },
          { status: 400 }
        );
      }

      if (typeof weight !== 'number' || weight < 0) {
        return NextResponse.json(
          { error: 'Weight must be a non-negative number' },
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

      // Create inventory item
      const item = await prisma.dsa_starter_inventoryitem.create({
        data: {
          character_id: characterId,
          name,
          amount,
          unit,
          weight,
        },
      });

      return NextResponse.json({ item }, { status: 201 });
    } catch (error) {
      console.error('[API] Error adding inventory item:', error);
      return NextResponse.json(
        { error: 'Failed to add inventory item' },
        { status: 500 }
      );
    }
  }
);
