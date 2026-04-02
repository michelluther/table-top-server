#!/bin/bash

# Deploy directly to Raspberry Pi
# This builds on the Pi itself - guaranteed to work!

PI_IP="$1"
PI_USER="pi"

if [ -z "$PI_IP" ]; then
    echo "❌ Usage: $0 <pi-ip-address>"
    echo "   Example: $0 192.168.1.100"
    exit 1
fi

echo "🚀 Deploying to Raspberry Pi at $PI_IP..."

# Create app directory on Pi
ssh "${PI_USER}@${PI_IP}" 'mkdir -p ~/table-top-client'

# Copy all necessary files
echo "📦 Copying files to Pi..."
scp Dockerfile nginx.conf .dockerignore package*.json "${PI_USER}@${PI_IP}:~/table-top-client/"
scp -r src "${PI_USER}@${PI_IP}:~/table-top-client/"
scp -r angular.json tsconfig.json "${PI_USER}@${PI_IP}:~/table-top-client/"

# Build on Pi
echo "🏗️ Building Docker image on Raspberry Pi from standard base images..."
ssh "${PI_USER}@${PI_IP}" << 'ENDSSH'
cd ~/table-top-client
echo "Building Docker image using multi-stage build (node:20-alpine + nginx:alpine)..."

# Build the Docker image
if sudo docker build -t table-top-client:latest .; then
    echo "✅ Build complete! Image built from standard base images."
    echo "🚀 Starting container..."
    sudo docker stop table-top-client 2>/dev/null || true
    sudo docker rm table-top-client 2>/dev/null || true
    sudo docker run -d --name table-top-client -p 80:80 --restart unless-stopped table-top-client:latest
    echo "✅ App is running at http://$(hostname -I | cut -d' ' -f1)/"
else
    echo "❌ Docker build failed!"
    exit 1
fi
ENDSSH

echo "🎉 Deployment complete!"
echo "🌐 Access your app at: http://${PI_IP}/"
echo "🔍 Health check: curl http://${PI_IP}/health"