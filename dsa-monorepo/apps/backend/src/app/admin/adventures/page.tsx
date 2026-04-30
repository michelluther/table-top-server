/**
 * Adventures Management Page
 *
 * Admin page for viewing and managing all adventures
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

export default async function AdventuresPage() {
  const session = await auth();

  if (!session) {
    redirect('/auth/signin');
  }

  // Fetch adventures server-side
  const adventures = await prisma.dsa_starter_adventure.findMany({
    select: {
      id: true,
      name: true,
      isActive: true,
      _count: {
        select: {
          dsa_starter_adventurecharacter: true,
          dsa_starter_fight: true,
          dsa_starter_adventureimage: true,
          dsa_starter_adventurelocation: true,
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
            <h1 className="text-2xl font-bold">Adventure Management</h1>
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
            <CardTitle>All Adventures ({adventures.length})</CardTitle>
            <CardDescription>
              Adventures and campaigns in your DSA game
            </CardDescription>
          </CardHeader>
          <CardContent>
            {adventures.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                No adventures found
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Characters</TableHead>
                    <TableHead>Fights</TableHead>
                    <TableHead>Images</TableHead>
                    <TableHead>Locations</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {adventures.map((adventure) => (
                    <TableRow key={adventure.id}>
                      <TableCell className="font-medium">
                        {adventure.name}
                      </TableCell>
                      <TableCell>
                        {adventure.isActive ? (
                          <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                            Active
                          </span>
                        ) : (
                          <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                            Inactive
                          </span>
                        )}
                      </TableCell>
                      <TableCell>
                        {adventure._count.dsa_starter_adventurecharacter}
                      </TableCell>
                      <TableCell>
                        {adventure._count.dsa_starter_fight}
                      </TableCell>
                      <TableCell>
                        {adventure._count.dsa_starter_adventureimage}
                      </TableCell>
                      <TableCell>
                        {adventure._count.dsa_starter_adventurelocation}
                      </TableCell>
                      <TableCell>
                        <Link href={`/admin/adventures/${adventure.id}`}>
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
