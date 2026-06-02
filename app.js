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

// ── Platform Strategy ─────────────────────────────────────────────────────────
const PLATFORM_GUIDES = {
  tiktok: {
    title: '🎵 TikTok — Algorithm & Strategy',
    rules: [
      { icon: '⚡', label: 'Algorithm Priority', text: 'Watch time > completion rate > shares > comments > likes. If they finish the video, TikTok pushes it. Everything else is secondary.' },
      { icon: '🎯', label: 'Best Content Types for This Brand', text: 'Dunk Data Log (Fridays), Training breakdowns (Mon/Wed), Raw athletic moments, Shoe traction tests (Sat). Authentic > polished.' },
      { icon: '🎬', label: 'Hook Formula', text: 'Start mid-action. First word should be a number: "Week 8." / "42 years old." / "The data." — No intro. No "Hey guys." Grab in 0–2 sec.' },
      { icon: '⏱', label: 'Optimal Length', text: '21–34 seconds. 90%+ completion rate triggers algorithm boost. Keep it tight. If it\'s over 45 sec, you better have a payoff.' },
      { icon: '🕐', label: 'Best Posting Times', text: '6–9 PM weekdays · 10 AM–12 PM weekends. Post when your audience is scrolling, not when it\'s convenient for you.' },
      { icon: '#️⃣', label: 'Hashtag Strategy', text: '3–5 niche tags + 2 broad (never 30 hashtags). Use: #VerticalJump #RoadToDunking #42AndFit #TractionReport + 1 broad like #Basketball.' },
      { icon: '💬', label: 'Growth Hack', text: 'Reply to EVERY comment in the first 30 minutes after posting. TikTok\'s algorithm rewards creator engagement velocity. This alone can 2–3x reach.' },
      { icon: '🚫', label: 'What NOT to Do', text: 'Long intros, "Like and subscribe", static images, posting at midnight, using trending sounds that don\'t fit your content, ignoring comments.' },
    ]
  },
  instagram: {
    title: '📸 Instagram Reels — Algorithm & Strategy',
    rules: [
      { icon: '⚡', label: 'Algorithm Priority', text: 'Shares to non-followers is the #1 signal. Saves = interest. Comments = community. Likes alone don\'t move the needle anymore.' },
      { icon: '🎯', label: 'Best Content for This Brand', text: 'More polished than TikTok. Before/after dunk progress. Aesthetic lighting helps. Shoe aesthetics perform well. Training form breakdowns.' },
      { icon: '🎬', label: 'Hook', text: 'Text overlay in the first frame. Use contrasting color. Make them stop scrolling. "42. Still going up." over a dunk attempt = perfect opener.' },
      { icon: '⏱', label: 'Optimal Length', text: '7–15 seconds (meme/clip format) or 30–60 seconds (story format). Match length to content depth.' },
      { icon: '🕐', label: 'Best Times', text: '8–9 AM · 12 PM · 5–7 PM. Consistency beats perfection — same days, same times, every week.' },
      { icon: '📖', label: 'Stories Strategy', text: 'Use Stories for daily BTS, polls ("Rate my form 1–10"), shoe unboxings. Stories keep you top-of-feed without burning your main content.' },
      { icon: '🎠', label: 'Carousels', text: 'Use for data reveals — Week X stats as swipeable slides. Saves are extremely high on carousels. Algorithm gold for reach to new followers.' },
    ]
  },
  youtube: {
    title: '▶️ YouTube Shorts — Algorithm & Strategy',
    rules: [
      { icon: '⚡', label: 'Algorithm Priority', text: 'Click-through rate on thumbnail (even in Shorts feed), then watch time. A great first frame IS your thumbnail.' },
      { icon: '🔍', label: 'SEO Value', text: '"42 year old dunking", "vertical jump training over 40" — high search volume, low competition. YouTube Shorts feed into long-term discoverability unlike TikTok.' },
      { icon: '📝', label: 'Title Formula', text: '"[Number] [Promise] [Curiosity gap]" — e.g. "42 Year Old Adds 3 Inches To His Vertical In 8 Weeks". Make the number and transformation the headline.' },
      { icon: '📋', label: 'Description', text: 'Always include a full description with timestamps even for Shorts. This feeds search indexing. Include links to your TikTok and Instagram.' },
      { icon: '📅', label: 'Consistency', text: 'YouTube rewards weekly cadence more than TikTok. Post same day every week (Sunday recap ideal). Algorithm favors reliable publishers over viral-chasers.' },
      { icon: '🎓', label: 'Best For', text: 'Educational content (slant board science, training science explained, vertical jump protocols), weekly recaps, long-form companion content for TikTok hooks.' },
    ]
  },
  threads: {
    title: '🧵 Threads — Authority & Thought Leadership',
    rules: [
      { icon: '🎯', label: 'Strategy', text: 'Threads is your authority/thought leadership channel. This is where you become the expert on vertical jump training at 42. Build credibility, not just clips.' },
      { icon: '📝', label: 'Content Types', text: 'Training science threads, dunk data threads, shoe industry commentary, behind-the-numbers analysis. What TikTok shows, Threads explains.' },
      { icon: '🔑', label: 'Thread Format', text: 'Thread opener must be a bold claim + data. Then expand in replies. Each reply should be able to stand alone as a quote.' },
      { icon: '💡', label: 'Example Opener', text: '"42 years old. 6 days/week training. My vertical is up 4 inches. Here\'s the exact protocol:" — Then break it down over 5–8 replies with real specifics.' },
      { icon: '🕐', label: 'Algorithm', text: 'No algorithm — chronological + engagement. Post in the morning (7–9 AM) when your audience is checking phones before work. Stay consistent.' },
      { icon: '🔗', label: 'Cross-Promote', text: 'Always link to your latest YouTube or TikTok in Threads. Use Threads to drive depth — "The full breakdown is in today\'s Short. Link in bio."' },
    ]
  }
};

function showPlatform(id, btn) {
  document.querySelectorAll('.platform-tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const g = PLATFORM_GUIDES[id];
  if (!g) return;
  const detail = document.getElementById('platformDetail');
  if (!detail) return;
  detail.innerHTML = `<div class="platform-guide">
    <div class="platform-guide-title">${g.title}</div>
    ${g.rules.map(r => `<div class="platform-rule">
      <div class="platform-rule-icon">${r.icon}</div>
      <div class="platform-rule-body">
        <div class="platform-rule-label">${r.label}</div>
        <div class="platform-rule-text">${r.text}</div>
      </div>
    </div>`).join('')}
  </div>`;
}

// ── Notion Export ─────────────────────────────────────────────────────────────
function exportReviewToNotion() {
  if (!reviewLog.length) { alert('No reviews saved yet. Save a review first.'); return; }
  const r = reviewLog[0]; // most recent
  let md = `# Week ${r.week} Review — Traction Report Performance OS\n`;
  md += `Date: ${r.date || 'Not set'}\n\n`;
  Object.entries(REVIEW_LABELS).forEach(([key, label]) => {
    if (r[key]) md += `## ${label}\n${r[key]}\n\n`;
  });
  md += `---\n*Exported from Traction Report Performance OS*\n`;
  navigator.clipboard.writeText(md).then(() => {
    alert('✅ Review copied to clipboard! Paste directly into Notion (it supports markdown).');
  }).catch(() => {
    // fallback
    const ta = document.createElement('textarea');
    ta.value = md;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    alert('✅ Review copied! Paste into Notion.');
  });
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
