#!/usr/bin/env python3
"""Generates Traction Report archetype card HTML files from the data below.
Run: python3 generate-cards.py
Re-run any time to regenerate all cards after editing the ARCHETYPES dict."""

import os

ARCHETYPES = [
    dict(
        slug="shifty-guard", accent="#c026d3", title="The Shifty Guard",
        tagline="Speed. Change. Control.",
        overview=["Quick handles. Fast feet.", "Always in attack mode."],
        needs=["Lightweight", "Low to the ground", "Great traction", "Responsive cushion"],
        playstyle="Explosive first step. Elite ball-handling. Creates space anywhere. Finishes with finesse. Controls the tempo. Defends with quick hands.",
        strengths=[("Speed", 9), ("Handles", 10), ("Agility", 9), ("Finishing", 7), ("Defense", 6)],
        positions=["PG", "SG"], nba="Kyrie Irving",
    ),
    dict(
        slug="3-level-scorer", accent="#3b82f6", title="The 3-Level Scorer",
        tagline="Space. Shoot. Create.",
        overview=["Can score from anywhere.", "Built to keep defenses honest."],
        needs=["Balanced cushion", "Lateral support", "Secure lockdown", "Good traction"],
        playstyle="Elite shooting from deep. Crafty off the dribble. Pulls up in transition. Creates space with footwork. Controls the tempo. Leads with confidence.",
        strengths=[("Shooting", 10), ("Handles", 8), ("Agility", 7), ("Finishing", 7), ("Defense", 6)],
        positions=["SG", "SF"], nba="Stephen Curry",
    ),
    dict(
        slug="shot-creator", accent="#6366f1", title="The Shot Creator",
        tagline="Create. Control. Break Down.",
        overview=["Creates his own shot.", "Controls the game.", "Breaks down any defense."],
        needs=["Great shooting", "Elite handling", "Playmaking vision", "Strong finishing", "Clutch confidence"],
        playstyle="Creates off the dribble. Reads the floor instantly. Uses pace and footwork to get to his spots. Hits tough shots with ease. Controls the tempo. Elevates in big moments.",
        strengths=[("Shooting", 9), ("Handles", 9), ("Playmaking", 10), ("Finishing", 8), ("IQ", 10), ("Clutch", 10)],
        positions=["PG", "SG"], nba="Luka Dončić",
    ),
    dict(
        slug="wing-stopper", accent="#ef4444", title="The Wing Stopper",
        tagline="Defend. Disrupt. Dominate.",
        overview=["Guard the best.", "Take pride in defense.", "Shut down every threat."],
        needs=["Lateral stability", "Strong lockdown", "Impact protection", "Energy & effort", "Great traction"],
        playstyle="Locks up elite scorers. Disrupts passing lanes. Fights over screens. Closes out with intensity. Finishes possessions. Sets the tone defensively. Never takes a play off.",
        strengths=[("Perimeter D", 9), ("Lateral Quickness", 9), ("Impact", 7), ("Stamina", 8), ("Rim Protection", 5), ("Offensive Impact", 5)],
        positions=["SG", "SF", "PF"], nba="OG Anunoby",
    ),
    dict(
        slug="power-forward", accent="#22c55e", title="The Power Forward",
        tagline="Tough. Physical. Relentless.",
        overview=["Tough inside. Relentless motor.", "Controls the paint on both ends.", "Built for contact."],
        needs=["Max cushion", "Impact protection", "Strong support", "Durability", "Great traction"],
        playstyle="Plays with force and purpose. Finishes through contact. Controls the boards. Protects the rim. Sets heavy screens. Anchors the defense. Always brings energy.",
        strengths=[("Inside Scoring", 9), ("Rebounding", 9), ("Defense", 8), ("Physicality", 10), ("Athleticism", 9), ("Durability", 9)],
        positions=["PF"], nba="Giannis Antetokounmpo",
    ),
    dict(
        slug="paint-anchor", accent="#eab308", title="The Paint Anchor",
        tagline="Protect. Rebound. Finish.",
        overview=["Protects the paint.", "Controls the boards.", "Finishes around the rim.", "Built like a wall."],
        needs=["Max impact protection", "High-top support", "Stability", "Durable outsole", "Balanced cushion"],
        playstyle="Owns the paint on both ends. Protects the rim with timing and positioning. Pulls down boards in traffic. Finishes through contact. Sets a tone defensively. Makes the smart play.",
        strengths=[("Rim Protection", 10), ("Rebounding", 9), ("Physicality", 8), ("Basketball IQ", 8), ("Finishing", 7), ("Stamina", 6)],
        positions=["C"], nba="Nikola Jokić",
    ),
    dict(
        slug="versatile-wing", accent="#f97316", title="The Versatile Wing",
        tagline="Adapt. Impact. Everywhere.",
        overview=["Scores at all three levels.", "Guards multiple positions.", "Creates offense.", "Rebounds and pushes tempo."],
        needs=["Balanced cushion", "Lateral support", "Impact protection", "Good traction", "Durability"],
        playstyle="Plays whatever the moment calls for. Scores inside and out. Guards 1 through 5 when needed. Pushes tempo off makes and misses. Makes the right read every time.",
        strengths=[("Versatility", 10), ("Playmaking", 9), ("Finishing", 10), ("Defense", 8), ("Basketball IQ", 10), ("Physicality", 9)],
        positions=["SF", "PF"], nba="LeBron James",
    ),
    dict(
        slug="speed-guard", accent="#06b6d4", title="The Speed Guard",
        tagline="Push. Sprint. Strike.",
        overview=["Plays in transition.", "Wins every race down the floor.", "Pushes pace before the defense sets."],
        needs=["Lightweight", "Responsive cushion", "Low profile", "Great traction", "Breathability"],
        playstyle="Pushes every rebound into transition. Beats defenders down the floor before they're set. Finishes in the open court. Closes gaps in passing lanes. Wears defenses down with pace.",
        strengths=[("Speed", 10), ("Transition", 9), ("Finishing", 7), ("Defense", 6), ("Stamina", 8)],
        positions=["PG", "SG"], nba="De'Aaron Fox",
    ),
]

CARD_TEMPLATE = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Traction Report — {title}</title>
<link rel="stylesheet" href="cards.css">
<style>.card{{--accent:{accent};}}</style>
</head>
<body>
  <div class="card">
    <div class="kicker">TRACTION REPORT</div>
    <div class="title">{title}</div>
    <div class="tagline">"{tagline}"</div>

    <div class="layout">
      <div>
        <div class="photo-wrap">
          <!-- Replace with <img src="../../images/cards/{slug}.jpg" alt="{nba}"> -->
          <div class="photo-placeholder"><span class="ball">🏀</span>Drop in licensed photo:<br>{slug}.jpg</div>
        </div>
        <div class="best-for-box">
          <div class="best-for-label">BEST FOR</div>
          <div class="best-for-positions">{position_pills}</div>
          <div class="nba-name">{nba}</div>
        </div>
      </div>

      <div>
        <div class="section">
          <div class="section-title">ARCHETYPE OVERVIEW</div>
          <ul class="overview-list">{overview_items}</ul>
        </div>

        <div class="section">
          <div class="section-title">WHAT YOU NEED</div>
          <ul class="need-list">{need_items}</ul>
        </div>

        <div class="section">
          <div class="section-title">PLAYSTYLE</div>
          <p class="playstyle-text">{playstyle}</p>
        </div>

        <div class="section">
          <div class="section-title">STRENGTHS</div>
          {strength_rows}
        </div>
      </div>
    </div>

    <div class="footer-row">
      <div class="brand">TRACTION REPORT</div>
      <div class="tr-badge">TR</div>
    </div>
  </div>
</body>
</html>
"""


def render_strength_row(label, score, max_score=10):
    blocks = "".join(
        f'<div class="strength-block{" filled" if i < score else ""}"></div>'
        for i in range(max_score)
    )
    return (
        f'<div class="strengths-row"><div class="strength-label">{label}</div>'
        f'<div class="strength-bar">{blocks}</div>'
        f'<div class="strength-score">{score}/10</div></div>'
    )


def render_card(data):
    overview_items = "".join(f"<li>{line}</li>" for line in data["overview"])
    need_items = "".join(f'<li><span class="need-icon">●</span>{n}</li>' for n in data["needs"])
    position_pills = "".join(f'<span class="pos-pill">{p}</span>' for p in data["positions"])
    strength_rows = "\n          ".join(render_strength_row(l, s) for l, s in data["strengths"])
    return CARD_TEMPLATE.format(
        title=data["title"], tagline=data["tagline"], slug=data["slug"],
        accent=data["accent"], nba=data["nba"], position_pills=position_pills,
        overview_items=overview_items, need_items=need_items,
        playstyle=data["playstyle"], strength_rows=strength_rows,
    )


if __name__ == "__main__":
    out_dir = os.path.dirname(os.path.abspath(__file__))
    for data in ARCHETYPES:
        path = os.path.join(out_dir, f"{data['slug']}.html")
        with open(path, "w") as f:
            f.write(render_card(data))
        print(f"wrote {path}")
