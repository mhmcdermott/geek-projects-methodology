# Quick Start

Pick your tier, follow the checklist.

---

## Which Tier?

| If... | Then |
|-------|------|
| No user accounts | **Tier 1** |
| User accounts, no payments | **Tier 2** |
| Payments, teams, or roles | **Tier 3** |

---

## Tier 1: Static Site (5 min setup)

```bash
npx create-next-app@latest my-project --typescript --tailwind --app
cd my-project && npm run dev
```

**Then just build.** No E.P.C.T. needed for simple sites.

Skip to [Quality Gates](#quality-gates) when ready to ship.

---

## Tier 2: App with Users (15 min planning)

### 1. Setup (5 min)
```bash
npx create-next-app@latest my-project --typescript --tailwind --app
cd my-project
```

### 2. Tell Claude what you're building
```
I'm building [name] - [one sentence description].

This is a Tier 2 project.

Follow the Geek Projects Methodology.
```

### 3. Create a Plan (10 min)

Claude will help you fill this out before any code is written:

```markdown
## Plan: [Feature Name]

**Goal:** [one sentence]

**Files to modify:**
- [ ] path/to/file.tsx

**New files:**
- [ ] path/to/new-file.tsx

**Dependencies:** [list or "none"]

**Risk:** [what could go wrong]
```

### 4. Build One Feature at a Time

For each feature:
1. Update the plan
2. Build it
3. `npm run build` (must pass)
4. Test on mobile (320px)
5. Commit

---

## Tier 3: SaaS Product

Use full E.P.C.T. workflow:

```
/epct-workflow
```

This enforces:
- Explore phase with concrete deliverables
- Plan approval before coding
- Quality gates at each step
- Retrospective at completion

See [METHODOLOGY.md](METHODOLOGY.md) for full reference.

---

## Skip E.P.C.T. When...

All of these must be true:
- [ ] Single file change
- [ ] Under 20 lines of code
- [ ] No new dependencies
- [ ] No user-facing behavior change

If any is false, use the workflow.

---

## Quality Gates

### After Each Feature
```bash
npm run build  # Must pass
```
- [ ] Works at 320px width
- [ ] No console errors

### Before Launch
```bash
npm run build && npx tsc --noEmit && npm audit
```
- [ ] Tested main flow end-to-end
- [ ] Tested on real phone
- [ ] Client approved (Tier 2-3)

See [CHECKLISTS.md](CHECKLISTS.md) for full pre-launch list.

---

## When It Breaks

```bash
# Fixes 90% of issues
rm -rf .next && npm run build

# Nuclear option
rm -rf node_modules .next && npm install && npm run build
```

---

## Files Reference

| File | What it's for |
|------|---------------|
| [QUICK-START.md](QUICK-START.md) | You are here |
| [METHODOLOGY.md](METHODOLOGY.md) | Full reference (stack, patterns, design) |
| [WORKFLOW.md](WORKFLOW.md) | Daily development process |
| [CHECKLISTS.md](CHECKLISTS.md) | Quality checks |
| [templates/PLAN.md](templates/PLAN.md) | Plan template |
| [templates/CLAUDE.md](templates/CLAUDE.md) | Project context template |
