# Geek Projects Methodology

A streamlined development methodology for building high-quality web applications using Claude AI as a development partner. Focus on thorough planning, secure implementation, and proper documentation while avoiding over-complexity.

## 🎯 Core Principles

1. **Plan First, Code Second** - Every project starts with a comprehensive PRD
2. **Quality Over Speed** - Security and performance from day one
3. **Simple but Systematic** - Avoid over-engineering, use proven patterns

## 📊 Project Classification

### Tier 1: Simple Sites
- **Examples**: Marketing sites, portfolios, blogs
- **Timeline**: 1-2 weeks
- **Features**: Notion CMS, contact forms, SEO optimisation

### Tier 2: Interactive Apps
- **Examples**: Dashboards, tools, user applications
- **Timeline**: 2-6 weeks  
- **Features**: User authentication, database operations, API integrations

### Tier 3: SaaS Applications
- **Examples**: Business applications, complex tools
- **Timeline**: 2-6 months
- **Features**: Multi-user systems, advanced integrations

## 🔄 Development Workflow

### Planning Phase (Claude Chat)
1. Project Definition
2. PRD Creation
3. Task Breakdown
4. Architecture Planning

### Execution Phase (Claude Code)
1. Environment Setup
2. Feature Implementation
3. Quality Gates
4. Testing & Deployment

### Documentation Phase (Claude Chat + Notion)
1. Project Documentation
2. Lessons Learned
3. Process Improvement

## 🛠 Technology Stack

- **Frontend**: Next.js 14+ with TypeScript
- **Styling**: Tailwind CSS
- **Database**: Notion API
- **Authentication**: Google OAuth via NextAuth.js
- **Deployment**: Vercel
- **Email**: Resend

## 📝 Templates

- [Simple Site PRD Template](./templates/simple-site-prd.md)
- [Interactive App PRD Template](./templates/interactive-app-prd.md)
- [SaaS Application PRD Template](./templates/saas-app-prd.md)

## ✅ Quality Standards

- [Security Checklist](./checklists/security-checklist.md)
- [Performance Standards](./checklists/performance-checklist.md)
- [Design Standards](./checklists/design-checklist.md)

## 🔧 Dependency Management

This methodology now includes comprehensive dependency management based on real-world learnings:

### Conservative Pinning Strategy
- **React & React-DOM**: Pinned to stable versions (19.1.1)
- **Tailwind CSS**: Stay on v3.x, avoid v4 beta
- **Next.js**: Pin to tested stable versions
- **TypeScript**: Maintain compatibility

### Automated Protection
- **Dependabot**: Configured for security patches only
- **CI/CD Pipeline**: Tests all dependency updates
- **Build Troubleshooting**: Systematic cache clearing procedures

### Key Files
- `/docs/DEPENDENCY_STRATEGY.md` - Template for project dependency docs
- `/templates/github-workflows/dependabot.yml` - Automation configuration
- `/templates/github-workflows/dependency-test.yml` - Testing pipeline
- `/templates/claude-context/CLAUDE.md.template` - AI assistant guidance

### Quick Start
1. Copy appropriate template files to your project
2. Configure Dependabot with provided yml
3. Set up CI/CD testing pipeline
4. Pin critical dependencies in package.json
5. Create DEPENDENCY_STRATEGY.md documentation

### Build Issue Resolution
If you encounter module resolution or build errors:
```bash
rm -rf .next                          # Clear Next.js cache
rm -rf node_modules && npm install    # Fresh dependency install
npm run build                         # Test build process
```

## 🚀 Getting Started

1. Choose your project tier
2. Use the appropriate PRD template
3. Follow the development workflow
4. Apply quality gates consistently
5. Document lessons learned

## 📖 Full Documentation

Complete methodology documentation is available in [Notion](https://www.notion.so/23c1496dd4a381fab1f6c6e1cb767693).

## 🤝 Contributing

This methodology evolves based on project learnings. Improvements and refinements are captured after each project completion.

---

**Status**: ✅ Active methodology in use
**Last Updated**: July 2025