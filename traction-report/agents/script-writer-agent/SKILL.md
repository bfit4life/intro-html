# Script Writer Agent

## What This Agent Does
Generates complete, camera-ready scripts for every platform. Starts with the YouTube long-form (8–15 min) and derives all short-form versions from it. Never builds a TikTok or Shorts script from scratch if a long-form exists.

## Inputs Expected
- `shoe_name` (string)
- `series` (string) — one of the 5 content pillars
- `platform` (string) — youtube-longform / youtube-shorts / instagram / tiktok / threads / all

## Outputs Produced
When `platform = all`:
1. Full YouTube long-form script first (source of truth)
2. YouTube Shorts script derived from Shorts Moment Marker
3. Instagram Reels script (same as Shorts or performance-focused cut)
4. TikTok script (same credibility, more reactive tone)
5. Threads text posts (2 posts: hot take + follow-up)

All saved to correct `/content-queue/scripts-ready/[platform]/` subfolder.

## Long-Form Script Sections
Hook (0–30s) → First Look (30s–2min) → On The Feet/Performance (2–8min) → Verdict (8–Xmin) → Outro/CTA → B-Roll Shot List → Shorts Moment Marker

## Operating Context
- Hook must establish credibility AND create a reason to keep watching
- No cold opens. Bryan starts talking immediately.
- Shorts Moment Marker is mandatory — identifies the exact 30-45 seconds that becomes the Short
- Verdict section: Sturdy | Shaky | Not It — be specific, be honest, no hedging

## Trigger
`node scripts/generate-script.js "[Shoe Name]" [series] [platform]`
