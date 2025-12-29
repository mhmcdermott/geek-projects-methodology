# Geek Projects

A simple methodology for building web projects with Next.js.

## Start Here

**[QUICK-START.md](QUICK-START.md)** - Pick your tier, follow the checklist.

## Setup

**Option A: Use the starter template**
```bash
git clone https://github.com/mhmcdermott/geek-projects-methodology.git
cp -r geek-projects-methodology/starter my-project
cd my-project
npm install && npm run dev
```

**Option B: Use create-next-app**
```bash
npx create-next-app@latest my-project --typescript --tailwind --app
```

## The Process

**Build one feature at a time.** After each one:
1. `npm run build` (must pass)
2. Test at 320px width
3. Commit

**For Tier 2-3 projects:** Use `/epct-workflow` in Claude Code to enforce planning before coding.

## Files

```
├── QUICK-START.md      # Start here - 1-page guide
├── METHODOLOGY.md      # Reference - stack, patterns, design
├── WORKFLOW.md         # Daily development process
├── CHECKLISTS.md       # Quality checks
├── starter/            # Ready-to-use project template
└── templates/
    ├── CLAUDE.md       # Project context template
    ├── PLAN.md         # Implementation plan template
    └── PRD.md          # Requirements template
```

## Stack

```
Next.js 16.x + React 19.x + Tailwind 4.x + TypeScript 5.x
```

Deployed on Vercel. Auth with NextAuth. Database with Prisma/Supabase when needed.

## Principles

1. **Keep it simple** - Don't add complexity until you need it
2. **Ship working software** - A feature isn't done until it's deployed
3. **Mobile first** - Start at 320px, enhance up
4. **Fix the build first** - If it's broken, nothing else matters
5. **Client approval before QA** - They'll catch things you won't

## When Things Break

```bash
# Fixes 90% of build issues
rm -rf .next

# Nuclear option
rm -rf node_modules .next && npm install
```

