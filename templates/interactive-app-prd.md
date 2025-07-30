# [Project Name] - Interactive Application PRD

## Project Overview
- **Vision**: [Problem statement and solution]
- **Target Users**: [Primary user personas]
- **Success Metrics**: [Key performance indicators]

## User Stories
### Core User Flow
1. [Discovery/Landing]
2. [Authentication/Onboarding]
3. [Primary Feature Usage]
4. [Return User Experience]

### Key Features (Must Have)
- [ ] Feature 1: [Description and acceptance criteria]
- [ ] Feature 2: [Description and acceptance criteria]
- [ ] Feature 3: [Description and acceptance criteria]

## Technical Architecture
### Data Management
- Notion database structure: [Define collections and relationships]
- Google Workspace integrations: [Specify which APIs]
- User authentication: Google OAuth implementation

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

### Security Requirements
- [ ] Input validation on all forms
- [ ] CSRF protection
- [ ] XSS prevention
- [ ] Rate limiting on API endpoints
- [ ] Secure session management

### Performance Requirements
- [ ] Page load time < 2 seconds
- [ ] Mobile Lighthouse score > 90
- [ ] Responsive design across all devices

## Quality Gates
### Security Review
- [ ] All user inputs validated
- [ ] Authentication flow tested
- [ ] Session management verified
- [ ] API endpoints secured

### Performance Review
- [ ] Page load speeds measured
- [ ] Mobile performance optimised
- [ ] Core Web Vitals achieved

### User Experience Review
- [ ] User flows tested end-to-end
- [ ] Mobile responsiveness verified
- [ ] Error states handled gracefully

## Launch Criteria
- [ ] All core features implemented and tested
- [ ] Security review completed
- [ ] Performance targets achieved
- [ ] User testing completed
- [ ] Documentation updated

## 🤖 Agent Coordination Strategy

### Project Tier Assessment
**Tier**: 2 - Interactive App
**Complexity**: Dashboards, tools, user applications
**Agent Team**: Comprehensive team for complex features

### Agent Team Assignment

**Core Agents for This Tier:**
- `systems-architect` - Database design and API structure
- `security-threat-analyst` - Authentication and security
- `backend-reliability-engineer` - Server-side systems
- `frontend-ux-specialist` - Interactive UI components
- `performance-optimizer` - Speed optimization
- `dependency-strategist` - Package compatibility
- `qa-test-engineer` - Testing strategies
- `geek-projects-quality-gate` - Quality enforcement
- `epct-orchestrator` - Workflow coordination

### Agent Activation Patterns

**Planning Phase:**
```bash
"Use epct-orchestrator to coordinate comprehensive planning for this Tier 2 project"
"Use systems-architect to plan technical architecture and database design"
"Use security-threat-analyst to identify security requirements"
"Use dependency-strategist to assess technology stack requirements"
```

**Implementation Phase:**
```bash
"Use systems-architect to implement database structure and API design"
"Use security-threat-analyst to implement authentication and input validation"
"Use backend-reliability-engineer to implement server-side logic"
"Use frontend-ux-specialist to implement interactive user interface"
"Use performance-optimizer to optimize application performance"
"Use dependency-strategist for any package decisions"
"Use geek-projects-quality-gate to validate each major feature"
```

**Testing & Launch Phase:**
```bash
"Use qa-test-engineer to implement comprehensive testing strategy"
"Use epct-orchestrator to coordinate comprehensive pre-launch validation"
"Use geek-projects-quality-gate to validate deployment readiness"
```

### Quality Gates (Agent-Enforced)

**Security Requirements** (security-threat-analyst validation):
- [ ] Input validation on all forms and API endpoints
- [ ] Authentication flow security audit
- [ ] Authorization controls implementation
- [ ] Security headers configuration
- [ ] Dependency security scan
- [ ] Session management security

**Performance Standards** (performance-optimizer validation):
- [ ] Page load time < 2 seconds
- [ ] Lighthouse score > 90
- [ ] Core Web Vitals: LCP <2.5s, FID <100ms, CLS <0.1
- [ ] API response times optimized
- [ ] Mobile performance verified

**Dependency Health** (dependency-strategist validation):
- [ ] Conservative pinning strategy implemented
- [ ] Security vulnerabilities resolved
- [ ] Update procedures documented
- [ ] Build stability verified

**Overall Quality** (geek-projects-quality-gate enforcement):
- [ ] All Tier 2 standards met
- [ ] Methodology compliance verified
- [ ] Documentation completeness confirmed
- [ ] Deployment readiness validated

## Post-Launch
- [ ] Monitor user engagement metrics
- [ ] Track feature usage
- [ ] Performance monitoring
- [ ] User feedback collection
- [ ] Document lessons learned