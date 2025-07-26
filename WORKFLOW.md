# 🚀 New Project Workflow Guide

## Quick Start: 4 Simple Phases

### 📋 Phase 1: Planning (Claude Chat)
1. **Create Notion Entry** → Add to Geek Projects database
2. **Copy PRD Template** → Choose Tier 1/2/3 from `/templates/`
3. **Write Complete PRD** → Fill every section thoroughly
4. **Break Down Tasks** → Convert to actionable items

### 🔧 Phase 2: Setup (Claude Code)
1. **Create GitHub Repo** → Initialize with Next.js + TypeScript
2. **Set Up Environment** → Tailwind, dependencies, env variables
3. **Update Notion** → Add repository URL

### 💻 Phase 3: Development (Claude Code)
1. **Feature Loop** → Implement → Test → Quality Gates → Commit
2. **Quality Checks** → Security, Performance, Mobile after each feature
3. **Track Progress** → Update Notion status regularly

### 🚀 Phase 4: Launch (Claude Chat + Claude Code)
1. **Final Validation** → Complete all checklists
2. **Deploy** → Vercel with production configuration
3. **Go Live** → Test live site → Mark complete in Notion

## 📁 Template Selection Guide

| Project Type | Complexity | Template | Timeline |
|--------------|------------|----------|----------|
| Marketing site, Portfolio, Blog | **Tier 1** | `simple-site-prd.md` | 1-2 weeks |
| Dashboard, Tool, User App | **Tier 2** | `interactive-app-prd.md` | 2-6 weeks |
| SaaS, Business App, Complex Tool | **Tier 3** | `saas-app-prd.md` | 2-6 months |

## ✅ Quality Gates (Run After Each Feature)

### Security Checklist
- [ ] Input validation implemented
- [ ] Authentication secure
- [ ] No secrets in code
- [ ] Security headers configured

### Performance Checklist  
- [ ] Lighthouse score > 90
- [ ] Page load < 3 seconds
- [ ] Mobile optimized
- [ ] Images optimized

### Design Checklist
- [ ] Mobile responsive
- [ ] Accessibility compliant
- [ ] Professional appearance
- [ ] Touch targets 44px+

## 🎯 Example: Starting "Task Manager" Project

```bash
# 1. Planning Phase
# → Create Notion entry: "Task Manager" (Tier 2: Interactive App)
# → Copy interactive-app-prd.md template
# → Fill out user stories, features, technical requirements

# 2. Setup Phase
npx create-next-app@latest task-manager --typescript --tailwind
cd task-manager
git remote add origin https://github.com/username/task-manager.git
# → Update Notion with repo URL

# 3. Development Phase
# → Build authentication system
# → Implement task CRUD operations  
# → Add filtering and sorting
# → Run quality gates after each feature

# 4. Launch Phase
# → Complete security checklist
# → Deploy to Vercel
# → Test live functionality
# → Mark complete in Notion
```

## 🔄 Continuous Improvement

After each project:
1. **Document lessons learned** in Notion
2. **Update templates** based on insights  
3. **Refine checklists** with new requirements
4. **Share patterns** for reuse

---

**💡 Pro Tip**: Start with Tier 1 projects to validate the methodology, then progress to more complex tiers as you master the workflow.