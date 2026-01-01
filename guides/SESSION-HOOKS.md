# Session Hooks

Automate context loading and state saving using Claude Code hooks.

---

## What Are Hooks?

Hooks are shell commands that run automatically at specific points in Claude Code's lifecycle:

| Hook | When It Runs | Use For |
|------|--------------|---------|
| `PreToolUse` | Before a tool executes | Validation, logging |
| `PostToolUse` | After a tool executes | Follow-up actions |
| `Notification` | When Claude sends a notification | Alerts |
| `Stop` | When Claude stops (before response) | State saving |

---

## Setting Up Hooks

### 1. Create Hook Scripts

Create a `.claude/hooks/` directory in your project:

```bash
mkdir -p .claude/hooks
```

### 2. Session Start Hook

Create `.claude/hooks/load-context.sh`:

```bash
#!/bin/bash
# Load all context files at session start

echo "Loading project context..."

# Check for context files
for file in CLAUDE.md NOW.md MEMORY.md; do
  if [ -f "$file" ]; then
    echo "Found: $file"
  else
    echo "Missing: $file"
  fi
done
```

### 3. Pre-Compact Hook

Create `.claude/hooks/save-state.sh`:

```bash
#!/bin/bash
# Save current state before context compaction

TIMESTAMP=$(date +"%Y-%m-%d %H:%M")

# Append session marker to NOW.md
if [ -f "NOW.md" ]; then
  echo "" >> NOW.md
  echo "---" >> NOW.md
  echo "**Session checkpoint:** $TIMESTAMP" >> NOW.md
  echo "State saved before context compaction." >> NOW.md
fi

echo "State saved at $TIMESTAMP"
```

### 4. Make Scripts Executable

```bash
chmod +x .claude/hooks/*.sh
```

---

## Hook Configuration

Add to your project's `.claude/settings.json`:

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Task",
        "hooks": [
          {
            "type": "command",
            "command": "echo 'Task completed'"
          }
        ]
      }
    ],
    "Stop": [
      {
        "hooks": [
          {
            "type": "command",
            "command": ".claude/hooks/save-state.sh"
          }
        ]
      }
    ]
  }
}
```

---

## Recommended Hook Patterns

### Pattern 1: Context Reminder

Remind Claude to check context files when starting significant work:

```json
{
  "PreToolUse": [
    {
      "matcher": "Write|Edit",
      "hooks": [
        {
          "type": "command",
          "command": "echo 'Remember: Check NOW.md for current context'"
        }
      ]
    }
  ]
}
```

### Pattern 2: Commit Reminder

Remind to commit after significant changes:

```json
{
  "PostToolUse": [
    {
      "matcher": "Write|Edit|MultiEdit",
      "hooks": [
        {
          "type": "command",
          "command": "echo 'Consider: git add && git commit'"
        }
      ]
    }
  ]
}
```

### Pattern 3: Type Check After Edits

Run type check after TypeScript changes:

```json
{
  "PostToolUse": [
    {
      "matcher": "Write|Edit",
      "hooks": [
        {
          "type": "command",
          "command": "if [[ \"$CLAUDE_TOOL_ARG_file_path\" == *.ts* ]]; then npx tsc --noEmit 2>&1 | head -5; fi"
        }
      ]
    }
  ]
}
```

---

## Manual Context Loading

If you don't use hooks, load context manually at session start:

```
Read CLAUDE.md, NOW.md, and MEMORY.md to understand this project.
```

Or create a slash command `.claude/commands/context.md`:

```markdown
---
description: Load all project context files
---

Read and summarise the following context files:
1. CLAUDE.md - Project identity and stable configuration
2. NOW.md - Current state and active tasks
3. MEMORY.md - Patterns and lessons learned

After reading, briefly confirm what phase we're in and what's being worked on.
```

Then use `/context` to load everything.

---

## Manual State Saving

Before ending a session or when context is getting long:

```
Update NOW.md with:
- Current task status
- Any blockers
- What to pick up next session

If we learned anything significant, add it to MEMORY.md.
```

---

## Starter Hooks Setup

The starter template includes basic hooks. To use them:

```bash
# Copy starter to new project
cp -r geek-projects-methodology/starter my-project
cd my-project

# Hooks are in .claude/hooks/
ls .claude/hooks/
```

---

## Troubleshooting

### Hook Not Running

1. Check script is executable: `chmod +x .claude/hooks/script.sh`
2. Check path is correct in settings.json
3. Check matcher pattern matches the tool

### Hook Errors

1. Test script manually: `./.claude/hooks/script.sh`
2. Check for syntax errors
3. Ensure dependencies are available

### Too Many Hooks

If hooks slow things down:
- Remove verbose logging
- Only hook critical actions
- Use matchers to limit scope
