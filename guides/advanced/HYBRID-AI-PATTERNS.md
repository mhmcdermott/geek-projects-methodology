# Hybrid AI Patterns

Architecture patterns for AI-powered features in Tier 3 projects.

---

## When to Use

Consider hybrid AI architecture when building:
- Content classification or triage systems
- Smart search or recommendations
- Automated workflows with AI decision-making
- Any feature that processes high volumes with AI

---

## Core Principle: Local-First

```
Fast path:  Pattern matching (no AI)     → Instant
Medium:     Local AI (Ollama)            → Fast, private
Slow path:  Cloud AI (Claude/OpenAI)     → Powerful, expensive
```

**Why this order:**
1. **Speed** - Pattern matching is instant
2. **Privacy** - Local AI keeps data on-device
3. **Cost** - Cloud AI only for edge cases
4. **Reliability** - Works offline for common cases

---

## Architecture Pattern

```typescript
async function classifyItem(item: Item): Promise<Classification> {
  // Fast path: Pattern matching (no AI)
  const patternResult = matchKnownPatterns(item)
  if (patternResult.confidence > 0.9) {
    return patternResult
  }

  // Medium path: Local AI
  const localResult = await classifyWithLocal(item)
  if (localResult.confidence > CONFIDENCE_THRESHOLD) {
    return localResult
  }

  // Slow path: Cloud AI (only when needed)
  const cloudResult = await classifyWithCloud(item)
  return cloudResult
}
```

---

## Pattern Matching Layer

Handle obvious cases without any AI:

```typescript
function matchKnownPatterns(email: Email): PatternResult | null {
  // Exact sender matches
  if (KNOWN_ARCHIVE_SENDERS.includes(email.from)) {
    return { action: 'archive', confidence: 1.0, source: 'pattern' }
  }

  // Regex patterns
  if (email.subject.match(/^(re:|fwd:)/i)) {
    return { action: 'read', confidence: 0.95, source: 'pattern' }
  }

  // Keyword matches
  if (SPAM_KEYWORDS.some(kw => email.subject.includes(kw))) {
    return { action: 'archive', confidence: 0.9, source: 'pattern' }
  }

  return null
}
```

**Good for:**
- Known senders/domains
- Regex patterns (order confirmations, newsletters)
- Keyword-based rules
- Previously-learned patterns

---

## Local AI Layer

Use Ollama for privacy-sensitive or high-volume classification:

```typescript
import Ollama from 'ollama'

const ollama = new Ollama({ host: 'http://localhost:11434' })

async function classifyWithLocal(item: Item): Promise<LocalResult> {
  const response = await ollama.chat({
    model: 'llama3.2',  // or mistral, phi, etc.
    messages: [
      {
        role: 'system',
        content: 'Classify this item. Respond with JSON: { "category": "...", "confidence": 0.X }'
      },
      {
        role: 'user',
        content: formatItemForClassification(item)
      }
    ],
    format: 'json'
  })

  return parseClassificationResponse(response.message.content)
}
```

**Local AI setup:**
```bash
# Install Ollama
brew install ollama

# Pull a model
ollama pull llama3.2

# Run (starts server on localhost:11434)
ollama serve
```

**Good for:**
- Privacy-sensitive data
- High volume (no API costs)
- Offline capability
- Consistent latency

---

## Cloud AI Layer

Use Claude or OpenAI for complex cases:

```typescript
import Anthropic from '@anthropic-ai/sdk'

const anthropic = new Anthropic()

async function classifyWithCloud(item: Item): Promise<CloudResult> {
  const response = await anthropic.messages.create({
    model: 'claude-3-haiku-20240307',  // Fast and cheap
    max_tokens: 256,
    messages: [
      {
        role: 'user',
        content: formatItemForClassification(item)
      }
    ]
  })

  return parseClassificationResponse(response.content[0].text)
}
```

**When to escalate:**
- Local confidence below threshold
- Complex reasoning required
- Multi-step analysis needed
- Edge cases with nuance

---

## Confidence Thresholds

Don't auto-handle low-confidence decisions:

```typescript
const CONFIDENCE_THRESHOLD = 0.7
const AUTO_HANDLE_THRESHOLD = 0.85

async function processItem(item: Item): Promise<void> {
  const classification = await classifyItem(item)

  if (classification.confidence >= AUTO_HANDLE_THRESHOLD) {
    // High confidence: auto-handle
    await handleAutomatically(item, classification)
  } else if (classification.confidence >= CONFIDENCE_THRESHOLD) {
    // Medium confidence: handle but log for review
    await handleAutomatically(item, classification)
    logForReview(item, classification)
  } else {
    // Low confidence: queue for human review
    await addToReviewQueue(item, classification)
  }
}
```

---

## Review Queue Pattern

Queue uncertain items for human review:

```typescript
interface ReviewItem {
  item: Item
  suggestedAction: Action
  confidence: number
  reason: string
  timestamp: Date
}

async function addToReviewQueue(
  item: Item,
  classification: Classification
): Promise<void> {
  await db.insert(reviewQueue).values({
    itemId: item.id,
    suggestedAction: classification.action,
    confidence: classification.confidence,
    reason: classification.reason,
    createdAt: new Date()
  })
}

// Review UI shows items and lets human approve/reject
// Approved actions feed back into pattern matching
```

---

## Learning from Decisions

Compound knowledge by learning from human decisions:

```typescript
async function recordDecision(
  item: Item,
  humanAction: Action,
  aiSuggestion: Action
): Promise<void> {
  // Store the decision
  await db.insert(decisions).values({
    itemSignature: generateSignature(item),
    humanAction,
    aiSuggestion,
    wasCorrect: humanAction === aiSuggestion,
    timestamp: new Date()
  })

  // If this sender/pattern appears often, add to pattern matching
  const frequency = await getFrequency(item.from)
  if (frequency >= PATTERN_THRESHOLD) {
    await addToPatternRules(item.from, humanAction)
  }
}
```

**Result:** System gets better over time without explicit training.

---

## Metrics to Track

```typescript
interface AIMetrics {
  total: number
  patternMatched: number   // Handled by pattern matching
  localHandled: number     // Handled by local AI
  cloudEscalated: number   // Sent to cloud AI
  reviewQueued: number     // Sent to human review
  accuracy: number         // Human corrections vs auto-handled
}

// Log after each batch
console.log({
  escalationRate: `${(cloudEscalated / total * 100).toFixed(1)}%`,
  patternHitRate: `${(patternMatched / total * 100).toFixed(1)}%`,
  reviewRate: `${(reviewQueued / total * 100).toFixed(1)}%`
})
```

**Target metrics:**
- Escalation rate: < 10% (ideally 0%)
- Pattern hit rate: > 60%
- Review rate: < 5%

---

## Example: Email Triage

Real-world example from McDOS project:

```typescript
async function triageEmail(email: Email): Promise<TriageResult> {
  // 1. VIP check (always surface)
  if (await isVIP(email.from)) {
    return { action: 'read', priority: 'high', source: 'vip' }
  }

  // 2. Learned patterns (from history analysis)
  const learnedRule = await matchLearnedRule(email.from)
  if (learnedRule) {
    return { action: learnedRule.action, source: 'learned' }
  }

  // 3. Pattern matching
  const pattern = matchKnownPatterns(email)
  if (pattern?.confidence > 0.9) {
    return { action: pattern.action, source: 'pattern' }
  }

  // 4. Local AI
  const local = await classifyWithOllama(email)
  if (local.confidence > 0.7) {
    return { action: local.action, source: 'local' }
  }

  // 5. Cloud AI (rare)
  const cloud = await classifyWithClaude(email)
  return { action: cloud.action, source: 'cloud' }
}
```

**Results:**
```
Processed: 100 emails
- VIP: 3 (always read)
- Learned: 14 (from history)
- Pattern: 44 (known rules)
- Local: 38 (Ollama)
- Cloud: 1 (escalated)

Escalation rate: 1%
```

---

## When NOT to Use Hybrid

Keep it simple when:
- Low volume (< 100 items/day)
- Simple classification (binary yes/no)
- All items need same treatment
- Privacy not a concern

Just use cloud AI directly and optimise later if needed.

---

## Dependencies

```bash
# Local AI
brew install ollama
ollama pull llama3.2

# Cloud AI (pick one)
npm install @anthropic-ai/sdk  # Claude
npm install openai              # OpenAI
```

---

## Quick Start

1. Start with cloud AI only (simplest)
2. Track escalation volume and costs
3. Add pattern matching for obvious cases
4. Add local AI if volume justifies it
5. Add learning loop to compound patterns
