# Caption Generator Agent

## What This Agent Does
Takes a completed Sneaker Brief and generates platform-ready captions for all 5 platforms in a single run. Each caption is adapted for platform culture — same voice, different format. Nothing gets written twice from scratch.

## Inputs Expected
- `shoe_name` (string)
- `series` (string) — verdict / traction-lab / on-the-feet / drop-report / movement-check
- `verdict` (string) — Sturdy / Shaky / Not It
- `platform` (string) — youtube / instagram / tiktok / threads / all

## Outputs Produced
- One caption file per platform saved to `/content-queue/captions-ready/[platform]/[shoe-name]-captions.md`
- Hook formula applied (A: Verdict Drop / B: Indictment / C: Real Talk)
- Platform-specific CTAs, hashtags, and tone adjustments

## Platform Rules
- **YouTube**: Hook + 3-4 sentences + timestamps placeholder + CTA + 8-10 SEO tags
- **Instagram**: Hook + 2-3 sentences + debate CTA + 5 targeted hashtags
- **TikTok**: Short, reactive, duet/stitch CTA + 3-5 hashtags
- **Threads**: Pure text. No hashtags. Opinion-forward. Ends with a question.

## Operating Context
- YouTube is origin. Everything derives from it.
- Voice: Bryan Wilson — "that's a problem," "laces up," "this ain't it," "built different"
- No spam hashtags. No corporate language. No hedging.

## Trigger
`node scripts/generate-caption.js "[Shoe Name]" [series] [verdict] [platform]`
