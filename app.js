'use strict';

// ── Navigation ────────────────────────────────────────────────────────────────
document.querySelectorAll('.nav-item').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('section-' + btn.dataset.section).classList.add('active');
    if (window.innerWidth < 768) closeSidebar();
  });
});

document.getElementById('menuBtn').addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('open');
});
function closeSidebar() { document.getElementById('sidebar').classList.remove('open'); }

// ── Phase Accordion ───────────────────────────────────────────────────────────
function togglePhase(header) {
  const body = header.nextElementSibling;
  const isOpen = header.classList.contains('open');
  header.classList.toggle('open', !isOpen);
  body.classList.toggle('open', !isOpen);
}

// ── Weekly Schedule Data ──────────────────────────────────────────────────────
const WEEK = [
  {
    name: 'MON', type: 'hpt', pill: 'HPT 1',
    focus: 'Strength + Lower Power',
    sessions: [
      { num: '1', title: 'Movement Prep', dur: '10 min', items: [
        { name: 'Hip circles, ankle circles, leg swings', detail: '2×10 each' },
        { name: 'High knees + butt kicks', detail: '2×20m each' },
        { name: 'Lateral shuffle + carioca', detail: '2×10m' },
        { name: 'Glute bridge activation', detail: '2×15 reps' },
      ]},
      { num: '2', title: 'Mobility', dur: '10 min', items: [
        { name: 'Ankle wall drill', detail: '3×10 each ankle' },
        { name: 'Banded ankle distraction', detail: '2×30 sec each' },
        { name: '90/90 hip stretch', detail: '2×45 sec each side' },
        { name: 'Hip flexor lunge stretch', detail: '2×45 sec each side' },
      ]},
      { num: '3', title: 'Jump Development', dur: '15 min', items: [
        { name: 'Pogo Jumps', detail: '3×20–25 reps — stiff ankles, rapid contact' },
        { name: 'Depth Drops', detail: '3×5–8 off 12–15" box — land soft, absorb' },
        { name: 'Broad Jumps', detail: '3×5 max effort — arm swing, stick landing' },
      ]},
      { num: '4', title: 'Strength Development', dur: '30 min', items: [
        { name: 'Trap Bar Deadlift', detail: 'Phase-dependent sets/reps — explosive concentric' },
        { name: 'Slant Board Squats', detail: 'Phase-dependent — 15–25° board, full depth' },
        { name: 'Single-Leg RDL', detail: '3×8–10 each leg' },
        { name: 'Copenhagen Plank', detail: '3×20–35 sec each side' },
        { name: 'Slant Board Isometric', detail: '5×45 sec @ 70–90° — LAST exercise' },
      ]},
      { num: '5', title: 'Athletic Development', dur: '12 min', items: [
        { name: 'Acceleration Runs', detail: '5×20m — focus on first 3 steps' },
        { name: 'Change of Direction (5-10-5)', detail: '4× each direction' },
        { name: 'Lateral defensive slides', detail: '3×10m each way' },
      ]},
      { num: '6', title: 'Basketball Transfer', dur: '8 min', items: [
        { name: 'Approach jump to rim', detail: '10× max reach — track height' },
        { name: 'Jump stop + explode', detail: '5× — game-speed decelerate/reaccelerate' },
      ]},
      { num: '7', title: 'Recovery Protocol', dur: '10 min', items: [
        { name: 'Tibialis Raises', detail: '3×20 — heel on edge, toe up' },
        { name: 'Soleus Raises (bent knee)', detail: '3×15 — 2 sec hold' },
        { name: 'Foot strength — towel scrunches', detail: '2×30 sec each foot' },
        { name: 'Foam roll — calves/quads', detail: '60 sec each zone' },
      ]},
    ]
  },
  {
    name: 'TUE', type: 'skill', pill: 'SKILL 1',
    focus: 'Ball Handling + Finishing',
    sessions: [
      { num: '1', title: 'Court Warm-Up', dur: '8 min', items: [
        { name: 'Full-court jog + back-pedal', detail: '3 laps' },
        { name: 'Defensive slides baseline to baseline', detail: '4×' },
        { name: 'Dynamic layup series', detail: '5× each side' },
      ]},
      { num: '2', title: 'Ball Handling', dur: '15 min', items: [
        { name: 'Two-ball stationary dribbling', detail: '3×30 sec — alternating & simultaneous' },
        { name: 'Figure-8 low dribble', detail: '3×20 sec each direction' },
        { name: 'Full-court combo moves', detail: '5× — crossover, between-legs, behind-back' },
        { name: 'Chair drills / cone work', detail: 'Attack → crossover → pull back × 10' },
      ]},
      { num: '3', title: 'Finishing', dur: '15 min', items: [
        { name: 'Mikan drill (both hands)', detail: '3×10 each side' },
        { name: 'Euro-step layup', detail: '5× each side at game speed' },
        { name: 'Floater (running + pull-up)', detail: '5× each side' },
        { name: 'Power layup / dunk approach', detail: '10× max effort' },
      ]},
      { num: '4', title: 'Footwork', dur: '10 min', items: [
        { name: 'Drop-step post move', detail: '5× each block' },
        { name: 'Step-back jumper', detail: '5× each wing' },
        { name: 'Transition run + finish', detail: '5× full court' },
      ]},
      { num: '5', title: 'Basketball Conditioning', dur: '15 min', items: [
        { name: 'Suicide sprints', detail: '4× — walk back rest' },
        { name: 'Defensive slide + sprint back', detail: '4× baseline to half court' },
        { name: 'Transition finishing drill', detail: '5× full court both ways' },
      ]},
    ]
  },
  {
    name: 'WED', type: 'hpt', pill: 'HPT 2',
    focus: 'Speed + Jump Development',
    sessions: [
      { num: '1', title: 'Movement Prep', dur: '10 min', items: [
        { name: 'Dynamic warm-up circuit', detail: 'High knees, butt kicks, A-skip, B-skip' },
        { name: 'Hip activation band work', detail: 'Clamshells, monster walks 2×15' },
        { name: 'Ankle circles + calf raises (both legs)', detail: '2×15' },
      ]},
      { num: '2', title: 'Mobility', dur: '8 min', items: [
        { name: 'Hip mobility flow (world greatest stretch)', detail: '5 each side' },
        { name: 'Ankle mobility — seated band distraction', detail: '2×30 sec each' },
        { name: 'Pigeon pose', detail: '60 sec each side' },
      ]},
      { num: '3', title: 'Jump Development', dur: '20 min', items: [
        { name: 'Band Assisted Jumps', detail: '4×8–12 — approach jumps, dunk attempts' },
        { name: 'Pogo Jumps → Single-Leg Pogos', detail: '3×20 bilateral, 3×12 each leg' },
        { name: 'Reactive lateral bounds', detail: '4×5 each leg — land and explode' },
        { name: 'Vertical jump max efforts', detail: '5× measured — record in Dunk Lab' },
      ]},
      { num: '4', title: 'Speed Development', dur: '20 min', items: [
        { name: 'First step explosion (standing start)', detail: '6×10m' },
        { name: 'Flying 20m sprints', detail: '4×20m — rolling start' },
        { name: 'T-drill (change of direction)', detail: '4× each way' },
        { name: 'Deceleration → reacceleration', detail: '5× 10m stop/start' },
      ]},
      { num: '5', title: 'Strength Supplemental', dur: '15 min', items: [
        { name: 'Slant Board Squat', detail: 'Reduced volume — 2×8 maintenance' },
        { name: 'Tibialis Raises', detail: '3×20' },
        { name: 'Soleus Raises', detail: '3×15' },
        { name: 'Foot strength work', detail: '2×30 sec scrunches' },
      ]},
      { num: '6+7', title: 'Transfer + Recovery', dur: '15 min', items: [
        { name: 'Dunk approach work (footwork)', detail: '1-step, 2-step, 3-step × 5 each' },
        { name: 'Foam roll full lower body', detail: '60 sec per zone' },
        { name: 'Hip flexor stretch', detail: '60 sec each side' },
      ]},
    ]
  },
  {
    name: 'THU', type: 'recovery', pill: 'RECOVERY',
    focus: 'Active Recovery + Mobility',
    sessions: [
      { num: '☀', title: 'Morning Flow', dur: '30 min', items: [
        { name: 'Morning sun walk (barefoot if possible)', detail: '10 min' },
        { name: 'Full-body mobility flow', detail: '20 min — hip, ankle, thoracic focus' },
        { name: 'Slant board mobility (NOT strength)', detail: '2×10 controlled squats, no load' },
        { name: 'Foot massage — lacrosse ball', detail: '3 min each foot' },
      ]},
      { num: '🌿', title: 'Tissue Work', dur: '20 min', items: [
        { name: 'Foam roll — calves, quads, IT band, glutes', detail: '90 sec each zone' },
        { name: 'Hip flexor trigger point (lacrosse ball)', detail: '2 min each side' },
        { name: 'Thoracic extension over roller', detail: '2 min' },
        { name: 'Tibialis raises (light — 1×15)', detail: 'Maintenance only' },
      ]},
      { num: '🚶', title: 'Zone 2 Walk', dur: '25–35 min', items: [
        { name: 'Easy walk — talking pace (2–2.5 mph)', detail: 'Target 8,000–10,000 total steps today' },
        { name: 'Post-meal walk (dinner)', detail: '10 min after dinner every day' },
      ]},
      { num: '🌙', title: 'Evening Recovery', dur: '20 min', items: [
        { name: 'Light yoga or hip stretching', detail: '15 min — yin yoga style' },
        { name: 'Contrast shower', detail: '3 min hot / 1 min cold × 3 rounds' },
        { name: 'Recovery stack: magnesium + omega-3 + tart cherry', detail: 'With light snack' },
      ]},
    ]
  },
  {
    name: 'FRI', type: 'hpt', pill: 'HPT 3 + DUNK',
    focus: 'Power + Weekly Dunk Session',
    sessions: [
      { num: '1', title: 'CNS Warm-Up', dur: '12 min', items: [
        { name: 'Mini trampoline OR pogo jumps', detail: '5 min — prime elastic system' },
        { name: 'Ankle + hip mobility fast circuit', detail: '7 min' },
        { name: 'Ankle alphabet + calf raises', detail: '1×15 each' },
      ]},
      { num: '2', title: 'Dunk Session (WEEKLY)', dur: '25 min', items: [
        { name: 'Standing reach measurement', detail: '3 attempts — record in Dunk Lab' },
        { name: 'Max jump reach measurement', detail: '3 attempts — record height' },
        { name: '1/2/3-step approach work', detail: '5× each — master footwork pattern' },
        { name: 'Band assisted current + next stage', detail: '5×5 — feel success above rim' },
        { name: 'Max dunk attempts (current stage)', detail: '10–15 attempts — rest 90 sec each' },
        { name: 'Film review — watch 3 best attempts', detail: 'Check approach angle & arm swing' },
      ]},
      { num: '3', title: 'Power Strength', dur: '20 min', items: [
        { name: 'Trap Bar Deadlift (explosive intent)', detail: 'Phase-dependent — max velocity' },
        { name: 'Jump squat (light bar or BW)', detail: '4×5 — explode through floor' },
        { name: 'Depth drop → jump', detail: 'Phase-dependent off 18–24" box' },
      ]},
      { num: '4', title: 'Rotational Athleticism', dur: '12 min', items: [
        { name: 'Rotational med ball throw (10–15lb)', detail: '4×6 each side' },
        { name: 'Hip-driven lateral bound', detail: '3×5 each side' },
        { name: 'Single-leg landing → explode', detail: '4×5 each leg' },
      ]},
      { num: '5+6', title: 'Shoe Testing + Recovery', dur: '15 min', items: [
        { name: 'TRACTION REPORT: Shoe test on court', detail: 'Rate: traction, lockdown, response for jumping' },
        { name: 'Tibialis + soleus raises', detail: '3×20 and 3×15' },
        { name: 'Foam roll + cool down', detail: '8 min full lower body' },
        { name: 'Log session in Dunk Lab', detail: 'Vertical jump, stage achieved, shoe worn' },
      ]},
    ]
  },
  {
    name: 'SAT', type: 'skill', pill: 'SKILL 2',
    focus: 'Shooting + Game Speed',
    sessions: [
      { num: '1', title: 'Court Warm-Up', dur: '8 min', items: [
        { name: 'Full-court layup series', detail: '5× each side — both hands' },
        { name: 'Form shooting (5 ft)', detail: '20 makes' },
        { name: 'Dynamic court warm-up', detail: 'Slides, shuffles, back-pedal 3 laps' },
      ]},
      { num: '2', title: 'Catch & Shoot', dur: '15 min', items: [
        { name: 'Corner catch & shoot', detail: '10× each corner' },
        { name: 'Wing relocate & shoot', detail: '5× each wing — run into catch' },
        { name: 'Transition 3 (run + catch)', detail: '5× each wing — game speed' },
        { name: 'Elbow catch & shoot', detail: '10× each elbow' },
      ]},
      { num: '3', title: 'Pull-Up Game', dur: '15 min', items: [
        { name: 'Midrange pull-up (1 dribble)', detail: '10× each elbow' },
        { name: 'Step-back 3 (Harden drill)', detail: '5× each wing' },
        { name: '45° pull-up', detail: '5× each side' },
        { name: 'Moving jumper off curl', detail: '5× each side — Klay-style' },
      ]},
      { num: '4', title: 'Shoe Traction Testing', dur: '10 min', items: [
        { name: 'Lateral cut test on court surface', detail: 'Rate slip on scale 1–10' },
        { name: 'Acceleration + stop test', detail: 'First step explosion with current shoe' },
        { name: 'Sole sole photos / grip close-up', detail: 'Traction Report content capture' },
      ]},
      { num: '5', title: 'Game Speed Conditioning', dur: '12 min', items: [
        { name: 'Full court 1-on-0 game speed', detail: '5× each side' },
        { name: '17-second drill (baseline to baseline)', detail: '4× — game-pace conditioning' },
        { name: 'Defensive stance drill', detail: '3× 30 sec — full intensity' },
      ]},
    ]
  },
  {
    name: 'SUN', type: 'hpt', pill: 'HPT 4',
    focus: 'Reactive Athleticism + Plyos',
    sessions: [
      { num: '1', title: 'Movement Prep', dur: '10 min', items: [
        { name: 'Jump rope warm-up', detail: '3 min — alternate fast/slow' },
        { name: 'Hip + ankle circuit', detail: '5 min' },
        { name: 'Lateral lunge warm-up', detail: '2×10 each side' },
      ]},
      { num: '2', title: 'Reactive Plyometrics', dur: '20 min', items: [
        { name: 'Pogo jumps → direction change', detail: '4×10 each direction — reactive' },
        { name: 'Lateral reactive bounds', detail: '4×6 each side — land & explode immediately' },
        { name: 'Drop step → jump (mimic post move)', detail: '4×5 each side' },
        { name: 'Box jumps (step-up focus)', detail: '4×5 — 24" box, land soft' },
        { name: 'Standing → approach jump comparison', detail: '5 of each — feel the difference' },
      ]},
      { num: '3', title: 'Single-Leg Strength', dur: '20 min', items: [
        { name: 'Bulgarian split squat', detail: '3×8 each leg — slow eccentric' },
        { name: 'Single-leg press (slant board if available)', detail: '3×10 each' },
        { name: 'Single-leg hip thrust', detail: '3×12 each — glute peak contraction' },
        { name: 'Copenhagen plank', detail: '3×25–35 sec each side' },
      ]},
      { num: '4', title: 'Lateral Movement', dur: '12 min', items: [
        { name: 'Lateral shuffle + deceleration', detail: '4×10m each direction' },
        { name: 'Defensive mirror drill', detail: '3×20 sec — explosive reactions' },
        { name: 'Hip-width lateral bound + stick', detail: '3×5 each leg' },
      ]},
      { num: '5+6', title: 'Transfer + Recovery', dur: '18 min', items: [
        { name: 'Slant board isometric (maintenance)', detail: '3×30 sec @70°' },
        { name: 'Tibialis raises', detail: '3×20' },
        { name: 'Soleus raises', detail: '3×15' },
        { name: 'Foot strength work', detail: '2×30 sec' },
        { name: 'Full foam roll + stretching', detail: '10 min cool-down' },
      ]},
    ]
  },
];

function buildWeekGrid() {
  const grid = document.getElementById('weekGrid');
  WEEK.forEach((day, i) => {
    const typeClass = day.type === 'hpt' ? 'pill-hpt' : day.type === 'skill' ? 'pill-skill' : 'pill-recovery';
    const card = document.createElement('div');
    card.className = 'day-card';
    card.innerHTML = `<div class="day-name">${day.name}</div><div class="day-type-pill ${typeClass}">${day.pill}</div><div class="day-focus">${day.focus}</div>`;
    card.addEventListener('click', () => {
      document.querySelectorAll('.day-card').forEach(c => c.classList.remove('active-day'));
      card.classList.add('active-day');
      showDayDetail(i);
    });
    grid.appendChild(card);
  });
}

function showDayDetail(i) {
  const day = WEEK[i];
  const box = document.getElementById('dayDetail');
  const typeColor = day.type === 'hpt' ? 'var(--orange)' : day.type === 'skill' ? 'var(--blue)' : 'var(--green)';
  let html = `<div style="display:flex;align-items:center;gap:12px;margin-bottom:18px">
    <h2 style="font-size:20px;font-weight:800">${day.name} — ${day.focus}</h2>
  </div>`;
  day.sessions.forEach(s => {
    html += `<div class="session-block"><div class="session-block-header">
      <div class="session-num" style="background:${typeColor}">${s.num}</div>
      <h4>${s.title}</h4><span class="session-duration">${s.dur}</span>
    </div><div class="session-block-body"><ul class="exercise-list">`;
    s.items.forEach(item => {
      html += `<li><input type="checkbox" class="ex-check"><div><div class="ex-name">${item.name}</div><div class="ex-detail">${item.detail}</div></div></li>`;
    });
    html += `</ul></div></div>`;
  });
  box.innerHTML = html;
}

// ── Meal Plan Data ────────────────────────────────────────────────────────────
const MEALS = {
  training: {
    kcal: 2900, protein: 165, carbs: 330, fat: 103,
    label: 'Training Day',
    meals: [
      { time: '6:30 AM', kcal: 480, name: 'Pre-Training Fuel', foods: '1 cup oats (dry 50g) · 1 scoop whey protein · 1 banana · 1 tbsp honey · 12 oz black coffee', p: 32, c: 72, f: 6 },
      { time: '9:00 AM', kcal: 520, name: 'Post-Workout Recovery', foods: '3 whole eggs + 2 whites scrambled · 1 cup low-fat Greek yogurt · 1 cup mixed berries · 1 slice Ezekiel bread', p: 48, c: 42, f: 14 },
      { time: '12:30 PM', kcal: 640, name: 'Performance Lunch', foods: '6 oz grilled chicken breast · 1.5 cups cooked brown rice · 2 cups mixed greens · ½ avocado · olive oil + lemon dressing', p: 52, c: 68, f: 18 },
      { time: '3:30 PM', kcal: 320, name: 'Athletic Snack', foods: '1 cup low-fat cottage cheese · ½ cup blueberries · 1 oz almonds', p: 28, c: 24, f: 10 },
      { time: '7:00 PM', kcal: 720, name: 'Recovery Dinner', foods: '7 oz Atlantic salmon · 1.5 cups roasted sweet potato · 2 cups steamed broccoli + 1 tsp olive oil · lemon + herbs', p: 52, c: 64, f: 24 },
      { time: '9:00 PM', kcal: 220, name: 'Overnight Recovery', foods: '1 cup low-fat cottage cheese OR casein shake · ½ cup frozen dark cherries (anti-inflammatory)', p: 28, c: 20, f: 5 },
    ]
  },
  basketball: {
    kcal: 2700, protein: 160, carbs: 305, fat: 90,
    label: 'Basketball Day',
    meals: [
      { time: '6:30 AM', kcal: 420, name: 'Morning Fuel', foods: '1 cup oats · 1 scoop whey protein · 1 banana · 8 oz orange juice (fast carbs for court)', p: 30, c: 68, f: 5 },
      { time: '9:30 AM', kcal: 480, name: 'Mid-Morning Meal', foods: '4 oz chicken breast · 1 cup white rice (fast digesting) · 1 cup steamed vegetables · 1 tsp olive oil', p: 40, c: 55, f: 8 },
      { time: '12:30 PM', kcal: 600, name: 'Pre-Court Meal (2–3 hrs before)', foods: '6 oz turkey breast · 1 cup cooked quinoa · mixed greens + cherry tomatoes · balsamic drizzle', p: 50, c: 58, f: 12 },
      { time: '3:30 PM', kcal: 180, name: 'Pre-Game Snack (30–60 min)', foods: '2 dates + 1 tbsp peanut butter · ½ banana · 16 oz water with electrolytes', p: 4, c: 32, f: 5 },
      { time: '7:00 PM', kcal: 680, name: 'Post-Court Recovery', foods: '8 oz grilled chicken thigh · 1.5 cups roasted potatoes · 2 cups asparagus + olive oil', p: 52, c: 58, f: 22 },
      { time: '9:00 PM', kcal: 200, name: 'Night Recovery', foods: 'Casein shake OR Greek yogurt · ½ cup berries · magnesium supplement', p: 25, c: 20, f: 4 },
    ]
  },
  recovery: {
    kcal: 2300, protein: 155, carbs: 235, fat: 82,
    label: 'Recovery Day',
    meals: [
      { time: '7:00 AM', kcal: 380, name: 'Relaxed Morning', foods: '2 eggs + 2 whites any style · 2 slices Ezekiel toast · ½ avocado · coffee or green tea', p: 28, c: 36, f: 16 },
      { time: '10:00 AM', kcal: 260, name: 'Light Snack', foods: '1 cup Greek yogurt · ½ cup granola · 1 tsp honey', p: 16, c: 38, f: 6 },
      { time: '1:00 PM', kcal: 560, name: 'Anti-Inflammatory Lunch', foods: '6 oz wild salmon · 1 cup cooked lentils · 2 cups spinach salad · olive oil + apple cider vinegar dressing · lemon', p: 48, c: 48, f: 18 },
      { time: '4:00 PM', kcal: 220, name: 'Recovery Snack', foods: '1 oz mixed nuts · 1 apple · tart cherry juice (4 oz) — reduces DOMS significantly', p: 5, c: 36, f: 12 },
      { time: '7:00 PM', kcal: 680, name: 'Repair Dinner', foods: '7 oz chicken breast · 1 cup sweet potato · 2 cups broccoli + garlic + olive oil · side salad', p: 52, c: 52, f: 20 },
      { time: '9:00 PM', kcal: 200, name: 'Overnight Repair', foods: '1 cup cottage cheese · handful blueberries · magnesium glycinate 400mg', p: 26, c: 20, f: 6 },
    ]
  }
};

function switchMealPlan(type, btn) {
  document.querySelectorAll('.day-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  renderMealPlan(type);
}

function renderMealPlan(type) {
  const d = MEALS[type];
  const kcalColor = type === 'training' ? 'var(--orange)' : type === 'basketball' ? 'var(--blue)' : 'var(--green)';
  let html = `<div class="macro-grid mb-16">
    <div class="macro-card"><div class="macro-num" style="color:${kcalColor}">${d.kcal}<span class="macro-unit"> kcal</span></div><div class="macro-label">Daily Calories</div></div>
    <div class="macro-card"><div class="macro-num" style="color:var(--blue)">${d.protein}<span class="macro-unit">g</span></div><div class="macro-label">Protein</div></div>
    <div class="macro-card"><div class="macro-num" style="color:var(--gold)">${d.carbs}<span class="macro-unit">g</span></div><div class="macro-label">Carbohydrates</div></div>
  </div>
  <div class="grid-2 mb-16" style="grid-template-columns:1fr auto">
    <div></div>
    <div class="macro-card" style="text-align:center;min-width:120px"><div class="macro-num" style="color:var(--green)">${d.fat}<span class="macro-unit">g</span></div><div class="macro-label">Total Fat</div></div>
  </div>
  <div class="card mb-16">
    <div class="card-title">${d.label} — Full Meal Plan</div>
    <div class="meal-timeline">`;
  d.meals.forEach(m => {
    html += `<div class="meal-item">
      <div><div class="meal-time">${m.time}</div><div class="meal-kcal">${m.kcal} kcal</div></div>
      <div><div class="meal-name">${m.name}</div>
      <div class="meal-foods">${m.foods}</div>
      <div class="meal-macro-row">
        <span class="macro-pill p">P ${m.p}g</span>
        <span class="macro-pill c">C ${m.c}g</span>
        <span class="macro-pill f">F ${m.f}g</span>
      </div></div>
    </div>`;
  });
  html += `</div></div>`;
  document.getElementById('mealPlanContent').innerHTML = html;
}

// ── Dunk Tracker ──────────────────────────────────────────────────────────────
let dunkLog = JSON.parse(localStorage.getItem('trDunkLog') || '[]');

function saveDunkLog() { localStorage.setItem('trDunkLog', JSON.stringify(dunkLog)); }

function logDunkSession() {
  const entry = {
    date: document.getElementById('logDate').value,
    week: document.getElementById('logWeek').value,
    reach: document.getElementById('logReach').value,
    max: document.getElementById('logMax').value,
    vj: document.getElementById('logVJ').value,
    dunk: document.getElementById('logDunk').value,
    notes: document.getElementById('logNotes').value,
  };
  if (!entry.date) { alert('Please select a date.'); return; }
  dunkLog.unshift(entry);
  saveDunkLog();
  renderDunkLog();
  updateDunkChart();
  updateKPIs();
  ['logWeek','logReach','logMax','logVJ','logNotes'].forEach(id => { document.getElementById(id).value = ''; });
  document.getElementById('logDunk').value = 'none';
}

function renderDunkLog() {
  const tbody = document.getElementById('dunkLogBody');
  document.getElementById('logCount').textContent = `(${dunkLog.length} entries)`;
  if (!dunkLog.length) {
    tbody.innerHTML = '<tr><td colspan="7" style="text-align:center;color:var(--text-muted);padding:20px">No sessions logged yet. Start tracking your progress!</td></tr>';
    return;
  }
  tbody.innerHTML = dunkLog.map(e => `<tr>
    <td>${e.date}</td><td>${e.week || '—'}</td>
    <td>${e.reach ? e.reach + '"' : '—'}</td>
    <td>${e.max ? e.max + '"' : '—'}</td>
    <td style="color:var(--orange);font-weight:800">${e.vj ? e.vj + '"' : '—'}</td>
    <td>${e.dunk !== 'none' ? e.dunk : '—'}</td>
    <td class="text-muted text-sm">${e.notes || ''}</td>
  </tr>`).join('');
}

function updateKPIs() {
  if (dunkLog.length) {
    const last = dunkLog[0];
    if (last.vj) document.getElementById('kpi-vj').textContent = last.vj + '"';
    if (last.dunk && last.dunk !== 'none') document.getElementById('kpi-dunk').textContent = last.dunk;
  }
}

// ── Charts ────────────────────────────────────────────────────────────────────
let vjChartInst, loadChartInst, dunkChartInst;

function initCharts() {
  Chart.defaults.color = '#9898be';
  Chart.defaults.borderColor = '#28284a';
  Chart.defaults.font.family = "'Segoe UI', system-ui, sans-serif";

  // Dashboard VJ Chart
  const vjCtx = document.getElementById('vjChart').getContext('2d');
  vjChartInst = new Chart(vjCtx, {
    type: 'line',
    data: {
      labels: Array.from({length:16}, (_,i) => `W${i+1}`),
      datasets: [{
        label: 'Projected Gain (in)',
        data: [0,0.5,1,1.5,2,2.5,3,3.5,4.5,5,5.5,6,6.5,7,7.5,8],
        borderColor: '#ff6b00',
        backgroundColor: 'rgba(255,107,0,0.08)',
        tension: 0.4,
        fill: true,
        pointBackgroundColor: '#ff6b00',
        pointRadius: 3,
      }]
    },
    options: { responsive:true, maintainAspectRatio:false,
      plugins:{ legend:{ display:false } },
      scales:{ y:{ beginAtZero:true, title:{ display:true, text:'Inches gained' } } }
    }
  });

  // Dashboard Load Chart
  const loadCtx = document.getElementById('loadChart').getContext('2d');
  loadChartInst = new Chart(loadCtx, {
    type: 'bar',
    data: {
      labels: ['Ph1 Wk1','Ph1 Wk2','Ph1 Wk3','Ph1 Wk4↓','Ph2 Wk5','Ph2 Wk6','Ph2 Wk7','Ph2 Wk8↓','Ph3 Wk9','Ph3 Wk10','Ph3 Wk11','Ph3 Wk12↓','Ph4 Wk13','Ph4 Wk14','Ph4 Wk15','Ph4 Wk16'],
      datasets: [
        { label: 'Volume', data: [60,65,70,35,75,80,85,42,70,72,75,45,65,65,60,60], backgroundColor: 'rgba(68,136,255,0.5)', borderColor: '#4488ff', borderWidth: 1 },
        { label: 'Intensity', data: [60,65,68,55,72,75,80,65,85,87,88,70,90,90,90,92], backgroundColor: 'rgba(255,107,0,0.5)', borderColor: '#ff6b00', borderWidth: 1 },
      ]
    },
    options: { responsive:true, maintainAspectRatio:false,
      plugins:{ legend:{ position:'bottom', labels:{ boxWidth:10 } } },
      scales:{ y:{ beginAtZero:true, max:100, title:{ display:true, text:'% of max' } } }
    }
  });
}

function updateDunkChart() {
  const ctx = document.getElementById('dunkChart').getContext('2d');
  const sorted = [...dunkLog].reverse();
  const labels = sorted.map(e => `Wk${e.week||'?'} ${e.date}`);
  const vjData = sorted.map(e => parseFloat(e.vj) || null);
  const maxData = sorted.map(e => e.max && e.reach ? (parseFloat(e.max) - parseFloat(e.reach)).toFixed(1) : null);

  if (dunkChartInst) dunkChartInst.destroy();
  dunkChartInst = new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [
        { label: 'Vertical Jump (in)', data: vjData, borderColor: '#ff6b00', backgroundColor: 'rgba(255,107,0,0.08)', tension: 0.4, fill: true, pointBackgroundColor: '#ff6b00', pointRadius: 5 },
        { label: 'Reach above standing (in)', data: maxData, borderColor: '#ffd700', backgroundColor: 'rgba(255,215,0,0.05)', tension: 0.4, fill: false, pointBackgroundColor: '#ffd700', pointRadius: 5 },
      ]
    },
    options: { responsive:true, maintainAspectRatio:false,
      plugins:{ legend:{ position:'bottom', labels:{ boxWidth:10 } } },
      scales:{ y:{ beginAtZero:true, title:{ display:true, text:'Inches' } } }
    }
  });
}

// ── ICS Calendar Export ───────────────────────────────────────────────────────
const CAL_EVENTS = [
  { dayOffset: 0, title: 'HPT 1 — Strength + Lower Power', desc: 'Movement Prep → Mobility → Jump Dev → Trap Bar DL → Slant Board → Athletic Dev → Recovery. Log vertical jump.', dur: 90, color: 'orange' },
  { dayOffset: 1, title: 'Basketball Skill Day 1 — Ball Handling + Finishing', desc: 'Ball handling drills → Finishing (Mikan, euro-step, floater, dunk approach) → Footwork → Conditioning.', dur: 75, color: 'blue' },
  { dayOffset: 2, title: 'HPT 2 — Speed + Jump Development', desc: 'Mobility → Band Assisted Jumps → Pogo Jumps → Lateral Bounds → Acceleration → Slant Board maintenance.', dur: 90, color: 'orange' },
  { dayOffset: 3, title: 'ACTIVE RECOVERY — Mobility + Walk', desc: 'Morning mobility flow, slant board mobility, foot massage. Zone 2 walk 25 min. Tissue work. No high intensity.', dur: 45, color: 'green' },
  { dayOffset: 4, title: 'HPT 3 + WEEKLY DUNK SESSION', desc: 'CNS warm-up → DUNK SESSION (measure vertical, approach work, band assisted, max attempts, film review) → Power strength → Shoe testing for Traction Report.', dur: 100, color: 'orange' },
  { dayOffset: 5, title: 'Basketball Skill Day 2 — Shooting + Game Speed', desc: 'Catch & shoot → Pull-up game → Shoe traction testing (Traction Report) → Game speed conditioning.', dur: 75, color: 'blue' },
  { dayOffset: 6, title: 'HPT 4 — Reactive Athleticism + Plyos', desc: 'Reactive plyometrics → Single-leg strength → Lateral movement → Slant board maintenance → Tibialis & soleus.', dur: 90, color: 'orange' },
];

function formatICSDate(date, hour, min = 0) {
  const pad = n => String(n).padStart(2, '0');
  return `${date.getFullYear()}${pad(date.getMonth()+1)}${pad(date.getDate())}T${pad(hour)}${pad(min)}00`;
}

function exportICS() {
  const startInput = document.getElementById('calStartDate').value;
  const startTimeVal = document.getElementById('calStartTime').value;
  if (!startInput) { alert('Please select a program start date.'); return; }
  const [sh, sm] = startTimeVal.split(':').map(Number);
  const programStart = new Date(startInput + 'T12:00:00');
  const today = new Date(startInput + 'T12:00:00');

  let ics = `BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//Traction Report Performance OS//EN\r\nCALSCALE:GREGORIAN\r\nMETHOD:PUBLISH\r\nX-WR-CALNAME:Traction Report Performance OS\r\nX-WR-CALDESC:16-Week NBA Performance Training Program\r\n`;

  for (let week = 0; week < 16; week++) {
    CAL_EVENTS.forEach(ev => {
      const d = new Date(today);
      d.setDate(today.getDate() + week * 7 + ev.dayOffset);
      const start = formatICSDate(d, sh, sm);
      const endH = sh + Math.floor((sm + ev.dur) / 60);
      const endM = (sm + ev.dur) % 60;
      const end = formatICSDate(d, endH, endM);
      const uid = `tr-wk${week+1}-day${ev.dayOffset}-${Date.now()}@tractionreport.co`;
      const phaseNum = week < 4 ? 1 : week < 8 ? 2 : week < 12 ? 3 : 4;
      const phaseLabel = ['Foundation','Build','Peak','Express'][phaseNum - 1];
      ics += `BEGIN:VEVENT\r\nUID:${uid}\r\nDTSTART:${start}\r\nDTEND:${end}\r\nSUMMARY:[Wk${week+1} P${phaseNum}] ${ev.title}\r\nDESCRIPTION:Week ${week+1} of 16 | Phase ${phaseNum}: ${phaseLabel}\\n\\n${ev.desc}\\n\\nTraction Report Performance OS — tractionreport.co\r\nCATEGORIES:FITNESS,BASKETBALL\r\nEND:VEVENT\r\n`;
    });
  }
  ics += `END:VCALENDAR\r\n`;

  const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'traction-report-performance-os-16weeks.ics';
  link.click();
}

function previewCalendar() {
  const startInput = document.getElementById('calStartDate').value;
  if (!startInput) { alert('Please select a start date first.'); return; }
  const d = new Date(startInput + 'T12:00:00');
  const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  const colors = { orange: 'var(--orange)', blue: 'var(--blue)', green: 'var(--green)' };
  let html = '';
  CAL_EVENTS.forEach(ev => {
    const evDate = new Date(d);
    evDate.setDate(d.getDate() + ev.dayOffset);
    const dateStr = evDate.toLocaleDateString('en-US', { weekday:'short', month:'short', day:'numeric' });
    html += `<li style="padding:10px 0;border-bottom:1px solid var(--border);display:flex;gap:12px;align-items:center;font-size:13px">
      <div class="cal-dot" style="background:${colors[ev.color]||'var(--orange)'}"></div>
      <div style="width:90px;color:var(--text-secondary)">${dateStr}</div>
      <div style="flex:1"><strong>${ev.title}</strong><div class="text-sm text-muted">${ev.dur} min</div></div>
    </li>`;
  });
  html += `<li style="padding:10px 0;color:var(--text-muted);font-size:12px;font-style:italic">↩ Pattern repeats for all 16 weeks (112 total events)</li>`;
  document.getElementById('calPreview').innerHTML = `<ul class="calendar-event-list">${html}</ul>`;
}

// ── Dashboard Week/Phase KPIs ─────────────────────────────────────────────────
function updateWeekKPIs() {
  const start = localStorage.getItem('trProgramStart');
  if (start) {
    const days = Math.floor((Date.now() - new Date(start)) / 86400000);
    const week = Math.min(Math.floor(days / 7) + 1, 16);
    const phase = week <= 4 ? 1 : week <= 8 ? 2 : week <= 12 ? 3 : 4;
    const phaseNames = ['Foundation','Build','Peak','Express'];
    document.getElementById('kpi-week').textContent = week;
    document.getElementById('kpi-phase').textContent = phase;
    document.getElementById('kpi-phase').nextElementSibling.textContent = phaseNames[phase-1];
  }
}

// ── Init ──────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  buildWeekGrid();
  initCharts();
  renderMealPlan('training');
  renderDunkLog();
  updateDunkChart();
  updateKPIs();
  updateWeekKPIs();

  // Pre-fill calendar start date to next Monday
  const today = new Date();
  const daysToMon = (8 - today.getDay()) % 7 || 7;
  const nextMon = new Date(today);
  nextMon.setDate(today.getDate() + daysToMon);
  const isoDate = nextMon.toISOString().split('T')[0];
  document.getElementById('calStartDate').value = isoDate;
  document.getElementById('logDate').value = today.toISOString().split('T')[0];
});
