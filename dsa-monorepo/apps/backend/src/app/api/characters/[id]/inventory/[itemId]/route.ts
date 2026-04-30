/**
 * Inventory Item Detail API Route
 *
 * PATCH /api/characters/[id]/inventory/[itemId] - Updates an inventory item
 * DELETE /api/characters/[id]/inventory/[itemId] - Deletes an inventory item
 */

import { NextRequest, NextResponse } from 'next/server';
import { withAuth } from '@/lib/auth-middleware';
import { prisma } from '@/lib/prisma';

/**
 * Update inventory item
 *
 * Requires authentication.
 * Updates inventory item properties.
 */
export const PATCH = withAuth(
  async (
    request: NextRequest,
    { params }: { params: Promise<{ id: string; itemId: string }> }
  ) => {
    try {
      const { id, itemId } = await params;
      const characterId = parseInt(id);
      const inventoryItemId = parseInt(itemId);

      if (isNaN(characterId) || isNaN(inventoryItemId)) {
        return NextResponse.json(
          { error: 'Invalid character ID or item ID' },
          { status: 400 }
        );
      }

      const body = await request.json();
      const { name, amount, unit, weight } = body;

      // Check if item exists and belongs to this character
      const existingItem = await prisma.dsa_starter_inventoryitem.findFirst({
        where: {
          id: inventoryItemId,
          character_id: characterId,
        },
      });

      if (!existingItem) {
        return NextResponse.json(
          { error: 'Inventory item not found for this character' },
          { status: 404 }
        );
      }

      // Build update data
      const updateData: any = {};
      if (name !== undefined && typeof name === 'string') {
        updateData.name = name;
      }
      if (amount !== undefined && typeof amount === 'number' && amount >= 1) {
        updateData.amount = amount;
      }
      if (unit !== undefined && typeof unit === 'string') {
        updateData.unit = unit;
      }
      if (weight !== undefined && typeof weight === 'number' && weight >= 0) {
        updateData.weight = weight;
      }

      if (Object.keys(updateData).length === 0) {
        return NextResponse.json(
          { error: 'No valid fields to update' },
          { status: 400 }
        );
      }

      const updatedItem = await prisma.dsa_starter_inventoryitem.update({
        where: { id: inventoryItemId },
        data: updateData,
      });

      return NextResponse.json({ item: updatedItem });
    } catch (error) {
      console.error('[API] Error updating inventory item:', error);
      return NextResponse.json(
        { error: 'Failed to update inventory item' },
        { status: 500 }
      );
    }
  }
);

/**
 * Delete inventory item
 *
 * Requires authentication.
 * Removes an item from character's inventory.
 */
export const DELETE = withAuth(
  async (
    request: NextRequest,
    { params }: { params: Promise<{ id: string; itemId: string }> }
  ) => {
    try {
      const { id, itemId } = await params;
      const characterId = parseInt(id);
      const inventoryItemId = parseInt(itemId);

      if (isNaN(characterId) || isNaN(inventoryItemId)) {
        return NextResponse.json(
          { error: 'Invalid character ID or item ID' },
          { status: 400 }
        );
      }

      // Check if item exists and belongs to this character
      const existingItem = await prisma.dsa_starter_inventoryitem.findFirst({
        where: {
          id: inventoryItemId,
          character_id: characterId,
        },
      });

      if (!existingItem) {
        return NextResponse.json(
          { error: 'Inventory item not found for this character' },
          { status: 404 }
        );
      }

      await prisma.dsa_starter_inventoryitem.delete({
        where: { id: inventoryItemId },
      });

      return NextResponse.json({ message: 'Inventory item deleted successfully' });
    } catch (error) {
      console.error('[API] Error deleting inventory item:', error);
      return NextResponse.json(
        { error: 'Failed to delete inventory item' },
        { status: 500 }
      );
    }
  }
);
