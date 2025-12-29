# Implementation Plan Template

Copy this template for each feature. Fill it out during the Plan phase of E.P.C.T.

---

## Plan: [Feature Name]

### Goal
[One sentence: what does "done" look like?]

### Understanding
- **What:** [description of what we're building]
- **Why:** [the problem this solves]
- **Who:** [who uses this feature]

---

### Codebase Analysis

**Existing files to modify:**
- [ ] `path/to/file.tsx` - [what changes and why]
- [ ] `path/to/file.tsx` - [what changes and why]

**Similar patterns found:**
- `path/to/example.tsx` - [how it's relevant, what to copy/adapt]

**New files to create:**
- [ ] `path/to/new.tsx` - [purpose]

---

### Dependencies

| Package | Why needed | Alternative considered |
|---------|------------|----------------------|
| [package] | [reason] | [or "none"] |

Or: **None** - no new dependencies needed.

---

### Risks & Assumptions

**Risks:**
- [What could go wrong]
- [What's the fallback if it doesn't work]

**Assumptions:**
- [What are we assuming is true]
- [What needs to be verified]

---

### Test Cases

| Input | Expected Output | Priority |
|-------|-----------------|----------|
| [user action] | [expected result] | High |
| [edge case] | [expected behavior] | Medium |
| [error case] | [error handling] | Medium |

---

### Checklist

**Before coding:**
- [ ] Plan reviewed with user
- [ ] User approved plan

**After coding:**
- [ ] `npm run build` passes
- [ ] Works at 320px mobile
- [ ] Test cases verified
- [ ] No console errors

---

## Approval

> Ready to proceed? Please reply:
> - "approved" to start coding
> - Or feedback on what to change
