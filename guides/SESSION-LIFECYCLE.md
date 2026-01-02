# Session Lifecycle

How to maintain continuity across Claude Code sessions.

---

## The Problem

Claude Code sessions have context limits. When context gets too long, it compacts - summarising earlier conversation. Without proper management, you lose:

- What you were working on
- Decisions made and why
- Patterns discovered
- Current task status

---

## The Solution: Three-File Context System

Split context into three files with different update frequencies:

```
CLAUDE.md   → Stable identity (rarely changes)
NOW.md      → Current state (every session)
MEMORY.md   → Patterns over time (when insights emerge)
```

**Why this works:**
- Claude doesn't re-read your entire project history each session
- Current state survives context compaction
- Patterns compound over time instead of being forgotten

---

## Session Lifecycle

### 1. Session Start

```
┌─────────────────────────────────────┐
│         SESSION START               │
├─────────────────────────────────────┤
│ 1. Load context files               │
│    - CLAUDE.md (project identity)   │
│    - NOW.md (current state)         │
│    - MEMORY.md (patterns)           │
│                                     │
│ 2. Check for active plan            │
│    - Continue existing plan, or     │
│    - Create new plan if needed      │
│                                     │
│ 3. Create todos for session         │
│    - What needs to be done          │
│    - Mark first task in_progress    │
└─────────────────────────────────────┘
```

**What to say:**
```
Read CLAUDE.md, NOW.md, and MEMORY.md to get context.
Then let's continue with [goal for this session].
```

### 2. During Session

```
┌─────────────────────────────────────┐
│         ACTIVE WORK                 │
├─────────────────────────────────────┤
│ • Execute with TodoWrite tracking   │
│ • Mark tasks completed as you go    │
│ • Note any patterns or insights     │
│ • Commit working code frequently    │
└─────────────────────────────────────┘
```

**TodoWrite discipline:**
- One task `in_progress` at a time
- Mark `completed` immediately when done
- Add new tasks as they're discovered

### 3. Before Context Compaction

When Claude warns about context length, or before a long operation:

```
┌─────────────────────────────────────┐
│       PRE-COMPACTION                │
├─────────────────────────────────────┤
│ 1. Update NOW.md                    │
│    - Current task status            │
│    - Any blockers                   │
│    - What to pick up next           │
│                                     │
│ 2. Update MEMORY.md                 │
│    - Any patterns discovered        │
│    - Lessons learned                │
│    - Workarounds found              │
│                                     │
│ 3. Commit context files             │
└─────────────────────────────────────┘
```

**What to say:**
```
Before we continue, update NOW.md with current status
and add any significant learnings to MEMORY.md.
```

### 4. Session End

```
┌─────────────────────────────────────┐
│         SESSION END                 │
├─────────────────────────────────────┤
│ 1. Update NOW.md                    │
│    - Where we left off              │
│    - Key files touched              │
│    - Open questions                 │
│                                     │
│ 2. Update MEMORY.md                 │
│    - Session insights               │
│                                     │
│ 3. Commit all changes               │
│                                     │
│ 4. Push to remote                   │
└─────────────────────────────────────┘
```

**What to say:**
```
We're ending this session. Update NOW.md and MEMORY.md,
then commit everything.
```

---

## Context File Responsibilities

### CLAUDE.md (Stable Identity)

**Update when:**
- Tech stack changes
- Project scope changes
- Key decisions are made
- Structure changes significantly

**Contains:**
- Project description
- Tech stack
- File structure
- Key decisions
- Environment setup

### NOW.md (Current State)

**Update when:**
- Starting a session
- Completing a phase
- Getting blocked
- Before context compaction
- Ending a session

**Contains:**
- Current phase
- Active tasks
- Blockers
- Recent decisions
- Next priorities
- Session log

### MEMORY.md (Patterns)

**Update when:**
- You learn something worth remembering
- You find a workaround
- You notice a pattern
- Something takes longer than expected (and you know why)

**Contains:**
- Project patterns
- User preferences
- Lessons learned
- Workarounds
- Architecture decisions
- Integration notes

---

## Quick Reference

### Starting a Session

```
Read CLAUDE.md, NOW.md, and MEMORY.md.
Continue with [today's goal].
```

### Mid-Session Checkpoint

```
Update NOW.md with current status.
```

### Ending a Session

```
Update NOW.md and MEMORY.md.
Commit and push.
```

### Context Getting Long

```
Save state to NOW.md before continuing.
```

---

## Automation

See [SESSION-HOOKS.md](SESSION-HOOKS.md) for automating context loading and state saving.

---

## Optional: Session History Search

For power users who run many Claude Code sessions, consider [Kuato](https://github.com/alexknowshtml/kuato) - a tool that indexes Claude Code's JSONL session files for search.

**How it complements three-file context:**
- Three-file system = explicit, forward-looking context you curate
- Kuato = implicit history search when you need to find something from past sessions

**When it's useful:**
- "What did I do in that other project last month?"
- Finding code snippets from sessions where you forgot to update MEMORY.md
- Cross-project pattern discovery

**When you don't need it:**
- If you're consistent with context file updates
- For single-project work
- If you prefer explicit over implicit context

The three-file system remains the primary approach. Kuato is a safety net for when context files weren't updated.

---

## Troubleshooting

### "I don't remember what we were doing"

NOW.md should have this. If it doesn't:
1. Check git history for recent changes
2. Look at any plan files
3. Check TODO comments in code

### "Context compacted and I lost state"

This is why we save to NOW.md. If you forgot:
1. Check git log for recent commits
2. Look at file modification times
3. Read through recent code changes

### "MEMORY.md is getting too long"

That's fine - it's append-only. Consider:
1. Archiving very old entries
2. Consolidating similar patterns
3. Moving project-specific patterns to project docs

### "I keep forgetting to update context files"

Options:
1. Use hooks to automate (see SESSION-HOOKS.md)
2. Create a `/save` command that prompts updates
3. Add it to your end-of-session routine
