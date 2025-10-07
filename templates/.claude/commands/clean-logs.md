---
description: Remove all debug console.log statements before committing
---

Search for and remove all console.log statements that were added for debugging purposes across the codebase.

Steps:
1. Search for console.log statements in src/ directory
2. Review each one to determine if it's debug code vs intentional logging
3. Remove debug console.logs while preserving any intentional error logging
4. Show me which files were modified

Focus on:
- API routes (src/pages/api/)
- Components (src/components/)
- Library files (src/lib/)

Preserve console.error statements for actual error handling.
