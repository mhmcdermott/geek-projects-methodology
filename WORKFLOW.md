# Workflow

## New Project Setup

### 1. Create Project (2 min)

```bash
npx create-next-app@latest my-project --typescript --tailwind --app
cd my-project
npm run dev
```

Verify: You should see the Next.js welcome page at `localhost:3000`.

### 2. Add CLAUDE.md (5 min)

Copy `templates/CLAUDE.md` to your project root and fill it in. This gives context to Claude Code and helps you stay focused.

### 3. Set Up Git (1 min)

```bash
git init
git add .
git commit -m "Initial setup"
```

### 4. Connect to Vercel (5 min)

1. Push to GitHub
2. Import in Vercel dashboard
3. Deploy

Now you have CI/CD. Every push to main deploys automatically.

---

## Daily Development

### The Loop

```
1. Pick one feature from your list
2. Build it until it works
3. Quick check: Does it work on mobile? Does build pass?
4. Commit
5. Repeat
```

### Quick Quality Check (after each feature)

```bash
npm run build    # Must pass
```

Then manually:
- Resize browser to 320px width - does it work?
- Click through the feature - any errors in console?

### End of Day

```bash
git push
```

---

## Task Tracking with TodoWrite

Use Claude Code's TodoWrite tool to track multi-step work. This keeps progress visible and prevents losing track across context boundaries.

### When to Use TodoWrite

**Use it when:**
- Task has 3+ distinct steps
- Work spans multiple files
- You might get interrupted or context might compact

**Skip it when:**
- Single file change
- Trivial fix (< 5 minutes)
- One-step task

### How to Structure Todos

Each todo needs two forms:

```typescript
{
  content: "Implement user authentication",     // What to do (imperative)
  status: "in_progress",                        // pending | in_progress | completed
  activeForm: "Implementing user authentication" // What's happening (present continuous)
}
```

### TodoWrite Discipline

1. **Create todos before starting** - Plan the steps
2. **Mark in_progress before working** - One task at a time
3. **Mark completed immediately** - Don't batch completions
4. **Update as scope changes** - Add new todos, remove irrelevant ones

### Example

```
User: "Add user authentication with Google OAuth"

Claude creates todos:
1. [pending] Set up NextAuth with Google provider
2. [pending] Create auth API route
3. [pending] Add protected route layout
4. [pending] Create login/logout buttons
5. [pending] Test auth flow end-to-end

Claude marks #1 in_progress, completes it, marks completed.
Moves to #2, and so on.
```

---

## Background Tasks

Run long-running processes (dev server, watchers) in background so Claude can continue working.

### Dev Server Pattern

```bash
# Start dev server in background
npm run dev  # Use run_in_background: true

# Claude can now:
# - Make code changes
# - Check server output via TaskOutput
# - Verify hot reload worked
```

### When to Use Background Tasks

- Dev servers (`npm run dev`)
- Test watchers (`npm test -- --watch`)
- Build processes for large projects
- Any process that runs continuously

### Handling Stuck Processes

If a background task gets stuck:
1. Check output with TaskOutput
2. Kill if needed with KillShell
3. Restart fresh

---

## Before Client Review

### Polish Phase (Sprint X.5)

This is where you make it look good, not just work.

**Focus on:**
- Spacing and alignment
- Typography hierarchy
- Loading and error states
- Mobile experience
- Transitions and feedback

**Don't:**
- Add new features
- Refactor working code
- "Improve" things that aren't broken

### Getting Sign-Off

1. Schedule a call or send a Loom
2. Walk through every page and feature
3. Ask explicitly: "Is this approved to ship?"
4. Get written confirmation (email is fine)

**Why this matters:** Clients see things differently. They'll catch copy issues, flow problems, and "that's not quite right" things that you've gone blind to. Better to fix now than after QA.

---

## Launch Day

### Pre-Launch Checklist

```bash
# Build must pass
npm run build

# No security issues
npm audit

# Types clean
npx tsc --noEmit
```

**Manual checks:**
- [ ] Tested main user flow end-to-end
- [ ] Tested on real phone
- [ ] Tested in incognito (no cached state)
- [ ] All env vars set in Vercel
- [ ] Client has approved

### Deploy

```bash
git push origin main
```

Vercel deploys automatically.

### Post-Launch (same day)

- [ ] Visit live site
- [ ] Complete the main user flow
- [ ] Check on mobile
- [ ] Verify forms/auth work
- [ ] Check error tracking (if set up)

---

## Retrospective

Do this after every feature (Tier 2-3) or after launch (all tiers).

### Quick Retro (2 min)

Answer these three questions:

1. **What took longer than expected?**
2. **What would you do differently?**
3. **Any patterns to document in CLAUDE.md?**

### Where to Record

- **Small insight**: Add a comment to CLAUDE.md
- **Pattern to reuse**: Add to project's `docs/patterns.md`
- **Methodology improvement**: Open an issue or PR

### Example

```markdown
## Retro: User Auth Feature

**Longer than expected:** Setting up NextAuth callbacks - docs were confusing
**Do differently:** Start with the NextAuth template from methodology
**Pattern:** Added auth setup steps to CLAUDE.md for next time
```

**Why this matters:** Without retrospectives, you'll make the same mistakes. 5 minutes of reflection saves hours on the next project.

---

## When Things Go Wrong

### Build Broken

```bash
rm -rf .next
npm run build
```

Still broken?

```bash
rm -rf node_modules .next
npm install
npm run build
```

### Site Down

1. Check Vercel dashboard - is deployment failing?
2. Check function logs for errors
3. Roll back to previous deployment if needed

### Can't Figure It Out

1. Read the actual error message (really read it)
2. Google the exact error
3. Check if others have the issue (GitHub issues)
4. Take a break - fresh eyes help
5. Ask for help with the specific error message

---

## Git Workflow

### Solo Projects

Work on `main`. Commit often. Push daily.

```bash
git add .
git commit -m "Add contact form"
git push
```

### Client Projects

Use feature branches for anything risky.

```bash
git checkout -b feature/new-dashboard
# ... work ...
git push -u origin feature/new-dashboard
# Create PR, review, merge
```

### Commit Messages

Keep it simple:

```
Add user authentication
Fix mobile navigation overlap
Update pricing page copy
Remove unused dependencies
```

No need for conventional commits or elaborate formats. Just be clear about what changed.
