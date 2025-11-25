# Agent System Setup Guide

## 🚀 Quick Installation

### Install Core Agents
```bash
# Copy agents to Claude Code directory
cp agents/*.md ~/.claude/agents/

# Verify installation
ls ~/.claude/agents/
# Should show: dependency-strategist.md, epct-orchestrator.md, geek-projects-quality-gate.md
```

### Install Enhanced E.P.C.T. Commands
```bash
# No additional workflow commands needed - agents work directly

# Agents work directly in Claude Code without additional setup
```

## 🧪 Agent System Verification

### Test Core Agents
Open Claude Code in any project and test each agent:

```bash
# Test workflow orchestrator
"Use epct-orchestrator to assess the agent system installation"

# Test dependency specialist
"Use dependency-strategist to assess dependency management capabilities"

# Test quality gate enforcer
"Use geek-projects-quality-gate to validate quality standards framework"
```

### Expected Agent Responses
✅ **Good Agent Activation:**
- Agent identifies itself by name and role
- Provides specialized expertise relevant to the request
- References Geek Projects methodology principles
- Gives specific, actionable recommendations

❌ **Generic Response (Agents Not Working):**
- No agent identification
- Generic advice without methodology context
- Doesn't reference specific constraints (Tailwind v4 prohibition, etc.)

## 🔧 Troubleshooting

### Agents Not Activating
1. **Check file location**: Ensure agents are in `~/.claude/agents/`
2. **Check file format**: Verify markdown files have proper YAML frontmatter
3. **Restart Claude Code**: Close and reopen Claude Code
4. **Try explicit requests**: "Use dependency-strategist to..."

### Generic Responses Despite Agent Requests
1. **Be more specific**: Reference the agent's role and methodology
2. **Include project context**: Mention tier level and current phase
3. **Check agent definitions**: Ensure agent files include methodology principles

## 📋 Installation Verification Checklist

- [ ] **Agents directory exists**: `~/.claude/agents/`
- [ ] **Three core agents installed**:
  - [ ] dependency-strategist.md
  - [ ] epct-orchestrator.md
  - [ ] geek-projects-quality-gate.md
- [ ] **Agents work directly**: No additional commands needed
- [ ] **Agent activation tested**: All three agents respond correctly
- [ ] **Methodology compliance**: Agents demonstrate knowledge of conservative dependency approach

## 🎯 Next Steps

Once agent system is installed and verified:
1. **Start a new project** using agent-enhanced workflow
2. **Test with existing project** to see agent recommendations
3. **Review agent responses** and refine if needed
4. **Document lessons learned** for methodology improvement