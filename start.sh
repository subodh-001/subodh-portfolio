#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}╔════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║  🚀 Subodh Ram Portfolio - Start Script  ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════════╝${NC}\n"

# Check if pnpm is installed
echo -e "${BLUE}[1/5] Checking prerequisites...${NC}"
if ! command -v pnpm &> /dev/null; then
    echo -e "${YELLOW}⚠ pnpm not found. Installing pnpm...${NC}"
    npm install -g pnpm
    if [ $? -ne 0 ]; then
        echo -e "${RED}❌ Failed to install pnpm. Please install it manually.${NC}"
        exit 1
    fi
fi

# Check if build-template exists
if [ ! -d "build-template" ]; then
    echo -e "${RED}❌ Error: build-template folder not found${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Prerequisites checked${NC}\n"

# Install dependencies
echo -e "${BLUE}[2/5] Installing dependencies...${NC}"
pnpm install --no-frozen-lockfile --shamefully-hoist
if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Failed to install dependencies${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Dependencies installed${NC}\n"

# Sync frontend components to build-template
echo -e "${BLUE}[3/5] Syncing frontend components...${NC}"
if [ -d "frontend/src/components" ]; then
    cp -r frontend/src/components/* build-template/src/frontend/src/components/
    echo -e "${GREEN}✓ Components synced successfully${NC}"
else
    echo -e "${YELLOW}⚠ frontend/src/components not found, skipping sync${NC}"
fi

# Generate resume PDF
if [ -f "generate-resume-pdf.js" ]; then
    echo -e "${BLUE}  • Generating resume PDF...${NC}"
    node generate-resume-pdf.js > /dev/null 2>&1
    echo -e "${GREEN}✓ Resume PDF generated${NC}\n"
else
    echo -e "${YELLOW}⚠ Resume generator not found${NC}\n"
fi

# Display server info
echo -e "${BLUE}[4/5] Server configuration:${NC}"
echo -e "${GREEN}  • Port: 4000${NC}"
echo -e "${GREEN}  • Host: 0.0.0.0 (accessible from network)${NC}"
echo -e "${GREEN}  • URL: http://localhost:4000${NC}\n"

# Start development server
echo -e "${BLUE}[5/5] Starting development server...${NC}"
echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}\n"

cd build-template/src/frontend && pnpm run start

