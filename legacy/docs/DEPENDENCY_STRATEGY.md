# Dependency Management Strategy Template

## Project: [PROJECT_NAME]
**Last Updated**: [DATE]
**Strategy Version**: 3.0

## Core Principles

### Balanced Approach
- **New projects**: Use latest stable versions (`@latest`)
- **Established projects**: Allow patch and minor updates automatically
- **Security first**: Never block security patches
- **Test before merge**: All dependency updates go through CI

## New Projects

**Always start with the latest stable versions:**

```bash
# Recommended: Use create-next-app with latest
npx create-next-app@latest my-project --typescript --tailwind --app
```

**Do NOT pin to specific versions on day one.** You want:
- Latest security patches
- Latest bug fixes
- No technical debt from the start

**After your first production deploy**, consider pinning major versions to avoid surprise breaking changes.

## Established Projects

### Dependency Update Policy

| Update Type | Auto-merge | Rationale |
|-------------|------------|-----------|
| Patch (x.x.1 → x.x.2) | ✅ Yes | Bug fixes, security patches |
| Minor (x.1.x → x.2.x) | ✅ Yes | New features, security fixes often land here |
| Major (1.x.x → 2.x.x) | ❌ Manual | Breaking changes require testing |

### Why Allow Minor Updates?

Security fixes frequently ship as minor versions:
- Next.js CVE-2024-46982 (cache poisoning) - fixed in minor release
- React security patches often come in minors
- Blocking minors = blocking security fixes

## Dependabot Configuration

Use the provided `.github/workflows/dependabot.yml` which:
- Runs weekly security checks
- Auto-creates PRs for all patch/minor updates
- Only blocks major version bumps
- Triggers full CI test suite on each PR

## CI Security Gates

All dependency PRs must pass:
1. `npm audit --audit-level=moderate` - Block on moderate+ vulnerabilities
2. `npm run build` - Ensure build still works
3. `npx tsc --noEmit` - TypeScript must compile
4. `npm run lint` - No new lint errors

## Security Monitoring

### Required Setup
1. **Enable GitHub Security Alerts** in repository settings
2. **Enable Dependabot Security Updates** (separate from version updates)
3. **Subscribe to framework advisories**:
   - [Next.js Security](https://github.com/vercel/next.js/security/advisories)
   - [React Security](https://github.com/facebook/react/security/advisories)

### Weekly Routine
```bash
# Check for vulnerabilities
npm audit

# Check for outdated packages
npm outdated

# Update all within semver ranges
npm update
```

## Troubleshooting

```bash
# Clear caches and reinstall
rm -rf .next node_modules && npm install

# Check dependency tree
npm ls

# Fix audit issues automatically (when safe)
npm audit fix

# See what would update
npm update --dry-run
```

## Migration Notes

### Tailwind v3 → v4
- v4 is stable as of January 2025
- New projects should use v4
- Existing v3 projects can migrate when ready
- See: https://tailwindcss.com/docs/upgrade-guide

### React 18 → 19
- React 19 is stable
- New projects should use React 19
- Migration guide: https://react.dev/blog/2024/04/25/react-19-upgrade-guide
