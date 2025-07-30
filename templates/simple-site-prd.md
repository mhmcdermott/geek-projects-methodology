# [Project Name] - Simple Site PRD

## Project Overview
- **Purpose**: [What problem does this solve?]
- **Target Users**: [Who will use this?]
- **Success Criteria**: [How do we measure success?]

## Core Requirements
- [ ] Responsive design (mobile-first)
- [ ] Contact form with email integration
- [ ] SEO optimisation (meta tags, sitemap)
- [ ] Google Analytics integration
- [ ] Performance target: 90+ Lighthouse score

## Content Requirements
- [ ] Homepage with clear value proposition
- [ ] About page with background/story
- [ ] Contact page with form
- [ ] [Additional pages as needed]

## Technical Specifications
- [ ] Notion CMS for content management
- [ ] Resend for email delivery
- [ ] Vercel deployment
- [ ] Security headers implementation

### Dependency Management Strategy

#### Critical Dependencies (Conservative Pinning)
- **React & React-DOM**: Pin to stable major version (e.g., "19.1.1")
- **Tailwind CSS**: Stay on stable v3.x, avoid v4 beta
- **Next.js**: Pin to tested stable version
- **TypeScript**: Pin to compatible version

#### Update Testing Requirements
- [ ] Create feature branch for dependency updates
- [ ] Clear caches: `rm -rf .next && rm -rf node_modules`
- [ ] Test all core functionality
- [ ] Verify build process completes
- [ ] Check TypeScript compilation
- [ ] Run performance audit
- [ ] Document any issues in DEPENDENCY_STRATEGY.md

#### Launch Criteria Addition
- [ ] DEPENDENCY_STRATEGY.md created and complete
- [ ] CLAUDE.md includes dependency management section
- [ ] Dependabot configured with appropriate ignore rules
- [ ] CI/CD pipeline tests dependency updates
- [ ] All critical dependencies pinned to stable versions
- [ ] Security audit passes: `npm audit`

## Launch Checklist
- [ ] All content populated and reviewed
- [ ] Contact form tested
- [ ] Mobile responsiveness verified
- [ ] SEO elements implemented
- [ ] Analytics tracking confirmed
- [ ] Performance benchmarks met

## Quality Gates
- [ ] Security review completed
- [ ] Performance benchmarks achieved (Lighthouse > 90)
- [ ] Mobile responsiveness verified
- [ ] All forms tested
- [ ] Content reviewed and approved

## 🤖 Agent Coordination Strategy

### Project Tier Assessment
**Tier**: 1 - Simple Site
**Complexity**: Marketing sites, portfolios, blogs
**Agent Team**: Streamlined team for speed with stability

### Agent Team Assignment

**Core Agents for This Tier:**
- `frontend-ux-specialist` - Responsive design and UX implementation
- `dependency-strategist` - Conservative dependency management
- `geek-projects-quality-gate` - Quality standards enforcement
- `epct-orchestrator` - Workflow coordination

### Agent Activation Patterns

**Planning Phase:**
```bash
"Use epct-orchestrator to coordinate comprehensive planning for this Tier 1 project"
"Use dependency-strategist to assess technology stack requirements for simple site"
```

**Implementation Phase:**
```bash
"Use frontend-ux-specialist to implement responsive design and user interface"
"Use dependency-strategist for any package decisions"
"Use geek-projects-quality-gate to validate each major feature"
```

**Testing & Launch Phase:**
```bash
"Use epct-orchestrator to coordinate comprehensive pre-launch validation"
"Use geek-projects-quality-gate to validate deployment readiness"
```

### Quality Gates (Agent-Enforced)

**Security Requirements** (security-threat-analyst validation):
- [ ] Input validation implementation (contact forms)
- [ ] Security headers configuration
- [ ] Dependency security scan

**Performance Standards** (performance-optimizer validation):
- [ ] Page load time < 3 seconds
- [ ] Lighthouse score > 90
- [ ] Mobile responsiveness verified
- [ ] Core Web Vitals compliance

**Dependency Health** (dependency-strategist validation):
- [ ] Conservative pinning strategy implemented
- [ ] Security vulnerabilities resolved
- [ ] Update procedures documented
- [ ] Build stability verified

**Overall Quality** (geek-projects-quality-gate enforcement):
- [ ] All Tier 1 standards met
- [ ] Methodology compliance verified
- [ ] Documentation completeness confirmed
- [ ] Deployment readiness validated

## Post-Launch
- [ ] Monitor analytics for user behaviour
- [ ] Track contact form submissions
- [ ] Performance monitoring
- [ ] Document lessons learned