# Checklists

## Quick Check (After Each Feature)

Run this every time you finish something:

```bash
npm run build
```

Then:
- [ ] Resize browser to 320px - does it work?
- [ ] Click through the feature - any console errors?

**If both pass, commit and move on.**

---

## Full Check (Before Launch)

### Security

```bash
npm audit
```

- [ ] No critical vulnerabilities
- [ ] User inputs are validated (forms use zod or similar)
- [ ] Auth routes are protected
- [ ] No secrets in code (check with `git log -p | grep -i password`)
- [ ] Environment variables used for all credentials
- [ ] Error messages don't leak stack traces or internals
- [ ] Rate limiting on auth endpoints (Tier 2-3)

**Headers to add** (in `next.config.js` or middleware):
```javascript
// next.config.js
const securityHeaders = [
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
]
```

### Performance

```bash
# Run Lighthouse in Chrome DevTools > Lighthouse tab
# Or use CLI:
npx lighthouse https://your-site.vercel.app --view
```

- [ ] Performance score > 90
- [ ] Largest Contentful Paint < 2.5s
- [ ] Cumulative Layout Shift < 0.1
- [ ] All images use `next/image`
- [ ] No render-blocking resources

**Quick wins if score is low:**
- Add `loading="lazy"` to below-fold images
- Use `next/font` for web fonts
- Check for large dependencies with `npx @next/bundle-analyzer`

### Mobile & Accessibility

Test on real device if possible, or use Chrome DevTools device mode.

**Breakpoints to test:**
- [ ] 320px (iPhone SE)
- [ ] 375px (iPhone standard)
- [ ] 768px (tablet)
- [ ] 1024px+ (desktop)

**Accessibility:**
- [ ] Can complete main flow with keyboard only (Tab, Enter, Escape)
- [ ] Focus states are visible
- [ ] Color contrast is sufficient (use Chrome DevTools > Rendering > Emulate vision deficiencies)
- [ ] Images have alt text (or `alt=""` for decorative)
- [ ] Form inputs have labels

### Code Quality

```bash
npx tsc --noEmit    # No type errors
npm run lint        # No lint errors
```

- [ ] No `any` types (search: `grep -r ": any" src/`)
- [ ] No `console.log` left in (search: `grep -r "console.log" src/`)
- [ ] No commented-out code
- [ ] No TODO comments for critical items

### Final Verification

- [ ] Tested main user flow end-to-end
- [ ] Tested on real phone (not just browser resize)
- [ ] Tested in incognito (no cached state)
- [ ] Tested with slow network (DevTools > Network > Slow 3G)
- [ ] All environment variables set in production
- [ ] Client has approved in writing

---

## Copy-Paste Commands

```bash
# Full pre-launch check
npm run build && \
npx tsc --noEmit && \
npm audit && \
echo "✓ All automated checks passed"

# Find console.logs
grep -r "console.log" src/

# Find 'any' types
grep -r ": any" src/

# Check bundle size
npx @next/bundle-analyzer

# Run Lighthouse
npx lighthouse https://your-site.vercel.app --output html --output-path ./lighthouse-report.html
```

---

## Quick Reference

| When | What to check |
|------|---------------|
| After each feature | Build passes, works on mobile |
| End of day | Push your code |
| Before client review | Full visual polish |
| Before launch | Everything above |
| After launch | Live site works, main flow, mobile |

---

## Client Handover (Tier 2-3)

Skip this for personal projects.

### Before Handover
- [ ] Client has admin credentials (use password manager, not email)
- [ ] Client added to Vercel project (Viewer or Admin)
- [ ] Environment variables documented (what they are, not the values)
- [ ] CLAUDE.md updated with current state

### Handover Call (30-60 min)
- [ ] Walk through main admin flows
- [ ] Show how to update content (if CMS)
- [ ] Explain what breaks things (don't touch X, Y, Z)
- [ ] Demo the support process

### After Handover
- [ ] Written confirmation: "I have access and understand how to use this"
- [ ] Check in after 1 week - any issues?
