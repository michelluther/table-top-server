/**
 * Adventure Images API Route
 *
 * GET  /api/adventures/[id]/images - List all images for an adventure (active + inactive)
 * POST /api/adventures/[id]/images - Upload a new adventure image (e.g. a map)
 */

import { NextRequest, NextResponse } from 'next/server';
import { withAuth } from '@/lib/auth-middleware';
import { prisma } from '@/lib/prisma';
import sharp from 'sharp';
import { writeFile } from 'fs/promises';
import { join } from 'path';

const IMAGE_DIR = join(process.cwd(), 'public', 'avatars');
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ALLOWED_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
const MAX_DIMENSION = 1920;

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
 * List all images for an adventure, including inactive ones not yet shown to heroes.
 *
 * Requires authentication.
 */
export const GET = withAuth(
  async (request: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const adventureId = parseInt(id);

    if (isNaN(adventureId)) {
      return NextResponse.json({ error: 'Invalid adventure ID' }, { status: 400 });
    }

    const images = await prisma.dsa_starter_adventureimage.findMany({
      where: { adventure_id: adventureId },
      orderBy: { sequenceInAdventure: 'asc' },
    });

    return NextResponse.json({ images: images.map(toResponseImage) });
  }
);

/**
 * Upload a new adventure image.
 *
 * Requires authentication.
 * Accepts multipart/form-data with an 'image' file field, an optional 'caption'
 * field and an optional 'sequence' field (position in the adventure timeline;
 * defaults to appending after the current highest sequence).
 * New images start inactive (isActive: false) until the master explicitly shows them to heroes.
 */
export const POST = withAuth(
  async (request: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
    try {
      const { id } = await params;
      const adventureId = parseInt(id);

      if (isNaN(adventureId)) {
        return NextResponse.json({ error: 'Invalid adventure ID' }, { status: 400 });
      }

      const adventure = await prisma.dsa_starter_adventure.findUnique({
        where: { id: adventureId },
      });

      if (!adventure) {
        return NextResponse.json({ error: 'Adventure not found' }, { status: 404 });
      }

      const formData = await request.formData();
      const file = formData.get('image') as File | null;
      const caption = (formData.get('caption') as string | null) ?? '';
      const requestedSequenceRaw = formData.get('sequence') as string | null;
      const requestedSequence =
        requestedSequenceRaw !== null && requestedSequenceRaw !== '' ? parseInt(requestedSequenceRaw) : null;

      if (!file) {
        return NextResponse.json({ error: 'No file provided' }, { status: 400 });
      }

      if (!ALLOWED_TYPES.includes(file.type)) {
        return NextResponse.json(
          { error: 'Invalid file type. Allowed: JPEG, PNG, WebP' },
          { status: 400 }
        );
      }

      if (file.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          { error: 'File too large. Maximum size: 10MB' },
          { status: 400 }
        );
      }

      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const timestamp = Date.now();
      const ext = file.name.split('.').pop() || 'jpg';
      const filename = `adventure-${adventureId}-${timestamp}.${ext}`;

      const processedImage = await sharp(buffer)
        .resize(MAX_DIMENSION, MAX_DIMENSION, {
          fit: 'inside',
          withoutEnlargement: true,
        })
        .toBuffer();

      await writeFile(join(IMAGE_DIR, filename), processedImage);

      let sequenceInAdventure = requestedSequence;
      if (sequenceInAdventure === null || isNaN(sequenceInAdventure)) {
        const maxSequence = await prisma.dsa_starter_adventureimage.aggregate({
          where: { adventure_id: adventureId },
          _max: { sequenceInAdventure: true },
        });
        sequenceInAdventure = (maxSequence._max.sequenceInAdventure ?? 0) + 1;
      }

      const created = await prisma.dsa_starter_adventureimage.create({
        data: {
          caption,
          image: filename,
          adventure_id: adventureId,
          sequenceInAdventure,
          isActive: false,
        },
      });

      return NextResponse.json({ image: toResponseImage(created) }, { status: 201 });
    } catch (error) {
      console.error('[API] Error uploading adventure image:', error);
      return NextResponse.json({ error: 'Failed to upload image' }, { status: 500 });
    }
  }
);
