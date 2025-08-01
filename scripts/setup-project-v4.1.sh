#!/bin/bash

# Enhanced Geek Projects Methodology v4.1 - Automated Project Setup
# Universal project initialization script for all tiers

set -e

PROJECT_NAME="$1"
PROJECT_TIER="$2"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Print colored output
print_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Show usage
show_usage() {
    echo "Enhanced Geek Projects Methodology v4.1 - Project Setup"
    echo ""
    echo "Usage: $0 'Project Name' [1|2|3]"
    echo ""
    echo "Project Tiers:"
    echo "  1 = Simple Site (5-10 pages, static)"
    echo "  2 = Interactive App (authentication, dynamic features)"
    echo "  3 = SaaS Application (multi-user, billing, enterprise)"
    echo ""
    echo "Examples:"
    echo "  $0 'My Portfolio Site' 1"
    echo "  $0 'Task Management App' 2"
    echo "  $0 'Enterprise CRM Platform' 3"
}

# Validate input
if [ -z "$PROJECT_NAME" ] || [ -z "$PROJECT_TIER" ]; then
    print_error "Missing required arguments"
    show_usage
    exit 1
fi

if [[ ! "$PROJECT_TIER" =~ ^[1-3]$ ]]; then
    print_error "Invalid project tier. Must be 1, 2, or 3."
    show_usage
    exit 1
fi

# Convert project name to directory-safe format
PROJECT_DIR=$(echo "$PROJECT_NAME" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9]/-/g' | sed 's/--*/-/g' | sed 's/^-\|-$//g')

print_info "🚀 Enhanced Geek Projects Methodology v4.1"
print_info "Setting up: $PROJECT_NAME (Tier $PROJECT_TIER)"
print_info "Directory: $PROJECT_DIR"

# Check if directory already exists
if [ -d "$PROJECT_DIR" ]; then
    print_error "Directory '$PROJECT_DIR' already exists!"
    exit 1
fi

# Create project directory
mkdir -p "$PROJECT_DIR"
cd "$PROJECT_DIR"

print_success "Created project directory"

# Determine tier-specific setup
case $PROJECT_TIER in
    1)
        TIER_NAME="Simple Site"
        TEMPLATE_DIR="tier1-simple-site/astro-static-proven"
        AGENTS="3 core agents: frontend-ux-specialist, dependency-strategist, geek-projects-quality-gate"
        TIMELINE="1-2 weeks"
        ;;
    2)
        TIER_NAME="Interactive App"
        TEMPLATE_DIR="tier2-interactive-app/nextjs-full-stack-stable"
        AGENTS="8 comprehensive agents including authentication and database specialists"
        TIMELINE="3-6 weeks"
        ;;
    3)
        TIER_NAME="SaaS Application"
        TEMPLATE_DIR="tier3-saas-application/nextjs-enterprise-proven"
        AGENTS="12 enterprise agents including billing, security, and performance specialists"
        TIMELINE="6-12 weeks"
        ;;
esac

print_info "Project Type: $TIER_NAME"
print_info "Agent Team: $AGENTS"
print_info "Timeline: $TIMELINE"

# Get the absolute path to the methodology directory
METHODOLOGY_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

# Copy tier-specific starter template
TEMPLATE_PATH="$METHODOLOGY_DIR/templates/$TEMPLATE_DIR"

if [ -d "$TEMPLATE_PATH" ]; then
    print_info "Copying tier-specific starter template..."
    cp -r "$TEMPLATE_PATH"/* .
    print_success "Starter template copied"
else
    print_warning "Starter template not found at $TEMPLATE_PATH"
    print_info "Creating basic project structure..."
    mkdir -p src
    touch README.md
fi

# Copy universal CLAUDE.md template
CLAUDE_TEMPLATE="$METHODOLOGY_DIR/templates/CLAUDE.md"
if [ -f "$CLAUDE_TEMPLATE" ]; then
    cp "$CLAUDE_TEMPLATE" ./CLAUDE.md
    print_success "Universal CLAUDE.md template copied"
    
    # Customize CLAUDE.md with project details
    if command -v gsed >/dev/null 2>&1; then
        SED_CMD="gsed"
    else
        SED_CMD="sed"
    fi
    
    $SED_CMD -i "s/\[AUTO-POPULATED from directory name\]/$PROJECT_NAME/g" ./CLAUDE.md
    $SED_CMD -i "s/\[AUTO-DETECTED from package.json and structure\]/$TIER_NAME/g" ./CLAUDE.md
    $SED_CMD -i "s/\[AUTO-ASSIGNED based on complexity analysis\]/Tier $PROJECT_TIER/g" ./CLAUDE.md
    $SED_CMD -i "s/\[DETECTED_TIER\]/Tier $PROJECT_TIER/g" ./CLAUDE.md
    $SED_CMD -i "s/\[TIER_DETECTED\]/Tier $PROJECT_TIER/g" ./CLAUDE.md
    
    print_success "CLAUDE.md customized for your project"
else
    print_warning "CLAUDE.md template not found, creating basic version..."
    cat > CLAUDE.md << EOF
# $PROJECT_NAME - Development Guide

## Project Classification
**Tier**: $TIER_NAME
**Agent Team**: $AGENTS
**Timeline**: $TIMELINE

## Setup Instructions
1. Install dependencies: npm install
2. Start development: npm run dev
3. Follow Enhanced Geek Projects Methodology v4.1

Built with Enhanced Geek Projects Methodology v4.1
EOF
fi

# Copy planning templates
PLANNING_DIR="$METHODOLOGY_DIR/templates/planning"
if [ -d "$PLANNING_DIR" ]; then
    mkdir -p planning-docs
    cp "$PLANNING_DIR"/* planning-docs/
    print_success "Planning templates copied to planning-docs/"
fi

# Create project structure directories
mkdir -p planning-docs/feature-specs
mkdir -p planning-docs/sprint-plans
mkdir -p client-approvals
mkdir -p documentation

print_success "Project structure created"

# Initialize git repository
git init --quiet
print_success "Git repository initialized"

# Create initial README.md if it doesn't exist
if [ ! -f "README.md" ]; then
    cat > README.md << EOF
# $PROJECT_NAME

## Enhanced Geek Projects Methodology v4.1 - $TIER_NAME

### Quick Start
1. Install dependencies: \`npm install\`
2. Start development: \`npm run dev\`
3. Follow systematic development process in CLAUDE.md

### Project Details
- **Tier**: $PROJECT_TIER ($TIER_NAME)
- **Timeline**: $TIMELINE
- **Agent Team**: $AGENTS

### Next Steps
1. Complete planning documents in planning-docs/
2. Get stakeholder approval on all specifications
3. Begin Sprint 1 implementation
4. Follow systematic development process

Built with Enhanced Geek Projects Methodology v4.1 for professional results.
EOF
    print_success "README.md created"
fi

# Create .gitignore if it doesn't exist
if [ ! -f ".gitignore" ]; then
    cat > .gitignore << EOF
# Dependencies
node_modules/
.pnpm-debug.log*

# Next.js
.next/
out/

# Environment variables
.env*.local

# IDE
.vscode/
.idea/

# OS
.DS_Store
Thumbs.db

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
EOF
    print_success ".gitignore created"
fi

# Create initial commit
git add .
git commit -m "Initial project setup with Enhanced Geek Projects Methodology v4.1

- Project: $PROJECT_NAME
- Tier: $PROJECT_TIER ($TIER_NAME)
- Template: $TEMPLATE_DIR
- Agent Team: $AGENTS
- Timeline: $TIMELINE

Ready for systematic development!" --quiet

print_success "Initial commit created"

# Show final setup summary
echo ""
echo "🎉 Project setup complete!"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  Project: $PROJECT_NAME"
echo "  Directory: $PROJECT_DIR"
echo "  Tier: $PROJECT_TIER ($TIER_NAME)"
echo "  Timeline: $TIMELINE"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📁 Created Structure:"
echo "   ├── CLAUDE.md (Universal development guide)"
echo "   ├── planning-docs/ (Sprint and feature templates)"
echo "   ├── client-approvals/ (Stakeholder sign-offs)"
echo "   ├── documentation/ (Project documentation)"
if [ -d "src" ]; then
    echo "   ├── src/ (Source code directory)"
fi
if [ -f "package.json" ]; then
    echo "   └── package.json (Tier-appropriate dependencies)"
fi
echo ""
echo "🚀 Next Steps:"
echo ""
echo "1. Navigate to project directory:"
echo "   cd $PROJECT_DIR"
echo ""
if [ -f "package.json" ]; then
    echo "2. Install dependencies:"
    echo "   npm install"
    echo ""
    echo "3. Start development server:"
    echo "   npm run dev"
    echo ""
fi
echo "4. Complete planning phase:"
echo "   - Create feature specifications in planning-docs/feature-specs/"
echo "   - Plan sprints using planning-docs/sprint-planning-template.md"
echo "   - Get stakeholder approval before implementation"
echo ""
echo "5. Begin systematic development:"
echo "   - Follow one feature per sprint approach"
echo "   - Use agent team for tier-appropriate expertise"
echo "   - Maintain client checkpoints for approval"
echo ""
echo "📖 Methodology Compliance:"
echo "   ✅ Universal template system"
echo "   ✅ Tier-appropriate agent team"
echo "   ✅ Sprint-based development planning"
echo "   ✅ Systematic quality assurance"
echo ""
echo "Built with Enhanced Geek Projects Methodology v4.1"
echo "Professional development results guaranteed! 🎯"