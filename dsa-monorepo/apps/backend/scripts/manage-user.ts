#!/usr/bin/env tsx
/**
 * User Management Script for DSA Cockpit
 *
 * This script allows you to:
 * - Create new admin users
 * - Reset passwords for existing users
 * - List all users
 *
 * Usage:
 *   npm run user:create <username> <password> [email]
 *   npm run user:reset <username> <new-password>
 *   npm run user:list
 */

import 'dotenv/config';
import { prisma } from '../src/lib/prisma';
import { hashDjangoPassword } from '../src/lib/django-password';

async function createUser(username: string, password: string, email?: string) {
  try {
    // Check if user already exists
    const existingUser = await prisma.auth_user.findUnique({
      where: { username },
    });

    if (existingUser) {
      console.error(`❌ User '${username}' already exists!`);
      process.exit(1);
    }

    // Hash password with Django PBKDF2 format
    const hashedPassword = await hashDjangoPassword(password);

    // Create user
    const user = await prisma.auth_user.create({
      data: {
        username,
        password: hashedPassword,
        email: email || `${username}@example.com`,
        first_name: '',
        last_name: '',
        is_staff: true,
        is_superuser: true,
        is_active: true,
        date_joined: new Date(),
      },
    });

    console.log('✅ User created successfully!');
    console.log(`   Username: ${user.username}`);
    console.log(`   Email: ${user.email}`);
    console.log(`   Staff: ${user.is_staff ? 'Yes' : 'No'}`);
    console.log(`   Superuser: ${user.is_superuser ? 'Yes' : 'No'}`);
    console.log(`   Active: ${user.is_active ? 'Yes' : 'No'}`);
  } catch (error) {
    console.error('❌ Error creating user:', error);
    process.exit(1);
  }
}

async function resetPassword(username: string, newPassword: string) {
  try {
    // Check if user exists
    const user = await prisma.auth_user.findUnique({
      where: { username },
    });

    if (!user) {
      console.error(`❌ User '${username}' not found!`);
      process.exit(1);
    }

    // Hash new password
    const hashedPassword = await hashDjangoPassword(newPassword);

    // Update password
    await prisma.auth_user.update({
      where: { username },
      data: { password: hashedPassword },
    });

    console.log(`✅ Password reset successfully for user '${username}'`);
  } catch (error) {
    console.error('❌ Error resetting password:', error);
    process.exit(1);
  }
}

async function listUsers() {
  try {
    const users = await prisma.auth_user.findMany({
      select: {
        id: true,
        username: true,
        email: true,
        first_name: true,
        last_name: true,
        is_staff: true,
        is_superuser: true,
        is_active: true,
        last_login: true,
      },
      orderBy: { id: 'asc' },
    });

    console.log('\n📋 Users in database:\n');
    console.log('ID  | Username | Email                          | Staff | Super | Active | Last Login');
    console.log('----+----------+--------------------------------+-------+-------+--------+-----------');

    users.forEach(user => {
      const lastLogin = user.last_login
        ? new Date(user.last_login).toISOString().split('T')[0]
        : 'Never';

      console.log(
        `${user.id.toString().padEnd(3)} | ` +
        `${user.username.padEnd(8)} | ` +
        `${user.email.padEnd(30)} | ` +
        `${user.is_staff ? '  ✅  ' : '  ❌  '} | ` +
        `${user.is_superuser ? '  ✅  ' : '  ❌  '} | ` +
        `${user.is_active ? '  ✅   ' : '  ❌   '} | ` +
        `${lastLogin}`
      );
    });

    console.log('');
  } catch (error) {
    console.error('❌ Error listing users:', error);
    process.exit(1);
  }
}

// Main script
async function main() {
  const args = process.argv.slice(2);
  const command = args[0];

  if (!command) {
    console.log(`
DSA Cockpit User Management

Usage:
  tsx scripts/manage-user.ts create <username> <password> [email]
  tsx scripts/manage-user.ts reset <username> <new-password>
  tsx scripts/manage-user.ts list

Examples:
  tsx scripts/manage-user.ts create admin mypassword123 admin@example.com
  tsx scripts/manage-user.ts reset admin newpassword456
  tsx scripts/manage-user.ts list
    `);
    process.exit(1);
  }

  switch (command) {
    case 'create': {
      const [, username, password, email] = args;
      if (!username || !password) {
        console.error('❌ Usage: create <username> <password> [email]');
        process.exit(1);
      }
      await createUser(username, password, email);
      break;
    }
    case 'reset': {
      const [, username, password] = args;
      if (!username || !password) {
        console.error('❌ Usage: reset <username> <new-password>');
        process.exit(1);
      }
      await resetPassword(username, password);
      break;
    }
    case 'list': {
      await listUsers();
      break;
    }
    default:
      console.error(`❌ Unknown command: ${command}`);
      process.exit(1);
  }

  await prisma.$disconnect();
}

main();
