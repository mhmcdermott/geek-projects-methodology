# Enhanced Geek Projects E.P.C.T. Workflow Commands
# Save this file as ~/.claude/commands/epct-workflow.md

At the end of this message, I will ask you to implement something. Please follow the **Enhanced Explore, Plan, Code, Test (E.P.C.T.)** workflow with integrated dependency management when you start.

## 🔍 EXPLORE Phase
First, systematically explore the codebase and requirements:

**1. Codebase Discovery**
Use parallel subagents to:
- Read and understand all relevant files for the implementation
- Identify existing patterns and architectural decisions
- Review CLAUDE.md and DEPENDENCY_STRATEGY.md for project context
- Find similar implementations as examples
- Understand current dependency constraints and pinned versions

**2. Requirements Analysis**
- Clarify the exact requirements and acceptance criteria
- Identify potential edge cases and error scenarios
- Understand performance and security implications
- Assess impact on existing functionality

**3. Dependency Impact Assessment**
- Check if new dependencies are needed
- Verify compatibility with pinned versions (React 19.x, Tailwind 3.x)
- Assess security implications of any new packages
- Review bundle size impact

## 📋 PLAN Phase
Create a detailed implementation plan considering dependency constraints:

**1. Technical Planning**
- Design the implementation approach with clear reasoning
- Plan file structure and component organisation
- Consider performance implications and optimisations
- Design error handling and edge case management
- Plan testing strategy (manual testing procedures)

**2. Dependency Strategy**
- Document any new dependencies required and justify choices
- Verify compatibility with existing dependency strategy
- Plan for conservative installation (pinned versions where critical)
- Consider alternatives if dependencies pose risks

**3. Risk Assessment**
- Identify potential technical challenges
- Plan rollback procedures if implementation fails
- Consider impact on build performance and bundle size
- Plan cache clearing procedures if needed

**4. Quality Planning**
- Define acceptance criteria and testing procedures
- Plan security validation steps
- Design performance benchmarks
- Plan responsive design testing

**Questions Phase**: If there are things you are unsure about or need clarification on, pause here to ask before continuing to implementation.

## 💻 CODE Phase
Implement following dependency-aware best practices:

**1. Conservative Implementation**
- Follow existing codebase patterns and conventions
- Use pinned dependency versions (React 19.1.1, Tailwind 3.x)
- Implement proper TypeScript types throughout
- Add comprehensive error handling
- Follow security best practices (input validation, sanitisation)

**2. Performance-Conscious Development**
- Optimise for Core Web Vitals and Lighthouse scores
- Implement proper loading states and error boundaries
- Use efficient React patterns (useMemo, useCallback where appropriate)
- Optimise images and assets

**3. Dependency Management**
- Install new dependencies conservatively with pinned versions
- Update DEPENDENCY_STRATEGY.md if adding new packages
- Avoid beta or experimental versions
- Document reasoning for any new dependencies

**4. Code Quality**
- Use descriptive variable and function names
- Write self-documenting code with minimal but helpful comments
- Follow consistent formatting (run autoformatting)
- Fix reasonable linter warnings

## 🧪 TEST Phase
Comprehensive testing with dependency validation:

**1. Build and Dependency Testing**
- Verify clean build without cache issues
- Test with fresh `npm install` to ensure reproducibility
- Run `npm audit` to check for security vulnerabilities
- Verify TypeScript compilation without errors

**2. Functionality Testing**
Use parallel subagents to systematically test:
- All primary user flows and features
- Edge cases and error scenarios
- Form validation and error handling
- Authentication flows (if applicable)
- API integrations and data handling

**3. Cross-Platform Testing**
- Mobile responsiveness across different screen sizes
- Cross-browser compatibility (Chrome, Firefox, Safari, Edge)
- Touch interactions and mobile-specific behaviours
- Performance on slower devices/connections

**4. Performance and Security Validation**
- Run Lighthouse audit and verify scores > 90
- Check Core Web Vitals (LCP, FID, CLS)
- Validate security headers and CSP
- Test input sanitisation and validation
- Verify no sensitive data exposure

**5. Integration Testing**
- Test with external APIs and services
- Verify database operations and data persistence
- Test authentication and authorisation flows
- Validate email functionality and form submissions

## 🔄 Problem Resolution
If testing reveals issues:

**1. Build Issues**
- Clear Next.js cache: `rm -rf .next`
- Clear node_modules: `rm -rf node_modules && npm install`
- Check for TypeScript errors (often root cause)
- Verify dependency compatibility
- Test in clean environment

**2. Functionality Issues**
- Return to PLAN phase and reassess approach
- Review implementation against requirements
- Check for missed edge cases or error scenarios
- Consider alternative implementation approaches

**3. Performance Issues**
- Profile bundle size and loading performance
- Optimise images and assets
- Review JavaScript execution and blocking
- Consider code splitting and lazy loading

## 📋 Completion Report
When satisfied with implementation, create a comprehensive report:

**1. Implementation Summary**
- What was built and why
- Key technical decisions and their justifications
- Any challenges encountered and how they were resolved
- Performance benchmarks achieved

**2. Dependency Report**
- Any new dependencies added and why
- Changes to DEPENDENCY_STRATEGY.md
- Security audit results
- Build performance impact

**3. Testing Results**
- All functionality tested and verified
- Performance scores achieved
- Cross-platform compatibility confirmed
- Security validation completed

**4. Future Considerations**
- Potential improvements identified
- Technical debt considerations
- Maintenance requirements
- Scalability implications

## 🚨 Critical Reminders
**Always:**
- Clear .next cache before diagnosing build issues
- Test new dependencies in feature branches first
- Pin critical dependencies (React, Tailwind, Next.js)
- Run security audits after significant changes
- Document dependency changes in DEPENDENCY_STRATEGY.md

**Never:**
- Update to Tailwind CSS v4 (currently beta with breaking changes)
- Install beta or experimental versions in production code
- Skip TypeScript error resolution (often root cause of issues)
- Make major dependency updates without thorough testing
- Ignore cache clearing when troubleshooting

## 💡 Tier-Specific Considerations

**Tier 1 (Simple Sites): Streamlined E.P.C.T.**
- Focus on speed while maintaining stability
- Minimal dependency additions
- Emphasis on performance and SEO
- Simple, clean implementations

**Tier 2 (Interactive Apps): Comprehensive E.P.C.T.**
- Thorough security considerations
- Authentication and authorisation planning
- Database integration planning
- Advanced testing procedures

**Tier 3 (SaaS Applications): Enterprise E.P.C.T.**
- Extensive planning and architecture phases
- Enterprise-grade security implementation
- Comprehensive testing including load testing
- Detailed documentation and maintenance planning

---

Now implement the requested feature following this Enhanced E.P.C.T. workflow with integrated dependency management.

$COMMANDS