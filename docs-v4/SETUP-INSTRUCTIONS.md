# Geek Projects Template Setup Instructions

## CRITICAL: Follow Exactly - No Improvisation

### Step 1: Nuclear Reset (If Needed)
```bash
./scripts/geek-nuclear-reset.sh your-project-name
```

### Step 2: Copy Template
```bash
# Choose appropriate tier template
cp -r templates-v4/tier2-interactive-app/nextjs-full-stack-stable/ your-project-name/
cd your-project-name
```

### Step 3: Install Dependencies (Exact Versions)
```bash
# Install exact versions - do not update
npm install --no-package-lock
npm install
```

### Step 4: Customize for Project
```bash
# Update package.json name
sed -i 's/geek-projects-tier2-template/your-project-name/g' package.json

# Update tailwind colors for brand
# Edit tailwind.config.ts - replace primary/accent colors
```

### Step 5: Verify Working State
```bash
# Start development server
npm run dev

# Verify checklist:
# ✅ Server starts without errors
# ✅ Colors working: bg-primary-950, text-accent-500
# ✅ Fonts loading: Inter, Playfair Display
# ✅ Mobile responsive
# ✅ Build succeeds: npm run build
```

### Step 6: Create Project Entry
- Update Notion database with project details
- Set Template Used: tier2-interactive-stable
- Track setup success and time

## Fallback Options

### Option 1: Stable Template
If tier2 fails, use tier1-simple-site template

### Option 2: Static Fallback
Create static HTML version with Tailwind CDN

### Option 3: Different Framework
Switch to proven alternative (Astro, Remix)

## Success Metrics
- Setup time: <30 minutes
- First-time success: 95%
- Zero build errors
- Working custom colors