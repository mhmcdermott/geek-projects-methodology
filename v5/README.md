# Geek Projects

A simple methodology for building web projects with Next.js.

## Quick Start

```bash
# 1. Create project
npx create-next-app@latest my-project --typescript --tailwind --app
cd my-project

# 2. Add project context file
curl -o CLAUDE.md https://raw.githubusercontent.com/.../templates/CLAUDE.md
# (or copy templates/CLAUDE.md manually)

# 3. Start building
npm run dev
```

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

## Files

| File | When to Use |
|------|-------------|
| [METHODOLOGY.md](METHODOLOGY.md) | Reference for stack, patterns, principles |
| [WORKFLOW.md](WORKFLOW.md) | Step-by-step for setup, development, launch |
| [CHECKLISTS.md](CHECKLISTS.md) | Quality checks before shipping |
| [templates/PRD.md](templates/PRD.md) | Planning a new project |
| [templates/CLAUDE.md](templates/CLAUDE.md) | Project context file |

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

## Contributing

This is a personal methodology, but PRs welcome if you find improvements.
