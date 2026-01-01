# [Project Name]

> [One-line description]

## Methodology

This project follows [Geek Projects Methodology](https://github.com/mhmcdermott/geek-projects-methodology).

**For features:** Use `/epct-workflow` - requires plan approval before coding.

**Skip workflow if:** Single file, <20 lines, no new deps, no behaviour change.

---

## Context Files

| File | Purpose | Update Frequency |
|------|---------|------------------|
| **CLAUDE.md** (this file) | Stable identity | Rarely |
| **NOW.md** | Current state | Every session |
| **MEMORY.md** | Patterns | When insights emerge |

---

## Project Identity

**What:** [What does this app/site do?]

**Who:** [Who is it for?]

**Why:** [What problem does it solve?]

**Tier:** [1 = static / 2 = app with users / 3 = SaaS]

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16.x / React 19.x |
| Styling | Tailwind 4.x |
| Language | TypeScript |
| Auth | [None / NextAuth / etc.] |
| Database | [None / Supabase / Prisma / etc.] |
| Hosting | Vercel |

---

## Running Locally

```bash
npm install
cp .env.example .env.local  # Then fill in values
npm run dev
```
