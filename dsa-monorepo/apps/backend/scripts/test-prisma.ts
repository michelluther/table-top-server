/**
 * Simple script to verify Prisma Client is working correctly
 */
import 'dotenv/config';
import { prisma } from '../src/lib/prisma';

async function main() {
  console.log('🔍 Testing Prisma Client connection...\n');

  // Test 1: Count characters
  const characterCount = await prisma.dsa_starter_character.count();
  console.log(`✅ Characters in database: ${characterCount}`);

  // Test 2: Count adventures
  const adventureCount = await prisma.dsa_starter_adventure.count();
  console.log(`✅ Adventures in database: ${adventureCount}`);

  // Test 3: List hero types
  const heroTypes = await prisma.dsa_starter_herotype.findMany();
  console.log(`✅ Hero types: ${heroTypes.map(ht => ht.name).join(', ')}`);

  // Test 4: List races
  const races = await prisma.dsa_starter_race.findMany();
  console.log(`✅ Races: ${races.map(r => r.name).join(', ')}`);

  console.log('\n✨ Prisma Client is working correctly!');
}

main()
  .catch((e) => {
    console.error('❌ Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
