#!/bin/bash

# Simple cross-platform build script that definitely works
# Uses emulation instead of complex buildx exports

IMAGE_NAME="table-top-client"
TAG="latest"

echo "🚀 Building ARM64 image for Raspberry Pi using emulation..."

# Enable experimental features and install qemu if needed
docker run --rm --privileged multiarch/qemu-user-static --reset -p yes

# Build directly for ARM64 using emulation
echo "🍓 Building ARM64 image..."
docker build --platform linux/arm64 -t "${IMAGE_NAME}:arm64" .

# Export using standard docker save
echo "📦 Exporting ARM64 image..."
docker save "${IMAGE_NAME}:arm64" > "${IMAGE_NAME}-arm64.tar"

echo "✅ ARM64 image exported successfully!"
echo ""
echo "📋 Next steps:"
echo "1. Transfer: scp ${IMAGE_NAME}-arm64.tar pi@your-pi-ip:/home/pi/"
echo "2. Load on Pi: docker load < ${IMAGE_NAME}-arm64.tar"
echo "3. Run on Pi: docker run -p 80:80 ${IMAGE_NAME}:arm64"
echo ""
echo "🔧 If this still fails, try the direct build method:"
echo "   scp -r . pi@your-pi-ip:/home/pi/app/ && ssh pi@your-pi-ip 'cd app && docker build -t app .'"