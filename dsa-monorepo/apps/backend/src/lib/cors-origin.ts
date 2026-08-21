/**
 * Shared CORS origin resolution.
 *
 * The dev machine's LAN IP changes between sessions (DHCP), so instead of
 * hardcoding it in CORS_ORIGIN, any private-network origin is trusted
 * automatically outside production. CORS_ORIGIN still works as an explicit
 * allow-list on top of that (and is the only source of truth in production).
 */

const explicitOrigins = (process.env.CORS_ORIGIN?.split(',') ?? [])
  .map((origin) => origin.trim())
  .filter(Boolean);

const PRIVATE_HOSTNAME_REGEX =
  /^(localhost|127\.0\.0\.1|10\.\d{1,3}\.\d{1,3}\.\d{1,3}|172\.(1[6-9]|2\d|3[0-1])\.\d{1,3}\.\d{1,3}|192\.168\.\d{1,3}\.\d{1,3})$/;

export function isAllowedOrigin(origin: string | null | undefined): boolean {
  if (!origin) return false;
  if (explicitOrigins.includes('*') || explicitOrigins.includes(origin)) return true;

  if (process.env.NODE_ENV !== 'production') {
    try {
      return PRIVATE_HOSTNAME_REGEX.test(new URL(origin).hostname);
    } catch {
      return false;
    }
  }

  return false;
}

export const defaultOrigin = explicitOrigins[0] ?? 'http://localhost:4200';
