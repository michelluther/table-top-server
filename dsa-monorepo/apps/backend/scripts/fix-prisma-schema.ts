import * as fs from 'fs';
import * as path from 'path';

/**
 * Script to fix Prisma schema by converting Unsupported types to proper Prisma types
 *
 * Conversions:
 * - Unsupported("bool") -> Boolean
 * - Unsupported("smallint") -> Int
 * - Unsupported("smallint unsigned") -> Int
 */

const schemaPath = path.join(__dirname, '../prisma/schema.prisma');
const schema = fs.readFileSync(schemaPath, 'utf-8');

// Replace Unsupported types with proper Prisma types
let fixedSchema = schema
  .replace(/Unsupported\("bool"\)/g, 'Boolean')
  .replace(/Unsupported\("smallint unsigned"\)/g, 'Int')
  .replace(/Unsupported\("smallint"\)/g, 'Int');

fs.writeFileSync(schemaPath, fixedSchema, 'utf-8');

console.log('✅ Fixed Prisma schema - converted Unsupported types to proper Prisma types');
console.log('   - Unsupported("bool") -> Boolean');
console.log('   - Unsupported("smallint") -> Int');
console.log('   - Unsupported("smallint unsigned") -> Int');
