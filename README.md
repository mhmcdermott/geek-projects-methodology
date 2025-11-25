# Geek Projects

A simple methodology for building web projects with Next.js.

## Quick Start

**Option A: Use the starter template**
```bash
# Clone and copy starter
git clone https://github.com/mhmcdermott/geek-projects-methodology.git
cp -r geek-projects-methodology/starter my-project
cd my-project
npm install
npm run dev
```

**Option B: Use create-next-app**
```bash
npx create-next-app@latest my-project --typescript --tailwind --app
cd my-project
```

Then add a `CLAUDE.md` file (copy from `templates/CLAUDE.md`).

## How It Works

**Build one feature at a time.** After each one:
1. Run `npm run build` (must pass)
2. Check it works on mobile (resize to 320px)
3. Commit

**Before shipping:**
1. Get client approval
2. Run full checklist
3. Deploy

That's the whole process.

## What's Here

```
├── README.md           # You are here
├── METHODOLOGY.md      # Stack, patterns, principles
├── WORKFLOW.md         # Daily development process
├── CHECKLISTS.md       # Quality checks
├── starter/            # Ready-to-use project template
└── templates/
    ├── CLAUDE.md       # Project context template
    └── PRD.md          # Requirements template
```

## Stack

```
Next.js 15.x + React 19.x + Tailwind 4.x + TypeScript
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

## Legacy

Previous versions (v4.x with agent system) are in `legacy/` for reference.
