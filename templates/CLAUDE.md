# Project Name

> One-line description of what this is.

## Methodology

This project follows [Geek Projects Methodology](https://github.com/mhmcdermott/geek-projects-methodology).

**For features:** Use `/epct-workflow` - requires plan approval before coding.

**Skip workflow if:** Single file, <20 lines, no new deps, no behavior change.

---

## Context

**What**: [What does this app/site do?]

**Who**: [Who is it for?]

**Why**: [What problem does it solve?]

## Current Status

**Working on**: [Current task]

**Blocked by**: [Any blockers, or "Nothing"]

**Next**: [What's after current task]

## Features

- [x] Completed feature
- [ ] In progress feature
- [ ] Planned feature

## Tech Stack

- Next.js 15.x / React 19.x / Tailwind 4.x / TypeScript
- Auth: [None / NextAuth with Google / etc.]
- Database: [None / Supabase / Prisma + PostgreSQL / etc.]
- Hosting: Vercel

## Project Structure

```
src/
├── app/
│   ├── (unauthenticated)/  # Public pages (landing, login, signup)
│   ├── (authenticated)/    # Auth-required pages (dashboard, settings)
│   └── api/                # API routes
├── actions/                # Server actions (if using)
│   └── [feature].ts        # e.g., customers.ts, stripe.ts
├── components/
│   ├── ui/                 # Generic components (button, input, card)
│   └── [feature]/          # Feature-specific components
└── lib/
    ├── db.ts               # Database client
    ├── auth.ts             # Auth config
    └── utils.ts            # Helpers
```

## Running Locally

```bash
npm install
cp .env.example .env.local  # Then fill in values
npm run dev
```

## Environment Variables

```bash
# .env.local
DATABASE_URL=           # Database connection string
NEXTAUTH_URL=           # http://localhost:3000 for dev
NEXTAUTH_SECRET=        # Generate with: openssl rand -base64 32
GOOGLE_CLIENT_ID=       # From Google Cloud Console
GOOGLE_CLIENT_SECRET=   # From Google Cloud Console
```

## Key Decisions

| What | Decision | Why |
|------|----------|-----|
| Auth | NextAuth + Google | Simple, secure, users have Google accounts |
| Database | Supabase | Free tier, easy setup, good DX |
| Styling | Tailwind | Fast iteration, no CSS files to manage |

## Known Issues

- None currently

## Useful Commands

```bash
npm run dev          # Start dev server
npm run build        # Production build
npx tsc --noEmit     # Type check
npx prisma studio    # View database (if using Prisma)
```
