---
description: Build, commit, and push changes to trigger Vercel deployment
---

Run the full deployment workflow to push changes to production.

Steps:
1. Run `npm run build` to verify the production build succeeds
2. If build succeeds, create a git commit with a detailed message including:
   - What was changed (feat/fix/chore prefix)
   - Why it was changed
   - Key implementation details
   - Co-authored-by Claude footer
3. Push to master branch
4. Confirm that Vercel deployment was triggered

If the build fails, stop and show me the errors - do not commit or push.

Automatically create an appropriate commit message based on the changes in git diff without asking for confirmation. Use conventional commit prefixes (feat/fix/perf/chore) and include detailed implementation notes.
