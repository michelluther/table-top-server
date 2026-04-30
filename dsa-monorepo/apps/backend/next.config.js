//@ts-check

// Load environment variables before anything else
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  // Use this to set Nx-specific options
  // See: https://nx.dev/recipes/next/next-config-setup
  nx: {},
  // Prevent these packages from being bundled by Webpack/Turbopack
  serverExternalPackages: [
    'better-sqlite3',
    '@prisma/adapter-better-sqlite3',
    '@prisma/client',
  ],
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Mark packages as external for server-side webpack bundling
      config.externals = config.externals || [];
      config.externals.push('better-sqlite3', '@prisma/adapter-better-sqlite3');
    }
    return config;
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
