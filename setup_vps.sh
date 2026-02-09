#!/bin/bash

# Sri Gnanodaya - One-Click VPS Setup Script
# ------------------------------------------

set -e # Exit immediately if a command exits with a non-zero status.

echo ""
echo "✨ Starting Sri Gnanodaya Server Setup..."
echo "----------------------------------------"

# 1. Update System
echo "🔄 [1/3] Updating system packages..."
sudo apt-get update -qq && sudo apt-get upgrade -y -qq

# 2. Install Docker
echo "🐳 [2/3] Installing Docker..."
if ! command -v docker &> /dev/null; then
    curl -fsSL https://get.docker.com | sh
    echo "   -> Docker installed successfully!"
else
    echo "   -> Docker already installed, skipping."
fi

# 3. Setup Project Directory
echo "📂 [3/3] Setting up project directory..."
sudo mkdir -p /opt/srignanodaya
sudo chown -R $USER:$USER /opt/srignanodaya

echo "----------------------------------------"
echo "✅ SETUP COMPLETE!"
echo ""
echo "🚀 Next Steps:"
echo "1. Go to GitHub and push your code."
echo "2. Watch the 'Deploy to Hetzner' Action turn green."
echo "3. Visit http://$(curl -s ifconfig.me):3000 to see your website!"
echo ""
