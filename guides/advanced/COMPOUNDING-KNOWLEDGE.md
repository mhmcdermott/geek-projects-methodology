# Compounding Knowledge

How to build systems that get better over time.

---

## The Principle

Every decision, pattern, and insight should feed forward. Yesterday's learning becomes tomorrow's automation.

```
Historical Data → Analysis → Rules → Automated Decisions → Better Rules
```

**Instead of:**
- Starting from zero each time
- Re-learning the same patterns
- Making the same mistakes

**You get:**
- Systems that improve without explicit training
- Institutional knowledge that persists
- Decisions informed by all past experience

---

## Three Levels of Compounding

### 1. Session Level (MEMORY.md)

Patterns and insights compound across sessions:

```markdown
### 30 Dec — Email Classification Insight
**Pattern:** Users always want VIP emails surfaced, even if they look like marketing.
**Context:** When classifying emails from known contacts.
**Action:** Add VIP check before any other classification.
```

**Next session:** Claude reads MEMORY.md and knows to prioritise VIP handling without being told.

### 2. Project Level (Learned Rules)

Analyse historical data to seed smart defaults:

```typescript
// Analyse 1000+ historical items
const analysis = await analyseHistory(items)

// Generate rules from patterns
const rules = analysis.patterns
  .filter(p => p.frequency > 10)
  .filter(p => p.consistency > 0.9)
  .map(toRule)

// Seed the system
await seedRules(rules)
```

**Result:** New system starts with 60+ rules instead of zero.

### 3. System Level (Feedback Loops)

Decisions improve the system automatically:

```typescript
// Human reviews and corrects
await recordCorrection(itemId, humanAction, aiSuggestion)

// If pattern is consistent, add to rules
if (await isConsistentPattern(signature)) {
  await addToPatternRules(signature, humanAction)
}
```

---

## Implementing Compounding

### Step 1: Capture Everything

Log all decisions with context:

```typescript
interface DecisionLog {
  timestamp: Date
  itemId: string
  itemSignature: string   // Normalized representation
  decision: Action
  source: 'pattern' | 'ai' | 'human'
  confidence: number
  wasOverridden: boolean
  overrideReason?: string
}
```

### Step 2: Analyse for Patterns

Periodically analyse logs for patterns:

```typescript
async function analysePatterns(): Promise<Pattern[]> {
  const logs = await getRecentLogs(30) // Last 30 days

  // Group by signature
  const grouped = groupBy(logs, 'itemSignature')

  // Find consistent patterns
  return Object.entries(grouped)
    .filter(([_, logs]) => logs.length >= MIN_FREQUENCY)
    .filter(([_, logs]) => calculateConsistency(logs) >= MIN_CONSISTENCY)
    .map(([signature, logs]) => ({
      signature,
      action: mostCommonAction(logs),
      frequency: logs.length,
      consistency: calculateConsistency(logs)
    }))
}
```

### Step 3: Promote to Rules

High-confidence patterns become automatic rules:

```typescript
async function promotePatterns(): Promise<void> {
  const patterns = await analysePatterns()

  for (const pattern of patterns) {
    if (pattern.consistency >= 0.95 && pattern.frequency >= 20) {
      await addRule({
        signature: pattern.signature,
        action: pattern.action,
        source: 'learned',
        createdAt: new Date()
      })

      console.log(`Promoted pattern: ${pattern.signature} → ${pattern.action}`)
    }
  }
}
```

### Step 4: Review and Validate

Periodically review learned rules:

```typescript
async function validateRules(): Promise<void> {
  const rules = await getLearnedRules()

  for (const rule of rules) {
    const recentDecisions = await getDecisionsForRule(rule.id, 7) // Last week

    const accuracy = recentDecisions.filter(d => !d.wasOverridden).length
      / recentDecisions.length

    if (accuracy < 0.9) {
      console.log(`Rule ${rule.id} degraded: ${accuracy * 100}% accuracy`)
      await flagForReview(rule.id)
    }
  }
}
```

---

## MEMORY.md as Compounding

The simplest form of compounding is MEMORY.md:

### Adding Insights

```markdown
### [Date] — [Short Title]
**Pattern/Insight:** [What was learned]
**Context:** [When this applies]
**Action:** [What to do differently]
```

### Good MEMORY.md Entries

**Specific and actionable:**
```markdown
### 1 Jan — Stripe Webhook Gotcha
**Lesson:** Webhook signature verification fails if body is parsed before verification.
**Context:** Any Stripe webhook handler.
**Action:** Always use raw body for signature check, then parse.
```

**General pattern:**
```markdown
### 30 Dec — Research Before Committing
**Pattern:** User validates ideas through external research before deciding.
**Context:** When proposing new approaches or tools.
**Action:** Provide research/comparison first, don't push for immediate decision.
```

### Reading MEMORY.md

At session start, Claude reads MEMORY.md and incorporates patterns:

```
Read MEMORY.md and apply any relevant patterns to today's work.
```

Claude now knows about the Stripe webhook issue, the user's decision-making style, and dozens of other accumulated insights.

---

## Seeding from History

When building a new smart system, don't start from zero.

### Example: Email Triage

```typescript
// 1. Export historical data
const emails = await exportLast90Days()  // 1693 emails

// 2. Analyse patterns
const patterns = analyseEmailPatterns(emails)
// Result: 63 patterns found

// 3. Generate rules
const rules = patterns.map(p => ({
  sender: p.sender,
  action: p.mostCommonAction,
  confidence: p.consistency,
  frequency: p.count
}))

// 4. Seed database
await seedRules(rules)
// Result: 39 archive rules, 23 read rules, 1 digest rule

// 5. Also extract VIPs and correspondents
const vips = extractVIPs(emails)          // 12 VIPs
const correspondents = extractCorrespondents(emails)  // 15 correspondents

await seedVIPs(vips)
await seedCorrespondents(correspondents)
```

**Day 1 result:** System handles 80%+ of emails automatically based on historical patterns.

### Scripts for Data Operations

Put analysis scripts in `scripts/`:

```
scripts/
├── analyse-email-history.mjs   # Parse history, generate rules
├── seed-rules.mjs              # Populate database
├── validate-rules.mjs          # Check rule accuracy
└── export-patterns.mjs         # Export for debugging
```

**Why scripts:**
- Rerunnable independently
- Debuggable in isolation
- Can run from command line
- Version controlled

---

## Metrics for Compounding

Track how the system improves:

```typescript
interface CompoundingMetrics {
  learnedRules: number       // Rules from pattern analysis
  patternHitRate: number     // % handled by patterns
  humanOverrideRate: number  // % of corrections
  averageConfidence: number  // AI confidence over time
}

// Log weekly
console.log({
  week: getWeekNumber(),
  learnedRules: await countLearnedRules(),
  patternHitRate: await calculatePatternHitRate(),
  humanOverrideRate: await calculateOverrideRate(),
  averageConfidence: await calculateAverageConfidence()
})
```

**Good trends:**
- `learnedRules` increasing
- `patternHitRate` increasing
- `humanOverrideRate` decreasing
- `averageConfidence` stable or increasing

---

## When to Compound

### Always Compound

- User preferences (add to MEMORY.md)
- Recurring workarounds (add to MEMORY.md)
- Classification patterns (add to rules)
- Frequently-used commands (add to scripts)

### Consider Carefully

- Edge cases (might not generalise)
- One-time fixes (not worth the overhead)
- Context-dependent patterns (may mislead)

### Don't Compound

- Security-related patterns (could be exploited)
- Temporary workarounds (will be removed)
- Incorrect assumptions (bad data in = bad data out)

---

## Quick Start

1. **Add MEMORY.md** to your project (see templates/)
2. **Log insights** as you discover them
3. **Read MEMORY.md** at session start
4. **Analyse history** when building smart features
5. **Track accuracy** and let rules degrade gracefully
