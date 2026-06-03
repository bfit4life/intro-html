'use strict';

// ── Navigation ────────────────────────────────────────────────────────────────
document.querySelectorAll('.nav-item').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('section-' + btn.dataset.section).classList.add('active');
    syncMobileNav(btn.dataset.section);
    if (window.innerWidth < 768) closeSidebar();
    window.scrollTo(0, 0);
  });
});

document.getElementById('menuBtn').addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('open');
});
function closeSidebar() { document.getElementById('sidebar').classList.remove('open'); }

// ── Mobile Bottom Nav ─────────────────────────────────────────────────────────
const MOB_SECTIONS = ['dashboard','schedule','training','dunk'];
function mobileNav(section, btn) {
  if (section === 'more') {
    document.getElementById('sidebar').classList.toggle('open');
    return;
  }
  document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  const navItem = document.querySelector('[data-section="' + section + '"]');
  if (navItem) navItem.classList.add('active');
  const sectionEl = document.getElementById('section-' + section);
  if (sectionEl) sectionEl.classList.add('active');
  document.querySelectorAll('.mob-nav-item').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  closeSidebar();
  window.scrollTo(0, 0);
}
function syncMobileNav(section) {
  document.querySelectorAll('.mob-nav-item').forEach(b => b.classList.remove('active'));
  if (MOB_SECTIONS.includes(section)) {
    const idx = MOB_SECTIONS.indexOf(section);
    const btns = document.querySelectorAll('.mob-nav-item');
    if (btns[idx]) btns[idx].classList.add('active');
  }
}

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
    kcal: 3150, protein: 175, carbs: 410, fat: 88,
    label: 'Training Day',
    meals: [
      { time: '6:30 AM', kcal: 440, name: 'Pre-Training Fuel', foods: '1 cup oats (dry 50g) · 1 scoop whey protein · 1 banana · 1 tbsp honey · 16 oz water with electrolytes', p: 32, c: 72, f: 6 },
      { time: '9:00 AM', kcal: 520, name: 'Post-Workout Recovery', foods: '3 whole eggs + 2 whites scrambled · 1 cup low-fat Greek yogurt · 1 cup mixed berries · 1 slice Ezekiel bread', p: 48, c: 42, f: 14 },
      { time: '12:30 PM', kcal: 640, name: 'Performance Lunch', foods: '6 oz grilled chicken breast · 1.5 cups cooked brown rice · 2 cups mixed greens · ½ avocado · olive oil + lemon dressing', p: 52, c: 68, f: 18 },
      { time: '3:30 PM', kcal: 320, name: 'Athletic Snack', foods: '1 cup low-fat cottage cheese · ½ cup blueberries · 1 oz almonds', p: 28, c: 24, f: 10 },
      { time: '7:00 PM', kcal: 720, name: 'Recovery Dinner', foods: '7 oz Atlantic salmon · 1.5 cups roasted sweet potato · 2 cups steamed broccoli + 1 tsp olive oil · lemon + herbs', p: 52, c: 64, f: 24 },
      { time: '9:00 PM', kcal: 220, name: 'Overnight Recovery', foods: '1 cup low-fat cottage cheese OR casein shake · ½ cup frozen dark cherries (anti-inflammatory)', p: 28, c: 20, f: 5 },
    ]
  },
  basketball: {
    kcal: 2950, protein: 168, carbs: 380, fat: 80,
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
    kcal: 2350, protein: 155, carbs: 265, fat: 72,
    label: 'Recovery Day',
    meals: [
      { time: '7:00 AM', kcal: 380, name: 'Relaxed Morning', foods: '2 eggs + 2 whites any style · 2 slices Ezekiel toast · ½ avocado · green tea', p: 28, c: 36, f: 16 },
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
  let html = `<div class="macro-grid-4 mb-20">
    <div class="macro-card"><div class="macro-num" style="color:${kcalColor}">${d.kcal}<span class="macro-unit" style="font-size:13px"> kcal</span></div><div class="macro-label">Daily Calories</div></div>
    <div class="macro-card"><div class="macro-num" style="color:var(--blue)">${d.protein}<span class="macro-unit">g</span></div><div class="macro-label">Protein</div></div>
    <div class="macro-card"><div class="macro-num" style="color:var(--gold)">${d.carbs}<span class="macro-unit">g</span></div><div class="macro-label">Carbohydrates</div></div>
    <div class="macro-card"><div class="macro-num" style="color:var(--green)">${d.fat}<span class="macro-unit">g</span></div><div class="macro-label">Total Fat</div></div>
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
  renderScriptLibrary();
  renderAnalyticsInputs();
  renderAnalyticsHistory();
  renderReviewHistory();
  renderWeeklyPlanner();
  renderJSDiagnostic();
  renderPenultimate();
  renderReactive();
  renderArmSwing();
  renderGroundContact();
  renderPowerTraining();
  // Show default platform guide
  const defaultPlatBtn = document.querySelector('.platform-tab-btn');
  if (defaultPlatBtn) showPlatform('tiktok', defaultPlatBtn);

  // Pre-fill calendar start date to next Monday
  const today = new Date();
  const daysToMon = (8 - today.getDay()) % 7 || 7;
  const nextMon = new Date(today);
  nextMon.setDate(today.getDate() + daysToMon);
  const isoDate = nextMon.toISOString().split('T')[0];
  document.getElementById('calStartDate').value = isoDate;
  document.getElementById('logDate').value = today.toISOString().split('T')[0];
  document.getElementById('reviewDate').value = today.toISOString().split('T')[0];

  // Show how-to on very first visit
  if (!localStorage.getItem('trOnboarded')) {
    setTimeout(() => openHowTo(), 600);
  }
});

// ── Content Studio ────────────────────────────────────────────────────────────

const WEEKLY_PLAN = [
  { day: 'MON', session: 'HPT 1', platforms: ['TikTok'], type: 'Training Clip', postTime: '7:00 PM',
    hook: '"I\'m 42 and training like an NBA athlete. Here\'s my Monday session."',
    filmList: ['Slant board squats (close angle — knee tracking)', 'Pogo jumps slo-mo at 60fps', 'Trap bar deadlift from side angle', '10-sec talking head intro pre-session', 'Post-session reaction: what you felt'],
    caption: 'NBA-style training at 42. Not bodybuilding — explosiveness.\n\nSlant board → trap bar → plyos → basketball transfer.\n\nWeek [#] / Phase [#]. The journey is the content. 🏀\n#VerticalJump #NBATraining #Dunking #TractionReport #MasterAthlete',
    hashtags: '#VerticalJump #NBATraining #Dunking #TractionReport #42AndFit' },

  { day: 'TUE', session: 'Basketball Skills', platforms: ['Instagram Reels'], type: 'Finishing Drill',  postTime: '6:00 PM',
    hook: '"Still finishing at 42. The one drill that never leaves my session."',
    filmList: ['Mikan drill close-up (both hands)', 'Euro-step at game speed from side angle', 'Dunk approach footwork breakdown (overhead or side)', 'Shoe sole/grip close-up for Traction Report', 'Talking head: shoe verdict of the day'],
    caption: 'Finishing at the rim never gets old. 42 and still going up.\n\nThis week I\'m testing [shoe name] on court. Full traction breakdown on the way.\n\n#Basketball #Finishing #Layup #42AndFit #TractionReport',
    hashtags: '#Basketball #Finishing #42AndFit #TractionReport #CourtShoes' },

  { day: 'WED', session: 'HPT 2 — Jump Day', platforms: ['YouTube Shorts'], type: 'Jump Data Reveal', postTime: '7:00 PM',
    hook: '"I measured my vertical jump today. Here\'s the data."',
    filmList: ['Vertical jump measurement on wall (tape measure visible)', 'Band assisted jump slo-mo — front angle', 'Single-leg pogo jumps', 'First-step acceleration drill', '30-sec talking head: "Here\'s what the numbers mean"'],
    caption: 'Week [#] jump data:\n→ Vertical: [X]"\n→ Max reach: [X]"\n→ Change from Week 1: [+/-X]"\n\nThe numbers tell the story. Follow the Road to Dunking Again.\n#VerticalJump #JumpTraining #Dunking #RoadToDunking #TractionReport',
    hashtags: '#VerticalJump #JumpTraining #Dunking #RoadToDunking #TractionReport' },

  { day: 'THU', session: 'Active Recovery', platforms: ['Threads / X'], type: 'Educational Thread', postTime: '12:00 PM',
    hook: '"Why I take a full recovery day even at peak training phase (thread 🧵)"',
    filmList: ['No filming needed — written post', 'Optional: short walking clip for Stories', 'Optional: foam roll / mobility clip (30 sec)'],
    caption: 'Recovery day thread:\n\n1/ Most athletes skip recovery days. I protect mine.\n2/ Your tendons adapt slower than your muscles. Skip recovery = injury at 42.\n3/ Zone 2 walk, foam roll, mobility. That\'s it. Sleep 8+ hrs.\n4/ The athletes explosive at 50 made recovery non-negotiable at 42.\n\n#Recovery #AthleteLife #TrainingScience #TractionReport #42AndFit',
    hashtags: '#Recovery #TrainingScience #42AndFit #TractionReport #AthleteLife' },

  { day: 'FRI', session: '🔥 DUNK SESSION', platforms: ['TikTok', 'Instagram Reels'], type: 'Dunk Data Log', postTime: '8:00 PM',
    hook: '"Week [#]. The data." — Start mid-action at the rim. No intro.',
    filmList: ['PRIORITY: Dunk attempts — FRONT and SIDE angles', 'Standing reach measurement (tape measure on wall)', 'Max jump reach measurement', 'Band-assisted dunk attempt (show the above-rim feel)', 'Film review reaction (talking head after watching back)'],
    caption: 'Week [#] Dunk Data Log 📊\n\nVertical: [X]" | Max reach: [X]" | Stage: [X]\n\nThe journey continues.\n\n#RoadToDunking #DunkDataLog #42AndFit #TractionReport #VerticalJump',
    hashtags: '#RoadToDunking #DunkDataLog #42AndFit #TractionReport #VerticalJump' },

  { day: 'SAT', session: 'Basketball Skills 2', platforms: ['TikTok'], type: 'Shoe Traction Test', postTime: '6:00 PM',
    hook: '"Testing [shoe name] court traction. Real cuts. Real data. Traction Report."',
    filmList: ['Shoe sole close-up / herringbone pattern', 'Lateral cut test (slow-mo)', 'First-step acceleration with shoe (slow-mo)', 'Pull-up jumper from side angle', 'Talking head: "Traction verdict — [X]/10"'],
    caption: '🔬 Traction Report: [Shoe Name]\n\nLateral: [X]/10 | First step: [X]/10 | Overall: [X]/10\n\nVerdict: [one sentence]\n\nWhat shoe should I test next? 👇\n#TractionReport #BasketballShoes #CourtTraction #ShoeReview #Basketball',
    hashtags: '#TractionReport #BasketballShoes #CourtTraction #ShoeReview #Basketball' },

  { day: 'SUN', session: 'HPT 4 + Recap', platforms: ['YouTube Shorts', 'Stories'], type: 'Weekly Recap', postTime: '7:00 PM',
    hook: '"Week [#] of 16 is done. Here\'s what happened."',
    filmList: ['Post-session talking head (keep it honest and data-driven)', 'Best clips from the week (compile Mon–Sat)', 'Vertical jump from this week vs last week', 'Shoe tested this week (quick hold-up shot)', 'End card: "Week [X+1] starts Monday"'],
    caption: 'Week [#]/16 Complete 📊\n\nSessions: [#]/6 | Vertical: [X]" | Dunk stage: [X]\nShoe of the week: [Name]\n\n[Honest 2-sentence reflection]\n\n#WeeklyRecap #TractionReport #RoadToDunking #VerticalJump #42AndFit',
    hashtags: '#WeeklyRecap #TractionReport #RoadToDunking #VerticalJump #42AndFit' },
];

function renderWeeklyPlanner() {
  const week = parseInt(document.getElementById('plannerWeek')?.value || 1);
  const phase = week <= 4 ? 1 : week <= 8 ? 2 : week <= 12 ? 3 : 4;
  const phaseLabel = ['Foundation','Build','Peak','Express'][phase - 1];
  const grid = document.getElementById('weeklyPlannerGrid');
  if (!grid) return;
  grid.innerHTML = WEEKLY_PLAN.map((d, i) => {
    const isFri = d.day === 'FRI';
    return `<div class="planner-day ${isFri ? 'active' : ''}" onclick="showDayBrief(${i})">
      <div class="planner-day-name">${d.day}</div>
      <div class="planner-platform">${d.platforms[0]}</div>
      <div class="planner-type">${d.type}</div>
      <div class="planner-time">${d.postTime}</div>
    </div>`;
  }).join('');
  document.getElementById('dayContentBrief').style.display = 'none';
}

const CLIP_SYSTEM = [
  { num: '01', name: 'The Arrival', icon: '🎬', desc: 'Capture your arrival / session start. Show the environment, the gear, the mindset. No talking needed — just the atmosphere.', angle: 'Wide angle, tripod, capture you walking in or setting up. 5–8 sec.', platform: 'Story / B-roll for any edit' },
  { num: '02', name: 'The Movement Demo', icon: '📹', desc: 'Film the key exercise or skill of the day. This is your primary clip. Slow-mo at 60fps. Show form clearly.', angle: 'Side angle for lower body. Front angle for jumps. Get close enough to see the details.', platform: 'TikTok / IG Reels main content' },
  { num: '03', name: 'The Grind Moment', icon: '💪', desc: 'Catch one raw, unscripted moment — a tough set, a failed rep, a reaction. Authenticity beats polish every time.', angle: 'Handheld or tripod wide. Let it be imperfect. 10–20 sec raw clip.', platform: 'TikTok hook or IG Story' },
  { num: '04', name: 'The Measure', icon: '📏', desc: 'Record your data point of the day — vertical jump on wall, tape measure, weight on bar, shoe sole. Show the numbers.', angle: 'Close-up on measurement. Tape measure visible. Text overlay the number in edit.', platform: 'YouTube Shorts / Dunk Data Log' },
  { num: '05', name: 'The Lesson', icon: '🎤', desc: 'Talking head: 1 thing you learned, noticed, or want to share. 15–30 seconds. No script — just be honest.', angle: 'Portrait, phone at eye level, good light (ring light or window). Background = gym.', platform: 'Threads / YouTube / Caption story' },
];

function showDayBrief(idx) {
  const d = WEEKLY_PLAN[idx];
  const brief = document.getElementById('dayContentBrief');
  const week = document.getElementById('plannerWeek')?.value || '?';
  brief.style.display = 'block';

  const clipCards = CLIP_SYSTEM.map((clip, i) => {
    const filmNote = d.filmList[i] || clip.desc;
    return `<div class="clip-card">
      <div class="clip-num">${clip.num}</div>
      <div class="clip-title">${clip.icon} ${clip.name}</div>
      <div class="clip-desc">${filmNote}</div>
      <div class="clip-angle">📐 ${clip.angle}</div>
      <div class="clip-angle" style="color:var(--blue);margin-top:3px">📲 ${clip.platform}</div>
    </div>`;
  }).join('');

  brief.innerHTML = `
    <div style="margin-bottom:14px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px">
      <div><span class="brief-tag">📅 ${d.day} — Week ${week}</span>
      <h3 style="font-size:18px;font-weight:800;margin-top:4px">${d.session} &nbsp; <span class="tag tag-orange">${d.type}</span></h3></div>
      <div style="font-size:12px;color:var(--text-muted)">Post at <strong style="color:var(--orange)">${d.postTime}</strong> · ${d.platforms.map(p=>`<span class="tag tag-blue" style="margin:1px">${p}</span>`).join('')}</div>
    </div>
    <div class="brief-hook">"${d.hook}"</div>

    <div class="card-title mb-8" style="margin-top:16px">📹 5-CLIP SYSTEM — 1 Workout = 5 Pieces of Content</div>
    <div class="five-clips-grid">${clipCards}</div>
    <div style="display:flex;gap:16px;flex-wrap:wrap;padding:10px 12px;background:var(--bg-card-2);border:1px solid var(--border);border-radius:8px;font-size:11px;color:var(--text-secondary);margin-bottom:16px">
      <span>📱 Phone tripod ✓</span>
      <span>🎥 60fps slo-mo on ✓</span>
      <span>💡 Ring light optional ✓</span>
      <span>📏 Tape measure ready ✓</span>
    </div>

    <div class="grid-2">
      <div>
        <div class="card-title mb-8">📋 Ready-to-Post Caption</div>
        <div style="background:var(--bg-card-2);border:1px solid var(--border);border-radius:8px;padding:12px;font-size:12px;color:var(--text-secondary);white-space:pre-wrap;line-height:1.7">${d.caption}</div>
        <div style="margin-top:8px;font-size:11px;color:var(--text-muted)">${d.hashtags}</div>
      </div>
      <div>
        <div class="card-title mb-8">🎯 Today's Content Goal</div>
        <div style="background:var(--bg-card-2);border:1px solid var(--border);border-radius:8px;padding:12px;font-size:12px;color:var(--text-secondary);line-height:1.7">
          <div style="margin-bottom:8px"><strong style="color:var(--orange)">Type:</strong> ${d.type}</div>
          <div style="margin-bottom:8px"><strong style="color:var(--orange)">Platforms:</strong> ${d.platforms.join(', ')}</div>
          <div style="margin-bottom:8px"><strong style="color:var(--orange)">Post time:</strong> ${d.postTime}</div>
          <div><strong style="color:var(--orange)">Hook:</strong> ${d.hook}</div>
        </div>
      </div>
    </div>`;
  brief.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ── Script Library ────────────────────────────────────────────────────────────
const SCRIPTS = [
  { id: 'dunk-data', title: '📊 Dunk Data Log', platform: 'TikTok / Instagram Reels', dur: '20–35 sec', color: 'orange',
    sections: [
      { label: 'HOOK (0–2 sec)', text: '[Grab rim or throw ball hard at backboard] "Week [#]. The data." — NO intro. Start mid-action.' },
      { label: 'DATA REVEAL (2–20 sec)', text: '"Standing reach: [X] inches.\nMax jump reach: [X] inches.\nVertical jump: [X] inches.\nThat\'s [+/-X] inches from Week 1."\n\nShow tape measure on wall. Text overlay each number as you say it.' },
      { label: 'DUNK STAGE (20–28 sec)', text: '"Dunk stage today: [Rim Touch / Tennis Ball / Volleyball / Regulation Ball]"\n\n[Cut to the attempt — success OR fail. Both work. The struggle gets MORE engagement.]' },
      { label: 'CTA (28–35 sec)', text: '"Follow the Road to Dunking Again. New data every Friday." — Point at camera. Drop ball.' },
      { label: 'CAPTION', text: 'Week [#] Dunk Data Log 📊\n\nVertical: [X]" | Max reach: [X]" | Stage: [X]\n[+X]" gained since Week 1.\n\nThe journey continues.\n\n#RoadToDunking #DunkDataLog #42AndFit #TractionReport #VerticalJump' },
    ]},
  { id: 'training-breakdown', title: '🏋️ Training Breakdown', platform: 'TikTok / YouTube Shorts', dur: '30–60 sec', color: 'blue',
    sections: [
      { label: 'HOOK (0–3 sec)', text: '"I\'m 42 and training like an NBA athlete. This is my [Monday / Wednesday / Sunday] session." — Say it confident. Mid-rep preferred.' },
      { label: 'MONTAGE (3–40 sec)', text: 'Show 3–4 exercises with TEXT overlays:\n① [Exercise] — [sets × reps]\n② Slant Board Squats — [sets × reps] — text: "Quad overload for jumping"\n③ Trap Bar Deadlift — [weight]lbs — text: "Power base"\n④ Pogo Jumps — text: "Elastic ankle stiffness"\n\nClips 3–5 sec each. Upbeat music. Text pops on each cut.' },
      { label: 'HOOK CLOSE (40–55 sec)', text: '"This is Phase [X] of 16. The goal: dunk a regulation ball by Week 14. Follow to see if it happens." — Confident. Hold ball.' },
      { label: 'CAPTION', text: 'NBA-style training at 42. Not bodybuilding — explosiveness. 🏀\n\nPhase [#] | Week [#] of 16\n\nSlant board → trap bar → plyos → court work.\n\n#NBATraining #VerticalJump #Dunking #TractionReport #42AndFit' },
    ]},
  { id: 'shoe-test', title: '👟 Shoe Traction Test', platform: 'TikTok / Instagram Reels', dur: '30–45 sec', color: 'gold',
    sections: [
      { label: 'HOOK (0–2 sec)', text: '"Testing [Shoe Name] on court. The traction test nobody else is doing." — Hold shoe up to camera. Close-up on sole.' },
      { label: 'TEST SEQUENCE (2–30 sec)', text: 'CUT 1: Sole close-up → zoom on pattern. Text: "[Pattern Type] Outsole"\nCUT 2: Lateral cut test (slow-mo) → Text: "Lateral grip: [X]/10"\nCUT 3: First-step explosion (slow-mo) → Text: "First-step stick: [X]/10"\nCUT 4: Stop + pivot → Text: "Pivot control: [X]/10"' },
      { label: 'VERDICT (30–40 sec)', text: '"Overall court traction: [X]/10. Best for: [outdoor / indoor / both]. [One strength]. [One weakness]."' },
      { label: 'CTA (40–45 sec)', text: '"Full Traction Report review — link in bio. Drop the shoe you want tested next." — Show shoe profile.' },
      { label: 'CAPTION', text: '🔬 Traction Report: [Shoe Name] Court Test\n\nLateral: [X]/10 | First step: [X]/10 | Pivot: [X]/10\n\nVerdict: [one sentence]\n\nWhat shoe should I test next? 👇\n#TractionReport #BasketballShoes #CourtTraction #ShoeReview' },
    ]},
  { id: 'slant-board-edu', title: '🛹 Slant Board Science', platform: 'YouTube Shorts / TikTok', dur: '45–60 sec', color: 'green',
    sections: [
      { label: 'HOOK (0–3 sec)', text: '"The slant board is the most underrated dunking tool nobody talks about." — Stand on board, look at camera.' },
      { label: 'POINT 1 (3–15 sec)', text: '"A 15-25° board elevates your heel, forces your knee forward, and activates your quad 20-30% more than a flat squat." — Show the movement. Text overlay: "+20-30% quad activation"' },
      { label: 'POINT 2 (15–30 sec)', text: '"Isometrics at this angle directly load your patellar tendon — the tendon that LAUNCHES you. Hold 45 seconds." — Show the hold position. Text overlay: "5 × 45 seconds"' },
      { label: 'POINT 3 (30–45 sec)', text: '"For athletes over 35, this is tendon armor. Keeps your knees explosive AND pain-free. I do this every session." — Show board from side angle.' },
      { label: 'CTA (45–60 sec)', text: '"Follow for more training science from a 42-year-old performance athlete. Road to dunking again — Week [#]."' },
      { label: 'CAPTION', text: 'The slant board secret for vertical jump 🔬\n\n→ +20-30% quad activation\n→ Tendon loading at the right angle\n→ Non-negotiable for athletes 35+\n\n#SlantBoard #VerticalJump #JumpScience #TractionReport #KneeHealth' },
    ]},
  { id: '42-explosive', title: '💥 42 & Explosive (Brand)', platform: 'Instagram Reels / TikTok', dur: '30–60 sec', color: 'purple',
    sections: [
      { label: 'HOOK (0–3 sec)', text: '"People tell me at 42 my best athletic days are behind me. This is my response." — Jump to rim or show approach, confident.' },
      { label: 'DATA STORY (3–45 sec)', text: '"I\'m [X] weeks into a 16-week program to dunk again.\n\nMy vertical at Week 1: [X] inches.\nMy vertical today: [X] inches.\nThat\'s [+X] inches in [X] weeks.\n\nI train 6 days a week. I eat for performance. I sleep 8-9 hours.\nThis isn\'t motivation content — this is data."' },
      { label: 'CTA (45–60 sec)', text: '"If you\'re over 35 and think your athletic prime is over — follow this page. I\'m proving it isn\'t." — Serious. No hype. Data wins.' },
      { label: 'CAPTION', text: 'Age is a variable, not a verdict. 📊\n\nWeek [#] data:\n→ Vertical: [X]" (+[X]" from start)\n→ Max reach: [X]"\n→ Dunk stage: [X]\n\n16 weeks. 42 years old. Regulation dunk. Watch.\n#42AndFit #MasterAthlete #NeverTooOld #TractionReport' },
    ]},
  { id: 'weekly-recap', title: '📋 Weekly Recap (Sunday)', platform: 'YouTube Shorts + Stories', dur: '45–60 sec', color: 'green',
    sections: [
      { label: 'OPEN (0–5 sec)', text: '"Week [#] of 16 is done. Here\'s what happened." — No music intro. Simple. Direct.' },
      { label: 'DATA (5–35 sec)', text: '"Sessions completed: [#]/6\nBest jump this week: [X]"\nDunk stage: [X]\nShoe tested: [Name] — [X]/10 traction\nPhase [#] focus: [one sentence]\nKey win this week: [something specific]"' },
      { label: 'HONEST REFLECTION (35–50 sec)', text: '"What worked: [honest]\nWhat I\'m adjusting: [honest]\nNext week\'s focus: [one clear goal]"' },
      { label: 'CLOSE (50–60 sec)', text: '"Follow the Road to Dunking Again. New data every Friday. Week [X+1] starts Monday." — Hold ball up.' },
      { label: 'CAPTION', text: 'Week [#]/16 Complete 📊\n\nSessions: [#]/6 | Vertical: [X]" | Stage: [X]\nShoe of the week: [Name]\n\n[Honest 2-sentence reflection]\n\n#WeeklyRecap #TractionReport #RoadToDunking #VerticalJump' },
    ]},
];

function renderScriptLibrary() {
  const container = document.getElementById('scriptLibrary');
  if (!container) return;
  const colorMap = { orange:'var(--orange)', blue:'var(--blue)', gold:'var(--gold)', green:'var(--green)', purple:'var(--purple)' };
  container.innerHTML = SCRIPTS.map(s => `
    <div class="script-card">
      <div class="script-header" onclick="toggleScript('${s.id}')">
        <div class="script-meta">
          <div style="width:4px;height:36px;background:${colorMap[s.color]};border-radius:2px;flex-shrink:0"></div>
          <div><div style="font-size:14px;font-weight:800">${s.title}</div>
          <div style="font-size:11px;color:var(--text-muted);margin-top:2px">${s.platform}</div></div>
          <div class="script-dur">${s.dur}</div>
        </div>
        <span style="color:var(--text-muted);font-size:18px" id="arr-${s.id}">▾</span>
      </div>
      <div class="script-body" id="body-${s.id}">
        ${s.sections.map((sec, i) => `
          <div class="script-section-block">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px">
              <div class="script-section-label">${sec.label}</div>
              <button class="copy-btn" onclick="copyScript(this,'${s.id}-${i}')">Copy</button>
            </div>
            <div class="script-section-text" id="st-${s.id}-${i}">${sec.text}</div>
          </div>`).join('')}
      </div>
    </div>`).join('');
}

function toggleScript(id) {
  const body = document.getElementById('body-' + id);
  const arr = document.getElementById('arr-' + id);
  const isOpen = body.classList.contains('open');
  body.classList.toggle('open', !isOpen);
  arr.textContent = isOpen ? '▾' : '▴';
}

function copyScript(btn, id) {
  const text = document.getElementById('st-' + id)?.textContent || '';
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = 'Copied ✓';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = 'Copy'; btn.classList.remove('copied'); }, 2000);
  });
}

// ── Analytics Tracker ─────────────────────────────────────────────────────────
const PLATFORMS_DEF = [
  { id: 'tiktok', icon: '🎵', name: 'TikTok', fields: [{ id: 'views', label: 'Total Views' }, { id: 'likes', label: 'Likes' }, { id: 'followers', label: 'New Followers' }] },
  { id: 'instagram', icon: '📸', name: 'Instagram', fields: [{ id: 'reach', label: 'Reach' }, { id: 'impressions', label: 'Impressions' }, { id: 'followers', label: 'New Followers' }] },
  { id: 'youtube', icon: '▶️', name: 'YouTube Shorts', fields: [{ id: 'views', label: 'Views' }, { id: 'watchtime', label: 'Watch Time (hrs)' }, { id: 'subscribers', label: 'New Subscribers' }] },
  { id: 'threads', icon: '🧵', name: 'Threads / X', fields: [{ id: 'impressions', label: 'Impressions' }, { id: 'engagements', label: 'Engagements' }, { id: 'followers', label: 'New Followers' }] },
];

let analyticsLog = JSON.parse(localStorage.getItem('trAnalytics') || '[]');

function renderAnalyticsInputs() {
  const c = document.getElementById('analyticsInputs');
  if (!c) return;
  c.innerHTML = PLATFORMS_DEF.map(p => `
    <div class="analytics-platform-card">
      <div class="analytics-platform-header">
        <span class="analytics-platform-icon">${p.icon}</span>
        <span class="analytics-platform-name">${p.name}</span>
      </div>
      ${p.fields.map(f => `
        <div class="analytics-input-row">
          <label>${f.label}</label>
          <input type="number" id="a-${p.id}-${f.id}" placeholder="0" min="0">
        </div>`).join('')}
    </div>`).join('');
}

function saveAnalytics() {
  const week = document.getElementById('analyticsWeek')?.value;
  if (!week) { alert('Enter a week number first.'); return; }
  const entry = { week: parseInt(week), bestPost: document.getElementById('bestPost')?.value || '' };
  PLATFORMS_DEF.forEach(p => {
    entry[p.id] = {};
    p.fields.forEach(f => { entry[p.id][f.id] = parseInt(document.getElementById(`a-${p.id}-${f.id}`)?.value || 0); });
  });
  analyticsLog = analyticsLog.filter(e => e.week !== parseInt(week));
  analyticsLog.push(entry);
  analyticsLog.sort((a, b) => a.week - b.week);
  localStorage.setItem('trAnalytics', JSON.stringify(analyticsLog));
  renderAnalyticsHistory();
  renderAnalyticsChartFn();
  PLATFORMS_DEF.forEach(p => p.fields.forEach(f => { const el = document.getElementById(`a-${p.id}-${f.id}`); if (el) el.value = ''; }));
  document.getElementById('bestPost').value = '';
  alert(`Week ${week} analytics saved!`);
}

function renderAnalyticsHistory() {
  const tbody = document.getElementById('analyticsBody');
  if (!tbody) return;
  if (!analyticsLog.length) { tbody.innerHTML = '<tr><td colspan="7" style="text-align:center;color:var(--text-muted);padding:20px">No analytics saved yet.</td></tr>'; return; }
  const totalFollowers = e => (e.tiktok?.followers||0) + (e.instagram?.followers||0) + (e.youtube?.subscribers||0) + (e.threads?.followers||0);
  tbody.innerHTML = [...analyticsLog].reverse().map(e => `<tr>
    <td style="font-weight:800;color:var(--orange)">Wk ${e.week}</td>
    <td>${(e.tiktok?.views||0).toLocaleString()}</td>
    <td>${(e.instagram?.reach||0).toLocaleString()}</td>
    <td>${(e.youtube?.views||0).toLocaleString()}</td>
    <td>${(e.threads?.impressions||0).toLocaleString()}</td>
    <td style="color:var(--green);font-weight:700">+${totalFollowers(e)}</td>
    <td class="text-sm text-muted">${e.bestPost||'—'}</td>
  </tr>`).join('');
}

let analyticsChartInst;
function renderAnalyticsChartFn() {
  const ctx = document.getElementById('analyticsChart');
  if (!ctx || !analyticsLog.length) return;
  const labels = analyticsLog.map(e => `Wk${e.week}`);
  if (analyticsChartInst) analyticsChartInst.destroy();
  analyticsChartInst = new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [
        { label: 'TikTok Views', data: analyticsLog.map(e => e.tiktok?.views||0), backgroundColor: 'rgba(255,107,0,0.6)', borderColor: '#ff6b00', borderWidth: 1 },
        { label: 'IG Reach', data: analyticsLog.map(e => e.instagram?.reach||0), backgroundColor: 'rgba(168,85,247,0.5)', borderColor: '#a855f7', borderWidth: 1 },
        { label: 'YT Views', data: analyticsLog.map(e => e.youtube?.views||0), backgroundColor: 'rgba(68,136,255,0.5)', borderColor: '#4488ff', borderWidth: 1 },
      ]
    },
    options: { responsive: true, maintainAspectRatio: false,
      plugins: { legend: { position: 'bottom', labels: { boxWidth: 10 } } },
      scales: { y: { beginAtZero: true } }
    }
  });
}

// ── Platform Strategy Guides ──────────────────────────────────────────────────
const PLATFORM_GUIDES = {
  tiktok: {
    icon: '🎵', name: 'TikTok', sub: '15–60 sec vertical · Primary growth engine',
    rules: [
      { icon: '⚡', label: 'Algorithm Priority', text: 'Watch-time completion rate is #1. Then shares to non-followers, comments, saves. Likes matter least. If people finish the whole video TikTok pushes it to new audiences.' },
      { icon: '🎣', label: 'Hook Formula (0–2 sec)', text: 'Start MID-ACTION. First word = a number or bold claim: "Week 8." / "42 years old." / "The data." Never say "Hey guys" or introduce yourself first — they will scroll.' },
      { icon: '⏱️', label: 'Optimal Length', text: '21–34 seconds is the sweet spot for this brand. Long enough to deliver value, short enough for 90%+ completion rate. Dunk attempts can go 45–60 sec if the hook is very strong.' },
      { icon: '🕕', label: 'Best Posting Times', text: '6–9 PM weekdays (peak active users). 10 AM–12 PM weekends. Post immediately after filming when possible — same-day raw content outperforms polished week-old clips.' },
      { icon: '💬', label: 'Reply to Comments (Critical)', text: 'Reply to EVERY comment within the first 30 min of posting. TikTok reads this as engagement and pushes the video harder. Asking "Which shoe should I test next?" gets 10x the comments.' },
      { icon: '#️⃣', label: 'Hashtag Strategy', text: '3–5 tags max. Mix: 1 mega (#VerticalJump), 1 niche (#DunkDataLog), 1 brand (#TractionReport). Avoid 30-hashtag spam — the algorithm treats it as low-quality signal.' },
      { icon: '📹', label: 'Best Content For This Brand', text: 'Dunk Data Log (Fridays — recurring series wins here), raw training moments, slant board science, shoe traction tests, Week 1 vs Week 8 vertical comparisons. Progress narrative wins.' },
    ],
    donts: 'NO long intros · NO "Like and subscribe" · NO posting at midnight · NO static images · NO over-produced talking head without action footage'
  },
  instagram: {
    icon: '📸', name: 'Instagram Reels', sub: '7–90 sec · Community + brand credibility',
    rules: [
      { icon: '🚀', label: 'Algorithm Priority', text: 'Shares to non-followers is the #1 growth signal. Saves = deep interest. Comments = community. Reach beyond your followers only happens through Reels — prioritize video over static posts.' },
      { icon: '🎨', label: 'Polish Level', text: 'Slightly more polished than TikTok. Lighting, framing, and color consistency matter here. Not overproduced — but intentional. Your audience expects a slightly higher production bar.' },
      { icon: '🖼️', label: 'First Frame Hook', text: 'Bold text overlay on frame 1 in contrasting color. Make the thumbnail stop the scroll before they even tap play. Test: "42 years old. Watch this." over a rim-touch shot.' },
      { icon: '⏱️', label: 'Optimal Length', text: '7–15 sec for meme/clip format (highest reach). 30–60 sec for story-format (higher saves + comments). Weekly data reveals do well at 45 sec with animated number overlays.' },
      { icon: '🕐', label: 'Best Posting Times', text: '8–9 AM, 12 PM, 5–7 PM. Your audience skews professionals — morning commute and post-work wind-down are the two best windows.' },
      { icon: '📊', label: 'Carousels for Data', text: 'Use carousels for weekly stat reveals — each slide = one metric. Saves are 3x higher on data carousels. "Week 8 Dunk Data: swipe →" is a proven format for this brand.' },
      { icon: '📱', label: 'Stories Strategy', text: 'Daily BTS, polls ("Rate my form 1–10"), shoe unboxings, gym check-ins. Stories build loyalty. Reels build reach. Do both — they serve different audience functions.' },
    ],
    donts: 'NO posting only static images · NO skipping Stories · NO ignoring first-frame hook · NO inconsistent aesthetic · NO leaving comments unanswered for 24+ hrs'
  },
  youtube: {
    icon: '▶️', name: 'YouTube Shorts', sub: 'Up to 60 sec · SEO + long-term discoverability',
    rules: [
      { icon: '🔍', label: 'SEO Value Is Massive', text: '"42 year old dunking", "vertical jump training over 40", "slant board for jumping" — high search volume, low competition. YouTube Shorts rank in Google search. TikTok cannot give you this.' },
      { icon: '📋', label: 'Title Formula', text: '"[Number] [Promise] [Curiosity Gap]" — e.g. "42-Year-Old Adds 4 Inches To His Vertical In 8 Weeks" or "Why Slant Boards Are The Secret To Dunking Over 40"' },
      { icon: '📅', label: 'Consistency Over Virality', text: 'YouTube rewards consistent weekly uploads more than TikTok does. 1 Short per week every week = algorithm trust. Missing 3 weeks resets your momentum significantly.' },
      { icon: '📝', label: 'Always Write a Full Description', text: 'Even for 30-second Shorts — write a full description with keywords and links. YouTube SEO lives in text metadata. Most creators skip this. That is your advantage.' },
      { icon: '🎓', label: 'Best Content Type', text: 'Educational (slant board science, jump training over 40, collagen timing), weekly data recaps, dunk progression comparisons (Week 1 vs Week X). Search-worthy topics win here.' },
      { icon: '🔗', label: 'Cross-Platform Bridge', text: 'Every Short is a trailer for your fuller story. Say "full breakdown on my channel" to drive subscriptions. Shorts feeding into long-form vlogs is the growth path for Traction Report.' },
    ],
    donts: 'NO skipping titles/descriptions · NO uploading without keyword research · NO irregular posting schedule · NO ignoring comments (YouTube weights them in ranking)'
  },
  threads: {
    icon: '🧵', name: 'Threads', sub: 'Text + media · Authority, thought leadership, brand voice',
    rules: [
      { icon: '🏛️', label: 'Your Role Here', text: 'Threads is your authority channel. This is where you become THE expert on athletic performance over 40 and basketball shoe traction. Not hype — data-backed insight and sharp takes.' },
      { icon: '✍️', label: 'Thread Opener Formula', text: 'Bold claim + data, then expand in replies. Example: "42 years old. 6 days/week. My vertical is up 4 inches in 8 weeks. Here is the exact protocol: 🧵" — Short. Specific. Confident.' },
      { icon: '⏰', label: 'Post Time', text: 'Mostly chronological feed. Best time: 7–9 AM or 6–8 PM. Post consistently even when views are slow — authority on Threads compounds over months, not days.' },
      { icon: '🔗', label: 'Always Cross-Promote', text: 'Link your latest TikTok or YouTube Short in Threads. "New Dunk Data Log is live 👇 [link]" drives watch time across platforms and builds your multi-platform footprint.' },
      { icon: '💡', label: 'Content That Works', text: 'Training science one-liners, shoe industry commentary, dunk data breakdowns, weekly progress threads with raw honesty. "Tendons adapt 3x slower than muscle — this is why athletes over 35 get hurt." performs well.' },
      { icon: '💬', label: 'Engagement Tactic', text: 'Ask one specific question per post: "What shoe should I test next?" or "TikTok or Reels — which should I prioritize?" Threads users love giving opinions. Reply fast to everything.' },
    ],
    donts: 'NO copy-pasting TikTok captions verbatim · NO posting without context · NO disappearing for 2+ weeks · NO ignoring replies'
  }
};

function showPlatform(id, btn) {
  document.querySelectorAll('.platform-tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const g = PLATFORM_GUIDES[id];
  if (!g) return;
  document.getElementById('platformDetail').innerHTML = `
    <div class="platform-guide">
      <div class="platform-guide-title">${g.icon} ${g.name}</div>
      <div class="platform-guide-sub">${g.sub}</div>
      ${g.rules.map(r => `<div class="platform-rule">
        <div class="platform-rule-icon">${r.icon}</div>
        <div><div class="platform-rule-label">${r.label}</div><div class="platform-rule-text">${r.text}</div></div>
      </div>`).join('')}
      <div class="platform-donts"><strong>What NOT to do:</strong> ${g.donts}</div>
    </div>`;
}

// ── Notion Export ─────────────────────────────────────────────────────────────
function exportReviewToNotion() {
  if (!reviewLog.length) { alert('No reviews saved yet. Write and save a review first.'); return; }
  const r = reviewLog[0];
  let md = `# Week ${r.week} Review — Traction Report Performance OS\nDate: ${r.date || 'Not recorded'}\n\n`;
  Object.entries(REVIEW_LABELS).forEach(([key, label]) => {
    if (r[key]) md += `## ${label.replace(/^[\S]+ /, '')}\n${r[key]}\n\n`;
  });
  md += `---\n*Exported from Traction Report Performance OS*\n`;
  navigator.clipboard.writeText(md).then(() => {
    alert('Copied! Open Notion, create a new page, and paste. It renders as formatted markdown automatically.');
  }).catch(() => {
    const ta = document.createElement('textarea');
    ta.value = md; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta);
    alert('Copied! Paste directly into Notion.');
  });
}

function switchStudioTab(tab, btn) {
  document.querySelectorAll('.studio-tab').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.studio-panel').forEach(p => p.style.display = 'none');
  btn.classList.add('active');
  document.getElementById('studio-' + tab).style.display = 'block';
  if (tab === 'analytics') renderAnalyticsChartFn();
}

// ── Weekly Review ─────────────────────────────────────────────────────────────
let reviewLog = JSON.parse(localStorage.getItem('trReviews') || '[]');

function saveReview() {
  const week = document.getElementById('reviewWeek')?.value;
  const date = document.getElementById('reviewDate')?.value;
  if (!week) { alert('Enter a week number first.'); return; }
  const entry = {
    week: parseInt(week), date,
    rv1: document.getElementById('rv1')?.value || '',
    rv2: document.getElementById('rv2')?.value || '',
    rv3: document.getElementById('rv3')?.value || '',
    rv4: document.getElementById('rv4')?.value || '',
    rv5: document.getElementById('rv5')?.value || '',
    rv6: document.getElementById('rv6')?.value || '',
    rv7: document.getElementById('rv7')?.value || '',
    rv8: document.getElementById('rv8')?.value || '',
    rv9: document.getElementById('rv9')?.value || '',
    rv10: document.getElementById('rv10')?.value || '',
    rv11: document.getElementById('rv11')?.value || '',
    rv12: document.getElementById('rv12')?.value || '',
  };
  reviewLog = reviewLog.filter(r => r.week !== parseInt(week));
  reviewLog.unshift(entry);
  localStorage.setItem('trReviews', JSON.stringify(reviewLog));
  renderReviewHistory();
  ['rv1','rv2','rv3','rv4','rv5','rv6','rv7','rv8','rv9','rv10','rv11','rv12'].forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
  document.getElementById('reviewWeek').value = '';
}

const REVIEW_LABELS = {
  rv1: '⚡ Training performance (sessions hit, energy, PRs broken)',
  rv2: '📏 Vertical jump measurement this week (in inches)',
  rv3: '🥗 Nutrition adherence (% of meals on plan, any deviations)',
  rv4: '😴 Sleep compliance (avg hours, nights below target)',
  rv5: '📈 Best performing content (platform + why it worked)',
  rv6: '📉 What flopped (be specific — hook? timing? topic?)',
  rv7: '💬 Audience signals (comments, DMs, requests, brand interest)',
  rv8: '🔁 Double down next week (content format that worked)',
  rv9: '🚫 Stop or change (what wasted your time)',
  rv10: '👟 Traction Report notes (brands, opportunities, shoes to test)',
  rv11: '🎯 3 specific goals for next week',
  rv12: '📋 Overall honest summary (2-3 sentences)',
};

function renderReviewHistory() {
  const container = document.getElementById('reviewHistory');
  if (!container) return;
  if (!reviewLog.length) { container.innerHTML = '<p class="text-sm text-muted" style="padding:10px 0">No reviews saved yet.</p>'; return; }
  container.innerHTML = reviewLog.map(r => `
    <div class="review-card">
      <div class="review-card-header">
        <div class="review-card-title">Week ${r.week} Review</div>
        <div class="review-card-date">${r.date || ''}</div>
      </div>
      ${Object.entries(REVIEW_LABELS).map(([key, label]) => r[key] ? `
        <div class="review-q">${label}</div>
        <div class="review-a">${r[key]}</div>` : '').join('')}
    </div>`).join('');
}


// ── How-To Modal ──────────────────────────────────────────────────────────────
function openHowTo() {
  document.getElementById('howToModal').classList.add('open');
  localStorage.setItem('trOnboarded', '1');
}
function closeHowTo(e) {
  if (!e) { document.getElementById('howToModal').classList.remove('open'); return; }
  const box = document.querySelector('#howToModal .modal-box');
  if (!box || !box.contains(e.target) || e.currentTarget?.classList?.contains('modal-close') || e.currentTarget?.classList?.contains('btn')) {
    document.getElementById('howToModal').classList.remove('open');
  }
}

// ── Jump Science v1.1 ─────────────────────────────────────────────────────────

const JS_DIAGNOSTIC_QUESTIONS = [
  { q: 'When you jump off two feet, which describes your approach best?', options: [
    { text: 'Fast run-up, last 2 steps are quick and short', score: { speed: 2, force: 0 } },
    { text: 'Moderate run-up, deliberate penultimate step', score: { speed: 1, force: 1 } },
    { text: 'Slow approach, I squat and load before jumping', score: { speed: 0, force: 2 } },
  ]},
  { q: 'How long is your ground contact on the jump-foot during a max attempt?', options: [
    { text: 'Very brief — I barely feel the ground', score: { speed: 2, force: 0 } },
    { text: 'Medium — I feel a quick push', score: { speed: 1, force: 1 } },
    { text: 'Long — I bend deep and drive up', score: { speed: 0, force: 2 } },
  ]},
  { q: 'Which athletic activity feels most natural to you?', options: [
    { text: 'Sprinting / fast first step', score: { speed: 2, force: 0 } },
    { text: 'Mix of sprinting and strength', score: { speed: 1, force: 1 } },
    { text: 'Squatting heavy / slow powerful movements', score: { speed: 0, force: 2 } },
  ]},
  { q: 'How do your pogo jumps feel?', options: [
    { text: 'Natural and fast — I bounce easily', score: { speed: 2, force: 0 } },
    { text: 'OK but I have to think about it', score: { speed: 1, force: 1 } },
    { text: 'Difficult — I tend to bend my knees a lot', score: { speed: 0, force: 2 } },
  ]},
  { q: 'When you were younger, which sport/skill was easiest?', options: [
    { text: 'Track, sprinting, soccer — fast movements', score: { speed: 2, force: 0 } },
    { text: 'Basketball, football — mixed demands', score: { speed: 1, force: 1 } },
    { text: 'Weightlifting, wrestling — strength-based', score: { speed: 0, force: 2 } },
  ]},
  { q: 'Your single-leg hop distance vs. two-leg jump:', options: [
    { text: 'Single-leg is almost as good — I\'m reactive', score: { speed: 2, force: 0 } },
    { text: 'Two-leg is clearly better but single-leg is decent', score: { speed: 1, force: 1 } },
    { text: 'Big difference — two-leg is much better', score: { speed: 0, force: 2 } },
  ]},
];

const JS_PROFILES = {
  speed: {
    label: 'Speed-Dominant Reactive Jumper', icon: '⚡', color: 'var(--orange)',
    desc: 'You convert horizontal velocity into vertical height using the stretch-shortening cycle (SSC). Your strength is your elastic energy system — tendons store and release force faster than force-dominant jumpers. This is the NBA prototype: Westbrook, Ja Morant. Your approach speed IS your jump.',
    strengths: ['Elastic ankle and Achilles tendon efficiency', 'Fast ground contact time (<0.18 sec)', 'Reactive (reflex-based) jump mechanics', 'Approach speed translates directly to height'],
    limiters: ['Max strength is NOT your limiter', 'Rate of Force Development (RFD) and stiffness are the keys', 'Penultimate step mechanics are critical — bad last 2 steps wastes your speed', 'Reactive stiffness under load can break down at high speeds'],
    priorities: ['Penultimate Step Development (highest priority)', 'Reactive Stiffness Training (ankle/Achilles complex)', 'Arm Swing Synchronization', 'Ground Contact Optimization (<0.18 sec target)', 'Speed-Based Power Training (not max strength focus)'],
    trainingNote: 'For a 42-year-old speed-dominant profile: Your tendons are your primary asset AND primary injury risk. Collagen synthesis, progressive stiffness loading, and recovery between sessions are non-negotiable.'
  },
  hybrid: {
    label: 'Hybrid Jumper', icon: '🔄', color: 'var(--gold)',
    desc: 'You have characteristics of both speed-dominant and force-dominant jumpers. You jump effectively off a run or from a standstill. Players like LeBron James, Giannis Antetokounmpo — powerful in all contexts. Your training should develop both elastic and contractile qualities simultaneously.',
    strengths: ['Versatility — effective in multiple contexts', 'Can adapt approach based on play', 'Good SSC capacity with strength backing it up'],
    limiters: ['No single dominant weakness — context dependent', 'Need to sharpen one style for max performance', 'Often benefit from more approach specificity'],
    priorities: ['Identify dominant style and sharpen it first', 'Penultimate Step Development', 'Both reactive stiffness and strength work', 'Approach-specific plyometrics'],
    trainingNote: 'At 42, hybrid jumpers benefit from identifying which system needs more attention. Most experienced athletes have one system that lags. Your training data will confirm the direction.'
  },
  force: {
    label: 'Force-Dominant Jumper', icon: '💪', color: 'var(--blue)',
    desc: 'You jump best from strength and slow eccentric loading — a powerful squat-and-drive mechanic. Your peak force is your asset. Ground contact time is longer, but force output is high. Your opportunity is converting strength to reactive power.',
    strengths: ['High peak force output', 'Effective from standing or short approaches', 'Strong bilateral jump (two-leg max)'],
    limiters: ['Long ground contact time limits approach jump height', 'Less elastic energy efficiency', 'Sprint speed doesn\'t translate as directly to jump height'],
    priorities: ['Strength → Power conversion (primary lever)', 'Reactive stiffness development (learn to use SSC)', 'Penultimate step mechanics to add speed component', 'Single-leg stability for approach jumps'],
    trainingNote: 'Force-dominant athletes at 42 often have excellent strength bases. The opportunity is converting that to power — speed of force application, not max force, is what drives vertical gains at this stage.'
  }
};

const PENULTIMATE_SYSTEM = {
  overview: 'The penultimate step is the second-to-last step before your jump foot plants. For speed-dominant jumpers, this step is the engine. It must be LONGER than your normal stride and lower to the ground — this creates a braking force that converts horizontal momentum into upward force. A wrong penultimate costs 2–4 inches.',
  mechanics: [
    { label: 'Step Length', text: 'Penultimate step should be 10–15% LONGER than your normal stride. This lowers your center of mass and pre-loads the hip extensor muscles.' },
    { label: 'Foot Strike', text: 'Heel-toe or midfoot strike on penultimate step (NOT forefoot). This creates the braking impulse needed to redirect force upward.' },
    { label: 'Hip Drop', text: 'Your hips should drop 4–6 inches on the penultimate step — this is your eccentric loading phase. No hip drop = no elastic energy stored.' },
    { label: 'Jump Foot Contact', text: 'The final step (jump foot) should be flat or forefoot, planted aggressively UNDER your hips — not in front. Contact time target: <0.20 sec.' },
    { label: 'Rhythm', text: 'Long step (penultimate) → SHORT step (jump foot). The rhythm is L-O-N-G, short. Most athletes do short-short and leave inches on the table.' },
  ],
  levels: [
    {
      level: 1, label: 'Beginner', color: 'var(--green)', tag: 'Weeks 1–4',
      focus: 'Learn the long-short rhythm without a ball',
      drills: [
        { name: 'Walk-to-Jump Approach', reps: '3×10 approaches', cue: 'Walk 5 steps → penultimate long step → jump. No speed yet. FEEL the hip drop.', benchmark: 'Hip drops 4+ inches on penultimate step' },
        { name: 'Hop-Hop-Jump Pattern', reps: '3×8 each leg', cue: 'Right-left-JUMP. Alternating. Right foot hop, left foot is long penultimate, both feet jump.', benchmark: 'Consistent rhythm, no stuttering' },
        { name: 'Mark Drill — Tape on Floor', reps: '4×5', cue: 'Tape at normal stride, then 15% further for penultimate. Hit the marks consistently.', benchmark: 'Landing within 3 inches of target marks' },
        { name: 'Step-Step-Explode', reps: '3×8', cue: 'Two steps max. Just penultimate and jump step. Focus 100% on long-short rhythm at walking pace.', benchmark: 'Feel the difference vs. equal steps' },
      ]
    },
    {
      level: 2, label: 'Intermediate', color: 'var(--blue)', tag: 'Weeks 5–8',
      focus: 'Build speed into the approach, maintain mechanics',
      drills: [
        { name: '3-Step Run-Up Approach', reps: '4×8', cue: 'Jogging pace. 3 steps + penultimate + jump. Speed is 50–60% max. Long step holds even as speed builds.', benchmark: 'Consistent hip drop at jogging pace' },
        { name: 'Contrast: Equal vs. Long Step', reps: '3×5 each', cue: '5 jumps with equal steps. 5 jumps with deliberate long penultimate. Which is higher? Feel and own the difference.', benchmark: 'Long penultimate jump consistently higher' },
        { name: 'Sprint-to-Approach (5m run-up)', reps: '5×5', cue: '5m sprint → controlled penultimate → jump. Keep long step even coming in fast.', benchmark: 'Long step holds at 70% sprint speed' },
        { name: 'Video Review — Side Angle', reps: 'Film 5 approaches', cue: 'Film from SIDE. Watch for: hip drop on penultimate, length difference between last two steps, foot strike.', benchmark: 'Visual confirmation of long-short pattern' },
      ]
    },
    {
      level: 3, label: 'Advanced', color: 'var(--orange)', tag: 'Weeks 9–12',
      focus: 'Full-speed penultimate with max effort',
      drills: [
        { name: 'Full-Speed Approach Jump (measured)', reps: '5×5 max effort', cue: 'Full run-up, max effort. Penultimate mechanics must hold at full speed. If they break, drop to 80%.', benchmark: 'Long step holds at full sprint speed' },
        { name: '1-Step vs. 3-Step Comparison', reps: '5 each', cue: 'Measure vertical off 1-step and 3-step approach. Speed-dominant profile should jump HIGHER off 3+ steps.', benchmark: 'Approach jump 2+ inches higher than standing' },
        { name: 'Reactive Approach (off signal)', reps: '3×8', cue: 'Someone signals when to jump. React → approach → penultimate → jump. Trains reactive penultimate.', benchmark: 'Mechanics hold under reactive conditions' },
        { name: 'Band Assisted Approach Dunk', reps: '4×6', cue: 'Band reduces 20% BW. Full approach, penultimate mechanics, max effort dunk attempt. Film every set.', benchmark: 'Consistent mechanics on dunk attempts' },
      ]
    },
    {
      level: 4, label: 'Elite', color: 'var(--gold)', tag: 'Weeks 13–16',
      focus: 'Express penultimate mechanics under game conditions',
      drills: [
        { name: 'Regulation Dunk Approach', reps: '10–15 max attempts', cue: 'No band. Full approach. Penultimate mechanics are automated now. Trust the system.', benchmark: 'Consistent mechanics on every attempt' },
        { name: 'Variable Approach Angles', reps: '3×5 each angle', cue: 'Straight-on, 45° left, 45° right. Your penultimate adapts to the angle. Film from above if possible.', benchmark: 'Clean mechanics at all approach angles' },
        { name: 'Game-Speed Dribble Approach', reps: '3×6', cue: 'Dribble at game speed → attack → penultimate → max jump. This is your game context.', benchmark: 'Dribble-to-dunk approach consistent' },
        { name: 'One-Step Dunk Attempt', reps: '5 attempts', cue: '2 steps from rim. Pure explosive penultimate. Tests pure SSC without run-up help.', benchmark: 'Rim touch on one-step attempt' },
      ]
    },
  ]
};

const REACTIVE_PHASES = [
  {
    phase: 1, label: 'Foundation Stiffness', weeks: '1–4', color: 'var(--green)',
    goal: 'Build ankle/Achilles stiffness and proprioception. No explosive work — just loading the system.',
    science: 'At 42, your Achilles and patellar tendons have reduced collagen turnover. The foundation phase uses slow, controlled loading to stimulate collagen synthesis and remodel tendon structure before adding speed.',
    drills: [
      { name: 'Slow Pogo Jumps (controlled)', reps: '3×20 reps', cue: 'Minimal knee bend. Land soft, leave soft. 1-second ground contact. Building stiffness awareness.' },
      { name: 'Single-Leg Calf Raise Hold', reps: '3×30 sec each', cue: 'Bottom position hold. Loaded stretch for Achilles. Add weight as weeks progress.' },
      { name: 'Depth Drop (absorb only)', reps: '3×8 off 12"', cue: 'Step off box, land in athletic position. No jump. Feel and absorb. Reset between reps.' },
      { name: 'Jump Rope (standard pace)', reps: '3×2 min', cue: 'Focus on ankle, not calf. Stiff-ankle jumping. Light impact. Builds baseline elastic capacity.' },
    ]
  },
  {
    phase: 2, label: 'Elastic Loading', weeks: '5–8', color: 'var(--blue)',
    goal: 'Increase SSC capacity. Shorter ground contacts. Introduce direction changes.',
    science: 'The SSC operates in two modes: slow SSC (>250ms contact) and fast SSC (<250ms). This phase bridges the two — moving from controlled loading to faster, more elastic contacts. Ground contact targets begin here.',
    drills: [
      { name: 'Fast Pogo Jumps', reps: '4×20 — target <0.3 sec contact', cue: 'Bounce as fast as possible. Ankles are springs. No heel contact. Think "hot ground."' },
      { name: 'Lateral Pogo Hops', reps: '3×10 each direction', cue: 'Rapid side-to-side. Stiff ankles. Reactive contact. Builds lateral stiffness for approach jumps.' },
      { name: 'Depth Drop → Jump (intro)', reps: '4×5 off 15"', cue: 'Jump immediately after landing. Ground contact <0.3 sec. If you bend too deep, drop box height.' },
      { name: 'Reactive Bound', reps: '4×6 each leg', cue: 'Single-leg horizontal bound. Land and immediately bound again. SSC on one leg — key for approach jumps.' },
    ]
  },
  {
    phase: 3, label: 'Reactive Expression', weeks: '9–12', color: 'var(--orange)',
    goal: 'Express reactive stiffness at approach-jump speeds. Sub-0.20 sec ground contacts.',
    science: 'At this phase, tendon stiffness should handle approach-speed impacts. Target ground contact time <0.20 seconds — the threshold where SSC becomes maximally efficient for speed-dominant jumpers.',
    drills: [
      { name: 'Approach-Speed Pogos (aggressive)', reps: '4×15 — target <0.2 sec', cue: 'Max speed pogos. Film at 60fps: <12 frames from contact to leave = <0.2 sec.' },
      { name: 'Depth Jump (full reactive)', reps: '4×5 off 20"', cue: 'Off box, immediately max vertical. Highest intensity plyo. Do FIRST in session when CNS is fresh.' },
      { name: 'Reactive Lateral Bound Series', reps: '4×5 each leg', cue: 'Bound laterally 5 times continuous. Reactive contact only. If stiffness goes, rest more.' },
      { name: 'Approach Jump to Rim (reactive cue)', reps: '3×6', cue: 'Someone calls "go" — you sprint, approach, penultimate, jump. Reactive not pre-planned. Trains game SSC.' },
    ]
  },
  {
    phase: 4, label: 'Peak SSC', weeks: '13–16', color: 'var(--gold)',
    goal: 'Maximal reactive stiffness expression. Every dunk attempt utilizes full SSC.',
    science: 'Peak phase: SSC is fully developed. Volume drops significantly. Maintain stiffness while reducing fatigue. Over-training reactive stiffness now is counterproductive — freshness = higher jumps.',
    drills: [
      { name: 'Fast Pogos (maintenance)', reps: '3×12 — max speed', cue: 'Keep in to maintain stiffness. Do NOT increase volume. Quality only.' },
      { name: 'Depth Jump (low volume)', reps: '3×3 off 20" — max quality', cue: 'Only 3 reps. Max intensity. 3 min rest between sets. Quality over quantity.' },
      { name: 'Pre-Dunk Reactive Activation', reps: '2×10 fast pogos before each dunk attempt', cue: 'Activate the elastic system immediately before attempting dunks. Prime the tendons.' },
      { name: 'Jump-Land-Jump (rapid response)', reps: '3×5', cue: 'Jump, land, immediately jump again from same spot. Reactive re-jump. Tests maintained stiffness.' },
    ]
  },
];

const ARM_SWING_DRILLS = [
  { num: 1, name: 'Wall Arm Swing', dur: 'Daily · 3×20 swings',
    desc: 'Stand 1 foot from wall. Swing arms from hips to overhead in the jump arc. Palms face floor on the way down, face up on the way up. Pure arm swing pattern without jumping.',
    cue: 'Drive through the hips, not the shoulders. Arms should feel like pendulums — momentum carries them up.',
    why: 'Isolates arm swing mechanics. Most athletes have learned incorrect patterns. Resetting here carries over to the jump.' },
  { num: 2, name: 'Standing Jump Arm Sync', dur: '3×8 jumps',
    desc: 'Standing broad jump with exaggerated arm swing. Arms reach back BEHIND you on loading, then drive forward and UP on jump. Arms and hips must explode simultaneously.',
    cue: 'Arms behind at hips on dip, then throw them up as you explode. If arms are late, you lose 1–2 inches immediately.',
    why: 'The arm swing adds 1–3 inches when timed correctly. Most athletes are 0.1–0.2 sec late.' },
  { num: 3, name: 'Seated Arm Swing (no legs)', dur: '3×15 swings',
    desc: 'Sit on a bench. Swing arms only as if jumping — back, then explosively forward and overhead. Without legs, you feel exactly how much force your arms generate.',
    cue: 'Explosive. Hard stop at the top. You should feel hips lift off the bench if you swing hard enough.',
    why: 'Teaches arm power in isolation. When legs and arms work in sync, force adds — not averages.' },
  { num: 4, name: 'Double-Arm Drive Jump', dur: '3×8 max effort',
    desc: 'Standing vertical jump, focus entirely on arm swing. Drive both arms down hard on loading phase, then explode both arms up simultaneously with the leg drive.',
    cue: '"Arms → floor, arms → sky" — match the jump timing exactly. Hard down, hard up.',
    why: 'Establishes two-arm synchronization that directly transfers to dunk attempts.' },
  { num: 5, name: 'Single-Arm Approach Sync', dur: '3×6 each side',
    desc: 'Walk-to-run approach jump, practicing single-dominant-arm swing pattern. Your right arm drives up as left foot plants (and vice versa). Natural running arm sync applied to jumping.',
    cue: 'Watch NBA players in slow-mo — the arm opposite to the jump foot drives hardest. Match your arm to your footwork.',
    why: 'Approach jumps use different arm mechanics than standing jumps. This trains the approach-specific pattern.' },
  { num: 6, name: 'Full Approach Arm Sync', dur: '4×5 approach jumps',
    desc: 'Full run-up, full arm swing. Film from side angle. At the moment your jump foot leaves the ground, arms should be at eye level or above and still moving upward.',
    cue: 'Arms should be traveling UP when you leave the ground — not coming back down. If they peak before takeoff, you left height on the floor.',
    why: 'The arm swing continues to add force for the first 0.1 sec of flight. A complete arm swing adds measurable inches.' },
  { num: 7, name: 'Dunk Attempt Arm Check', dur: '5 filmed attempts',
    desc: 'Film 5 dunk attempts specifically to analyze arm swing. Frame-by-frame: Do arms fully extend overhead? Are they synced with your jump? Do they reach max height after takeoff?',
    cue: 'Checklist: ① Arms load back on penultimate ② Arms drive forward on jump foot contact ③ Arms fully extend above head at/after takeoff ④ Both arms reach max height in the air',
    why: 'Video feedback closes the gap between what you think you\'re doing and what\'s actually happening.' },
];

const GROUND_CONTACT_DATA = {
  science: 'Ground contact time (GCT) is the single most important mechanical variable for speed-dominant jumpers. The shorter your contact, the more you utilize elastic (SSC) energy stored in your Achilles and patellar tendons — and the less energy is lost to heat and ground deformation.',
  targets: [
    { label: 'Beginner GCT', value: '0.30–0.40s', status: 'baseline', desc: 'Starting point. Mostly concentric force production with limited SSC.' },
    { label: 'Intermediate GCT', value: '0.20–0.30s', status: 'developing', desc: 'SSC beginning to engage. Tendon stiffness developing.' },
    { label: 'Advanced GCT', value: '0.15–0.20s', status: 'efficient', desc: 'High SSC utilization. Tendon stiffness doing the work.' },
    { label: 'Elite (NBA) GCT', value: '<0.15s', status: 'elite', desc: 'Maximum elastic energy return. Tendon = primary force producer.' },
  ],
  howToMeasure: 'Film your approach jumps at 60fps (standard iPhone slo-mo). Count frames from foot contact to foot leave. Divide by 60 to get seconds. Example: 12 frames ÷ 60 = 0.20 seconds.',
  cues: [
    { icon: '🔥', label: 'Hot Ground Cue', text: 'Think of the floor as a hot surface. Get off it as fast as possible. This mental cue reduces GCT by 10–20% immediately in most athletes.' },
    { icon: '⚡', label: 'Stiff Ankle Protocol', text: 'On pogo jumps and approach jumps: dorsiflexed ankle BEFORE contact (toes up). This pre-loads the Achilles and reduces contact time.' },
    { icon: '🎯', label: 'Attack Under Hip', text: 'Jump foot should contact the ground directly under your center of mass — not in front. Landing in front creates braking force that adds GCT.' },
    { icon: '💥', label: 'Reactive Not Muscular', text: 'At high speeds, you do NOT have time to fire muscles consciously. Pre-tension the system and let the reflex arc do the work.' },
    { icon: '🦴', label: 'Hip Height Maintenance', text: 'After the penultimate step loads, your hips should rise rapidly and STAY high through takeoff. Dropping hips at takeoff is the most common GCT killer.' },
    { icon: '🕐', label: 'Short-Short Rule', text: 'Final 2 steps should get FASTER (shorter in time). Approach speed should INCREASE into the jump, not decelerate.' },
    { icon: '🎥', label: 'Film Your GCT', text: 'Film every dunk session at 60fps. Review weekly. Your GCT shows if your elastic system is improving — often before your vertical number moves.' },
  ],
  metrics: [
    { id: 'gc_approach', label: 'Approach Speed (felt)' },
    { id: 'gc_hip_drop', label: 'Penultimate Hip Drop' },
    { id: 'gc_contact', label: 'Ground Contact Feel' },
    { id: 'gc_ankle', label: 'Ankle Stiffness' },
    { id: 'gc_arm_sync', label: 'Arm Swing Sync' },
  ]
};

const POWER_TRAINING_DATA = {
  philosophy: 'Speed-dominant jumpers do NOT need more max strength — they need faster strength. The goal is Rate of Force Development (RFD): how fast you can generate force, not how much force you can generate at maximum load. A heavier squat does NOT correlate with higher jumps for speed-dominant athletes. Speed of movement is your training signal.',
  comparison: [
    { exercise: 'Trap Bar Deadlift', v1: '4×5 @ 75%', v1note: 'Standard strength focus', v11: '3×3 @ 70% — FAST', v11note: 'Velocity-based: move bar as fast as possible' },
    { exercise: 'Squats', v1: 'Slow controlled', v1note: 'Hypertrophy/strength focus', v11: 'Jump squats @ 30–40% BW', v11note: 'Explosive intent, ground contact as priority' },
    { exercise: 'Depth Drops', v1: 'Absorb only', v1note: 'Landing mechanics', v11: 'Depth Jump → Immediate jump', v11note: 'SSC priority, contact < 0.2 sec' },
    { exercise: 'Calf Raises', v1: 'Standard bilateral', v1note: 'Volume focus', v11: 'Single-leg, fast top', v11note: 'Reactive Achilles loading' },
    { exercise: 'Plyometrics', v1: 'Volume accumulation', v1note: 'Foundation approach', v11: 'Quality × low volume, max intensity', v11note: 'CNS fresh = higher quality reactive output' },
  ],
  priorityExercises: [
    { name: 'Reactive Depth Jump', sets: '4×5', load: 'Off 20" box', why: 'Highest RFD stimulus. Do FIRST when CNS is fresh. This is your primary power exercise — not the deadlift.', longevity: 'Land on BOTH feet. Limit 4×/week. If knees ache after, reduce box height.' },
    { name: 'Jump Squat (Velocity)', sets: '4×5', load: '30–40% BW (bar + plates)', why: 'Trains fast-force production needed for jump-off. Bar should lift off hands at the top.', longevity: 'Monitor spine. Use safety bar if available. If it\'s not fast, the load is too heavy.' },
    { name: 'Single-Leg Explosive Step-Up', sets: '3×5 each', load: 'Box at knee height, BW to 25lb', why: 'Unilateral power that mimics approach jump. Drives glute and hip extension explosively.', longevity: 'Controlled step down. Never jump down. Achilles and knee stress — progress conservatively.' },
    { name: 'Fast Pogo Progression', sets: '4×15', load: 'Bodyweight', why: 'Builds Achilles stiffness. #1 reactive stiffness developer. Do before every HPT session.', longevity: 'Forefoot only. Stop if Achilles aches. 48h between heavy pogo sessions minimum.' },
    { name: 'Hip Thrust (explosive top)', sets: '3×8', load: 'Moderate (135–185lb)', why: 'Hip extension peak force — same motion that drives you vertically. Explosive off floor, peak at top.', longevity: 'Use barbell pad. Stop short of hyperextension. Glute-driven, not low back.' },
    { name: 'Trap Bar Deadlift (velocity intent)', sets: '3×3', load: '65–70% 1RM — FAST', why: 'Strength base maintenance with velocity signal. Never grind — every rep must accelerate.', longevity: 'Maintained only in Phase 3–4. If form slows, drop weight.' },
  ],
  longevityPrinciples: [
    { icon: '⏰', label: '48-Hour Rule', text: 'Never do high-intensity plyometrics (depth jumps, max approach jumps) within 48 hours of the previous session. Tendons take longer to recover than muscles at 42.' },
    { icon: '📊', label: 'HRV + Reactive Link', text: 'If your HRV drops >10% from baseline, drop all reactive work to sub-max for that day. A tired tendon is an injury waiting to happen.' },
    { icon: '🦴', label: 'Collagen Window', text: '15g collagen + Vitamin C taken 30–60 min before training stimulates tendon collagen synthesis during loading. Non-negotiable for 42-year-old tendons.' },
    { icon: '🔄', label: 'Load Cycle', text: 'Every 4th week is a deload. Reactive training drops to 50%. This is when tendons catch up to accumulated stress. Skipping deloads = injury in Phase 3.' },
    { icon: '🏃', label: 'Speed Before Strength', text: 'Always do reactive/plyometric work BEFORE strength work in the same session. CNS freshness determines reactive stiffness quality. A post-squat depth jump is 30% less effective.' },
    { icon: '🔍', label: 'Monitoring Protocol', text: 'Weekly check: Rate 1–10 — knee soreness, Achilles tightness, shin pain, hip flexor tightness. If any hits 6+, reduce load. If 7+, take 2–3 days off reactive work.' },
  ]
};

let gcLog = JSON.parse(localStorage.getItem('trGCLog') || '[]');
let jsProfile = localStorage.getItem('trJSProfile') ? JSON.parse(localStorage.getItem('trJSProfile')) : null;

function switchJSTab(tab, btn) {
  document.querySelectorAll('.js-tab').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.js-panel').forEach(p => p.style.display = 'none');
  btn.classList.add('active');
  document.getElementById('js-' + tab).style.display = 'block';
}

function renderJSDiagnostic() {
  const panel = document.getElementById('js-profile');
  if (!panel) return;
  if (jsProfile) { showJSProfile(jsProfile.type, false); return; }

  let html = `<div class="page-header" style="padding:0 0 16px">
    <div class="badge">🧬 Jumper Classification System</div>
    <h2 style="font-size:22px;font-weight:900">What Type of Jumper Are You?</h2>
    <p class="text-sm text-muted">Answer 6 questions to identify your jump profile and get a personalized training roadmap.</p>
  </div><div id="jsQuizForm">`;

  JS_DIAGNOSTIC_QUESTIONS.forEach((q, qi) => {
    html += `<div class="js-question card mb-16">
      <div class="js-q-label">Question ${qi + 1} of 6</div>
      <div class="js-q-text">${q.q}</div>
      <div class="js-q-options">${q.options.map((opt, oi) => `<label class="js-option">
        <input type="radio" name="jsq${qi}" value="${oi}" style="margin-right:10px">${opt.text}
      </label>`).join('')}</div>
    </div>`;
  });

  html += `</div><button class="btn btn-primary" onclick="submitJSDiagnostic()" style="width:100%;justify-content:center;font-size:15px;padding:14px">⚡ Get My Jumper Profile</button>`;
  panel.innerHTML = html;
}

function submitJSDiagnostic() {
  let speedScore = 0, forceScore = 0;
  for (let qi = 0; qi < JS_DIAGNOSTIC_QUESTIONS.length; qi++) {
    const sel = document.querySelector(`input[name="jsq${qi}"]:checked`);
    if (!sel) { alert('Please answer all 6 questions before submitting.'); return; }
    const opt = JS_DIAGNOSTIC_QUESTIONS[qi].options[parseInt(sel.value)];
    speedScore += opt.score.speed;
    forceScore += opt.score.force;
  }
  let profileType = speedScore > forceScore ? (speedScore >= 9 ? 'speed' : 'hybrid') : (forceScore >= 9 ? 'force' : 'hybrid');
  if (Math.abs(speedScore - forceScore) <= 2) profileType = 'hybrid';
  const profile = { type: profileType, speedScore, forceScore, date: new Date().toISOString() };
  jsProfile = profile;
  localStorage.setItem('trJSProfile', JSON.stringify(profile));
  showJSProfile(profileType, true);
}

function showJSProfile(type, isNew) {
  const p = JS_PROFILES[type];
  const panel = document.getElementById('js-profile');
  let html = `<div>`;
  if (isNew) html += `<div class="highlight-box mb-16" style="border-color:${p.color}"><p>✅ Profile saved. Your Jump Science tabs are now personalized for this profile.</p></div>`;
  html += `<div class="card mb-16" style="border-color:${p.color}">
    <div style="display:flex;align-items:center;gap:16px;margin-bottom:14px">
      <div style="font-size:48px">${p.icon}</div>
      <div>
        <div class="badge" style="background:${p.color}20;color:${p.color};margin-bottom:6px">Your Profile</div>
        <div style="font-size:22px;font-weight:900;color:${p.color}">${p.label}</div>
      </div>
    </div>
    <p class="text-sm" style="line-height:1.7;margin-bottom:16px">${p.desc}</p>
    <div class="grid-2">
      <div>
        <div style="font-size:12px;font-weight:800;color:var(--text-muted);text-transform:uppercase;margin-bottom:8px">Your Strengths</div>
        ${p.strengths.map(s => `<div style="display:flex;gap:8px;margin-bottom:6px;font-size:13px"><span style="color:${p.color}">✓</span>${s}</div>`).join('')}
      </div>
      <div>
        <div style="font-size:12px;font-weight:800;color:var(--text-muted);text-transform:uppercase;margin-bottom:8px">Key Limiters</div>
        ${p.limiters.map(l => `<div style="display:flex;gap:8px;margin-bottom:6px;font-size:13px"><span style="color:var(--gold)">→</span>${l}</div>`).join('')}
      </div>
    </div>
  </div>
  <div class="card mb-16">
    <div class="card-title">🎯 Your Training Priorities (in order)</div>
    ${p.priorities.map((pr, i) => `<div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid var(--border)">
      <div style="width:28px;height:28px;border-radius:50%;background:${p.color}20;color:${p.color};font-weight:900;font-size:12px;display:flex;align-items:center;justify-content:center">${i+1}</div>
      <div style="font-size:13px;font-weight:700">${pr}</div>
    </div>`).join('')}
  </div>
  <div class="highlight-box" style="border-color:var(--orange)">
    <p><strong>42-Year-Old Athlete Note:</strong> ${p.trainingNote}</p>
  </div>
  <button class="btn btn-secondary mt-16" onclick="retakeJSDiagnostic()" style="font-size:12px">Retake Diagnostic</button>
  </div>`;
  panel.innerHTML = html;
}

function retakeJSDiagnostic() {
  jsProfile = null;
  localStorage.removeItem('trJSProfile');
  renderJSDiagnostic();
}

function renderPenultimate() {
  const panel = document.getElementById('js-penultimate');
  if (!panel) return;
  let html = `<div class="page-header" style="padding:0 0 16px">
    <div class="badge">👟 Speed-Dominant Priority #1</div>
    <h2 style="font-size:22px;font-weight:900">Penultimate Step System</h2>
    <p class="text-sm text-muted">The engine of the speed-dominant approach jump. Get this right and gain 2–4 inches immediately.</p>
  </div>
  <div class="highlight-box mb-20" style="border-color:var(--orange)">
    <p><strong>The Secret:</strong> ${PENULTIMATE_SYSTEM.overview}</p>
  </div>
  <div class="section-divider"><h2>Mechanics Breakdown</h2></div>
  <div class="card mb-20">
    ${PENULTIMATE_SYSTEM.mechanics.map(m => `<div style="display:flex;gap:16px;padding:12px 0;border-bottom:1px solid var(--border)">
      <div style="min-width:120px;font-size:12px;font-weight:800;color:var(--orange);text-transform:uppercase">${m.label}</div>
      <div style="font-size:13px;color:var(--text-secondary);line-height:1.6">${m.text}</div>
    </div>`).join('')}
  </div>
  <div class="section-divider"><h2>4-Level Progression System</h2></div>`;

  PENULTIMATE_SYSTEM.levels.forEach(lvl => {
    html += `<div class="phase-header" onclick="togglePhase(this)" style="border-color:${lvl.color}">
      <div class="phase-title">
        <div class="phase-num" style="background:${lvl.color}20;color:${lvl.color}">${lvl.level}</div>
        <div><strong>${lvl.label}</strong> &nbsp;<span class="tag" style="background:${lvl.color}20;color:${lvl.color}">${lvl.tag}</span></div>
      </div>
      <div><span class="text-muted text-sm">${lvl.focus}</span> &nbsp;▾</div>
    </div>
    <div class="phase-body mb-16"><div class="grid-2">`;
    lvl.drills.forEach(drill => {
      html += `<div class="session-block">
        <div class="session-block-header">
          <div class="session-num" style="background:${lvl.color}20;color:${lvl.color}">▶</div>
          <h4>${drill.name}</h4><span class="session-duration">${drill.reps}</span>
        </div>
        <div class="session-block-body">
          <div style="font-size:13px;color:var(--text-secondary);margin-bottom:8px;line-height:1.5">${drill.cue}</div>
          <div style="font-size:11px;color:var(--orange);font-weight:700">✓ BENCHMARK: ${drill.benchmark}</div>
        </div>
      </div>`;
    });
    html += `</div></div>`;
  });
  panel.innerHTML = html;
}

function renderReactive() {
  const panel = document.getElementById('js-reactive');
  if (!panel) return;
  let html = `<div class="page-header" style="padding:0 0 16px">
    <div class="badge">⚡ Stretch-Shortening Cycle Development</div>
    <h2 style="font-size:22px;font-weight:900">Reactive Stiffness System</h2>
    <p class="text-sm text-muted">4-phase system tied to your 16-week calendar. Your Achilles and tendons are your elastic engine.</p>
  </div>`;
  REACTIVE_PHASES.forEach(phase => {
    html += `<div class="card mb-20" style="border-color:${phase.color}">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px">
        <div class="phase-num" style="background:${phase.color}20;color:${phase.color}">${phase.phase}</div>
        <div>
          <div style="font-weight:800;font-size:16px">${phase.label} <span class="tag" style="background:${phase.color}20;color:${phase.color};margin-left:6px">Weeks ${phase.weeks}</span></div>
          <div style="font-size:12px;color:var(--text-muted);margin-top:2px">${phase.goal}</div>
        </div>
      </div>
      <div class="highlight-box mb-14" style="padding:10px 14px">
        <p style="font-size:12px"><strong>Science:</strong> ${phase.science}</p>
      </div>
      <div class="grid-2">
        ${phase.drills.map(drill => `<div class="session-block">
          <div class="session-block-header">
            <div class="session-num" style="background:${phase.color}20;color:${phase.color}">▶</div>
            <h4>${drill.name}</h4><span class="session-duration">${drill.reps}</span>
          </div>
          <div class="session-block-body">
            <div style="font-size:12px;color:var(--text-secondary);line-height:1.5">${drill.cue}</div>
          </div>
        </div>`).join('')}
      </div>
    </div>`;
  });
  panel.innerHTML = html;
}

function renderArmSwing() {
  const panel = document.getElementById('js-armswing');
  if (!panel) return;
  let html = `<div class="page-header" style="padding:0 0 16px">
    <div class="badge">💪 +1 to +3 Inches From Your Arms Alone</div>
    <h2 style="font-size:22px;font-weight:900">Arm Swing Development</h2>
    <p class="text-sm text-muted">Your arms are the most undercoached aspect of jumping. A properly timed arm swing adds 1–3 inches with zero additional leg strength.</p>
  </div>
  <div class="highlight-box mb-20">
    <p><strong>Why Arms Matter:</strong> At the moment of takeoff, your arms should be traveling upward at maximum velocity. This momentum transfers to your entire body through your core — Newton's 3rd Law. If your arms are already at their peak or coming back down when your feet leave the ground, you've wasted the arm swing.</p>
  </div>
  <div class="section-divider"><h2>7-Drill Progression</h2></div>
  <div class="grid-2">`;
  ARM_SWING_DRILLS.forEach(drill => {
    html += `<div class="card">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
        <div style="width:32px;height:32px;border-radius:50%;background:rgba(255,107,0,0.15);color:var(--orange);font-weight:900;font-size:14px;display:flex;align-items:center;justify-content:center">${drill.num}</div>
        <div>
          <div style="font-weight:800;font-size:14px">${drill.name}</div>
          <div style="font-size:11px;color:var(--text-muted)">${drill.dur}</div>
        </div>
      </div>
      <p class="text-sm" style="margin-bottom:8px;line-height:1.6;color:var(--text-secondary)">${drill.desc}</p>
      <div style="background:rgba(255,107,0,0.08);border-radius:6px;padding:8px 10px;margin-bottom:8px;font-size:12px;color:var(--orange)">💬 Cue: ${drill.cue}</div>
      <div style="font-size:11px;color:var(--text-muted);font-style:italic">${drill.why}</div>
    </div>`;
  });
  html += `</div>`;
  panel.innerHTML = html;
}

function renderGroundContact() {
  const panel = document.getElementById('js-groundcontact');
  if (!panel) return;
  const d = GROUND_CONTACT_DATA;
  const statusColors = { baseline: 'var(--text-muted)', developing: 'var(--blue)', efficient: 'var(--orange)', elite: 'var(--gold)' };
  let html = `<div class="page-header" style="padding:0 0 16px">
    <div class="badge">🦶 The #1 Mechanical Variable for Speed-Dominant Jumpers</div>
    <h2 style="font-size:22px;font-weight:900">Ground Contact Optimization</h2>
    <p class="text-sm text-muted">Shorter contacts = more elastic energy return. Your target: sub-0.20 sec on approach jumps.</p>
  </div>
  <div class="highlight-box mb-20"><p><strong>The Science:</strong> ${d.science}</p></div>
  <div class="section-divider"><h2>Ground Contact Time Targets</h2></div>
  <div class="grid-2 mb-20">
    ${d.targets.map(t => `<div class="card" style="border-color:${statusColors[t.status]}">
      <div style="font-size:28px;font-weight:900;color:${statusColors[t.status]};margin-bottom:4px">${t.value}</div>
      <div style="font-weight:700;font-size:13px;margin-bottom:6px">${t.label}</div>
      <div style="font-size:12px;color:var(--text-muted)">${t.desc}</div>
    </div>`).join('')}
  </div>
  <div class="card mb-20">
    <div class="card-title">📱 How to Measure Your GCT (Free)</div>
    <p class="text-sm" style="color:var(--text-secondary);line-height:1.7">${d.howToMeasure}</p>
  </div>
  <div class="section-divider"><h2>7 Coaching Cues for Faster Contact Time</h2></div>
  <div class="grid-2 mb-20">
    ${d.cues.map(cue => `<div class="card">
      <div style="display:flex;gap:10px;align-items:flex-start">
        <span style="font-size:24px">${cue.icon}</span>
        <div>
          <div style="font-weight:800;font-size:13px;margin-bottom:6px">${cue.label}</div>
          <div style="font-size:12px;color:var(--text-secondary);line-height:1.6">${cue.text}</div>
        </div>
      </div>
    </div>`).join('')}
  </div>
  <div class="section-divider"><h2>Session Quality Tracker</h2></div>
  <div class="card mb-16">
    <div class="card-title">Rate Today's Ground Contact Mechanics (1–5)</div>
    <div class="tracker-form">
      <div class="form-grid">
        <div class="form-group"><label>Date</label><input type="date" id="gc_date"></div>
        <div class="form-group"><label>Session Week</label><input type="number" id="gc_week" min="1" max="16" placeholder="1"></div>
        ${d.metrics.map(m => `<div class="form-group">
          <label>${m.label}</label>
          <select id="${m.id}">
            <option value="">Rate 1–5</option>
            <option value="1">1 — Poor</option>
            <option value="2">2 — Below avg</option>
            <option value="3">3 — Average</option>
            <option value="4">4 — Good</option>
            <option value="5">5 — Excellent</option>
          </select>
        </div>`).join('')}
      </div>
      <div class="form-group mb-12"><label>Notes</label><input type="text" id="gc_notes" placeholder="What felt different? What to improve?" style="width:100%"></div>
      <button class="btn btn-primary" onclick="saveGCLog()">+ Log Contact Quality</button>
    </div>
  </div>`;

  if (gcLog.length) {
    html += `<div class="card">
      <div class="card-title">Contact Quality History <span class="text-muted text-sm">(${gcLog.length} entries)</span></div>
      <div class="table-wrap"><table>
        <thead><tr><th>Date</th><th>Wk</th><th>Approach</th><th>Hip Drop</th><th>Contact</th><th>Ankle</th><th>Arm Sync</th><th>Notes</th></tr></thead>
        <tbody>${gcLog.slice(0,10).map(e => `<tr>
          <td>${e.date}</td><td>${e.week||'—'}</td>
          <td style="color:var(--orange);font-weight:700">${e.gc_approach||'—'}</td><td>${e.gc_hip_drop||'—'}</td><td>${e.gc_contact||'—'}</td>
          <td>${e.gc_ankle||'—'}</td><td>${e.gc_arm_sync||'—'}</td>
          <td class="text-sm text-muted">${e.notes||''}</td>
        </tr>`).join('')}</tbody>
      </table></div>
    </div>`;
  }

  panel.innerHTML = html;
  const gcDate = document.getElementById('gc_date');
  if (gcDate) gcDate.value = new Date().toISOString().split('T')[0];
}

function saveGCLog() {
  const entry = {
    date: document.getElementById('gc_date')?.value,
    week: document.getElementById('gc_week')?.value,
    gc_approach: document.getElementById('gc_approach')?.value,
    gc_hip_drop: document.getElementById('gc_hip_drop')?.value,
    gc_contact: document.getElementById('gc_contact')?.value,
    gc_ankle: document.getElementById('gc_ankle')?.value,
    gc_arm_sync: document.getElementById('gc_arm_sync')?.value,
    notes: document.getElementById('gc_notes')?.value,
  };
  if (!entry.date) { alert('Please select a date.'); return; }
  gcLog.unshift(entry);
  localStorage.setItem('trGCLog', JSON.stringify(gcLog));
  renderGroundContact();
  alert('Ground contact session logged!');
}

function renderPowerTraining() {
  const panel = document.getElementById('js-powertraining');
  if (!panel) return;
  const d = POWER_TRAINING_DATA;
  let html = `<div class="page-header" style="padding:0 0 16px">
    <div class="badge">🏋️ Speed-Dominant Power Protocol</div>
    <h2 style="font-size:22px;font-weight:900">Speed-Based Power Training</h2>
    <p class="text-sm text-muted">Rate of Force Development over Max Strength. Move fast, build fast.</p>
  </div>
  <div class="highlight-box mb-20" style="border-color:var(--orange)">
    <p><strong>Philosophy:</strong> ${d.philosophy}</p>
  </div>
  <div class="section-divider"><h2>v1.0 → v1.1 Exercise Modifications</h2></div>
  <div class="card mb-20">
    <div class="table-wrap"><table>
      <thead><tr><th>Exercise</th><th>v1.0 (Original)</th><th>v1.1 (Speed-Dominant)</th></tr></thead>
      <tbody>
        ${d.comparison.map(c => `<tr>
          <td style="font-weight:700">${c.exercise}</td>
          <td><div>${c.v1}</div><div class="text-sm text-muted">${c.v1note}</div></td>
          <td><div style="color:var(--orange);font-weight:700">${c.v11}</div><div class="text-sm text-muted">${c.v11note}</div></td>
        </tr>`).join('')}
      </tbody>
    </table></div>
  </div>
  <div class="section-divider"><h2>Priority Exercise Library (Speed-Dominant)</h2></div>
  <div class="grid-2 mb-20">
    ${d.priorityExercises.map(ex => `<div class="card">
      <div style="font-weight:800;font-size:14px;margin-bottom:6px">${ex.name}</div>
      <div style="display:flex;gap:8px;margin-bottom:8px">
        <span class="tag tag-orange">${ex.sets}</span>
        <span class="tag" style="background:rgba(255,215,0,0.1);color:var(--gold)">${ex.load}</span>
      </div>
      <div style="font-size:12px;color:var(--text-secondary);margin-bottom:8px;line-height:1.6"><strong style="color:var(--text-primary)">Why:</strong> ${ex.why}</div>
      <div style="font-size:11px;color:var(--green);background:rgba(0,204,136,0.08);border-radius:6px;padding:6px 8px"><strong>Longevity:</strong> ${ex.longevity}</div>
    </div>`).join('')}
  </div>
  <div class="section-divider"><h2>42-Year-Old Longevity Principles</h2></div>
  <div class="grid-2">
    ${d.longevityPrinciples.map(lp => `<div class="card">
      <div style="display:flex;gap:10px;align-items:flex-start">
        <span style="font-size:22px">${lp.icon}</span>
        <div>
          <div style="font-weight:800;font-size:13px;margin-bottom:6px">${lp.label}</div>
          <div style="font-size:12px;color:var(--text-secondary);line-height:1.6">${lp.text}</div>
        </div>
      </div>
    </div>`).join('')}
  </div>`;
  panel.innerHTML = html;
}
