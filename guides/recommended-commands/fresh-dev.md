# Fresh Dev Server

Kill all existing npm dev server processes, remove the .next cache directory, and start a fresh development server on port 3000.

```bash
pkill -f "npm run dev" || true
rm -rf .next
npm run dev
```
