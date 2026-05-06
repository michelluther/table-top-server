/**
 * Adventures API Route
 *
 * GET /api/adventures - Returns list of all adventures
 */

import { NextRequest, NextResponse } from 'next/server';
import { withAuth } from '@/lib/auth-middleware';
import { prisma } from '@/lib/prisma';

/**
 * Get all adventures
 *
 * Requires authentication.
 * Returns a list of all adventures
 */
export const GET = withAuth(async (request: NextRequest) => {
  try {
    const adventures = await prisma.dsa_starter_adventure.findMany({
      include: {
        dsa_starter_adventureimage: {
          where: { isActive: true },
          orderBy: { sequenceInAdventure: 'asc' },
        },
        dsa_starter_adventurecharacter: {
          where: { isActive: true },
          include: {
            dsa_starter_character: true,
            dsa_starter_nonplayercharacter: true,
          },
          orderBy: { sequenceInAdventure: 'asc' },
        },
      },
      orderBy: {
        name: 'asc',
      },
    });

    // Shape relations into what the Angular Adventure.setData expects:
    //   images:     [{ url, caption, sequence }]
    //   characters: [{ name, imageUrl, sequence }]
    // Image filenames are bare; serve them under /avatars/ (where my_fav_path/
    // was copied during the migration). buildImageLink on the frontend prepends
    // baseUrl to whatever we put here.
    const response = adventures.map((adv) => ({
      id: adv.id,
      name: adv.name,
      isActive: adv.isActive,
      images: adv.dsa_starter_adventureimage.map((img) => ({
        url: img.image ? `/avatars/${img.image}` : null,
        caption: img.caption,
        sequence: img.sequenceInAdventure,
      })),
      characters: adv.dsa_starter_adventurecharacter.map((ac) => {
        const subject = ac.dsa_starter_character ?? ac.dsa_starter_nonplayercharacter;
        return {
          name: subject?.name ?? '',
          imageUrl: subject?.avatar_small ? `/avatars/${subject.avatar_small}` : null,
          sequence: ac.sequenceInAdventure,
        };
      }),
    }));

    return NextResponse.json({
      adventures: response,
      count: response.length,
    });
  } catch (error) {
    console.error('[API] Error fetching adventures:', error);
    return NextResponse.json(
      { error: 'Failed to fetch adventures' },
      { status: 500 }
    );
  }
});
