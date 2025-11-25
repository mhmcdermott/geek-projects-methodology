#!/bin/bash

PROJECT_NAME=$1

if [ -z "$PROJECT_NAME" ]; then
    echo "❌ Error: Please provide project name"
    echo "Usage: ./geek-nuclear-reset.sh project-name"
    exit 1
fi

echo "🚨 GEEK PROJECTS NUCLEAR RESET PROTOCOL"
echo "Project: $PROJECT_NAME"
echo "Starting nuclear reset..."

# Stop all processes
echo "Stopping all Node.js processes..."
pkill -f node 2>/dev/null
pkill -f next 2>/dev/null

# Remove project directory
if [ -d "$PROJECT_NAME" ]; then
    echo "Removing project directory: $PROJECT_NAME"
    rm -rf "$PROJECT_NAME"
else
    echo "Project directory not found: $PROJECT_NAME"
fi

# Clear npm cache
echo "Clearing npm cache..."
npm cache clean --force

# Clear yarn cache if exists
if command -v yarn &> /dev/null; then
    echo "Clearing yarn cache..."
    yarn cache clean
fi

# Clear pnpm cache if exists
if command -v pnpm &> /dev/null; then
    echo "Clearing pnpm cache..."
    pnpm store prune
fi

echo "✅ Nuclear reset complete!"
echo ""
echo "Next steps:"
echo "1. Copy proven template from geek-projects-methodology/templates-v4/"
echo "2. Follow exact setup instructions"
echo "3. Verify working state before proceeding"
echo ""