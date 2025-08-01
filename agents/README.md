# Geek Projects Methodology Agents

This directory contains the specialized AI agents that enhance the E.P.C.T. (Explore, Plan, Code, Test) workflow with integrated dependency management.

## 🤖 Agent Catalog

### Core Methodology Agents

#### dependency-strategist.md
**Role**: Conservative dependency management expert  
**Focus**: React 19.x, Tailwind 3.x, build stability  
**Use When**: Package evaluation, security audits, build troubleshooting

#### epct-orchestrator.md
**Role**: E.P.C.T. workflow coordinator  
**Focus**: Agent selection and phase management  
**Use When**: Project assessment, workflow coordination, phase transitions

#### geek-projects-quality-gate.md
**Role**: Quality standards enforcer  
**Focus**: Security, performance, dependency health validation  
**Use When**: Quality validation, pre-deployment checks, standards compliance

### Technical Specialists

#### systems-architect.md
**Role**: Technical architecture specialist  
**Focus**: Scalable system design, database modeling, API structure  
**Use When**: Architecture design, database planning, system integration

#### security-threat-analyst.md
**Role**: Security specialist  
**Focus**: Threat modeling, vulnerability analysis, defensive security  
**Use When**: Security planning, vulnerability assessment, compliance validation

#### frontend-ux-specialist.md
**Role**: Frontend development and UX expert  
**Focus**: React 19.x, Tailwind CSS 3.x, accessible user experiences  
**Use When**: UI/UX design, component development, accessibility implementation

#### backend-reliability-engineer.md
**Role**: Backend systems specialist  
**Focus**: Reliable APIs, database operations, server-side architecture  
**Use When**: API development, database operations, server-side logic

#### performance-optimizer.md
**Role**: Web performance specialist  
**Focus**: Core Web Vitals, bundle optimization, user experience performance  
**Use When**: Performance optimization, speed improvements, Core Web Vitals

### Quality & Process Experts

#### qa-test-engineer.md
**Role**: Quality assurance and testing specialist  
**Focus**: Testing strategies, automated testing, quality validation  
**Use When**: Test planning, quality assurance, test automation

#### code-analyzer-debugger.md
**Role**: Code analysis and debugging specialist  
**Focus**: Systematic problem resolution, build troubleshooting, code quality  
**Use When**: Bug investigation, build failures, code quality analysis

### Business & Strategy Team

#### prd-writer.md
**Role**: Product requirements documentation specialist  
**Focus**: Clear, comprehensive PRDs aligned with methodology  
**Use When**: Requirements gathering, PRD creation, project documentation

#### product-manager-orchestrator.md
**Role**: Enterprise-level project orchestration specialist  
**Focus**: Complex multi-agent teams for Tier 3 SaaS applications  
**Use When**: Enterprise projects, multi-team coordination, strategic planning

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
- **Performance**: `performance-optimizer` for optimization
- **Dependencies**: `dependency-strategist` for package management
- **Debugging**: `code-analyzer-debugger` for issue resolution

### 🧪 TEST Phase
- **Testing**: `qa-test-engineer` for comprehensive validation
- **Security**: `security-threat-analyst` for security audit
- **Performance**: `performance-optimizer` for benchmarks
- **Quality Gates**: `geek-projects-quality-gate` for final validation

## 🎯 Project Tier Guidance

### Tier 1 (Simple Sites)
**Core Agents**: `frontend-ux-specialist`, `dependency-strategist`, `geek-projects-quality-gate`  
**Coordinator**: `epct-orchestrator`  
**Focus**: Speed with stability, minimal complexity

### Tier 2 (Interactive Apps)
**Core Agents**: `systems-architect`, `security-threat-analyst`, `backend-reliability-engineer`, `frontend-ux-specialist`, `performance-optimizer`, `qa-test-engineer`, `dependency-strategist`  
**Coordinator**: `epct-orchestrator`  
**Support**: `code-analyzer-debugger`, `geek-projects-quality-gate`  
**Focus**: Comprehensive security and performance validation

### Tier 3 (SaaS Applications)
**Core Agents**: All agents with enterprise coordination  
**Coordinator**: `product-manager-orchestrator`  
**Support**: Full specialist team including `prd-writer` for documentation  
**Focus**: Enterprise-grade implementation with extensive testing

## 🔧 Integration with Enhanced Methodology

These agents are designed to work seamlessly with:
- **Enhanced Geek Projects Methodology v4.1+** Sprint-based development
- **Conservative Dependency Strategy** (`../docs/DEPENDENCY_STRATEGY.md`)
- **Universal CLAUDE.md Template** (`../templates/CLAUDE.md`)

## 📊 Agent Status

### ✅ Implemented Agents (12 Total)
All core agents are now implemented and ready for use:

**Core Methodology** (3):
- dependency-strategist, epct-orchestrator, geek-projects-quality-gate

**Technical Specialists** (5):
- systems-architect, security-threat-analyst, frontend-ux-specialist, backend-reliability-engineer, performance-optimizer

**Quality & Process** (2):
- qa-test-engineer, code-analyzer-debugger

**Business & Strategy** (2):
- prd-writer, product-manager-orchestrator

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
**Methodology Version**: Enhanced Geek Projects Methodology v4.1+