# [Project Name] - SaaS Application PRD

## Project Overview
- **Vision**: [Comprehensive problem statement]
- **Market Need**: [User pain points and competitive landscape]
- **Business Model**: [How this creates value]

## User Research
### Primary Persona
- **Demographics**: [Age, occupation, tech comfort]
- **Goals**: [What they want to achieve]
- **Pain Points**: [Current frustrations]
- **Usage Context**: [When/where/how they'll use it]

## Feature Specification
### Core Feature Set (P0 - Must Have)
#### Authentication & User Management
- [ ] Google SSO integration
- [ ] User profiles and preferences
- [ ] Session management
- [ ] Account security features

#### [Feature Group 1]
- [ ] Specific feature requirements
- [ ] Acceptance criteria
- [ ] User flow descriptions

### Enhanced Features (P1 - Should Have)
- [ ] Advanced functionality
- [ ] Nice-to-have improvements

### Future Features (P2 - Could Have)
- [ ] Long-term vision features

## Technical Architecture
### Database Design (Notion Backend)
**Collections:**
- Users: Authentication and profile data
- [Entity 1]: Core business data
- [Entity 2]: Related data with relationships
- Settings: Configuration and preferences

### Dependency Management Strategy

#### Critical Dependencies (Stability-First Pinning)
- **React & React-DOM**: ^19.1.0 (stable)
- **Tailwind CSS**: ^4.1.0 (stable since January 2025)
- **Next.js**: ^15.3.0 (stable)
- **TypeScript**: ^5.7.0 (stable)

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

### Security Framework
- [ ] Comprehensive input validation
- [ ] Advanced authentication features
- [ ] Data encryption and protection
- [ ] Audit logging
- [ ] Privacy compliance (GDPR considerations)

### Performance & Scalability
- [ ] Caching strategy
- [ ] API optimisation
- [ ] Database query optimisation
- [ ] CDN configuration

## Quality Assurance
### Testing Strategy
- [ ] Unit testing for business logic
- [ ] Integration testing for APIs
- [ ] End-to-end testing for user flows
- [ ] Security testing and audit
- [ ] Performance testing under load

### Quality Gates
#### Development Phase
- [ ] Feature completeness verified
- [ ] Code review completed
- [ ] Unit tests passing
- [ ] Integration tests passing

#### Pre-Launch Phase
- [ ] Security audit completed
- [ ] Performance benchmarks achieved
- [ ] User acceptance testing passed
- [ ] Documentation completed

#### Launch Phase
- [ ] Deployment pipeline tested
- [ ] Monitoring systems active
- [ ] Rollback procedures verified
- [ ] Support processes ready

## Launch Criteria
- [ ] All P0 features implemented
- [ ] Security audit passed
- [ ] Performance benchmarks achieved
- [ ] User testing completed
- [ ] Documentation completed
- [ ] Support processes established

## 🤖 Agent Coordination Strategy

### Project Tier Assessment
**Tier**: 3 - SaaS Application
**Complexity**: Complex business applications, enterprise tools
**Agent Team**: Enterprise coordination for large projects

### Agent Team Assignment

**Core Agents for This Tier:**
- `product-manager-orchestrator` - Multi-agent coordination for enterprise complexity
- `systems-architect` - Database design and API structure
- `security-threat-analyst` - Authentication and security
- `backend-reliability-engineer` - Server-side systems
- `frontend-ux-specialist` - Interactive UI components
- `performance-optimizer` - Speed optimization
- `dependency-strategist` - Package compatibility
- `qa-test-engineer` - Testing strategies
- `geek-projects-quality-gate` - Quality enforcement
- Additional specialists as needed

### Agent Activation Patterns

**Planning Phase:**
```bash
"Use product-manager-orchestrator to coordinate enterprise-level planning for this Tier 3 project"
"Use systems-architect to plan scalable technical architecture and database design"
"Use security-threat-analyst to identify comprehensive security requirements"
"Use dependency-strategist to assess enterprise technology stack requirements"
```

**Implementation Phase:**
```bash
"Use product-manager-orchestrator to coordinate multi-agent development teams"
"Use systems-architect to implement scalable database structure and API design"
"Use security-threat-analyst to implement enterprise-grade authentication and security"
"Use backend-reliability-engineer to implement reliable server-side systems"
"Use frontend-ux-specialist to implement complex user interfaces"
"Use performance-optimizer to optimize application performance and scalability"
"Use dependency-strategist for any package decisions"
"Use geek-projects-quality-gate to validate each major feature"
```

**Testing & Launch Phase:**
```bash
"Use qa-test-engineer to implement comprehensive testing including load testing"
"Use product-manager-orchestrator to coordinate comprehensive pre-launch validation"
"Use geek-projects-quality-gate to validate enterprise deployment readiness"
```

### Quality Gates (Agent-Enforced)

**Security Requirements** (security-threat-analyst validation):
- [ ] Comprehensive input validation on all forms and API endpoints
- [ ] Enterprise authentication flow security audit
- [ ] Multi-level authorization controls implementation
- [ ] Advanced security headers configuration
- [ ] Dependency security scan with enterprise standards
- [ ] Session management security with enterprise requirements
- [ ] Privacy compliance (GDPR considerations)
- [ ] Audit logging implementation

**Performance Standards** (performance-optimizer validation):
- [ ] Page load time < 2 seconds
- [ ] Lighthouse score > 95
- [ ] Core Web Vitals: LCP <2.5s, FID <100ms, CLS <0.1
- [ ] API response times optimized for scale
- [ ] Load testing completed
- [ ] Caching strategy implemented
- [ ] CDN configuration optimized

**Dependency Health** (dependency-strategist validation):
- [ ] Conservative pinning strategy implemented
- [ ] Security vulnerabilities resolved
- [ ] Update procedures documented
- [ ] Build stability verified
- [ ] Enterprise compatibility verified

**Overall Quality** (geek-projects-quality-gate enforcement):
- [ ] All Tier 3 standards met
- [ ] Enterprise methodology compliance verified
- [ ] Comprehensive documentation completeness confirmed
- [ ] Enterprise deployment readiness validated
- [ ] Scalability requirements met

## Post-Launch
- [ ] User onboarding analytics
- [ ] Feature adoption tracking
- [ ] Performance monitoring
- [ ] Security monitoring
- [ ] User feedback collection
- [ ] Regular security reviews
- [ ] Performance optimisation
- [ ] Feature usage analysis
- [ ] Document lessons learned