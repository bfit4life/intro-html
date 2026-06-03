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
    `  ${a.date}: Energy ${a.energy}/10, Soreness ${a.soreness}/10, Jump Quality ${a.jumpQ || a.explosive}/10, CNS ${a.cns || '—'}`
  ).join('\n') || '  No audit data yet.';

  const dunks = ctx.dunks?.slice(0, 5).map(d =>
    `  ${d.date}: Standing ${d.standing}"  Approach ${d.approach}"  Touch ${d.touch}"  Rim ${d.rim}"`
  ).join('\n') || '  No jump log data yet.';

  return `You are Coach B — an elite performance coach for Bryan, a 42-year-old male athlete training to dunk a basketball for the first time on a regulation 10-foot rim.

PROGRAM: VPP 3.0 — Vertical Performance Protocol (16 weeks, 4 phases: Foundation → Force Dev → Elastic → Peak)
Training split: Mon/Wed/Fri = High Performance Training | Tue/Sat = Basketball Skill | Thu/Sun = Active Recovery

ATHLETE DATA:
- Best standing vertical: ${ctx.bestStanding || 'not logged yet'}"
- Best approach vertical: ${ctx.bestApproach || 'not logged yet'}"
- Inches to dunk: ${ctx.inchesToDunk != null ? ctx.inchesToDunk + '"' : 'calculating...'}
- Current week: ${ctx.week || '?'}  Phase: ${ctx.phase || '?'}
- Today: ${ctx.today || '?'} (${ctx.sessionType || '?'})

LAST 3 WEEKLY AUDITS:
${audits}

LAST 5 JUMP LOG ENTRIES:
${dunks}

COACHING STYLE: Direct, motivating, technically precise. Short answers unless detail is asked for. Reference actual numbers from the data above when relevant. If data is missing, ask the athlete for it. Never be generic — speak to Bryan's specific situation.`;
}
