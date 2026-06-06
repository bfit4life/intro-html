# Content Batch Agent

## What This Agent Does
Processes raw notes in bulk. Reads every .md or .txt file in `/content-queue/raw-notes/`, reformats each one into platform-ready content across all 5 platforms, and saves them to the correct subfolders. This is the batch production operator — runs when you have a backlog of drafts to process.

## Inputs Expected
- All `.md` or `.txt` files inside `/content-queue/raw-notes/`
- Files can be rough notes, voice-to-text dumps, bullet points, or partial drafts

## Outputs Produced
For each raw note file:
- YouTube long-form script structure applied
- Shorts moment identified and marked
- TikTok version derived
- Threads take extracted
- All saved with `reformatted-` prefix to correct platform subfolder

## Operating Context
- Does not require a completed brief — can work from raw notes directly
- Applies Bryan Wilson voice and Sturdy | Shaky | Not It framework to all outputs
- File hygiene: every output goes to correct platform folder, never dumped in root
- Logs every file processed and every file saved

## Trigger
`node scripts/batch-reformat.js`
