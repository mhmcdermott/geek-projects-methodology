# Claude AI Assistant Instructions - Enhanced Template

## Project: [PROJECT_NAME]
**Project Type**: [Tier 1: Simple Site / Tier 2: Interactive App / Tier 3: SaaS Application]
**Tech Stack**: Next.js + TypeScript + Tailwind CSS + [Database/Auth/Other]
**Last Updated**: [DATE]
**Methodology Version**: Enhanced E.P.C.T. v2.0

---

## 🎯 Project Context

### Business Objectives
- **Primary Goal**: [What problem does this solve?]
- **Target Users**: [Who will use this?]
- **Success Metrics**: [How do we measure success?]

### Technical Requirements
- **Performance Target**: Lighthouse score >90 (Tier 1) / >90 (Tier 2) / >95 (Tier 3)
- **Browser Support**: Chrome, Firefox, Safari, Edge (latest 2 versions)
- **Mobile Requirements**: Mobile-first responsive design
- **Accessibility**: WCAG 2.1 AA compliance

---

## 🏗 Technical Architecture

### Core Technology Stack
- **Framework**: Next.js [VERSION] with App Router
- **Language**: TypeScript for comprehensive type safety
- **Styling**: Tailwind CSS [VERSION] - **CRITICAL: Stay on v3.x, avoid v4 beta**
- **Database**: [Notion API / Supabase / PostgreSQL / Other]
- **Authentication**: Google OAuth via NextAuth.js
- **Deployment**: Vercel with [staging/production] environments
- **Email**: Resend for transactional emails

### Database Schema (if applicable)
```
[Define your database structure here]
Users: id, email, name, created_at
[Other entities]: [fields and relationships]
```

---

## 🔧 Enhanced Dependency Management (CRITICAL)

### Conservative Pinning Strategy
```json
{
  "react": "19.1.1",
  "react-dom": "19.1.1",
  "next": "[TESTED_VERSION]",
  "typescript": "^5.6.3",
  "tailwindcss": "^3.4.17"
}
```

### Known Problematic Dependencies
- **Tailwind CSS v4**: Currently in beta - causes breaking changes and build failures
- **[Other known issues]**: [Document any other problematic packages]

### Dependency Health Monitoring
- **Security Audits**: Run `npm audit` before any deployment
- **Update Testing**: All dependency updates must be tested in feature branches
- **Documentation**: Update DEPENDENCY_STRATEGY.md for any changes
- **Automated Protection**: Dependabot configured for security patches only

---

## 🚀 Enhanced E.P.C.T. Workflow

### Agent Selection by Phase
**🔍 EXPLORE Phase**:
- Primary: `dependency-strategist` for technology assessment
- Supporting: `systems-architect` for technical discovery
- Research: Review existing patterns and architecture decisions

**📋 PLAN Phase**:
- Lead: `systems-architect` for technical planning
- Security: `security-threat-analyst` for security architecture
- Quality: `geek-projects-quality-gate` for standards validation

**💻 CODE Phase**:
- Frontend: `frontend-ux-specialist` for UI/UX implementation
- Backend: `backend-reliability-engineer` for server-side logic
- Performance: `performance-optimizer` for optimization
- Dependencies: `dependency-strategist` for package management

**🧪 TEST Phase**:
- Testing: `qa-test-engineer` for comprehensive validation
- Security: `security-threat-analyst` for security audit
- Performance: `performance-optimizer` for benchmarks
- Quality Gates: `geek-projects-quality-gate` for final validation

---

## 🛠 Development Commands & Troubleshooting

### Essential Commands
```bash
# Development
npm run dev                    # Start development server
npm run build                  # Production build
npm run type-check            # TypeScript validation
npm run lint                  # ESLint checking

# Dependency Management
npm audit                     # Security vulnerability scan
npm outdated                  # Check for outdated packages
npm ls                        # Dependency tree analysis

# Cache Management (CRITICAL FOR TROUBLESHOOTING)
rm -rf .next                  # Clear Next.js cache
rm -rf node_modules && npm install  # Fresh dependency install
```

### Build Issue Resolution Protocol
If you encounter build errors or module resolution issues:

1. **Clear Next.js cache**: `rm -rf .next`
2. **Clear node_modules**: `rm -rf node_modules && npm install`
3. **Check TypeScript errors**: Often the root cause of build failures
4. **Verify dependency compatibility**: Check for version conflicts
5. **Test in clean environment**: Ensure issue isn't local configuration

### Emergency Troubleshooting
- **Module Resolution Errors**: Clear both .next and node_modules, reinstall
- **TypeScript Compilation Failures**: Fix type errors before proceeding
- **Build Performance Issues**: Check for circular dependencies or large bundles
- **Auth/API Issues**: Verify environment variables and API endpoints

---

## 🔒 Security Implementation

### Authentication & Authorization
- **Authentication Method**: Google OAuth via NextAuth.js
- **Session Management**: JWT tokens with secure httpOnly cookies
- **Protected Routes**: [List protected pages/APIs]
- **Authorization Levels**: [Define user roles if applicable]

### Security Checklist
- [ ] Input validation on all forms and API endpoints
- [ ] CSRF protection enabled
- [ ] XSS prevention (Content Security Policy)
- [ ] Secure headers implemented (HSTS, X-Frame-Options)
- [ ] Environment variables properly secured
- [ ] No sensitive data in client-side code

---

## 📊 Performance Standards

### Tier-Specific Targets
**[Current Tier] Performance Requirements**:
- Page Load Time: < [2-3] seconds
- Lighthouse Performance Score: > [90-95]
- Core Web Vitals: LCP <2.5s, FID <100ms, CLS <0.1
- Mobile Performance: Optimized for 3G networks

### Optimization Strategies
- **Image Optimization**: Next.js Image component with WebP format
- **Code Splitting**: Route-based splitting for optimal loading
- **Caching Strategy**: Static generation where possible
- **Bundle Analysis**: Regular bundle size monitoring

---

## 🧪 Quality Assurance Protocol

### Testing Strategy
- **Unit Testing**: Critical business logic components
- **Integration Testing**: API endpoints and database operations
- **End-to-End Testing**: Complete user workflows
- **Security Testing**: Authentication flows and input validation
- **Performance Testing**: Load testing for production readiness

### Quality Gates
Before any deployment:
- [ ] All tests passing
- [ ] Security audit clean (`npm audit`)
- [ ] Performance benchmarks met
- [ ] Dependency health verified
- [ ] Code review completed
- [ ] Documentation updated

---

## 📈 Project-Specific Implementation Notes

### Custom Features
[Document any project-specific implementations, APIs, or custom logic]

### Integration Points
[List external services, APIs, webhooks, or third-party integrations]

### Environment Configuration
```bash
# Required Environment Variables
NEXTAUTH_URL=
NEXTAUTH_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
[Other environment variables]
```

---

## 🚨 Critical Reminders for Claude

### Always Do:
1. **Check DEPENDENCY_STRATEGY.md** before making any dependency changes
2. **Clear caches** (`rm -rf .next && rm -rf node_modules`) when diagnosing build issues
3. **Run security audits** (`npm audit`) after significant changes
4. **Test in feature branches** for any dependency updates
5. **Follow E.P.C.T. methodology** with appropriate agent selection
6. **Validate against quality gates** before considering work complete

### Never Do:
1. **Update to Tailwind CSS v4** (beta version with breaking changes)
2. **Install beta/experimental versions** in production code
3. **Skip TypeScript error resolution** (often root cause of issues)
4. **Make major dependency updates** without comprehensive testing
5. **Ignore cache clearing** when troubleshooting build issues
6. **Deploy without running quality gates**

---

## 📝 Development Log

### Recent Changes
- [DATE]: [Description of significant changes]
- [DATE]: [Dependency updates or architectural changes]

### Known Issues
- [List any current technical debt or known issues]

### Future Improvements
- [List planned enhancements or optimizations]

---

**Remember**: This project follows the Enhanced Geek Projects E.P.C.T. methodology with integrated dependency management. Always prioritize stability, security, and performance over feature velocity. When in doubt, consult the appropriate specialist agent for the current phase of work.