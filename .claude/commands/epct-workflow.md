---
description: Enhanced Geek Projects E.P.C.T. Workflow Commands (user)
---

# E.P.C.T. Workflow

You are following the Geek Projects Methodology. This workflow is MANDATORY for Tier 2-3 projects.

## CRITICAL RULES

1. **NO CODE before plan approval** - You MUST complete Explore and Plan phases first
2. **Use TodoWrite** - Track every phase and task
3. **Get explicit approval** - Ask user to approve the plan before coding
4. **One feature at a time** - Complete and verify before starting next
5. **Maintain context** - Update NOW.md and MEMORY.md throughout

---

## Context Loading

Before starting, load project context:

1. Read `CLAUDE.md` - Project identity and stable configuration
2. Read `NOW.md` - Current state and active tasks
3. Read `MEMORY.md` - Patterns and lessons learned

If any file is missing, note it and proceed with available context.

---

## Phase 1: EXPLORE

Before planning, you MUST understand what you're building.

### Use CRIT Framework

```
C - Context: What's the situation? What exists today?
R - Role: Who is this for? What's their expertise level?
I - Interview: Ask probing questions, challenge assumptions
T - Task: Only after understanding, define what to build
```

### Interview Questions

Ask scenario-based questions:
- "Walk me through how you'd use this feature"
- "What happens when [edge case]?"
- "Show me something similar that works well"

Challenge assumptions:
- "You said X - what about [exception]?"
- "What would break your trust in this?"

### Required Explore Output

```markdown
## Explore: [Feature Name]

### Understanding
- **What:** [one sentence description of what we're building]
- **Why:** [the problem this solves]
- **Who:** [who uses this]

### Codebase Analysis
**Existing files to modify:**
1. `path/to/file.tsx` - [why this file]
2. `path/to/other.tsx` - [why this file]

**Similar patterns found:**
- `path/to/example.tsx` - [how it's relevant]

**New files needed:**
1. `path/to/new.tsx` - [purpose]
```

### Explore Actions
- Read CLAUDE.md, NOW.md, MEMORY.md
- Search codebase for similar patterns
- Identify files that will change
- List dependencies that might be needed

**DO NOT proceed to Plan until you have documented the above.**

---

## Phase 2: PLAN

Use Claude Code's built-in plan mode for non-trivial features.

### When to Use EnterPlanMode

Use `EnterPlanMode` when:
- New feature implementation
- Multiple valid approaches exist
- Architectural decisions needed
- Multi-file changes (3+ files)
- Unclear requirements

### Plan File Structure

Write plan to `plans/[feature-name].md`:

```markdown
# [Feature Name]

**Created:** [date]
**Status:** Planning

## Goal
[One sentence: what does "done" look like?]

## Technical Approach
[How we'll implement this]

## Implementation Phases
1. [Phase 1 - Foundation]
2. [Phase 2 - Core Logic]
3. [Phase 3 - Polish]

## Files to Modify
- [ ] `path/to/file.tsx` - [what changes]

## New Files
- [ ] `path/to/new.tsx` - [purpose]

## Dependencies
- [package-name] - [why needed]
- Or: "None"

## Risks & Assumptions
- [What could go wrong]
- [What we're assuming]

## Test Cases
- [ ] [Input] → [Expected output]
- [ ] [Edge case] → [Expected behavior]

## Success Criteria
- [How we know it's done]
```

### Before Coding

Ask the user:

> **Plan complete. Ready to proceed?**
>
> Please review the plan above. Reply with:
> - "approved" to start coding
> - Or feedback on what to change

**DO NOT write any implementation code until user says "approved" or equivalent.**

---

## Phase 3: CODE

Now you may write code. Follow these rules:

### TodoWrite Discipline

1. **Create todos before starting** - Plan the implementation steps
2. **Mark in_progress before working** - One task at a time
3. **Mark completed immediately** - Don't batch completions
4. **Update as scope changes** - Add new todos as discovered

### Coding Rules

1. **One task at a time** - Complete before moving on
2. **Build after each file** - Run `npm run build`
3. **Fix errors immediately** - Don't accumulate tech debt
4. **Commit working code** - Small, frequent commits

### After Each File

```bash
npm run build  # Must pass
```

Manual checks:
- [ ] Works at 320px width
- [ ] No console errors

### Background Dev Server

Run dev server in background for immediate feedback:

```bash
npm run dev  # Use run_in_background: true
```

Check output via TaskOutput to verify changes work.

---

## Phase 4: TEST & VERIFY

Before marking complete:

### Quality Gate
```bash
npm run build && npx tsc --noEmit
```

### Verification
- [ ] Feature works as specified in plan
- [ ] Test cases from plan pass
- [ ] Mobile responsive (320px)
- [ ] No regressions to existing features

### Update Context

After verification passes:
- Update plan file status to "Complete"
- Update NOW.md with completion

---

## Phase 5: RETROSPECTIVE

After completing the feature:

### Quick Retro Questions

> **Feature complete. Quick retrospective:**
>
> 1. What took longer than expected?
> 2. What would you do differently?
> 3. Any patterns worth remembering?

### Document Learnings

Based on answers:

| Learning Type | Where to Document |
|--------------|-------------------|
| Project-specific pattern | MEMORY.md |
| Reusable workaround | MEMORY.md |
| Status update | NOW.md |
| Stable decision | CLAUDE.md |

### Example MEMORY.md Entry

```markdown
### [Date] — [Feature Name] Retrospective
**Lesson:** [What was learned]
**Context:** [When this applies]
**Action:** [What to do differently]
```

---

## Skip Criteria

You may skip this workflow ONLY if ALL are true:
- [ ] Single file change
- [ ] Under 20 lines of code
- [ ] No new dependencies
- [ ] No user-facing behaviour change

If ANY is false, use the full workflow.

---

## Commands

The user can say:
- `/epct-workflow` - Start this workflow
- "skip to plan" - Jump to Plan phase (if Explore is done)
- "skip to code" - Jump to Code phase (requires plan approval)
- "approved" - Approve plan and start coding

---

## Session Boundaries

If context is getting long or you're ending a session:

1. Update NOW.md with current progress
2. Add any insights to MEMORY.md
3. Commit context files
4. Note where to resume

See guides/SESSION-LIFECYCLE.md for full details.
