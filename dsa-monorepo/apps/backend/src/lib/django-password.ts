/**
 * Django password verification utility
 *
 * Django stores passwords in the format: <algorithm>$<iterations>$<salt>$<hash>
 * The most common algorithms are:
 * - pbkdf2_sha256 (default)
 * - pbkdf2_sha1
 * - argon2
 * - bcrypt
 *
 * This utility verifies passwords against Django's hashing format.
 */

import { createHash, pbkdf2 } from 'crypto';
import { promisify } from 'util';

const pbkdf2Async = promisify(pbkdf2);

/**
 * Verify a password against a Django password hash
 *
 * @param password - The plaintext password to verify
 * @param djangoHash - The Django password hash from the database
 * @returns True if the password matches, false otherwise
 */
export async function verifyDjangoPassword(
  password: string,
  djangoHash: string
): Promise<boolean> {
  const parts = djangoHash.split('$');

  if (parts.length < 4) {
    console.error('Invalid Django password hash format');
    return false;
  }

  const [algorithm, iterations, salt, hash] = parts;

  switch (algorithm) {
    case 'pbkdf2_sha256':
      return verifyPBKDF2(password, salt, hash, parseInt(iterations, 10), 'sha256');

    case 'pbkdf2_sha1':
      return verifyPBKDF2(password, salt, hash, parseInt(iterations, 10), 'sha1');

    default:
      console.error(`Unsupported Django password algorithm: ${algorithm}`);
      return false;
  }
}

/**
 * Verify a password using PBKDF2
 */
async function verifyPBKDF2(
  password: string,
  salt: string,
  expectedHash: string,
  iterations: number,
  digest: 'sha256' | 'sha1'
): Promise<boolean> {
  try {
    const derivedKey = await pbkdf2Async(
      Buffer.from(password, 'utf8'),
      Buffer.from(salt, 'utf8'),
      iterations,
      32, // Django uses 32 bytes for the hash
      digest
    );

    const derivedHash = derivedKey.toString('base64');

    // Compare the derived hash with the expected hash
    return timingSafeEqual(derivedHash, expectedHash);
  } catch (error) {
    console.error('Error verifying PBKDF2 password:', error);
    return false;
  }
}

/**
 * Timing-safe string comparison to prevent timing attacks
 */
function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) {
    return false;
  }

  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }

  return result === 0;
}

/**
 * Hash a password using Django's default PBKDF2-SHA256 algorithm
 * (For future use when creating new users)
 *
 * @param password - The plaintext password to hash
 * @returns The Django-formatted password hash
 */
export async function hashDjangoPassword(password: string): Promise<string> {
  const iterations = 600000; // Django 4.2+ default
  const salt = createHash('sha256')
    .update(Math.random().toString())
    .digest('hex')
    .substring(0, 12);

  const derivedKey = await pbkdf2Async(
    Buffer.from(password, 'utf8'),
    Buffer.from(salt, 'utf8'),
    iterations,
    32,
    'sha256'
  );

  const hash = derivedKey.toString('base64');

  return `pbkdf2_sha256$${iterations}$${salt}$${hash}`;
}
