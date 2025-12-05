# Claude Code at Work: ScreenCloud Internal Tools Guide

A practical guide for building internal tools as a CPO who codes with AI assistance.

---

## Your Setup

**Role**: CPO building internal tools for sales/strategy
**Stack**: React + Node (with some Python)
**Use cases**: Gong analysis, Salesforce integration, customer insights, prototypes
**Hosting**: Vercel
**Working style**: Solo, not part of main product codebase

---

## Part 1: Initial Setup

### 1.1 Editor Choice

You mentioned Cursor - it's fine, but since you're using Claude Code (CLI), you actually don't need a fancy AI editor. **VS Code is simpler and works great** with Claude Code.

```bash
# If you want VS Code
brew install --cask visual-studio-code

# Open projects from terminal
code my-project
```

Claude Code runs in your terminal alongside any editor. You don't need Cursor's AI features since Claude Code is more capable.

### 1.2 Claude Code Basics

```bash
# Start Claude Code in a project
cd my-project
claude

# That's it - you're now chatting with Claude about your code
```

**Key commands inside Claude Code:**
- Just type naturally - "help me build X" or "what does this file do"
- `/help` - see all commands
- `Ctrl+C` - cancel current operation
- `/clear` - clear conversation history

### 1.3 Recommended One-Time Setup

Create a global config so Claude Code knows your preferences:

```bash
mkdir -p ~/.claude
```

Create `~/.claude/CLAUDE.md`:

```markdown
# Global Preferences

## About Me
- CPO at ScreenCloud, not a full-time developer
- Building internal tools for sales and strategy teams
- Working solo, shipping to Vercel
- Prefer simple, working code over clever abstractions

## How I Like to Work
- Explain what you're doing as you go
- Warn me about security issues proactively
- Keep dependencies minimal
- Make sure things work on mobile if they're user-facing
- Always consider: "Is this secure enough for internal tools with real data?"

## Stack Preferences
- React + Node for web tools
- Python for data scripts
- Tailwind for styling
- Vercel for hosting
- Supabase or simple JSON for data (avoid complex database setups)
```

---

## Part 2: Starting a New Internal Tool

### 2.1 Project Setup Pattern

When you want to build something:

```bash
# Create project
npx create-next-app@latest tool-name --typescript --tailwind --app
cd tool-name

# Open in editor
code .

# Start Claude Code
claude
```

Then tell Claude what you're building:

```
I'm building an internal tool for the sales team that [does X].

It needs to:
- [Feature 1]
- [Feature 2]
- [Feature 3]

This will be used by [who] and will access [what data].
```

### 2.2 Create a CLAUDE.md for Each Project

Every project should have a `CLAUDE.md` file in the root. This gives Claude context:

```markdown
# [Tool Name]

## What This Does
[One paragraph explanation]

## Who Uses It
[Sales team / specific people / etc.]

## Data Sources
- Gong API (read-only access to call transcripts)
- Salesforce (customer accounts)
- [etc.]

## Security Considerations
- Internal use only - requires @screencloud.com email
- Contains customer data - no public URLs
- API keys stored in Vercel environment variables

## Current Status
[What's working, what's not]

## How to Run
```bash
npm install
npm run dev
```

## Environment Variables Needed
```
GONG_API_KEY=
SALESFORCE_CLIENT_ID=
SALESFORCE_CLIENT_SECRET=
```
```

### 2.3 Typical Project Structure

For internal tools, keep it simple:

```
my-tool/
├── CLAUDE.md           # Project context
├── README.md           # For other humans
├── src/
│   ├── app/
│   │   ├── page.tsx    # Main UI
│   │   ├── api/        # Backend endpoints
│   │   └── layout.tsx
│   ├── components/     # UI components
│   └── lib/
│       ├── gong.ts     # Gong API client
│       ├── salesforce.ts
│       └── utils.ts
└── .env.local          # Local secrets (never commit)
```

---

## Part 3: Security-First Approach

Since you're handling real customer data, make security a habit.

### 3.1 Ask Claude to Check Security

Before any tool goes live, ask:

```
Review this project for security issues. Consider:
- Are API keys properly secured?
- Is authentication implemented?
- Could someone access data they shouldn't?
- Are inputs validated?
- Any XSS or injection risks?
```

### 3.2 Authentication for Internal Tools

Always require authentication. Simplest approach for internal tools:

```typescript
// Simple Google OAuth with domain restriction
// Only allows @screencloud.com emails

import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    signIn({ user }) {
      // Only allow ScreenCloud emails
      return user.email?.endsWith("@screencloud.com") ?? false
    },
  },
})
```

Tell Claude: "Add Google OAuth authentication restricted to @screencloud.com emails"

### 3.3 Environment Variables

**Never commit secrets.** Always use environment variables.

```bash
# .env.local (local development - in .gitignore)
GONG_API_KEY=secret_xxx
SALESFORCE_CLIENT_SECRET=secret_yyy

# .env.example (commit this - shows what's needed)
GONG_API_KEY=
SALESFORCE_CLIENT_SECRET=
```

In Vercel, add these in Project Settings → Environment Variables.

### 3.4 Security Checklist Before Sharing Any Tool

```
- [ ] Requires @screencloud.com authentication
- [ ] API keys in environment variables, not code
- [ ] No customer data exposed in URLs
- [ ] Inputs validated (especially if searching/filtering data)
- [ ] No sensitive data in console.logs
- [ ] Error messages don't leak internal details
```

---

## Part 4: Working with External APIs

### 4.1 Gong Integration

When you want to work with Gong:

```
I need to integrate with the Gong API to [analyze calls / get transcripts / etc.].

Can you help me:
1. Set up a secure API client
2. Build [specific feature]
3. Make sure we're handling rate limits and errors properly
```

Claude will help you build something like:

```typescript
// src/lib/gong.ts
const GONG_API_BASE = "https://api.gong.io/v2"

export async function getRecentCalls(limit = 50) {
  const response = await fetch(`${GONG_API_BASE}/calls`, {
    headers: {
      Authorization: `Bearer ${process.env.GONG_API_KEY}`,
      "Content-Type": "application/json",
    },
  })

  if (!response.ok) {
    throw new Error(`Gong API error: ${response.status}`)
  }

  return response.json()
}
```

### 4.2 Salesforce Integration

Similar pattern:

```
I need to pull customer account data from Salesforce.

Help me:
1. Set up OAuth connection to Salesforce
2. Query accounts and opportunities
3. Handle token refresh properly
```

### 4.3 Pattern for Any API Integration

Ask Claude:

```
I need to integrate with [API name].

Before we start:
1. What authentication does it use?
2. Are there rate limits I should know about?
3. What's the best way to structure the client?

Then help me build [specific feature].
```

---

## Part 5: Common Workflows

### 5.1 "Build Me a Quick Tool"

```
I need a simple internal tool that:
- Shows a dashboard of [X]
- Lets users [Y]
- Pulls data from [Z]

This is for the sales team. Keep it simple - it doesn't need to be pretty,
it needs to work and be secure.
```

### 5.2 "Analyze This Data"

For one-off analysis, Python might be quicker:

```
I have a CSV export from [source] with columns [X, Y, Z].

Help me analyze:
- [Question 1]
- [Question 2]

Let's use Python for this - I don't need a web UI, just the insights.
```

### 5.3 "Prototype This Idea"

```
I want to prototype [concept] to show the team.

Requirements:
- Needs to look decent (this is for a demo)
- Doesn't need real data - mock it
- Should work on desktop and mobile
- 2-hour budget - keep it scrappy
```

### 5.4 "Fix This Thing That's Broken"

```
[Paste error message]

This happens when I [describe action].

I've tried [what you've tried].

Here's the relevant code: [or let Claude read the files]
```

---

## Part 6: Good Habits

### 6.1 Start Each Session with Context

When you open Claude Code on an existing project:

```
I'm continuing work on [tool name].

Last time we [what you did].

Today I want to [what you want to do].
```

Or just:

```
Read CLAUDE.md and remind yourself what this project does.
```

### 6.2 Commit Often with Clear Messages

Ask Claude to help:

```
Commit what we've done so far with a clear message.
```

Claude will look at the changes and write an appropriate commit message.

### 6.3 Keep a README Updated

Your README should explain to anyone (including future you):

```markdown
# Tool Name

## What This Does
One paragraph.

## How to Use
Step by step.

## How to Run Locally
```bash
npm install
cp .env.example .env.local
# Fill in .env.local with real values
npm run dev
```

## How to Deploy
Push to main → Vercel auto-deploys

## Who to Contact
Your name
```

### 6.4 Before Sharing with Anyone

```
We're about to share this tool with [who].

Do a final check:
- Security review
- Does it work on mobile?
- Is the error handling user-friendly?
- Is the README clear?
- Are environment variables set in Vercel?
```

---

## Part 7: Quick Reference

### Common Claude Code Prompts

| What You Want | What to Say |
|---------------|-------------|
| Start a new project | "Help me set up a new internal tool for [X]" |
| Add a feature | "Add the ability to [X]" |
| Fix a bug | "[Paste error]. This happens when [context]" |
| Integrate an API | "Help me integrate with [API] to [do what]" |
| Security check | "Review this for security issues" |
| Deploy help | "Help me deploy this to Vercel" |
| Understand code | "Explain what [file/function] does" |
| Improve something | "This works but [problem]. How can we improve it?" |

### Troubleshooting

**Claude seems confused about the project:**
```
Read CLAUDE.md and the main files to understand this project.
```

**Build is broken:**
```
The build is failing with [error]. Help me fix it.
```

**Something works locally but not in production:**
```
This works on localhost but fails on Vercel with [error].
Check environment variables and deployment config.
```

### Your Internal Tool Stack

```
Frontend:     Next.js + React + Tailwind
Backend:      Next.js API routes (or Python for scripts)
Database:     Supabase (if needed) or JSON files (for simple stuff)
Auth:         NextAuth with Google (restricted to @screencloud.com)
Hosting:      Vercel
Secrets:      Vercel environment variables
Code:         GitHub (your personal repos, not main ScreenCloud org)
```

---

## Part 8: What NOT to Do

1. **Don't commit API keys** - Use environment variables always
2. **Don't skip authentication** - Even for "quick" internal tools
3. **Don't build complex systems** - You're one person; keep it simple
4. **Don't ignore security warnings** - If Claude flags something, address it
5. **Don't deploy without testing** - At minimum: does it load? does auth work?
6. **Don't store customer data locally** - Query it live, don't cache PII

---

## Getting Started Tomorrow

1. Open terminal in a new folder
2. Run `claude`
3. Say: "Help me set up a new internal tool. I want to build [your first idea]. It's for the sales team at ScreenCloud and needs Google auth restricted to @screencloud.com emails."
4. Follow along as Claude scaffolds it

That's it. You'll learn the details as you build.
