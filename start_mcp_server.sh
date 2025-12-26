#!/bin/bash

# DSA MCP Server Startup Script
# Activates the Python environment and starts the MCP server

echo "Starting DSA MCP Server..."
echo "=========================="

# Activate virtual environment
source ./dsavenv_313/bin/activate

# Check if Django is properly configured
echo "Checking Django configuration..."
python manage.py check

if [ $? -eq 0 ]; then
    echo "Django configuration OK"
    echo "Starting Django development server with MCP endpoint..."
    python manage.py runserver
else
    echo "Django configuration error. Please check your settings."
    exit 1
fi