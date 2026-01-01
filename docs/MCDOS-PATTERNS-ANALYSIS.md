# McDOS Collaboration Patterns Analysis

> Deep analysis of patterns from McDOS project for incorporation into Geek Projects Methodology.

**Analysed:** 1 Jan 2026
**Source:** `~/Sites/mcdos/.claude/docs/COLLABORATION-PATTERNS.md`

---

## Executive Summary

The McDOS project (4-day intensive, 29 Dec - 1 Jan 2026) produced a working email triage system with learned rules, auto-archive, and VIP detection. More importantly, it documented **collaboration patterns** that significantly improve human-AI development workflow.

**Key findings:**

1. **Major gaps in current methodology:** Context management, session continuity, and compounding knowledge are not addressed
2. **Underutilised Claude Code features:** EnterPlanMode, TodoWrite discipline, background tasks, hooks
3. **Missing ADHD-friendly patterns:** Voice-first brain dumps, context loading automation
4. **High-value additions:** Three-file context system, CRIT framework, hybrid AI architecture

---

## Pattern-by-Pattern Analysis

### 1. CRIT Framework (Requirements Gathering)

**What it is:**
```
C - Context: What's the situation? What exists today?
R - Role: Who is this for? What's their expertise level?
I - Interview: Ask probing questions, challenge assumptions
T - Task: Only after understanding, define what to build
```

**Current methodology:**
- Has `/interview-plan` command
- Mentions brain dump questions in Explore phase
- No structured framework for the interview process

**Gap:**
The `/interview-plan` command assumes a plan already exists. CRIT is for *before* the plan - when the user says "add email handling" and you need to understand what that means.

**McDOS evidence:**
> "30 minutes of interviewing saves days of rework. The spec for email handling was 500+ lines because we interviewed properly."

**Recommendation:** Add CRIT as a pre-planning framework. The interview questions documented are gold:

**Scenario-based:**
- "Walk me through receiving a flight confirmation email"
- "Show me a newsletter you'd want summarised vs deleted"

**Challenge assumptions:**
- "You said archive marketing emails. What about from companies you've bought from?"

**Dig deeper:**
- "What would break your trust in the system?"
- "What's the cost of a false positive vs false negative?"

---

### 2. Brain Dump Process (Voice-First Capture)

**What it is:**
Unstructured voice capture of everything in the user's head, then structured processing.

**Current methodology:**
- METHODOLOGY.md mentions "Start with a Brain Dump" in Explore phase
- Provides good questions to answer
- Says "Save transcript to `docs/brain-dump.md`"

**Gap:**
Doesn't explain:
- Voice-first approach (just type stream-of-consciousness)
- Follow-up prompts to extract hidden context
- How to process the brain dump into structured outputs

**McDOS evidence:**
```
How to Prompt a Brain Dump:
"Tell me everything about [topic]. Don't organise it, don't filter it.
Just talk. I'll ask follow-up questions after."

Follow-up prompts:
- "What did you skip because it felt obvious?"
- "What's the thing you're avoiding mentioning?"
- "If I could read your mind right now, what else is there?"
```

**Processing outputs:**
1. **Facts** → Goes into CLAUDE.md or relevant spec
2. **Current state** → Goes into NOW.md
3. **Patterns/insights** → Goes into MEMORY.md
4. **Action items** → Goes into plan or todos

**ADHD insight:**
> "Voice capture works better than written because: No friction to start, Hyperfocus can flow uninterrupted, Tangents are allowed (often valuable), Completion feels natural."

**Recommendation:** Enhance the brain dump section with:
- Explicit voice-first instruction
- Follow-up prompts
- Processing framework (facts/state/patterns/actions)
- Note about ADHD-friendly workflow

---

### 3. Three-File Context System

**What it is:**
```
MCDOS.md   - Stable identity (rarely changes)
NOW.md     - Current state (updated frequently)
MEMORY.md  - Patterns over time (append-only log)
```

**Current methodology:**
- Only has `CLAUDE.md` template
- Current Status section exists but mixed with stable context
- No MEMORY.md concept at all

**Gap:** This is a **major gap**. The three-file system solves:
- Context bloat (don't re-read entire life story each session)
- Session continuity (NOW.md survives context compaction)
- Compounding knowledge (MEMORY.md captures patterns)

**McDOS evidence:**
```markdown
**Why it works:**
- CLAUDE.md gives Claude the "who" and "why" without re-explaining every session
- NOW.md provides the "what now" - current phase, active tasks, blockers
- MEMORY.md captures insights that compound ("Mark avoids uncomfortable tasks")
```

**MEMORY.md example:**
```markdown
### 30 Dec 2025 — External Research & Ambition Crystallised
**Pattern confirmed:** Mark validates ideas through external research before committing.
The 3-project analysis wasn't procrastination — it was building conviction.
```

**Recommendation:**
1. Split `CLAUDE.md` template into three files
2. Add `templates/NOW.md` with current phase/tasks/blockers
3. Add `templates/MEMORY.md` with append-only pattern log
4. Document when to update each

---

### 4. Context Management Hooks

**What it is:**
Automated hooks that run at session boundaries.

**Current methodology:**
- No mention of hooks

**Gap:** This is the automation layer that makes the three-file system work.

**McDOS evidence:**
```bash
# .claude/hooks/precompact-handoff.sh
# Runs automatically before context compaction
# Saves state to NOW.md and MEMORY.md before Claude's context gets compressed

# .claude/hooks/sessionstart-context.sh
# Loads MCDOS.md, NOW.md, MEMORY.md on every session start
```

> "Without this, insights would be lost."
> "Pattern: Automate context loading. Never rely on remembering to load context manually."

**Recommendation:**
1. Add hooks section to methodology
2. Provide template hooks for:
   - Session start (load context files)
   - Pre-compaction (save state)
   - Post-feature (prompt retrospective)

---

### 5. Plan Mode (EnterPlanMode Tool)

**What it is:**
Claude Code's built-in tool for non-trivial implementation planning.

**Current methodology:**
- Uses `/epct-workflow` command
- Requires plan approval before coding
- Doesn't mention `EnterPlanMode` tool

**Gap:**
The methodology uses a custom workflow that duplicates Claude Code's built-in planning capability. `EnterPlanMode`:
- Switches Claude into exploration mode
- Writes plan to file
- Requires user approval to exit
- More integrated than a command prompt

**McDOS evidence:**
```
Use EnterPlanMode when:
- New feature implementation
- Multiple valid approaches exist
- Code modifications affect existing behavior
- Architectural decisions needed
- Multi-file changes (3+ files)
- Unclear requirements need exploration
```

**Plan file structure:**
```markdown
# Feature Name

**Created:** [date]
**Status:** Planning | Approved | In Progress | Complete

## Overview
## Technical Approach
## Implementation Phases
## Files to Modify
## Database Changes
## API Changes
## Success Criteria
```

> "The approval gate prevents wasted work. Mark can catch misunderstandings before code is written."

**Recommendation:**
1. Consider replacing or augmenting `/epct-workflow` with native `EnterPlanMode`
2. Document when to use plan mode vs skip
3. Add plan file persistence to `/plans` directory

---

### 6. TodoWrite Discipline

**What it is:**
Specific patterns for using Claude Code's TodoWrite tool effectively.

**Current methodology:**
- `/epct-workflow` mentions "Use TodoWrite to track"
- No detailed guidance

**Gap:**
Missing the discipline around TodoWrite:
- When to use it (3+ step work)
- When NOT to use it (trivial single-step)
- How to structure todos (content + activeForm)
- Marking in_progress → completed in real-time

**McDOS evidence:**
```typescript
TodoWrite([
  { content: "Refactor auto-handle.ts", status: "in_progress", activeForm: "Refactoring auto-handle.ts" },
  { content: "Implement correspondent check", status: "pending", activeForm: "Implementing correspondent check" },
])
```

**Why it works:**
- Visible progress for the human ("what's Claude doing?")
- Claude doesn't lose track across context boundaries
- Natural checkpoints for handoffs
- Satisfying to mark things complete

**Anti-pattern:** Don't create todos for trivial single-step tasks.

**Recommendation:** Add TodoWrite guidance to methodology:
- Use for 3+ step work
- Always provide `activeForm` (present continuous)
- Mark in_progress before starting, completed immediately after
- Use across context boundaries

---

### 7. Background Tasks Pattern

**What it is:**
Running dev servers and long processes as background tasks.

**Current methodology:**
- Not covered

**Gap:**
This is practical knowledge for real development work.

**McDOS evidence:**
```bash
# Started as background task
npm run dev  # Task ID: b6c005b
```

**Why background:**
- Dev server runs continuously
- Claude can check logs via TaskOutput without blocking
- Hot reload means code changes reflect immediately
- Can verify changes without restart

> "Pattern: Always run dev servers in background. Check output periodically to verify changes work."

**Lesson about stuck agents:**
> "If a background agent gets stuck, work around it rather than waiting."

**Recommendation:** Add "Background Tasks" section to workflow guide.

---

### 8. CLI Tools Over Native Bindings

**What it is:**
When native Node bindings fail, shell out to CLI tools.

**Current methodology:**
- Not covered

**Gap:**
This is a workaround pattern that prevents getting stuck.

**McDOS evidence:**
```
We hit a `better-sqlite3` version mismatch:
NODE_MODULE_VERSION 140 vs required 115

Solution: Created script that generates SQL, writes to temp file, executes via sqlite3 CLI.
```

```javascript
execSync(`sqlite3 "${dbPath}" < ${sqlFile}`)
```

> "Key insight: CLI tools are more portable than native bindings. When bindings break, shell out."

**Recommendation:** Add to troubleshooting guide.

---

### 9. Scripts for Data Operations

**What it is:**
Complex data operations live in `scripts/` directory, not inline.

**Current methodology:**
- File structure shows no `scripts/` convention

**Gap:**
Data operations (seeding, analysis, migrations) should be rerunnable scripts.

**McDOS evidence:**
```
scripts/analyse-email-history.mjs  - Parse 1693 emails, generate rules
scripts/seed-rules.mjs             - Populate database from analysis
```

**Why scripts, not inline:**
- Rerunnable independently
- Debuggable in isolation
- No Electron/Node version conflicts
- Can run from command line

**Recommendation:** Add `scripts/` to standard file structure.

---

### 10. Hybrid AI Architecture

**What it is:**
Local-first processing with cloud AI as fallback.

**Current methodology:**
- Not covered (assumes cloud AI)

**Gap:**
For personal tools or data-intensive applications, local AI reduces cost and latency.

**McDOS evidence:**
```typescript
// Fast path: pattern matching (no AI)
const fastResult = isObviousAutoArchive(email.fromEmail, email.subject)

// Medium path: local Ollama
const localResult = await askLocal(prompt)

// Slow path: Claude API (only if needed)
const cloudResult = await ask(prompt)
```

**Results:**
```
escalationRate: '0%'  // All local, no cloud calls
```

**Confidence thresholds:**
```typescript
const CONFIDENCE_THRESHOLD = 0.7
if (confidence < CONFIDENCE_THRESHOLD) {
  addToReviewPile(email, reason, confidence, suggestedAction)
}
```

> "Pattern: Build hybrid systems. Local for speed/privacy, cloud for edge cases."

**Recommendation:** Add "AI Integration Patterns" section for Tier 2-3 projects.

---

### 11. Compounding Knowledge

**What it is:**
Using historical data to seed AI systems, then building on learned patterns.

**Current methodology:**
- Has retrospective section
- No concept of seeding from history or compounding

**Gap:**
The retrospective captures what to do differently, but doesn't feed into automated improvement.

**McDOS evidence:**
```
1693 cached emails analyzed
→ 63 suggested rules generated
→ 39 archive rules, 23 read rules, 1 digest
→ 15 correspondents, 12 VIPs
```

**Later:**
```
[Briefing] Hybrid AI classification: { total: 15, local: 1, cloud: 0, learned: 14 }
```

> "14 of 15 emails used learned patterns. 0% cloud escalation."
> "The system gets better without explicit training. Historical behavior becomes future automation."

**MEMORY.md compounding:**
```markdown
**Pattern confirmed:** Mark validates ideas through external research before committing.
```

> "These patterns inform future sessions. Claude knows 'Mark researches before committing' and won't push him to code prematurely."

**Recommendation:**
1. Add MEMORY.md for pattern capture
2. Document how to seed systems from historical data
3. Show how insights compound across sessions

---

### 12. Frontend Design Skill Integration

**What it is:**
Loading the frontend-design skill BEFORE writing UI code.

**Current methodology:**
- Mentions plugin: "Add when you hit the trigger"
- Doesn't explain invocation pattern

**Gap:**
The skill should be invoked proactively, not reactively.

**McDOS evidence:**
```
User: "Build the email triage dashboard"

Claude: [invokes skill: frontend-design]
Claude: [now has design patterns, anti-patterns, and taste loaded]
Claude: [writes React components with proper design]
```

**What it prevents:**
- Excessive card shadows
- Gratuitous animations
- Icon overload
- "Dashboard syndrome"

**Before/after code comparison shows dramatic difference in output quality.**

**Recommendation:** Update plugin guidance to show proactive invocation pattern.

---

### 13. Communication Patterns

**What it is:**
How to communicate effectively during AI collaboration.

**Current methodology:**
- Not explicitly covered

**Gap:**
These patterns reduce friction and improve outcomes.

**McDOS patterns:**

**Context before ask:**
```
Good: "The email triage is using pattern matching. Can we add learned rules?"
Bad: "Add learned rules."
```

**Concise updates:**
```
Phase 2: Smart Decision Engine - Complete

Summary:
- 63 learned rules active
- 44/100 emails auto-archived
- 0% cloud escalation
```

**Ask at boundaries:**
```
Shall I continue with Phase 3 (Smart Workflows) or would you like to
use the app first to see how the current auto-handle behaves?
```

> "Pattern: Don't assume. Check intent at natural breakpoints."

**Recommendation:** Add "Communication Patterns" section to guides.

---

### 14. Session Lifecycle

**What it is:**
The complete flow from session start to session end.

**Current methodology:**
- Has workflow steps
- No explicit session model

**Gap:**
No concept of session boundaries, context loading, or handoffs.

**McDOS session lifecycle:**
```
1. Session starts → Load context (MCDOS.md, NOW.md, MEMORY.md)
2. Check for active plan → Continue or create new
3. Execute with TodoWrite → Track all progress
4. Before compaction → Save state to NOW.md, MEMORY.md
5. Session ends → Handoff file created
```

**Recommendation:** Document session lifecycle with hooks integration.

---

## Gap Summary

### Critical Gaps (High Impact)

| Gap | Impact | Effort |
|-----|--------|--------|
| Three-file context system | Major - solves context loss | Medium |
| Session lifecycle + hooks | Major - automates continuity | Medium |
| CRIT framework | High - better requirements | Low |
| TodoWrite discipline | High - visible progress | Low |

### Moderate Gaps

| Gap | Impact | Effort |
|-----|--------|--------|
| Brain dump processing | Moderate - better Explore | Low |
| Plan mode integration | Moderate - uses built-in tool | Low |
| Background tasks | Moderate - practical workflow | Low |
| Communication patterns | Moderate - reduces friction | Low |

### Nice-to-Have

| Gap | Impact | Effort |
|-----|--------|--------|
| Hybrid AI architecture | Context-dependent | High |
| Scripts directory | Minor - organisation | Low |
| CLI workaround patterns | Minor - troubleshooting | Low |

---

## Recommended Actions

### Phase 1: Quick Wins (This Week)

1. **Add CRIT framework** to interview guidance
2. **Enhance brain dump** with follow-up prompts and processing
3. **Add TodoWrite discipline** to workflow
4. **Document communication patterns**

### Phase 2: Core Infrastructure (Next Week)

5. **Implement three-file context system**
   - Split CLAUDE.md template
   - Create NOW.md template
   - Create MEMORY.md template
   - Document update cadence

6. **Add hooks templates**
   - Session start context loader
   - Pre-compaction state saver

7. **Document session lifecycle**

### Phase 3: Advanced Patterns (Future)

8. **Integrate EnterPlanMode** with E.P.C.T.
9. **Add hybrid AI patterns** for Tier 3
10. **Add compounding knowledge** guidance

---

## Files to Create/Modify

### New Files

```
templates/NOW.md          # Current state template
templates/MEMORY.md       # Pattern log template
hooks/session-start.sh    # Context loader template
hooks/pre-compact.sh      # State saver template
guides/COMMUNICATION.md   # Communication patterns
guides/SESSION-LIFECYCLE.md
```

### Files to Modify

```
METHODOLOGY.md            # Add CRIT, brain dump enhancement
WORKFLOW.md               # Add TodoWrite discipline, background tasks
templates/CLAUDE.md       # Focus on stable identity only
.claude/commands/epct-workflow.md  # Integrate plan mode
CHECKLISTS.md            # Add session boundary checklist
```

---

## Conclusion

The McDOS collaboration patterns represent **battle-tested** improvements discovered during intensive real-world development. The three-file context system and session lifecycle management are the highest-impact additions - they solve the persistent problem of context loss across sessions.

The methodology is already good. These additions make it robust for longer projects and ADHD-friendly workflows where context continuity is critical.
