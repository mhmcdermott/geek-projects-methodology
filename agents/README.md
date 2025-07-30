# Geek Projects Methodology Agents

This directory contains the specialized AI agents that enhance the E.P.C.T. (Explore, Plan, Code, Test) workflow with integrated dependency management.

## 🤖 Core Methodology Agents

### dependency-strategist.md
**Role**: Conservative dependency management expert
**Focus**: React 19.x, Tailwind 3.x, build stability
**Key Responsibilities**:
- Enforce conservative pinning strategy
- Prevent problematic dependency updates (e.g., Tailwind CSS v4 beta)
- Guide dependency troubleshooting procedures
- Maintain DEPENDENCY_STRATEGY.md documentation

### epct-orchestrator.md
**Role**: E.P.C.T. workflow coordinator
**Focus**: Agent selection and phase management
**Key Responsibilities**:
- Assess project tier (Simple Site / Interactive App / SaaS)
- Coordinate appropriate agent teams for each phase
- Ensure methodology compliance throughout development
- Manage handoffs between Explore → Plan → Code → Test phases

### geek-projects-quality-gate.md
**Role**: Quality standards enforcer
**Focus**: Security, performance, dependency health validation
**Key Responsibilities**:
- Enforce tier-specific quality standards
- Validate security implementation
- Monitor performance benchmarks
- Ensure dependency health before deployment

## Installation

Copy these files to your Claude Code agents directory:

```bash
cp agents/*.md ~/.claude/agents/
```

## Agent Selection by Project Phase

### 🔍 EXPLORE Phase
- **Primary**: `dependency-strategist` for technology assessment
- **Supporting**: `systems-architect` for technical discovery

### 📋 PLAN Phase
- **Lead**: `systems-architect` for technical planning
- **Security**: `security-threat-analyst` for security architecture
- **Quality**: `geek-projects-quality-gate` for standards validation

### 💻 CODE Phase
- **Frontend**: `frontend-ux-specialist` for UI/UX implementation
- **Backend**: `backend-reliability-engineer` for server-side logic
- **Dependencies**: `dependency-strategist` for package management

### 🧪 TEST Phase
- **Testing**: `qa-test-engineer` for comprehensive validation
- **Quality Gates**: `geek-projects-quality-gate` for final validation

## 🎯 Project Tier Guidance

### Tier 1 (Simple Sites)
**Agent Team**: `frontend-ux-specialist`, `qa-test-engineer`, `dependency-strategist`
**Focus**: Speed with stability, minimal complexity

### Tier 2 (Interactive Apps)
**Agent Team**: `systems-architect`, `security-threat-analyst`, `backend-reliability-engineer`, `frontend-ux-specialist`, `performance-optimizer`, `qa-test-engineer`
**Focus**: Comprehensive security and performance validation

### Tier 3 (SaaS Applications)
**Agent Team**: Full specialist coordination with `product-manager-orchestrator`
**Focus**: Enterprise-grade implementation with extensive testing

## 🔧 Integration with Enhanced Methodology

These agents are designed to work seamlessly with:
- **Enhanced E.P.C.T. Workflow** (`../templates/enhanced/epct-workflow.md`)
- **Conservative Dependency Strategy** (`../docs/DEPENDENCY_STRATEGY.md`)
- **Enhanced CLAUDE.md Template** (`../templates/enhanced/claude-md-template.md`)

## 📋 Missing Agents (To Be Created)

The following agents are referenced but not yet implemented:
- `systems-architect.md`
- `security-threat-analyst.md`
- `frontend-ux-specialist.md`
- `backend-reliability-engineer.md`
- `performance-optimizer.md`
- `qa-test-engineer.md`
- `code-analyzer-debugger.md`
- `prd-writer.md`
- `product-manager-orchestrator.md`

## 🚨 Critical Reminders

### Always Use These Agents For:
- Dependency management decisions (`dependency-strategist`)
- Project phase coordination (`epct-orchestrator`)
- Quality validation before deployment (`geek-projects-quality-gate`)

### Key Principles:
1. **Conservative First**: Prioritize stability over latest features
2. **Security Always**: Never compromise on security standards
3. **Quality Gates**: No deployment without validation
4. **Documentation**: Keep DEPENDENCY_STRATEGY.md and CLAUDE.md current

---

**Status**: Core agents implemented, methodology ready for production use
**Last Updated**: July 2025
**Methodology Version**: Enhanced E.P.C.T. v2.0