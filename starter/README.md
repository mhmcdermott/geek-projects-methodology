# Starter Template

Minimal Next.js 15 + React 19 + Tailwind v4 starter.

## Setup

```bash
# Copy this folder to your new project
cp -r starter my-project
cd my-project

# Install dependencies
npm install

# Start developing
npm run dev
```

## What's Included

- Next.js 15.3 with App Router
- React 19.1
- Tailwind CSS 4.1 (CSS-first config)
- TypeScript 5.7
- Security headers pre-configured

## Adding Features

**Auth:**
```bash
npm install next-auth@beta
```

**Database:**
```bash
npm install @prisma/client prisma
npx prisma init
```

**Forms:**
```bash
npm install react-hook-form zod @hookform/resolvers
```

**Email:**
```bash
npm install resend
```

## Customization

- Edit `src/app/globals.css` to change brand colors
- Edit `src/app/layout.tsx` to update metadata
- Add components to `src/components/`
