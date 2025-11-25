---
description: Kill zombie processes, clear Next.js cache, and start fresh dev server
---

Kill all existing npm dev server processes, remove the .next cache directory, and start a fresh development server on port 3000.

Steps:
1. Kill all processes matching "npm run dev"
2. Remove the .next directory
3. Start npm run dev

This is needed when hot module reloading fails or there are stale cache issues.
