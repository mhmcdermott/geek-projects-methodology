# Communication Patterns

Effective patterns for human-AI collaboration during development.

---

## Core Principle: Context Before Ask

Always provide context before making a request. This reduces back-and-forth and gets better results.

**Good:**
```
The email triage is using pattern matching for known senders.
Can we add learned rules based on historical behaviour?
```

**Bad:**
```
Add learned rules.
```

The first version tells Claude what exists, what you want, and why. The second requires Claude to ask clarifying questions.

---

## Starting a Session

### Resuming Work

When returning to a project:

```
I'm continuing work on [project name].

Last session we [what was done].

Today I want to [goal for this session].
```

Or simply:

```
Read CLAUDE.md, NOW.md, and MEMORY.md to get context on this project.
```

### Starting Fresh

When beginning new work:

```
I'm building [name] - [one sentence description].

This is a Tier [1/2/3] project.

Follow the Geek Projects Methodology. Let's start with Explore.
```

---

## During Development

### Requesting Features

```
Feature: [name]

What it does: [one sentence]

User flow:
1. User does X
2. System shows Y
3. User confirms Z

Constraints:
- Must work on mobile
- Should match existing [pattern]
```

### Reporting Bugs

```
Bug: [what's broken]

Expected: [what should happen]
Actual: [what happens instead]

Steps to reproduce:
1. Go to [page]
2. Click [button]
3. See [error]

Error message: [paste exact error]
```

### Asking for Explanations

```
Explain what [file/function/component] does.

Specifically, I'm confused about [aspect].
```

---

## Phase Transitions

### Completing a Phase

After finishing significant work, summarise:

```
Phase 2: Smart Decision Engine - Complete

Summary:
- 63 learned rules active
- 44/100 emails auto-archived
- 0% cloud escalation

Ready for Phase 3?
```

### Checking Before Proceeding

At natural breakpoints, confirm intent:

```
Plan complete. Ready to proceed?

Please reply:
- "approved" to start coding
- Or feedback on what to change
```

```
Feature implemented. Options:

1. Continue to [next feature]
2. Test what we have first
3. Polish the current UI

What would you prefer?
```

---

## Handling Uncertainty

### When Requirements Are Unclear

```
I'm not sure about [aspect]. A few options:

1. [Option A] - [tradeoff]
2. [Option B] - [tradeoff]
3. [Option C] - [tradeoff]

Which approach fits your use case?
```

### When Something Might Break

```
This change might affect [existing feature].

I can:
1. Proceed and fix if issues arise
2. Add a safeguard first
3. Skip this for now

Your call.
```

---

## End of Session

### Handoff Summary

Before ending a long session:

```
Session summary:

Done:
- [completed item 1]
- [completed item 2]

In progress:
- [current task] - [status]

Next session:
- [what to pick up]

Blockers:
- [any blockers, or "None"]
```

### Updating Context Files

```
Update NOW.md with current status.
Add any patterns learned to MEMORY.md.
```

---

## Anti-Patterns

### Don't Do This

| Anti-Pattern | Why It's Bad | Do This Instead |
|--------------|--------------|-----------------|
| "Fix it" | No context on what's broken | Describe the bug with steps to reproduce |
| "Make it better" | Subjective, no criteria | Specify what "better" means |
| "Add all the features" | No prioritisation | List features in priority order |
| "Just do what you think" | Abdicates decision-making | State your preference or constraints |
| Long silence then "why isn't it working" | No visibility into progress | Check in during long tasks |

### Vague vs Specific

| Vague | Specific |
|-------|----------|
| "The auth is broken" | "Login fails with 401 when using Google OAuth" |
| "Make it faster" | "The dashboard loads in 4s, target is under 1s" |
| "Clean up the code" | "Extract the validation logic into a separate function" |
| "Add tests" | "Add tests for the checkout flow happy path" |

---

## Quick Reference

| Situation | Pattern |
|-----------|---------|
| Starting session | Load context files, state goal |
| Requesting work | Context → What → Why → Constraints |
| Reporting bug | Expected → Actual → Steps → Error |
| Phase complete | Summary → Options → Question |
| Uncertain | Options with tradeoffs → Ask |
| End session | Done → In progress → Next → Blockers |
