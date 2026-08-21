/**
 * Adventure Image Detail API Route
 *
 * PATCH  /api/adventures/[id]/images/[imageId] - Update visibility, caption and/or sequence
 * DELETE /api/adventures/[id]/images/[imageId] - Remove an adventure image
 */

import { NextRequest, NextResponse } from 'next/server';
import { withAuth } from '@/lib/auth-middleware';
import { prisma } from '@/lib/prisma';
import { unlink } from 'fs/promises';
import { existsSync } from 'fs';
import { join } from 'path';

const IMAGE_DIR = join(process.cwd(), 'public', 'avatars');

type AdventureImageRow = {
  id: number;
  image: string | null;
  caption: string;
  sequenceInAdventure: number;
  isActive: boolean;
};

function toResponseImage(img: AdventureImageRow) {
  return {
    id: img.id,
    url: img.image ? `/avatars/${img.image}` : null,
    caption: img.caption,
    sequence: img.sequenceInAdventure,
    isActive: img.isActive,
  };
}

/**
 * Update an adventure image.
 *
 * Requires authentication.
 * Accepts a partial body with `isActive` (visibility to heroes), `caption`
 * and/or `sequence` (position in the adventure timeline).
 */
export const PATCH = withAuth(
  async (
    request: NextRequest,
    { params }: { params: Promise<{ id: string; imageId: string }> }
  ) => {
    try {
      const { id, imageId } = await params;
      const adventureId = parseInt(id);
      const adventureImageId = parseInt(imageId);

      if (isNaN(adventureId) || isNaN(adventureImageId)) {
        return NextResponse.json({ error: 'Invalid adventure ID or image ID' }, { status: 400 });
      }

      const existing = await prisma.dsa_starter_adventureimage.findFirst({
        where: { id: adventureImageId, adventure_id: adventureId },
      });

      if (!existing) {
        return NextResponse.json({ error: 'Image not found for this adventure' }, { status: 404 });
      }

      const body = await request.json().catch(() => ({}));
      const isActive = typeof body.isActive === 'boolean' ? body.isActive : existing.isActive;
      const caption = typeof body.caption === 'string' ? body.caption : existing.caption;
      const sequenceInAdventure =
        typeof body.sequence === 'number' && Number.isFinite(body.sequence)
          ? body.sequence
          : existing.sequenceInAdventure;

      const updated = await prisma.dsa_starter_adventureimage.update({
        where: { id: adventureImageId },
        data: { isActive, caption, sequenceInAdventure },
      });

      return NextResponse.json({ image: toResponseImage(updated) });
    } catch (error) {
      console.error('[API] Error updating adventure image:', error);
      return NextResponse.json({ error: 'Failed to update image' }, { status: 500 });
    }
  }
);

/**
 * Delete an adventure image, including its file on disk.
 *
 * Requires authentication.
 */
export const DELETE = withAuth(
  async (
    request: NextRequest,
    { params }: { params: Promise<{ id: string; imageId: string }> }
  ) => {
    try {
      const { id, imageId } = await params;
      const adventureId = parseInt(id);
      const adventureImageId = parseInt(imageId);

      if (isNaN(adventureId) || isNaN(adventureImageId)) {
        return NextResponse.json({ error: 'Invalid adventure ID or image ID' }, { status: 400 });
      }

      const existing = await prisma.dsa_starter_adventureimage.findFirst({
        where: { id: adventureImageId, adventure_id: adventureId },
      });

      if (!existing) {
        return NextResponse.json({ error: 'Image not found for this adventure' }, { status: 404 });
      }

      if (existing.image) {
        const filePath = join(IMAGE_DIR, existing.image);
        if (existsSync(filePath)) {
          await unlink(filePath).catch(() => {});
        }
      }

      await prisma.dsa_starter_adventureimage.delete({ where: { id: adventureImageId } });

      return NextResponse.json({ message: 'Image deleted successfully' });
    } catch (error) {
      console.error('[API] Error deleting adventure image:', error);
      return NextResponse.json({ error: 'Failed to delete image' }, { status: 500 });
    }
  }
);
