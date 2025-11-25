# Geek Projects Methodology

## Stack

**Last updated: November 2025**

```json
{
  "next": "^15.3.0",
  "react": "^19.1.0",
  "tailwindcss": "^4.1.0",
  "typescript": "^5.7.0"
}
```

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

**Pick your tier before starting.** It determines scope and complexity.

---

## Development Process

### E.P.C.T.

1. **Explore**: Understand the problem. Talk to users. Define scope.
2. **Plan**: Write requirements. Sketch data model. List features.
3. **Code**: Build one feature at a time. Test each one.
4. **Test & Ship**: Final QA. Deploy. Verify in production.

### Sprint Rhythm (for Tier 2-3)

```
Sprint 1-N:     Build features
Sprint N.5:     Polish + client review → get sign-off
Sprint N+1:     Final QA + launch
```

**Rule**: Never start QA without client approval. They catch things you won't.

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
│   │   ├── (auth)/        # Auth-required routes
│   │   ├── api/           # API routes
│   │   └── layout.tsx     # Root layout
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

### Claude Code Plugin

For design-heavy work:

```bash
/plugin marketplace add anthropics/claude-code
/plugin install frontend-design@claude-code-plugins
# Restart Claude Code
```

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
