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

---

## Phase 1: EXPLORE

Before planning, you MUST produce these deliverables:

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
- Read CLAUDE.md if it exists
- Search codebase for similar patterns
- Identify files that will change
- List dependencies that might be needed

**DO NOT proceed to Plan until you have documented the above.**

---

## Phase 2: PLAN

Create a plan and get user approval.

### Required Plan Template

```markdown
## Plan: [Feature Name]

### Goal
[One sentence: what does "done" look like?]

### Changes

**Files to modify:**
- [ ] `path/to/file.tsx` - [what changes]
- [ ] `path/to/other.tsx` - [what changes]

**New files:**
- [ ] `path/to/new.tsx` - [purpose]

**Dependencies:**
- [package-name] - [why needed]
- Or: "None"

### Risks
- [What could go wrong]
- [What assumptions are we making]

### Test Cases
- [ ] [Input] → [Expected output]
- [ ] [Edge case] → [Expected behavior]
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

1. **One task at a time** - Use TodoWrite to track
2. **Build after each file** - Run `npm run build`
3. **Fix errors immediately** - Don't accumulate tech debt
4. **Commit working code** - Small, frequent commits

### After Each Feature

```bash
npm run build  # Must pass
```

Manual checks:
- [ ] Works at 320px width
- [ ] No console errors

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
- [ ] Mobile responsive
- [ ] No regressions to existing features

---

## Phase 5: RETROSPECTIVE

After completing the feature, ask:

> **Feature complete. Quick retrospective:**
>
> 1. What took longer than expected?
> 2. What would you do differently?
> 3. Any patterns to add to CLAUDE.md?

Document learnings in CLAUDE.md if significant.

---

## Skip Criteria

You may skip this workflow ONLY if ALL are true:
- [ ] Single file change
- [ ] Under 20 lines of code
- [ ] No new dependencies
- [ ] No user-facing behavior change

If ANY is false, use the full workflow.

---

## Commands

The user can say:
- `/epct-workflow` - Start this workflow
- "skip to plan" - Jump to Plan phase (if Explore is done)
- "skip to code" - Jump to Code phase (requires plan approval)
- "approved" - Approve plan and start coding
