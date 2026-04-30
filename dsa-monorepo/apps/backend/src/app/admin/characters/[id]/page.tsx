/**
 * Character Detail Page
 *
 * Displays comprehensive character sheet with all attributes, skills, spells, and equipment
 */

import { redirect, notFound } from 'next/navigation';
import Link from 'next/link';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
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

export default async function CharacterDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const session = await auth();

  if (!session) {
    redirect('/auth/signin');
  }

  const { id } = await params;
  const characterId = parseInt(id);

  if (isNaN(characterId)) {
    notFound();
  }

  const character = await prisma.dsa_starter_character.findUnique({
    where: {
      id: characterId,
    },
    include: {
      dsa_starter_race: true,
      dsa_starter_herotype: true,
      dsa_starter_actualskill: {
        include: {
          dsa_starter_skill: {
            include: {
              dsa_starter_skilltype: {
                include: {
                  dsa_starter_skillgroup: true,
                },
              },
            },
          },
        },
        orderBy: {
          dsa_starter_skill: {
            name: 'asc',
          },
        },
      },
      dsa_starter_actualspellskill: {
        include: {
          dsa_starter_spell: {
            include: {
              dsa_starter_spelltype: true,
            },
          },
        },
        orderBy: {
          dsa_starter_spell: {
            name: 'asc',
          },
        },
      },
      dsa_starter_weaponskilldistribution: {
        include: {
          dsa_starter_skill: true,
        },
      },
      dsa_starter_characterhasweapon: {
        include: {
          dsa_starter_weapon: {
            include: {
              dsa_starter_skill: true,
            },
          },
        },
      },
      dsa_starter_characterhasarmor: {
        include: {
          dsa_starter_armor: true,
        },
      },
      dsa_starter_inventoryitem: {
        orderBy: {
          name: 'asc',
        },
      },
    },
  });

  if (!character) {
    notFound();
  }

  const currentLife = character.life - character.life_lost;
  const currentMagic = character.magic_energy - character.magic_energy_lost;
  const lifePercentage = (currentLife / character.life) * 100;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/admin/characters">
              <Button variant="ghost">← Back to Characters</Button>
            </Link>
            <h1 className="text-2xl font-bold">{character.name}</h1>
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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Basic Info */}
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div>
                <p className="text-sm font-medium">Race</p>
                <p className="text-sm text-muted-foreground">
                  {character.dsa_starter_race.name}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium">Type</p>
                <p className="text-sm text-muted-foreground">
                  {character.dsa_starter_herotype.name}
                  {character.dsa_starter_herotype.knowsMagic && ' (Magic User)'}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium">Gender</p>
                <p className="text-sm text-muted-foreground">
                  {character.gender}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium">Culture</p>
                <p className="text-sm text-muted-foreground">
                  {character.culture}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium">Size</p>
                <p className="text-sm text-muted-foreground">
                  {character.size} cm
                </p>
              </div>
              <div>
                <p className="text-sm font-medium">Weight</p>
                <p className="text-sm text-muted-foreground">
                  {character.weight} kg
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Vitals */}
          <Card>
            <CardHeader>
              <CardTitle>Vitals</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div>
                <p className="text-sm font-medium">Life Points</p>
                <p
                  className={`text-lg font-bold ${
                    lifePercentage < 50 ? 'text-red-600' : 'text-green-600'
                  }`}
                >
                  {currentLife} / {character.life}
                </p>
              </div>
              {character.dsa_starter_herotype.knowsMagic && (
                <div>
                  <p className="text-sm font-medium">Magic Energy</p>
                  <p className="text-lg font-bold text-blue-600">
                    {currentMagic} / {character.magic_energy}
                  </p>
                </div>
              )}
              <div>
                <p className="text-sm font-medium">Armor</p>
                <p className="text-sm text-muted-foreground">
                  {character.armor}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium">Experience</p>
                <p className="text-sm text-muted-foreground">
                  {character.experience} ({character.experience_used} used)
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Attributes */}
          <Card>
            <CardHeader>
              <CardTitle>Attributes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-xs font-medium text-muted-foreground">
                    MU (Courage)
                  </p>
                  <p className="text-2xl font-bold">{character.MU}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">
                    KL (Wisdom)
                  </p>
                  <p className="text-2xl font-bold">{character.KL}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">
                    IN (Intuition)
                  </p>
                  <p className="text-2xl font-bold">{character.IN}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">
                    CH (Charisma)
                  </p>
                  <p className="text-2xl font-bold">{character.CH}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">
                    FF (Dexterity)
                  </p>
                  <p className="text-2xl font-bold">{character.FF}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">
                    GE (Agility)
                  </p>
                  <p className="text-2xl font-bold">{character.GE}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">
                    KO (Constitution)
                  </p>
                  <p className="text-2xl font-bold">{character.KO}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">
                    KK (Strength)
                  </p>
                  <p className="text-2xl font-bold">{character.KK}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Appearance */}
          <Card>
            <CardHeader>
              <CardTitle>Appearance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div>
                <p className="text-sm font-medium">Hair Color</p>
                <p className="text-sm text-muted-foreground">
                  {character.hair_color}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium">Eye Color</p>
                <p className="text-sm text-muted-foreground">
                  {character.eye_color}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium">Social Rank</p>
                <p className="text-sm text-muted-foreground">
                  {character.social_rank}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Money */}
          <Card>
            <CardHeader>
              <CardTitle>Money</CardTitle>
            </CardHeader>
            <CardContent className="space-y-1">
              <div className="flex justify-between">
                <span className="text-sm">Dukaten:</span>
                <span className="text-sm font-medium">
                  {character.money_dukaten}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Silbertaler:</span>
                <span className="text-sm font-medium">
                  {character.money_silbertaler}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Heller:</span>
                <span className="text-sm font-medium">
                  {character.money_heller}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Kreuzer:</span>
                <span className="text-sm font-medium">
                  {character.money_kreuzer}
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Created Date */}
          <Card>
            <CardHeader>
              <CardTitle>Character Info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div>
                <p className="text-sm font-medium">Created</p>
                <p className="text-sm text-muted-foreground">
                  {new Date(character.created_date).toLocaleString()}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills */}
        {character.dsa_starter_actualskill.length > 0 && (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>
                Skills ({character.dsa_starter_actualskill.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Skill Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Value</TableHead>
                    <TableHead>Dice</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {character.dsa_starter_actualskill.map((skill) => (
                    <TableRow key={skill.id}>
                      <TableCell className="font-medium">
                        {skill.dsa_starter_skill.name}
                      </TableCell>
                      <TableCell>
                        {skill.dsa_starter_skill.dsa_starter_skilltype.name}
                      </TableCell>
                      <TableCell>{skill.value}</TableCell>
                      <TableCell className="text-xs text-muted-foreground">
                        {skill.dsa_starter_skill.dice1}/
                        {skill.dsa_starter_skill.dice2}/
                        {skill.dsa_starter_skill.dice3}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )}

        {/* Spells */}
        {character.dsa_starter_actualspellskill.length > 0 && (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>
                Spells ({character.dsa_starter_actualspellskill.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Spell Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Value</TableHead>
                    <TableHead>Dice</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {character.dsa_starter_actualspellskill.map((spell) => (
                    <TableRow key={spell.id}>
                      <TableCell className="font-medium">
                        {spell.dsa_starter_spell.name}
                      </TableCell>
                      <TableCell>
                        {spell.dsa_starter_spell.dsa_starter_spelltype.name}
                      </TableCell>
                      <TableCell>{spell.value}</TableCell>
                      <TableCell className="text-xs text-muted-foreground">
                        {spell.dsa_starter_spell.dice1}/
                        {spell.dsa_starter_spell.dice2}/
                        {spell.dsa_starter_spell.dice3}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )}

        {/* Weapons */}
        {character.dsa_starter_characterhasweapon.length > 0 && (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>
                Weapons ({character.dsa_starter_characterhasweapon.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Weapon</TableHead>
                    <TableHead>Skill</TableHead>
                    <TableHead>Damage</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {character.dsa_starter_characterhasweapon.map((weapon) => (
                    <TableRow key={weapon.id}>
                      <TableCell className="font-medium">
                        {weapon.dsa_starter_weapon.name}
                      </TableCell>
                      <TableCell>
                        {weapon.dsa_starter_weapon.dsa_starter_skill.name}
                      </TableCell>
                      <TableCell>
                        {weapon.dsa_starter_weapon.hit_dices}d6+
                        {weapon.dsa_starter_weapon.hit_add_points}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )}

        {/* Armor */}
        {character.dsa_starter_characterhasarmor.length > 0 && (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>
                Armor ({character.dsa_starter_characterhasarmor.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Armor</TableHead>
                    <TableHead>Protection</TableHead>
                    <TableHead>Hindrance</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {character.dsa_starter_characterhasarmor.map((armor) => (
                    <TableRow key={armor.id}>
                      <TableCell className="font-medium">
                        {armor.dsa_starter_armor.name}
                      </TableCell>
                      <TableCell>
                        {armor.dsa_starter_armor.ruestungs_schutz}
                      </TableCell>
                      <TableCell>
                        {armor.dsa_starter_armor.behinderung}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )}

        {/* Inventory */}
        {character.dsa_starter_inventoryitem.length > 0 && (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>
                Inventory ({character.dsa_starter_inventoryitem.length} items)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Item</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Weight</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {character.dsa_starter_inventoryitem.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">{item.name}</TableCell>
                      <TableCell>
                        {item.amount} {item.unit}
                      </TableCell>
                      <TableCell>{item.weight}g</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
}
