# Project Name

> One-line description of what this is.

## Methodology

This project follows [Geek Projects Methodology](https://github.com/mhmcdermott/geek-projects-methodology).

**For features:** Use `/epct-workflow` - requires plan approval before coding.

**Skip workflow if:** Single file, <20 lines, no new deps, no behaviour change.

---

## Context Files

This project uses three context files:

| File | Purpose | Update Frequency |
|------|---------|------------------|
| **CLAUDE.md** (this file) | Stable identity - what this project is | Rarely |
| **NOW.md** | Current state - what's happening now | Every session |
| **MEMORY.md** | Patterns - lessons learned over time | When insights emerge |

---

## Project Identity

**What:** [What does this app/site do? One paragraph max.]

**Who:** [Who is it for? Be specific.]

**Why:** [What problem does it solve?]

**Tier:** [1 / 2 / 3] - [Brief justification]

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16.x / React 19.x |
| Styling | Tailwind 4.x |
| Language | TypeScript |
| Auth | [None / NextAuth with Google / etc.] |
| Database | [None / Supabase / Prisma + PostgreSQL / etc.] |
| Hosting | Vercel |

---

## Project Structure

```
src/
├── app/
│   ├── (public)/           # Public pages (landing, login)
│   ├── (authenticated)/    # Auth-required pages
│   └── api/                # API routes
├── actions/                # Server actions
├── components/
│   ├── ui/                 # Generic components
│   └── [feature]/          # Feature-specific components
└── lib/
    ├── db.ts               # Database client
    ├── auth.ts             # Auth config
    └── utils.ts            # Helpers
```

---

## Key Decisions

Decisions that are unlikely to change:

| What | Decision | Why |
|------|----------|-----|
| Auth | [e.g., NextAuth + Google] | [e.g., Simple, secure, users have accounts] |
| Database | [e.g., Supabase] | [e.g., Free tier, easy setup] |
| Styling | Tailwind | Fast iteration, no CSS files |

---

## Boundaries

**This project is:**
- [Core purpose]
- [Secondary purpose]

**This project is NOT:**
- [Explicit exclusion]
- [Another exclusion]

---

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
# Add others as needed
```

---

## Features

Core features (stable):

- [x] [Completed feature]
- [x] [Another completed feature]

Planned features (see NOW.md for current work):

- [ ] [Planned feature]
- [ ] [Another planned feature]

---

## Useful Commands

```bash
npm run dev          # Start dev server
npm run build        # Production build
npx tsc --noEmit     # Type check
```
