# [Project Name]

## Summary

**One sentence**: [What is this?]

**For**: [Who uses it?]

**Problem**: [What problem does it solve?]

**Success looks like**: [How do we know we're done?]

## Scope

**Tier**: [ ] 1 (static site) / [ ] 2 (app with auth) / [ ] 3 (SaaS)

**Timeline**: [X weeks]

## Features

### Must Ship (without these, don't launch)

1. **[Feature]**: [One sentence description]
   - User can [specific action]
   - [Acceptance criteria]

2. **[Feature]**: [Description]
   - [Acceptance criteria]

3. **[Feature]**: [Description]
   - [Acceptance criteria]

### Should Ship (if time allows)

4. **[Feature]**: [Description]

5. **[Feature]**: [Description]

### Won't Ship (explicitly out of scope)

- [Thing we're not building]
- [Another thing]

## User Flow

Main happy path:

1. User lands on [page]
2. User [does action]
3. User [does action]
4. User [achieves goal]

## Pages

| Page | Purpose | Key Elements |
|------|---------|--------------|
| / | Landing | Hero, features, CTA |
| /login | Auth | Google sign-in |
| /dashboard | Main app | [Key features] |
| /settings | User prefs | Profile, notifications |

## Data Model

```
User
- id
- email
- name
- createdAt

[OtherEntity]
- id
- userId (FK)
- [fields]
```

## Integrations

| Service | Purpose | Setup Required |
|---------|---------|----------------|
| Vercel | Hosting | Connect repo |
| Google OAuth | Auth | Create OAuth app |
| [Database] | Data | Create project, get URL |
| Resend | Email | Get API key |

## Open Questions

- [ ] [Question that needs answering]
- [ ] [Another question]

## Timeline

| Week | Focus |
|------|-------|
| 1 | Setup, auth, basic layout |
| 2 | Core feature 1 |
| 3 | Core feature 2, feature 3 |
| 4 | Polish, client review |
| 5 | QA, launch |

---

*Keep this doc updated as decisions are made.*
