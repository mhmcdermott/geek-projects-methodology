---
description: Generate a Google Stitch prompt for UI design
argument: $ARGUMENTS what you want to design (e.g., "login page", "dashboard", "settings form")
---

Read the project's CLAUDE.md (if it exists) to understand context, then generate a detailed prompt optimized for Google Stitch.

The prompt should include:

1. **Component/Page Description**: What is being designed
2. **User Context**: Who uses this and what they're trying to accomplish
3. **Key Elements**: Specific UI elements needed (buttons, forms, tables, etc.)
4. **Layout Hints**: General structure (sidebar, header, grid, etc.)
5. **Style Direction**: Modern, minimal, dashboard-style, marketing, etc.
6. **Brand Colors** (if defined in CLAUDE.md or globals.css): Include hex/oklch values

Format the output as a single prompt block that can be copy-pasted directly into Stitch.

**Example output:**

```
Design a login page for a freelancer invoicing app.

The user is a solo freelancer who wants to quickly access their dashboard to send invoices.

Include:
- Email and password fields
- "Remember me" checkbox
- "Forgot password" link
- Primary "Sign In" button
- "Sign up" link for new users
- Optional: Google OAuth button

Layout: Centered card on a subtle gradient background
Style: Clean, modern, professional. Not playful.
Colors: Primary blue #3B82F6, neutral grays
```

After generating the prompt, remind the user to:
1. Go to https://stitch.withgoogle.com/
2. Paste the prompt
3. Optionally upload reference images from docs/inspiration/
4. Export to Figma or copy the generated code
