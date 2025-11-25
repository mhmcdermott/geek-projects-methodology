# Dependency Management Strategy Template

## Project: [PROJECT_NAME]
**Last Updated**: [DATE]
**Strategy Version**: 2.0

## Core Principles

### Conservative Dependency Approach
- **Pin critical dependencies** to stable versions
- **Avoid beta/pre-release** versions in production
- **Security patches only** for automated updates
- **Manual review required** for framework updates
- **Test on feature branch** before merging dependency updates

## Current Dependency Pinning (New Projects)

### Critical Dependencies (Pinned)
```json
{
  "react": "^19.1.0",
  "react-dom": "^19.1.0",
  "tailwindcss": "^4.1.0",
  "next": "^15.3.0",
  "typescript": "^5.7.0"
}
```

**Reasoning**: These versions are tested and stable as of November 2025. Updates require manual testing.

### Legacy Projects (Tailwind v3)
```json
{
  "tailwindcss": "^3.4.17"
}
```
Existing projects on Tailwind v3 can remain stable. Migration to v4 is recommended but not required.

## Tailwind CSS v4 (Stable - Default for New Projects)

### Status Update (November 2025)
- **Released**: January 22, 2025 (stable)
- **Current**: v4.1.x
- **Recommendation**: Use v4 for all new projects

### Key Changes from v3
- **CSS-first configuration**: No `tailwind.config.js` required
- **Automatic content detection**: No manual content paths needed
- **First-party Vite plugin**: `@tailwindcss/vite`
- **Performance**: 5-100x faster builds

### New Project Setup (Tailwind v4)
```bash
npm install tailwindcss @tailwindcss/vite
```

```css
/* app/globals.css */
@import "tailwindcss";
```

```ts
// vite.config.ts (or next.config.ts with Vite)
import tailwindcss from '@tailwindcss/vite'

export default {
  plugins: [tailwindcss()]
}
```

### Migration Guide (v3 → v4)
For existing projects, see official migration guide: https://tailwindcss.com/docs/upgrade-guide

## Known Considerations

### Tailwind v4 Plugin Compatibility
- Check third-party Tailwind plugins for v4 support before using
- `@tailwindcss/forms`, `@tailwindcss/typography` have v4 versions
- Some community plugins may still require v3

## Update Testing Procedures

### Before Any Update
1. **Create feature branch** for dependency updates
2. **Clear caches**: `rm -rf .next && rm -rf node_modules`
3. **Fresh install**: `npm install`
4. **Test core functionality** thoroughly
5. **Run build process** and verify success
6. **Check TypeScript compilation**
7. **Run Lighthouse audit** for performance impact

### Testing Checklist
- [ ] All pages load without errors
- [ ] All interactive features work
- [ ] Build completes successfully
- [ ] TypeScript compiles without errors
- [ ] Performance benchmarks maintained
- [ ] No console errors or warnings

## Troubleshooting Commands

```bash
# Clear caches
rm -rf .next
rm -rf node_modules && npm install

# Check dependency tree
npm ls

# Audit security issues
npm audit

# Test build process
npm run build

# Check for outdated packages
npm outdated
```