/**
 * Adventure Detail Page
 *
 * Displays comprehensive adventure information including participants, fights, images, and locations
 */

import { redirect, notFound } from 'next/navigation';
import Link from 'next/link';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default async function AdventureDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const session = await auth();

  if (!session) {
    redirect('/auth/signin');
  }

  const { id } = await params;
  const adventureId = parseInt(id);

  if (isNaN(adventureId)) {
    notFound();
  }

  const adventure = await prisma.dsa_starter_adventure.findUnique({
    where: {
      id: adventureId,
    },
    include: {
      dsa_starter_adventurecharacter: {
        include: {
          dsa_starter_character: {
            select: {
              id: true,
              name: true,
              avatar_small: true,
              life: true,
              life_lost: true,
              magic_energy: true,
              magic_energy_lost: true,
              dsa_starter_race: {
                select: {
                  name: true,
                },
              },
              dsa_starter_herotype: {
                select: {
                  name: true,
                },
              },
            },
          },
          dsa_starter_nonplayercharacter: {
            select: {
              id: true,
              name: true,
              avatar_small: true,
              life: true,
              magic_energy: true,
              attack: true,
              parade: true,
              ruestung: true,
              dsa_starter_race: {
                select: {
                  name: true,
                },
              },
            },
          },
        },
        orderBy: {
          sequenceInAdventure: 'asc',
        },
      },
      dsa_starter_fight: {
        include: {
          dsa_starter_fightparticipation: {
            include: {
              dsa_starter_character: {
                select: {
                  id: true,
                  name: true,
                  avatar_small: true,
                },
              },
              dsa_starter_nonplayercharacter: {
                select: {
                  id: true,
                  name: true,
                  avatar_small: true,
                },
              },
            },
            orderBy: {
              calculatedInitiative: 'desc',
            },
          },
        },
      },
      dsa_starter_adventureimage: {
        orderBy: {
          sequenceInAdventure: 'asc',
        },
      },
      dsa_starter_adventurelocation: {
        orderBy: {
          name: 'asc',
        },
      },
    },
  });

  if (!adventure) {
    notFound();
  }

  const activeCharacters = adventure.dsa_starter_adventurecharacter.filter(
    (ac) => ac.isActive
  );
  const heroes = activeCharacters.filter((ac) => ac.character_id !== null);
  const npcs = activeCharacters.filter((ac) => ac.npc_id !== null);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/admin/adventures">
              <Button variant="ghost">← Back to Adventures</Button>
            </Link>
            <h1 className="text-2xl font-bold">{adventure.name}</h1>
            {adventure.isActive ? (
              <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                Active
              </span>
            ) : (
              <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800">
                Inactive
              </span>
            )}
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              {session.user.username}
            </span>
            <form action="/api/auth/signout" method="POST">
              <Button variant="outline" type="submit">
                Sign Out
              </Button>
            </form>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-3">
          {/* Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Total Participants:</span>
                <span className="text-sm font-medium">
                  {activeCharacters.length}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Heroes:</span>
                <span className="text-sm font-medium">{heroes.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">NPCs:</span>
                <span className="text-sm font-medium">{npcs.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Fights:</span>
                <span className="text-sm font-medium">
                  {adventure.dsa_starter_fight.length}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Locations:</span>
                <span className="text-sm font-medium">
                  {adventure.dsa_starter_adventurelocation.length}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Images:</span>
                <span className="text-sm font-medium">
                  {adventure.dsa_starter_adventureimage.length}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Hero Participants */}
        {heroes.length > 0 && (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Hero Participants ({heroes.length})</CardTitle>
              <CardDescription>
                Player characters in this adventure
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Sequence</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Race</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Life</TableHead>
                    <TableHead>Magic</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {heroes.map((participant) => {
                    const char = participant.dsa_starter_character!;
                    const currentLife = char.life - char.life_lost;
                    const currentMagic = char.magic_energy - char.magic_energy_lost;

                    return (
                      <TableRow key={participant.id}>
                        <TableCell>{participant.sequenceInAdventure}</TableCell>
                        <TableCell className="font-medium">
                          <Link
                            href={`/admin/characters/${char.id}`}
                            className="hover:underline"
                          >
                            {char.name}
                          </Link>
                        </TableCell>
                        <TableCell>{char.dsa_starter_race.name}</TableCell>
                        <TableCell>{char.dsa_starter_herotype.name}</TableCell>
                        <TableCell>
                          <span
                            className={
                              currentLife < char.life * 0.5
                                ? 'text-red-600 font-semibold'
                                : ''
                            }
                          >
                            {currentLife}/{char.life}
                          </span>
                        </TableCell>
                        <TableCell>
                          {currentMagic}/{char.magic_energy}
                        </TableCell>
                        <TableCell>
                          {participant.isActive ? (
                            <span className="text-green-600">Active</span>
                          ) : (
                            <span className="text-gray-500">Inactive</span>
                          )}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )}

        {/* NPC Participants */}
        {npcs.length > 0 && (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>NPC Participants ({npcs.length})</CardTitle>
              <CardDescription>
                Non-player characters in this adventure
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Sequence</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Race</TableHead>
                    <TableHead>Life</TableHead>
                    <TableHead>Attack</TableHead>
                    <TableHead>Parade</TableHead>
                    <TableHead>Armor</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {npcs.map((participant) => {
                    const npc = participant.dsa_starter_nonplayercharacter!;

                    return (
                      <TableRow key={participant.id}>
                        <TableCell>{participant.sequenceInAdventure}</TableCell>
                        <TableCell className="font-medium">{npc.name}</TableCell>
                        <TableCell>{npc.dsa_starter_race.name}</TableCell>
                        <TableCell>{npc.life}</TableCell>
                        <TableCell>{npc.attack}</TableCell>
                        <TableCell>{npc.parade}</TableCell>
                        <TableCell>{npc.ruestung}</TableCell>
                        <TableCell>
                          {participant.isActive ? (
                            <span className="text-green-600">Active</span>
                          ) : (
                            <span className="text-gray-500">Inactive</span>
                          )}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )}

        {/* Fights */}
        {adventure.dsa_starter_fight.length > 0 && (
          <div className="mt-6 space-y-4">
            <h2 className="text-xl font-bold">
              Fights ({adventure.dsa_starter_fight.length})
            </h2>
            {adventure.dsa_starter_fight.map((fight) => (
              <Card key={fight.id}>
                <CardHeader>
                  <CardTitle>{fight.name}</CardTitle>
                  <CardDescription>
                    {fight.dsa_starter_fightparticipation.length} participants
                    {fight.nextUp > 0 && ` • Next up: #${fight.nextUp}`}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Initiative</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Side</TableHead>
                        <TableHead>Position</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {fight.dsa_starter_fightparticipation.map((participant) => {
                        const name =
                          participant.dsa_starter_character?.name ||
                          participant.dsa_starter_nonplayercharacter?.name ||
                          'Unknown';
                        return (
                          <TableRow key={participant.id}>
                            <TableCell className="font-bold">
                              {participant.calculatedInitiative}
                            </TableCell>
                            <TableCell>{name}</TableCell>
                            <TableCell>
                              {participant.isGood ? (
                                <span className="text-green-600">Heroes</span>
                              ) : (
                                <span className="text-red-600">Enemies</span>
                              )}
                            </TableCell>
                            <TableCell className="text-muted-foreground">
                              {participant.position}
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Locations */}
        {adventure.dsa_starter_adventurelocation.length > 0 && (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>
                Locations ({adventure.dsa_starter_adventurelocation.length})
              </CardTitle>
              <CardDescription>
                Places and areas in this adventure
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                {adventure.dsa_starter_adventurelocation.map((location) => (
                  <div
                    key={location.id}
                    className="rounded-lg border p-4 space-y-2"
                  >
                    <h3 className="font-medium">{location.name}</h3>
                    {location.image && (
                      <p className="text-xs text-muted-foreground">
                        Has image
                      </p>
                    )}
                    <p className="text-xs text-muted-foreground">
                      {location.isActive ? 'Active' : 'Inactive'}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Images */}
        {adventure.dsa_starter_adventureimage.length > 0 && (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>
                Images ({adventure.dsa_starter_adventureimage.length})
              </CardTitle>
              <CardDescription>
                Visual content for this adventure
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {adventure.dsa_starter_adventureimage.map((image) => (
                  <div
                    key={image.id}
                    className="flex items-center justify-between rounded-lg border p-4"
                  >
                    <div>
                      <p className="font-medium">{image.caption}</p>
                      <p className="text-xs text-muted-foreground">
                        Sequence: {image.sequenceInAdventure}
                        {image.image && ' • Has image'}
                      </p>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {image.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
}
