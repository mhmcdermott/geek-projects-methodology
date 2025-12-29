# Geek Projects Methodology

## Stack

**Last updated: December 2025**

```json
{
  "next": "^16.1.0",
  "react": "^19.2.0",
  "tailwindcss": "^4.1.0",
  "typescript": "^5.9.0"
}
```

**For new projects**: Use `@latest` - start with current stable versions.

**For existing projects**: Be cautious with major version bumps (e.g., Next 15→16). Test thoroughly before upgrading.

### Tailwind v4 Setup

Tailwind v4 uses CSS-based configuration. No `tailwind.config.js` needed.

```css
/* app/globals.css */
@import "tailwindcss";

@theme {
  /* Custom colors */
  --color-brand-50: oklch(97% 0.02 250);
  --color-brand-500: oklch(55% 0.2 250);
  --color-brand-900: oklch(25% 0.1 250);

  /* Custom fonts */
  --font-sans: "Inter", system-ui, sans-serif;
  --font-display: "Cal Sans", var(--font-sans);
}
```

### Common Additions

```bash
# Auth
npm install next-auth@beta

# Database
npm install @prisma/client prisma

# Email
npm install resend

# Forms
npm install react-hook-form zod @hookform/resolvers
```

---

## Project Tiers

| Tier | What | Timeline | Auth | Database |
|------|------|----------|------|----------|
| 1 | Static site | 1-2 weeks | No | No |
| 2 | App with users | 3-6 weeks | Yes | Yes |
| 3 | SaaS product | 2-6 months | Yes + roles | Yes + multi-tenant |

### Scoping Questions

Answer these to find your tier:

1. **Do users need accounts?** No → Tier 1. Yes → continue.
2. **Do users pay you money?** No → Tier 2. Yes → continue.
3. **Do you need teams, orgs, or roles?** No → Tier 2. Yes → Tier 3.
4. **Will multiple companies use the same codebase?** Yes → Tier 3.

**Red flags that push you up a tier:**
- "We'll add payments later" → Plan for Tier 3 now
- "Just a simple admin panel" → Usually Tier 2
- "Users can invite others" → Tier 3 (permissions are hard)
- "We need analytics/dashboards" → Often Tier 3

**When in doubt, pick the higher tier.** Underestimating scope is the #1 project killer.

---

## Development Process

### E.P.C.T.

1. **Explore**: Understand the problem. Talk to users. Define scope.
2. **Plan**: Write requirements. Sketch data model. List features.
3. **Code**: Build one feature at a time. Test each one.
4. **Test & Ship**: Final QA. Deploy. Verify in production.

#### Opening Prompt Template

When starting a new project in Claude Code:

```
I'm building [project name] - a [one sentence description].

This is a Tier [1/2/3] project. [Optional: why this tier]

Follow the Geek Projects Methodology. Let's start with Explore.
```

**Example:**
```
I'm building InvoiceFlow - an app for freelancers to create and send invoices.

This is a Tier 2 project - users need accounts but no teams or payments.

Follow the Geek Projects Methodology. Let's start with Explore.
```

#### Explore: Start with a Brain Dump

Record yourself answering these questions (voice memo, Loom, or just type stream-of-consciousness):

**The Problem**
- What's the pain? Who feels it? How often?
- What do they do today to solve it? Why is that annoying?
- What triggered this project? (client request, your own itch, market gap?)

**The User**
- Describe one specific person who needs this. Name them.
- What's their day like? Where does this problem show up?
- What would make them say "finally, someone built this"?

**The Solution**
- In one sentence, what does this thing do?
- What's the first thing a user does when they open it?
- What does success look like? How would you measure it?

**The Scope**
- What's the simplest version that's still useful?
- What are you definitely NOT building (even if people ask)?
- Is this a weekend project or a 6-month commitment?

Save the transcript to `docs/brain-dump.md`. Then distill into the outputs below.

#### Explore Phase Outputs

Don't start planning until you can answer these:

| Output | What it is | Example |
|--------|------------|---------|
| **Problem statement** | One sentence: who has what problem | "Freelancers waste 2hrs/week chasing invoices" |
| **Target user** | Specific person, not "everyone" | "Solo freelancers billing <10 clients/month" |
| **Success metric** | How you'll know it works | "User sends first invoice within 5 min of signup" |
| **Tier decision** | Scope locked (see scoping questions) | "Tier 2 - accounts but no teams" |
| **Design references** | 3-5 screenshots of what you like | Saved in `docs/inspiration/` |

**For Tier 2-3, also define:**
- Who's paying and why (business model)
- What the MVP does NOT include
- Key risk or assumption to validate

**Deep Planning (Tier 2-3)**: Use `/interview-plan docs/plan.md` to have Claude interview you about your plan. Surfaces gaps, challenges assumptions, and outputs a detailed spec.

### Sprint Rhythm (for Tier 2-3)

```
Sprint 1-N:     Build features
Sprint N.5:     Polish + client review → get sign-off
Sprint N+1:     Final QA + launch
```

**Rule**: Never start QA without client approval. They catch things you won't.

### Design Inspiration

No design direction? Start here during the **Explore** phase:

| Project Type | Resources |
|--------------|-----------|
| SaaS / Apps | [Saaspo](https://saaspo.com/), [SaaS Interface](https://saasinterface.com/) |
| Landing Pages | [Landingfolio](https://www.landingfolio.com/), [Lapa Ninja](https://www.lapa.ninja/) |
| Portfolios | [Lapa Ninja Portfolios](https://www.lapa.ninja/category/portfolio/) |
| High-end / General | [Godly](https://godly.website/) |

Pick 3-5 reference sites. Screenshot the parts you like. Share with client before designing.

### AI Design with Stitch

[Google Stitch](https://stitch.withgoogle.com/) turns prompts into UI designs + production code. Free via Google Labs.

**When to use**: Early prototyping, exploring layouts, generating starting points for components.

**Workflow**:
1. Describe what you need (e.g., "Dashboard with sidebar nav, stats cards, and a data table")
2. Optionally upload reference images for style matching
3. Export to Figma for refinement, or grab the generated code
4. Use `/stitch` command to generate a Stitch-optimized prompt from your project context

### Design Resources

| Tool | What it does |
|------|--------------|
| [Realtime Colors](https://www.realtimecolors.com/) | Generate color palettes, preview on a real UI |
| [Lucide Icons](https://lucide.dev/) | Clean, consistent icons (pairs with shadcn/ui) |
| [shadcn/ui](https://ui.shadcn.com/) | Copy-paste components - not a dependency, you own the code |
| [Font Pair](https://fontpair.co/) | Google Font combinations that work together |
| [Contrast Checker](https://webaim.org/resources/contrastchecker/) | Verify text is readable (accessibility) |

**Quick setup for most projects:**
```bash
# Add shadcn/ui (after project setup)
npx shadcn@latest init
npx shadcn@latest add button card input
```

---

## Principles

### Code
- TypeScript everywhere, strict mode
- Server components by default, client only when needed
- Validate inputs at the boundary, trust internal code

### Design
- Mobile-first (start at 320px, enhance up)
- Primary action should be obvious
- When stuck, add whitespace and remove elements
- Test on real devices, not just browser resize

### Process
- One feature at a time, fully working before moving on
- Commit often, push daily
- If the build is broken, fix it before doing anything else

---

## File Structure

```
my-project/
├── CLAUDE.md              # Project context (for AI + future you)
├── src/
│   ├── app/               # Routes and pages
│   │   ├── (unauthenticated)/  # Public routes (landing, login)
│   │   ├── (authenticated)/    # Auth-required routes (dashboard)
│   │   ├── api/           # API routes
│   │   └── layout.tsx     # Root layout
│   ├── actions/           # Server actions (Tier 2-3)
│   │   └── [feature].ts   # e.g., users.ts, billing.ts
│   ├── components/
│   │   ├── ui/            # Generic (button, input, card)
│   │   └── [feature]/     # Feature-specific
│   └── lib/
│       ├── db.ts          # Database client
│       ├── auth.ts        # Auth config
│       └── utils.ts       # Helpers
├── prisma/
│   └── schema.prisma      # Database schema (if using Prisma)
└── public/                # Static assets
```

---

## Common Patterns

### Auth with NextAuth

```typescript
// src/lib/auth.ts
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
})
```

```typescript
// src/app/api/auth/[...nextauth]/route.ts
import { handlers } from "@/lib/auth"
export const { GET, POST } = handlers
```

### Protected Routes

```typescript
// src/app/(auth)/layout.tsx
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"

export default async function AuthLayout({ children }) {
  const session = await auth()
  if (!session) redirect("/login")
  return <>{children}</>
}
```

### Form with Validation

```typescript
// Using react-hook-form + zod
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

const schema = z.object({
  email: z.string().email(),
  name: z.string().min(2),
})

export function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  })

  const onSubmit = async (data) => {
    // Handle submission
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email")} />
      {errors.email && <span>{errors.email.message}</span>}
      {/* ... */}
    </form>
  )
}
```

### Error Handling

| Tier | What to do |
|------|------------|
| **Tier 1** | Skip this section entirely |
| **Tier 2 personal** | Just add `error.tsx` - that's enough |
| **Tier 2 client** | Add `error.tsx` + toast for form feedback |
| **Tier 3** | All patterns below |

**Error Boundary** - Catch React errors gracefully:

```typescript
// src/components/error-boundary.tsx
"use client"

export function ErrorBoundary({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundaryInner>
      {children}
    </ErrorBoundaryInner>
  )
}

// Use in layout.tsx:
// <ErrorBoundary>{children}</ErrorBoundary>
```

For Next.js 15, use the built-in `error.tsx` convention instead:

```typescript
// src/app/error.tsx
"use client"

export default function Error({ error, reset }: {
  error: Error
  reset: () => void
}) {
  return (
    <div className="p-8 text-center">
      <h2>Something went wrong</h2>
      <button onClick={reset}>Try again</button>
    </div>
  )
}
```

**Toast Notifications** - User feedback for actions:

```typescript
// Simple toast state (no library needed for basic use)
const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null)

// Show toast
setToast({ message: "Saved!", type: "success" })

// Auto-dismiss
useEffect(() => {
  if (toast) {
    const timer = setTimeout(() => setToast(null), 3000)
    return () => clearTimeout(timer)
  }
}, [toast])
```

**Server Action Errors** - Return errors, don't throw:

```typescript
// src/actions/users.ts
"use server"

export async function createUser(data: FormData) {
  try {
    // ... create user
    return { success: true, user }
  } catch (error) {
    return { success: false, error: "Failed to create user" }
  }
}

// In component:
const result = await createUser(formData)
if (!result.success) {
  setToast({ message: result.error, type: "error" })
}
```

### Testing

| Tier | What to do |
|------|------------|
| **Tier 1** | Nothing. Manual click-through is fine. |
| **Tier 2 personal** | Manual test the happy path before shipping. |
| **Tier 2 client** | Manual test happy path + one sad path (what if form fails?). |
| **Tier 3** | Add Playwright for critical user flows (signup, payment). |

**Don't write tests for:**
- UI layout/styling
- Simple CRUD that Prisma/your ORM handles
- Things that will change next week

**Do write tests for:**
- Auth flows (can't log in = dead app)
- Payment flows (broken checkout = lost money)
- Complex business logic that's hard to manually verify

```bash
# If you need Playwright (Tier 3)
npm install -D @playwright/test
npx playwright install
```

---

## Troubleshooting

### Build Failing

```bash
# 90% of issues - clear Next.js cache
rm -rf .next

# Still broken - full reset
rm -rf node_modules .next
npm install
npm run build
```

### Type Errors

```bash
# Check without building
npx tsc --noEmit

# Find the specific error
npm run build 2>&1 | head -50
```

### Dependency Issues

```bash
# See what's installed
npm ls

# Check for problems
npm audit

# See outdated packages
npm outdated
```

---

## Tools

### Claude Code Plugins

**Don't install these upfront.** Add them when you hit the trigger.

| Plugin | Install when... | Command |
|--------|-----------------|---------|
| **Frontend Design** | You're struggling with UI/design quality | `/plugin marketplace add anthropics/claude-code` then `/plugin install frontend-design@claude-code-plugins` |
| **Dev Browser** | You need to verify complex flows (auth, multi-step) | `/plugin marketplace add sawyerhood/dev-browser` |
| **Dot Claude** | You're researching unfamiliar domain/tech | `/plugin marketplace add Sawyer-Middeleer/dot-claude` |

Most Tier 1 projects need none of these. Tier 2 might use frontend-design. Tier 3 might use all three at different phases.

### Useful Commands

```bash
# Development
npm run dev

# Type check
npx tsc --noEmit

# Build
npm run build

# Lint
npm run lint

# Check bundle size
npx @next/bundle-analyzer
```
