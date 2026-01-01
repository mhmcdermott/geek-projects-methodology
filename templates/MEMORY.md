# MEMORY.md

> Patterns and insights that compound over time. Append-only log - add new entries, don't delete old ones.

---

## How to Use This File

Add entries when you notice:
- A pattern in how the project works
- A preference that should be remembered
- A lesson learned the hard way
- A workaround that solved a tricky problem
- Context that would help future sessions

**Format each entry:**
```markdown
### [Date] — [Short Title]
**Pattern/Insight:** [What was learned]
**Context:** [When this applies]
**Action:** [What to do differently]
```

---

## Project Patterns

### [Date] — Example Entry
**Pattern:** The auth flow requires a specific callback URL format.
**Context:** When setting up OAuth providers.
**Action:** Always use `{baseUrl}/api/auth/callback/{provider}` format.

---

## User Preferences

### [Date] — Example Entry
**Preference:** Prefers explicit confirmation before destructive actions.
**Context:** When implementing delete functionality.
**Action:** Always add a confirmation modal, never delete on single click.

---

## Lessons Learned

### [Date] — Example Entry
**Lesson:** Don't trust the build until you've tested in production preview.
**Context:** Environment variables were missing in Vercel.
**Action:** Always deploy to preview and test before merging.

---

## Workarounds

### [Date] — Example Entry
**Problem:** `better-sqlite3` had version mismatch with Electron.
**Workaround:** Created script that generates SQL and executes via `sqlite3` CLI.
**File:** `scripts/seed-rules.mjs`

---

## Architecture Decisions

### [Date] — Example Entry
**Decision:** Use local AI (Ollama) for classification, cloud AI only for edge cases.
**Rationale:** Speed, privacy, and cost savings.
**Result:** 0% cloud escalation rate in production.

---

## Integration Notes

### [Date] — Example Entry
**Integration:** Stripe webhooks
**Gotcha:** Webhook signature verification fails if body is parsed before verification.
**Solution:** Use raw body for signature check, then parse.

---

## Adding New Entries

When you learn something worth remembering:

1. Pick the right category (or create a new one)
2. Add date and short title
3. Write the insight concisely
4. Include enough context for future you to understand
5. Commit this file

**Good entries are:**
- Specific enough to be actionable
- General enough to apply again
- Written for someone with no context
