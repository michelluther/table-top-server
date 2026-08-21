/**
 * Custom Next.js server with Socket.IO support
 *
 * This server enables real-time WebSocket communication alongside
 * Next.js SSR and API routes.
 */

// Load environment variables before anything else
import 'dotenv/config';

import { createServer } from 'http';
import next from 'next';
import { parse } from 'url';
import { Server as SocketIOServer } from 'socket.io';
import { setupSocketIO } from './src/socket/setup';
import { isAllowedOrigin, defaultOrigin } from './src/lib/cors-origin';

const dev = process.env.NODE_ENV !== 'production';
const hostname = process.env.HOSTNAME || 'localhost';
const port = parseInt(process.env.PORT || '3000', 10);

// Create Next.js app
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

async function main() {
  try {
    // Prepare Next.js
    await app.prepare();
    console.log('✅ Next.js app prepared');

    // Create HTTP server
    const httpServer = createServer(async (req, res) => {
      try {
        const parsedUrl = parse(req.url!, true);
        await handle(req, res, parsedUrl);
      } catch (err) {
        console.error('Error handling request:', err);
        res.statusCode = 500;
        res.end('Internal Server Error');
      }
    });

    // Setup Socket.IO
    const io = new SocketIOServer(httpServer, {
      cors: {
        origin: (origin, callback) => {
          callback(null, isAllowedOrigin(origin) ? origin : defaultOrigin);
        },
        methods: ['GET', 'POST'],
        credentials: true,
      },
      transports: ['websocket', 'polling'],
      pingTimeout: 60000,
      pingInterval: 25000,
    });

    // Initialize Socket.IO namespaces and handlers
    setupSocketIO(io);
    console.log('✅ Socket.IO configured with namespaces');

    // Start server
    httpServer.listen(port, () => {
      console.log('');
      console.log('🚀 DSA Cockpit Server');
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log(`📡 HTTP Server:    http://${hostname}:${port}`);
      console.log(`🔌 WebSocket:      ws://${hostname}:${port}`);
      console.log(`🎮 /heroes:        ws://${hostname}:${port}/heroes`);
      console.log(`🎲 /remoteControl: ws://${hostname}:${port}/remoteControl`);
      console.log(`⚙️  Environment:    ${process.env.NODE_ENV || 'development'}`);
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log('');
    });

    // Graceful shutdown
    const shutdown = async () => {
      console.log('\n🛑 Shutting down gracefully...');
      httpServer.close(() => {
        console.log('✅ HTTP server closed');
        process.exit(0);
      });

      // Force close after 10 seconds
      setTimeout(() => {
        console.error('⚠️  Forced shutdown after timeout');
        process.exit(1);
      }, 10000);
    };

    process.on('SIGTERM', shutdown);
    process.on('SIGINT', shutdown);
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
}

main();
