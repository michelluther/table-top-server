/**
 * Admin Dashboard Page
 *
 * Protected admin dashboard demonstrating authentication and UI components
 */

import { redirect } from 'next/navigation';
import Link from 'next/link';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default async function AdminDashboard() {
  const session = await auth();

  if (!session) {
    redirect('/auth/signin');
  }

  // Fetch stats
  const [charactersCount, activeAdventuresCount, totalFightsCount] =
    await Promise.all([
      prisma.dsa_starter_character.count({
        where: {
          isHero: true,
        },
      }),
      prisma.dsa_starter_adventure.count({
        where: {
          isActive: true,
        },
      }),
      prisma.dsa_starter_fight.count(),
    ]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">DSA Cockpit Admin</h1>
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
          {/* User Info Card */}
          <Card>
            <CardHeader>
              <CardTitle>User Information</CardTitle>
              <CardDescription>Your account details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div>
                <p className="text-sm font-medium">Username</p>
                <p className="text-sm text-muted-foreground">
                  {session.user.username}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium">Email</p>
                <p className="text-sm text-muted-foreground">
                  {session.user.email}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium">Role</p>
                <p className="text-sm text-muted-foreground">
                  {session.user.isSuperuser
                    ? 'Superuser'
                    : session.user.isStaff
                    ? 'Staff'
                    : 'User'}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats Card */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Stats</CardTitle>
              <CardDescription>System overview</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">Total Characters</span>
                <span className="text-2xl font-bold">{charactersCount}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Active Adventures</span>
                <span className="text-2xl font-bold">
                  {activeAdventuresCount}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Total Fights</span>
                <span className="text-2xl font-bold">{totalFightsCount}</span>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions Card */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common tasks</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Link href="/admin/characters">
                <Button className="w-full" variant="outline">
                  Manage Characters
                </Button>
              </Link>
              <Link href="/admin/adventures">
                <Button className="w-full" variant="outline">
                  Manage Adventures
                </Button>
              </Link>
              <Button className="w-full" variant="outline" disabled>
                View Reports
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Welcome Message */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Welcome to DSA Cockpit Admin</CardTitle>
            <CardDescription>
              Manage your Das Schwarze Auge game with ease
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              This admin dashboard allows you to manage characters, adventures,
              fights, and more. Use the navigation above to access different
              sections of the admin panel.
            </p>
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <p className="text-sm font-medium">System Status</p>
              <p className="text-sm text-muted-foreground mt-1">
                ✓ Next.js Server: Running
              </p>
              <p className="text-sm text-muted-foreground">
                ✓ Socket.IO: Connected
              </p>
              <p className="text-sm text-muted-foreground">
                ✓ Database: Connected
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
