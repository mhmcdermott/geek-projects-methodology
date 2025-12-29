---
description: Interview me about a plan to create a detailed spec
argument: $ARGUMENTS plan file path (e.g., docs/plan.md or PRD.md)
model: opus
---

Read the plan file at $ARGUMENTS thoroughly.

Then interview me in detail about this plan using the AskUserQuestion tool. Your questions should cover:

- **Technical implementation**: Architecture decisions, data model gaps, API design, state management
- **UI & UX**: User flows, edge cases, error states, empty states, loading states
- **Concerns & risks**: What could go wrong? Security implications? Performance bottlenecks?
- **Tradeoffs**: What are we choosing NOT to do? What's the MVP vs nice-to-have?
- **Dependencies**: External services, third-party APIs, authentication requirements
- **Testing strategy**: How will we verify this works? What are the critical paths?

Important guidelines:
- Ask questions that are NOT obvious - dig deeper than surface level
- Ask about things I might have overlooked or assumed incorrectly
- Challenge my assumptions respectfully
- Ask follow-up questions based on my answers
- Continue the interview until we've covered all major aspects

Once the interview is complete, write a comprehensive spec to `docs/SPEC.md` (or update the original plan file if I prefer) that includes:

1. **Overview**: What we're building and why
2. **User Stories**: Key user flows with acceptance criteria
3. **Technical Design**: Architecture, data model, API endpoints
4. **UI/UX Requirements**: Screens, states, interactions
5. **Edge Cases & Error Handling**: What happens when things go wrong
6. **Out of Scope**: What we're explicitly NOT doing
7. **Open Questions**: Anything still unresolved

Ask me where I'd like the spec written before finalizing.
