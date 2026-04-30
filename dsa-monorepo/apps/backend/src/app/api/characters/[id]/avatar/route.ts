/**
 * Character Avatar Upload API Route
 *
 * POST /api/characters/[id]/avatar - Upload character avatar image
 * DELETE /api/characters/[id]/avatar - Remove character avatar
 */

import { NextRequest, NextResponse } from 'next/server';
import { withAuth } from '@/lib/auth-middleware';
import { prisma } from '@/lib/prisma';
import sharp from 'sharp';
import { writeFile, unlink } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

const AVATAR_DIR = join(process.cwd(), 'public', 'avatars');
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
const THUMBNAIL_SIZE = 150;

/**
 * Upload character avatar
 *
 * Requires authentication.
 * Accepts multipart/form-data with 'avatar' field.
 * Creates both full-size and thumbnail versions.
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

      // Get the form data
      const formData = await request.formData();
      const file = formData.get('avatar') as File | null;

      if (!file) {
        return NextResponse.json(
          { error: 'No file provided' },
          { status: 400 }
        );
      }

      // Validate file type
      if (!ALLOWED_TYPES.includes(file.type)) {
        return NextResponse.json(
          { error: 'Invalid file type. Allowed: JPEG, PNG, WebP' },
          { status: 400 }
        );
      }

      // Validate file size
      if (file.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          { error: 'File too large. Maximum size: 5MB' },
          { status: 400 }
        );
      }

      // Convert file to buffer
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      // Generate unique filename
      const timestamp = Date.now();
      const ext = file.name.split('.').pop() || 'jpg';
      const filename = `character-${characterId}-${timestamp}.${ext}`;
      const thumbnailFilename = `character-${characterId}-${timestamp}-thumb.${ext}`;

      // Process and save full-size image
      const processedImage = await sharp(buffer)
        .resize(800, 800, {
          fit: 'inside',
          withoutEnlargement: true,
        })
        .toBuffer();

      await writeFile(join(AVATAR_DIR, filename), processedImage);

      // Create and save thumbnail
      const thumbnail = await sharp(buffer)
        .resize(THUMBNAIL_SIZE, THUMBNAIL_SIZE, {
          fit: 'cover',
        })
        .toBuffer();

      await writeFile(join(AVATAR_DIR, thumbnailFilename), thumbnail);

      // Delete old avatars if they exist
      if (character.avatar) {
        const oldPath = join(process.cwd(), 'public', character.avatar);
        if (existsSync(oldPath)) {
          await unlink(oldPath).catch(() => {});
        }
      }
      if (character.avatar_small) {
        const oldThumbPath = join(process.cwd(), 'public', character.avatar_small);
        if (existsSync(oldThumbPath)) {
          await unlink(oldThumbPath).catch(() => {});
        }
      }

      // Update character with new avatar paths
      const avatarPath = `/avatars/${filename}`;
      const avatarSmallPath = `/avatars/${thumbnailFilename}`;

      const updatedCharacter = await prisma.dsa_starter_character.update({
        where: { id: characterId },
        data: {
          avatar: avatarPath,
          avatar_small: avatarSmallPath,
        },
        select: {
          id: true,
          name: true,
          avatar: true,
          avatar_small: true,
        },
      });

      return NextResponse.json({
        character: updatedCharacter,
        message: 'Avatar uploaded successfully',
      });
    } catch (error) {
      console.error('[API] Error uploading avatar:', error);
      return NextResponse.json(
        { error: 'Failed to upload avatar' },
        { status: 500 }
      );
    }
  }
);

/**
 * Remove character avatar
 *
 * Requires authentication.
 * Deletes avatar files and removes paths from database.
 */
export const DELETE = withAuth(
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

      // Get character with avatar info
      const character = await prisma.dsa_starter_character.findUnique({
        where: { id: characterId },
        select: {
          id: true,
          avatar: true,
          avatar_small: true,
        },
      });

      if (!character) {
        return NextResponse.json(
          { error: 'Character not found' },
          { status: 404 }
        );
      }

      // Delete avatar files if they exist
      if (character.avatar) {
        const avatarPath = join(process.cwd(), 'public', character.avatar);
        if (existsSync(avatarPath)) {
          await unlink(avatarPath).catch(() => {});
        }
      }

      if (character.avatar_small) {
        const thumbPath = join(process.cwd(), 'public', character.avatar_small);
        if (existsSync(thumbPath)) {
          await unlink(thumbPath).catch(() => {});
        }
      }

      // Update character to remove avatar paths
      await prisma.dsa_starter_character.update({
        where: { id: characterId },
        data: {
          avatar: null,
          avatar_small: null,
        },
      });

      return NextResponse.json({
        message: 'Avatar removed successfully',
      });
    } catch (error) {
      console.error('[API] Error removing avatar:', error);
      return NextResponse.json(
        { error: 'Failed to remove avatar' },
        { status: 500 }
      );
    }
  }
);
