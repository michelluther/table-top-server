/**
 * Characters Management Page
 *
 * Admin page for viewing and managing all hero characters
 */

import { redirect } from 'next/navigation';
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

export default async function CharactersPage() {
  const session = await auth();

  if (!session) {
    redirect('/auth/signin');
  }

  // Fetch characters server-side
  const characters = await prisma.dsa_starter_character.findMany({
    where: {
      isHero: true,
    },
    select: {
      id: true,
      name: true,
      created_date: true,
      experience: true,
      life: true,
      life_lost: true,
      magic_energy: true,
      magic_energy_lost: true,
      avatar_small: true,
      gender: true,
      dsa_starter_race: {
        select: {
          name: true,
        },
      },
      dsa_starter_herotype: {
        select: {
          name: true,
          knowsMagic: true,
        },
      },
    },
    orderBy: {
      name: 'asc',
    },
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/admin">
              <Button variant="ghost">← Back to Dashboard</Button>
            </Link>
            <h1 className="text-2xl font-bold">Character Management</h1>
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
        <Card>
          <CardHeader>
            <CardTitle>All Characters ({characters.length})</CardTitle>
            <CardDescription>
              Hero characters in your DSA campaign
            </CardDescription>
          </CardHeader>
          <CardContent>
            {characters.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                No characters found
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Race</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Experience</TableHead>
                    <TableHead>Life</TableHead>
                    <TableHead>Magic Energy</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {characters.map((character) => {
                    const currentLife = character.life - character.life_lost;
                    const currentMagic =
                      character.magic_energy - character.magic_energy_lost;

                    return (
                      <TableRow key={character.id}>
                        <TableCell className="font-medium">
                          {character.name}
                        </TableCell>
                        <TableCell>{character.dsa_starter_race.name}</TableCell>
                        <TableCell>
                          {character.dsa_starter_herotype.name}
                          {character.dsa_starter_herotype.knowsMagic && ' ✨'}
                        </TableCell>
                        <TableCell>{character.experience}</TableCell>
                        <TableCell>
                          <span
                            className={
                              currentLife < character.life * 0.5
                                ? 'text-red-600 font-semibold'
                                : ''
                            }
                          >
                            {currentLife}/{character.life}
                          </span>
                        </TableCell>
                        <TableCell>
                          {character.dsa_starter_herotype.knowsMagic ? (
                            <span>
                              {currentMagic}/{character.magic_energy}
                            </span>
                          ) : (
                            <span className="text-muted-foreground">-</span>
                          )}
                        </TableCell>
                        <TableCell>
                          {new Date(character.created_date).toLocaleDateString()}
                        </TableCell>
                        <TableCell>
                          <Link href={`/admin/characters/${character.id}`}>
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                          </Link>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
