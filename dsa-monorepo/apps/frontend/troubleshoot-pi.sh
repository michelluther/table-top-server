#!/bin/bash

# Troubleshooting script for Raspberry Pi deployment
# Run this on your Raspberry Pi to check the container status

echo "🔍 Checking what's running on port 80..."
sudo netstat -tlnp | grep :80
sudo lsof -i :80

echo ""
echo "🔍 Checking if system nginx is running..."
sudo systemctl status nginx || echo "No system nginx service"

echo ""
echo "🔍 Checking Docker container status..."
sudo docker ps -a

echo ""
echo "🔍 Stopping container to test if nginx still responds..."
sudo docker stop table-top-client
echo "Testing if nginx still responds (should fail if it was the container):"
curl -I http://localhost/ || echo "Good! No response after stopping container"

echo ""
echo "🔍 Starting container on different port (8080) to be sure..."
sudo docker rm table-top-client 2>/dev/null || true
sudo docker run -d --name table-top-client -p 8080:80 --restart unless-stopped table-top-client:latest

echo ""
echo "🔍 Testing container on port 8080..."
sleep 3
curl -v http://localhost:8080/health
echo ""
curl -I http://localhost:8080/

echo ""
echo "🔍 Container logs..."
sudo docker logs table-top-client

echo ""
echo "🔍 Checking files inside container..."
sudo docker exec table-top-client ls -la /usr/share/nginx/html/

echo ""
echo "🔍 Testing from host machine on port 8080..."
echo "From your main computer, try:"
echo "curl http://192.168.178.103:8080/health"
echo "curl http://192.168.178.103:8080/"