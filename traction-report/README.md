# Traction Report — Content Engine

**Brand:** @tractionreport | Sneaker Content | Multi-Platform  
**Framework:** Sturdy | Shaky | Not It  
**Voice:** Direct. Credible. Opinionated. Never corporate.

## How This Works

YouTube Long-Form is the origin. Everything else derives. Never build a TikTok from scratch if a long-form script exists.

## Quick Start

```bash
# Generate a sneaker brief
node scripts/generate-brief.js "Anta Kai 4"

# Generate captions for all platforms
node scripts/generate-caption.js "Anta Kai 4" verdict Sturdy all

# Generate scripts for all platforms
node scripts/generate-script.js "Anta Kai 4" verdict all

# Batch reformat raw notes
node scripts/batch-reformat.js

# Export content calendar JSON
node scripts/notes-to-json.js
```

## Folder Structure

```
traction-report/
├── agents/              — AI agent definitions (SKILL.md per agent)
├── scripts/             — Node.js automation scripts
├── content-queue/
│   ├── raw-notes/       — Drop raw notes/drafts here
│   ├── processed-briefs/— Generated sneaker briefs
│   ├── scripts-ready/   — Camera-ready scripts by platform
│   └── captions-ready/  — Platform captions by platform
└── templates/           — Verdict, hook, and series format templates
```

## Agents

| Agent | Purpose |
|---|---|
| sneaker-brief-agent | Generates structured brief from shoe name |
| caption-generator-agent | Generates captions for all 5 platforms |
| script-writer-agent | Generates long-form + all derived scripts |
| content-batch-agent | Bulk processes raw-notes/ folder |

## Platform Hierarchy

1. YouTube Long-Form (origin)
2. YouTube Shorts + Instagram Reels (cut from long-form)
3. TikTok + Threads (derived or reactive)

---
*Traction Report. Built on honest takes. Powered by Bryan Wilson.*
