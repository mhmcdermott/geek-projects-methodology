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

## Post-Launch
- [ ] Monitor analytics for user behaviour
- [ ] Track contact form submissions
- [ ] Performance monitoring
- [ ] Document lessons learned