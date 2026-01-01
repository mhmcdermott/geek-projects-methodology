# Geek Projects

A methodology for building Next.js projects with Claude Code.

---

## Start Here

### 1. Copy the starter
```bash
git clone https://github.com/mhmcdermott/geek-projects-methodology.git
cp -r geek-projects-methodology/starter my-project
cd my-project
npm install && npm run dev
```

### 2. Read QUICK-START.md
Open **[QUICK-START.md](QUICK-START.md)** - pick your tier, follow the checklist.

### 3. For features, use the workflow
```
/epct-workflow
```
This enforces planning before coding.

---

## Context System

Every project uses three context files:

| File | Purpose | Update Frequency |
|------|---------|------------------|
| **CLAUDE.md** | Project identity | Rarely |
| **NOW.md** | Current state | Every session |
| **MEMORY.md** | Patterns learned | When insights emerge |

Templates in `templates/` - copy all three to your project root.

---

## Reference Material

### Core Docs

| File | Use when... |
|------|-------------|
| [QUICK-START.md](QUICK-START.md) | Starting a project |
| [METHODOLOGY.md](METHODOLOGY.md) | You need stack/pattern details |
| [WORKFLOW.md](WORKFLOW.md) | You need daily process reference |
| [CHECKLISTS.md](CHECKLISTS.md) | You're about to ship |

### Guides

| Guide | Use when... |
|-------|-------------|
| [SESSION-LIFECYCLE.md](guides/SESSION-LIFECYCLE.md) | Managing context across sessions |
| [COMMUNICATION-PATTERNS.md](guides/COMMUNICATION-PATTERNS.md) | Improving AI collaboration |
| [SESSION-HOOKS.md](guides/SESSION-HOOKS.md) | Automating context loading |

### Advanced (Tier 3 / AI-heavy projects)

| Guide | Use when... |
|-------|-------------|
| [HYBRID-AI-PATTERNS.md](guides/advanced/HYBRID-AI-PATTERNS.md) | Building AI-powered features |
| [COMPOUNDING-KNOWLEDGE.md](guides/advanced/COMPOUNDING-KNOWLEDGE.md) | Systems that improve over time |

### Templates

| Template | Purpose |
|----------|---------|
| [CLAUDE.md](templates/CLAUDE.md) | Project identity template |
| [NOW.md](templates/NOW.md) | Current state template |
| [MEMORY.md](templates/MEMORY.md) | Pattern log template |
| [PLAN.md](templates/PLAN.md) | Feature plan template |

---

## Stack

```
Next.js 16.x + React 19.x + Tailwind 4.x + TypeScript 5.x
```
