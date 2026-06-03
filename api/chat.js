module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') { res.status(200).end(); return; }
  if (req.method !== 'POST') { res.status(405).json({ error: 'Method not allowed' }); return; }

  const { messages, context } = req.body;
  if (!messages || !Array.isArray(messages)) {
    res.status(400).json({ error: 'messages array required' }); return;
  }

  const system = buildSystem(context || {});

  try {
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 1024,
        system,
        messages,
      }),
    });
    const data = await r.json();
    if (!r.ok) { res.status(r.status).json(data); return; }
    res.status(200).json({ reply: data.content[0].text });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

function buildSystem(ctx) {
  const audits = ctx.audits?.slice(0, 3).map(a =>
    `  ${a.date}: Energy ${a.energy}/10, Soreness ${a.soreness}/10, JumpQ ${a.jumpQ || a.explosive}/10`
  ).join('\n') || '  No local audit data.';

  const localDunks = ctx.dunks?.slice(0, 5).map(d =>
    `  ${d.date}: Approach ${d.approach || '?'}"  Touch ${d.touch || '?'}"`
  ).join('\n') || '  No local jump data.';

  // ── Athlete Zero live data ────────────────────────────────────────────────
  let notionSection = '';

  if (ctx.notionRecovery?.length) {
    notionSection += '\nATHLETE ZERO — RECOVERY LOG (last 7 days):\n';
    notionSection += ctx.notionRecovery.map(r => {
      const parts = [
        r.readiness && `Readiness=${r.readiness}`,
        r.sleep != null && `Sleep=${r.sleep}h`,
        r.sleepQ != null && `SleepQ=${r.sleepQ}/10`,
        r.energy != null && `Energy=${r.energy}/10`,
        r.soreness != null && `Soreness=${r.soreness}/10`,
        r.stress != null && `Stress=${r.stress}/10`,
        r.fatigue != null && `Fatigue=${r.fatigue}/10`,
        r.jumpQ != null && `JumpQ=${r.jumpQ}/10`,
        r.knee != null && r.knee > 4 && `KneePain=${r.knee}/10`,
        r.notes && `| ${r.notes}`,
      ].filter(Boolean).join(', ');
      return `  ${r.date}: ${parts}`;
    }).join('\n');
  }

  if (ctx.notionSessions?.length) {
    notionSection += '\n\nATHLETE ZERO — SESSION LOG (last 5):\n';
    notionSection += ctx.notionSessions.map(s =>
      `  ${s.date}: ${s.dayName || s.name || '?'}` +
      (s.rpe != null ? ` | RPE=${s.rpe}` : '') +
      (s.energy != null ? ` | Energy=${s.energy}` : '') +
      (s.jumpQ != null ? ` | JumpQ=${s.jumpQ}` : '') +
      (s.week ? ` | Wk${s.week}` : '') +
      (s.phase ? ` | ${s.phase}` : '') +
      (s.notes ? ` | ${s.notes}` : '')
    ).join('\n');
  }

  if (ctx.notionJumps?.length) {
    notionSection += '\n\nATHLETE ZERO — DUNK & JUMP LOG:\n';
    notionSection += ctx.notionJumps.map(j =>
      `  ${j.date}: Approach=${j.approach || '?'}"  Touch=${j.touch || '?'}"` +
      (j.week ? ` Wk${j.week}` : '') + (j.notes ? ` | ${j.notes}` : '')
    ).join('\n');
  }

  if (ctx.notionShooting?.length) {
    notionSection += '\n\nATHLETE ZERO — SHOOTING LOG:\n';
    notionSection += ctx.notionShooting.map(s =>
      `  ${s.date}: ${s.drill || '?'} — ${s.made || 0}/${s.att || 0}` +
      (s.pct != null ? ` (${Math.round(s.pct * 100)}%)` : '') +
      (s.type ? ` [${s.type}]` : '')
    ).join('\n');
  }

  if (ctx.exerciseRules?.length) {
    notionSection += '\n\nEXERCISE RELATIONSHIP RULES (follow these precisely):\n';
    notionSection += ctx.exerciseRules.map(e =>
      `  ${e.name || e.base}: Base=${e.base || '?'}` +
      (e.progression ? ` → Progress: ${e.progression}` : '') +
      (e.regression ? ` | Regress: ${e.regression}` : '') +
      (e.trigger ? ` | Unlock when: ${e.trigger}` : '') +
      (e.chainType ? ` [${e.chainType}]` : '') +
      (e.aiRule ? `\n    AI RULE: ${e.aiRule}` : '')
    ).join('\n');
  }

  return `You are Coach B — an elite performance coach for Bryan, a 42-year-old male athlete training to dunk a basketball for the first time on a regulation 10-foot rim.

PROGRAM: VPP 3.0 — Vertical Performance Protocol (16 weeks, 4 phases: Foundation → Force Dev → Elastic → Peak)
Training split: Mon/Wed/Fri = High Performance Training | Tue/Sat = Basketball Skill | Thu/Sun = Active Recovery
Dunk standard: need 114" standing touch. Current best approach: ${ctx.bestApproach || 'not logged'}" | Est. inches to dunk: ${ctx.inchesToDunk != null ? ctx.inchesToDunk + '"' : 'calculating'}

TODAY: ${ctx.today || '?'} — ${ctx.sessionType || '?'}

LOCAL DATA (fallback if Athlete Zero unavailable):
AUDIT LOG:
${audits}
JUMP LOG:
${localDunks}
${notionSection}

COACHING RULES:
- Prioritize Athlete Zero data over local data when both exist
- If recovery shows 2+ consecutive LOW readiness days: recommend regression + reduce CNS load
- If Exercise Relationship rules specify a trigger, check recovery data and tell Bryan explicitly whether he qualifies to progress
- Reference actual numbers when making any recommendation
- Be direct, specific, and motivating. Concise unless detail is asked for.
- Never be generic — Bryan is a specific athlete with specific numbers. Speak to those numbers.`;
}
