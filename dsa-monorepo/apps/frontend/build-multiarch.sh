#!/bin/bash

# Multi-architecture Docker build script for Angular Table-Top Client
# This script builds the image for multiple architectures including Raspberry Pi

# Configuration
IMAGE_NAME="table-top-client"
TAG="latest"
REGISTRY="" # Add your registry here if pushing to one (Docker Hub is free for public repos!)
EXPORT_ARM="true" # Set to "true" to export ARM image for Raspberry Pi

echo "🚀 Building multi-architecture Docker image..."

# Check if buildx is available
if ! docker buildx version &> /dev/null; then
    echo "❌ Docker buildx is not available. Please install Docker Desktop or enable buildx."
    exit 1
fi

# Create and use multiarch builder if it doesn't exist
if ! docker buildx inspect multiarch &> /dev/null; then
    echo "📦 Creating multiarch builder..."
    docker buildx create --use --name multiarch --driver docker-container
else
    echo "📦 Using existing multiarch builder..."
    docker buildx use multiarch
fi

# Build for multiple architectures
echo "🏗️ Building for linux/amd64, linux/arm64, and linux/arm/v7..."

if [ -n "$REGISTRY" ]; then
    # Build and push to registry
    docker buildx build \
        --platform linux/amd64,linux/arm64,linux/arm/v7 \
        --tag "$REGISTRY/$IMAGE_NAME:$TAG" \
        --push \
        .
    echo "✅ Multi-architecture image built and pushed to $REGISTRY/$IMAGE_NAME:$TAG"
else
    # Build and load locally (only supports single architecture)
    echo "⚠️ No registry specified. Building for current platform and ARM64..."
    
    # Build for current platform (amd64)
    docker buildx build \
        --platform linux/amd64 \
        --tag "$IMAGE_NAME:$TAG" \
        --load \
        .
    echo "✅ AMD64 image built locally as $IMAGE_NAME:$TAG"
    
    # Build ARM64 version for Raspberry Pi if requested
    if [ "$EXPORT_ARM" = "true" ]; then
        echo "🍓 Building ARM64 image for Raspberry Pi..."
        docker buildx build \
            --platform linux/arm64 \
            --tag "$IMAGE_NAME:arm64" \
            --output type=docker,dest="${IMAGE_NAME}-arm64.tar" \
            .
        
        echo "✅ ARM64 image exported to ${IMAGE_NAME}-arm64.tar"
        echo "📋 Transfer to Raspberry Pi with: scp ${IMAGE_NAME}-arm64.tar pi@your-pi-ip:/home/pi/"
        echo "📋 Load on Raspberry Pi with: docker load < ${IMAGE_NAME}-arm64.tar"
    fi
fi

echo ""
echo "📋 Usage Instructions:"
echo "  Local run:     docker run -p 80:80 $IMAGE_NAME:$TAG"
if [ -n "$REGISTRY" ]; then
    echo "  Raspberry Pi:  docker run -p 80:80 $REGISTRY/$IMAGE_NAME:$TAG"
elif [ "$EXPORT_ARM" = "true" ]; then
    echo "  Raspberry Pi:  docker run -p 80:80 $IMAGE_NAME:arm64"
fi
echo "  Health check:  curl http://localhost/health"
echo ""
echo "💡 Free Options:"
echo "  • Docker Hub public repos are FREE!"
echo "  • Use exported .tar file for offline transfer"
echo "  • Build directly on Raspberry Pi"