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

// ── Full Day Integration Data ─────────────────────────────────────────────────

const MORNING_ACTIVATION_TIMES = [
  { time: '6:30 AM', action: 'Wake — no snooze. 16 oz water + electrolytes' },
  { time: '6:35 AM', action: '5–10 min morning sunlight outside' },
  { time: '6:45 AM', action: '10 min mobility flow (hips, ankles, thoracic)' },
  { time: '6:55 AM', action: 'Pre-training fuel — see nutrition section below' },
  { time: '7:00 AM', action: 'Mental prep — review today\'s training goals' },
];
const MORNING_RECOVERY_TIMES = [
  { time: '7:00 AM', action: 'Wake — no snooze. 16 oz water' },
  { time: '7:10 AM', action: '10 min morning sun walk (barefoot if possible)' },
  { time: '7:20 AM', action: 'Full-body mobility flow — 20 min, zero intensity' },
  { time: '7:45 AM', action: 'Foot massage: lacrosse ball, 3 min each foot' },
  { time: '8:00 AM', action: 'Relaxed morning meal — see nutrition below' },
];
const SLEEP_PROTOCOL_TIMES = [
  { time: '8:45 PM', action: 'Feet Up Wall — 10 min. Lay on floor, legs straight up wall, nasal breathing only. Venous return + reduces lower leg swelling + calms nervous system.' },
  { time: '9:00 PM', action: 'Wind-down begins — dim all lights' },
  { time: '9:15 PM', action: 'Collagen + tart cherry juice (tendon synthesis window)' },
  { time: '9:30 PM', action: 'SCREENS OFF — no phone, no TV, no exceptions' },
  { time: '9:45 PM', action: 'Magnesium glycinate 400mg + hip/calf stretching' },
  { time: '10:00 PM', action: 'Read physical book — downregulate nervous system' },
  { time: '10:15 PM', action: 'Lights out — 8 hrs 15 min to 6:30 AM wake' },
];
const DAILY_RECOVERY_STACK = [
  'Tibialis raises 3×20 — every single day, no exceptions',
  'Soleus raises 3×15 — bent knee, 2 sec hold at top',
  'Foot strength: towel scrunches 2×30 sec each foot',
  'Foam roll: calves, quads, IT band — 60 sec each zone',
  'Hip flexor stretch — 60 sec each side',
  'Patellar tendon massage — 2 min each knee',
  'Evening Mobility Reset 10 min — ankles, hips, thoracic (maintain jump positions, not flexibility)',
  'Self-massage: lacrosse/tennis ball — glutes, hip flexors, feet, calves 5–10 min',
  'Post-meal walks: 10 min after lunch AND dinner every single day',
];

const RECOVERY_TIER1 = [
  {
    name: 'Feet Up Wall',
    icon: '🦵',
    time: '8:45 PM — Every Evening',
    duration: '10 min',
    color: 'var(--blue)',
    protocol: 'Lay on floor. Legs straight up wall. Nasal breathing only. 5–10 minutes.',
    benefits: ['Venous return — blood out of lower legs', 'Reduces swelling after court sessions', 'Calms nervous system before sleep', 'Zero cost, massive ROI'],
    note: 'Do this before your 9 PM wind-down. Non-negotiable after Friday Dunk Day and Tuesday/Saturday court sessions.',
  },
  {
    name: 'Contrast Shower',
    icon: '🚿',
    time: 'Post-Training — especially Fri + Sun',
    duration: '12 min',
    color: 'var(--orange)',
    protocol: '3 min hot → 1 min cold. Repeat ×3. End cold.',
    benefits: ['Soreness management', 'Reduced inflammation', 'Nervous system reset', 'Improved blood flow to tendons'],
    note: 'Highest priority after Friday Dunk Day and Sunday HPT4. Also effective after Tuesday/Saturday court sessions.',
  },
  {
    name: '10-Min Walk After Every Meal',
    icon: '🚶',
    time: 'After Lunch + After Dinner',
    duration: '10 min ×2/day',
    color: 'var(--green)',
    protocol: 'Easy walk immediately after eating. Both lunch and dinner. No exceptions.',
    benefits: ['Blood sugar management', 'Improved digestion', 'Extra daily movement (2,000+ steps)', 'Zone 2 base building'],
    note: 'Most underrated recovery habit in the entire program. You are already doing it after dinner — add lunch too.',
  },
];

const RECOVERY_TIER2 = [
  {
    name: 'Evening Mobility Reset',
    icon: '🧘',
    time: 'Daily — any time after 6 PM',
    duration: '10 min',
    color: 'var(--gold)',
    protocol: 'Focus on ankles, hips, and thoracic spine. NOT stretching for flexibility — maintaining the positions required for jumping.',
    benefits: ['Preserves jump mechanics', 'Prevents stiffness buildup', 'Cumulative range of motion over 16 weeks'],
    note: 'Ankle dorsiflexion and hip mobility directly limit your jump height. 10 min daily here prevents lost inches at the rim.',
  },
  {
    name: 'Foot Strength Circuit',
    icon: '🦶',
    time: '3×/week — Mon, Wed, Fri',
    duration: '5 min (2 rounds)',
    color: 'var(--orange)',
    protocol: '2 rounds: towel scrunches → toe spreading → single-leg balance → barefoot calf raises',
    benefits: ['Speed jumper suspension system', 'Reduces stress fracture risk', 'Improves ground contact mechanics', 'Supports ankle stiffness for reactive jumping'],
    note: 'You are a speed jumper. Your feet ARE your elastic return system. 5 minutes 3×/week = direct jump height ROI.',
  },
  {
    name: 'Self-Massage (No Massage Gun)',
    icon: '🎾',
    time: 'Post-training or evening',
    duration: '5–10 min',
    color: 'var(--purple)',
    protocol: 'Lacrosse ball or tennis ball. Targets: glutes, hip flexors, feet (plantar fascia), calves.',
    benefits: ['Trigger point release', 'Reduces DOMS by 20–30%', 'Hip flexor health = better penultimate step', 'Costs nothing'],
    note: 'A lacrosse ball on your hip flexors for 2 min each side will do more for your penultimate step mechanics than any drill.',
  },
];

const FOOT_STRENGTH_CIRCUIT = [
  { name: 'Towel Scrunches', detail: '2×30 sec each foot — toes grip and pull towel toward heel' },
  { name: 'Toe Spreading', detail: '2×10 — spread all 5 toes wide, hold 3 sec each' },
  { name: 'Single-Leg Balance', detail: '2×30 sec each foot — barefoot, eyes open then closed' },
  { name: 'Barefoot Calf Raises', detail: '2×15 slow — feel every part of the foot through the motion' },
];

const WEEKLY_AUDIT_QUESTIONS = [
  { id: 'ankles', label: 'Ankle health', type: 'scale' },
  { id: 'knees', label: 'Knee health', type: 'scale' },
  { id: 'hips', label: 'Hip health', type: 'scale' },
  { id: 'explosive', label: 'How explosive I felt this week', type: 'scale' },
  { id: 'recovery', label: 'Recovery quality', type: 'scale' },
  { id: 'energy', label: 'Energy levels', type: 'scale' },
];

let auditLog = JSON.parse(localStorage.getItem('trAuditLog') || '[]');
let currentDayIndex = -1;

const DAY_META = [
  { // MON — HPT 1
    nutritionType: 'training', trainWindow: '7:30 AM – 9:00 AM', shootingDay: false, dunkDay: false,
    jsFocus: { title: 'JUMP SCIENCE — Reactive Stiffness + Penultimate Step', color: 'var(--orange)',
      notes: [
        { icon: '⚡', label: 'Reactive Stiffness', text: 'Pogo jumps: stiff ankles, forefoot only. Each week target shorter contact time. Week 1–4: controlled. Week 5–8: fast, aim <0.3 sec.' },
        { icon: '👟', label: 'Penultimate Step', text: 'On approach jumps: consciously extend the second-to-last step 10–15% longer. Feel your hips drop before the jump foot plants.' },
        { icon: '💪', label: 'Arm Load', text: 'Arms must load BACK behind your hips on the penultimate step, then drive explosively UP at takeoff — not forward.' },
      ]}
  },
  { // TUE — Skill 1
    nutritionType: 'basketball', trainWindow: '7:30 AM – 8:45 AM', shootingDay: true, dunkDay: false,
    shootingSession: { title: 'SHOOTING & FINISHING SESSION', color: 'var(--blue)',
      blocks: [
        { time: '10 min', name: 'Form Shooting — Foundation', icon: '📐', desc: '5 feet from rim: 10 makes (BEEF mechanics only). Free throw line: 10 makes. Right elbow: 7 makes. Left elbow: 7 makes. Elbow under ball, wrist snaps to full goose-neck on every rep.' },
        { time: '15 min', name: 'Spot Shooting — 5-Spot Foundation', icon: '📍', desc: 'FT line (10 makes) → Right elbow (7 makes) → Left elbow (7 makes) → Right wing 3-pt (5 makes) → Left wing 3-pt (5 makes). Miss 3 in a row? Move 2 feet closer, rebuild confidence, come back.' },
        { time: '15 min', name: 'Finishing Tier 1 — Essential', icon: '🔥', desc: 'Power layup: 10× each side at full speed — jump THROUGH contact, not away. Finger roll: 3×10 each hand. Reverse layup: 3×8 each side — commit to going under the basket, use the backboard.' },
        { time: '10 min', name: 'Competitive: 21', icon: '🏆', desc: 'Pick 7 spots, 3 shots per spot = 21 total. Target: 14+/21. Record your score every session. Hit 17+? Add 2 spots from 3-point range next session.' },
      ]}
  },
  { // WED — HPT 2
    nutritionType: 'training', trainWindow: '7:30 AM – 9:00 AM', shootingDay: false, dunkDay: false,
    jsFocus: { title: 'JUMP SCIENCE — Arm Swing + Reactive Bounds', color: 'var(--gold)',
      notes: [
        { icon: '💪', label: 'Arm Swing Activation', text: 'Before session: Wall Arm Swing 3×20. Arms pendulum from hips to overhead. Feel the momentum carry them up — do this BEFORE any approach jumps.' },
        { icon: '⚡', label: 'Reactive Bounds', text: 'Lateral reactive bounds: land and explode immediately, <0.3 sec contact. Arms should swing ACROSS your body and UP on each bound — they add power on laterals too.' },
        { icon: '🎥', label: 'Film Tip', text: 'Film 3 approach jumps from the side. Watch: are your arms still traveling UP when your feet leave the ground? If peaked before takeoff — leaving 1–2 inches on the floor.' },
      ]}
  },
  { // THU — Recovery
    nutritionType: 'recovery', trainWindow: '7:00 AM – 8:30 AM', shootingDay: false, dunkDay: false, jsFocus: null,
    shoppingDay: true,
  },
  { // FRI — HPT 3 + Dunk
    nutritionType: 'training', trainWindow: '7:30 AM – 9:30 AM', shootingDay: false, dunkDay: true,
    jsFocus: { title: 'JUMP SCIENCE — DUNK SESSION (Penultimate + Ground Contact)', color: 'var(--orange)',
      notes: [
        { icon: '👟', label: 'Penultimate Step — Max Effort', text: 'Every dunk attempt: LONG penultimate, hip drops 4–6 inches, short explosive jump step under your hips. Film from the SIDE to verify — not the front.' },
        { icon: '🦶', label: 'Ground Contact Assessment', text: 'Film at 60fps. Foot contact to takeoff — count frames, divide by 60 = seconds. Target: <0.20 sec on jump foot. Log in Ground Contact tracker after.' },
        { icon: '💪', label: 'Arm Sync Check', text: 'At the moment feet leave the ground: arms must still be traveling UPWARD, not yet peaked. If peaked before takeoff, you are leaving 1–2 inches. Film confirms this.' },
      ]}
  },
  { // SAT — Skill 2
    nutritionType: 'basketball', trainWindow: '7:30 AM – 8:45 AM', shootingDay: true, dunkDay: false,
    shootingSession: { title: 'SHOOTING & FINISHING SESSION', color: 'var(--blue)',
      blocks: [
        { time: '12 min', name: 'Corner 3 Machine', icon: '📍', desc: 'Right corner 15 attempts → Left corner 15 → Right corner off 1-dribble 10 → Left corner off 1-dribble 10. Feet set BEFORE the catch — your stance beats the ball.' },
        { time: '15 min', name: 'Off-Dribble: Elbow Pull-Ups + Step-Back', icon: '🏀', desc: 'Right elbow pull-up 10× (1-2 step footwork) → Left elbow pull-up 10× → Right wing step-back 8× (attack hard, step straight back) → Left wing step-back 8×. Attack must be real or step-back creates no space.' },
        { time: '10 min', name: 'Finishing Tier 2 — Game Changers', icon: '🔥', desc: 'Euro step 4×8 each direction (step around a cone at the charge circle) → Running floater 3×10 each side (must go over a raised barrier — trash can, cone) → Contact layup 3×10 with partner resistance on your shoulder.' },
        { time: '10 min', name: 'Competitive: Beat the Pro', icon: '🏆', desc: 'Pro scores 7/10 automatically. You shoot 5 spots × 2 shots = 10. Must match or beat 7. Track W/L across sessions. Win 3 consecutive rounds → raise pro to 8/10.' },
      ]}
  },
  { // SUN — HPT 4
    nutritionType: 'training', trainWindow: '7:30 AM – 9:00 AM', shootingDay: false, dunkDay: false,
    jsFocus: { title: 'JUMP SCIENCE — Reactive Maintenance + Arm Sync Test', color: 'var(--green)',
      notes: [
        { icon: '⚡', label: 'Reactive Activation', text: 'Fast pogos 2×10 BEFORE every plyometric set — prime the elastic system. "Hot ground" from the very first rep. Do not skip this primer.' },
        { icon: '💪', label: 'Arm Sync Test', text: 'Last 5 minutes: 3 approach jumps with minimal arm swing, then 3 with full arm swing. Feel and note the height difference. This should be 1–3 inches.' },
        { icon: '📏', label: 'Weekly Vertical Check', text: 'Mark the wall. Jump 3× and record your best. Compare to last week. This is your weekly data point — feed it into the Dunk Lab.' },
      ]}
  },
];

function showDayDetail(i) {
  currentDayIndex = i;
  const day = WEEK[i];
  const meta = DAY_META[i];
  const plan = WEEKLY_PLAN[i];
  const meals = MEALS[meta.nutritionType];
  const box = document.getElementById('dayDetail');
  const isRecovery = day.type === 'recovery';
  const isSkill = day.type === 'skill';
  const typeColor = day.type === 'hpt' ? 'var(--orange)' : day.type === 'skill' ? 'var(--blue)' : 'var(--green)';
  const mealColor = { training: 'var(--orange)', basketball: 'var(--blue)', recovery: 'var(--green)' }[meta.nutritionType];
  const morningTimes = isRecovery ? MORNING_RECOVERY_TIMES : MORNING_ACTIVATION_TIMES;

  let html = `<div style="display:flex;align-items:flex-start;justify-content:space-between;gap:12px;margin-bottom:20px;flex-wrap:wrap">
    <div>
      <span class="tag" style="background:${typeColor}20;color:${typeColor};font-size:12px;margin-bottom:6px;display:inline-block">${day.pill}</span>
      <h2 style="font-size:22px;font-weight:900">${day.name} — ${day.focus}</h2>
      <div style="font-size:11px;color:var(--text-muted);margin-top:4px;text-transform:uppercase;letter-spacing:.05em">Full daily plan · Training · Nutrition · Content · Recovery · Sleep</div>
    </div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;flex-shrink:0">
      <button class="btn btn-secondary" style="font-size:11px;padding:8px 12px" onclick="exportDayWorkout(${i})">📥 Export Day</button>
      <button class="btn btn-secondary" style="font-size:11px;padding:8px 12px" onclick="exportWeekWorkout()">📥 Export Week</button>
    </div>
  </div>`;

  // ── MORNING ───────────────────────────────────────────
  html += buildDayBlock('☀️ MORNING ACTIVATION', 'var(--gold)', `
    <div class="day-timeline">
      ${morningTimes.map(t => `<div class="day-timeline-item">
        <div class="day-timeline-time">${t.time}</div>
        <div class="day-timeline-text">${t.action}</div>
      </div>`).join('')}
    </div>`);

  // ── TRAINING ──────────────────────────────────────────
  const trainLabel = isRecovery ? 'ACTIVE RECOVERY SESSION' : isSkill ? 'BASKETBALL SKILL SESSION' : 'HIGH PERFORMANCE TRAINING';
  let trainHtml = '';
  day.sessions.forEach(s => {
    trainHtml += `<div class="session-block">
      <div class="session-block-header">
        <div class="session-num" style="background:${typeColor}20;color:${typeColor}">${s.num}</div>
        <h4>${s.title}</h4><span class="session-duration">${s.dur}</span>
      </div>
      <div class="session-block-body"><ul class="exercise-list">
        ${s.items.map(item => `<li><input type="checkbox" class="ex-check"><div>
          <div class="ex-name">${item.name}</div>
          <div class="ex-detail">${item.detail}</div>
        </div></li>`).join('')}
      </ul></div>
    </div>`;
  });
  html += buildDayBlock(`⚡ ${trainLabel} · ${meta.trainWindow}`, typeColor, trainHtml);

  // ── JUMP SCIENCE FOCUS ────────────────────────────────
  if (meta.jsFocus) {
    const jf = meta.jsFocus;
    html += buildDayBlock(`🔬 ${jf.title}`, jf.color,
      `<div class="grid-3" style="grid-template-columns:repeat(auto-fit,minmax(200px,1fr))">
        ${jf.notes.map(n => `<div class="card" style="border-color:${jf.color}30">
          <div style="font-size:22px;margin-bottom:6px">${n.icon}</div>
          <div style="font-size:12px;font-weight:800;margin-bottom:5px">${n.label}</div>
          <div style="font-size:12px;color:var(--text-secondary);line-height:1.6">${n.text}</div>
        </div>`).join('')}
      </div>`);
  }

  // ── SHOOTING SESSION (skill days) ─────────────────────
  if (meta.shootingDay && meta.shootingSession) {
    const ss = meta.shootingSession;
    let ssHtml = '<div class="grid-2">';
    ss.blocks.forEach(b => {
      ssHtml += `<div class="session-block">
        <div class="session-block-header">
          <div class="session-num" style="background:rgba(68,136,255,0.15);color:var(--blue);font-size:16px">${b.icon}</div>
          <h4>${b.name}</h4><span class="session-duration">${b.time}</span>
        </div>
        <div class="session-block-body">
          <div style="font-size:13px;color:var(--text-secondary);line-height:1.6">${b.desc}</div>
        </div>
      </div>`;
    });
    ssHtml += '</div>';
    html += buildDayBlock(`🎯 ${ss.title}`, 'var(--blue)', ssHtml);
  }

  // ── DUNK LAB (Friday) ─────────────────────────────────
  if (meta.dunkDay) {
    html += buildDayBlock('🏀 DUNK LAB — LOG THIS SESSION', 'var(--orange)',
      `<div class="grid-2">
        <div class="card" style="border-color:var(--orange)">
          <div style="font-size:13px;font-weight:700;margin-bottom:10px">Log after every dunk session:</div>
          <ul style="list-style:none;font-size:13px;color:var(--text-secondary);line-height:2.1">
            <li><input type="checkbox" class="ex-check"> Standing reach (inches)</li>
            <li><input type="checkbox" class="ex-check"> Max jump reach (inches)</li>
            <li><input type="checkbox" class="ex-check"> Vertical jump (max reach − standing reach)</li>
            <li><input type="checkbox" class="ex-check"> Best dunk stage achieved</li>
            <li><input type="checkbox" class="ex-check"> Notes on approach feel + shoe worn</li>
          </ul>
          <button class="btn btn-primary mt-12" style="font-size:12px" onclick="document.querySelector('[data-section=dunk]').click()">→ Open Dunk Lab</button>
        </div>
        <div class="card" style="border-color:var(--green)">
          <div style="font-size:13px;font-weight:700;margin-bottom:10px">Also log in Jump Science:</div>
          <ul style="list-style:none;font-size:13px;color:var(--text-secondary);line-height:2.1">
            <li><input type="checkbox" class="ex-check"> Ground contact time (film at 60fps)</li>
            <li><input type="checkbox" class="ex-check"> Penultimate step quality (1–5)</li>
            <li><input type="checkbox" class="ex-check"> Arm swing sync (1–5)</li>
            <li><input type="checkbox" class="ex-check"> Ankle stiffness felt (1–5)</li>
            <li><input type="checkbox" class="ex-check"> Notes on what improved</li>
          </ul>
          <button class="btn btn-secondary mt-12" style="font-size:12px" onclick="document.querySelector('[data-section=jumpscience]').click()">→ Open Jump Science Lab</button>
        </div>
      </div>`);
  }

  // ── SHOPPING (Thursday) ──────────────────────────────
  if (meta.shoppingDay) {
    html += buildDayBlock('🛒 WEEKLY GROCERY SHOP · 10:00 AM – 11:30 AM', 'var(--green)',
      `<div class="grid-2">
        <div class="card" style="border-color:rgba(0,204,136,0.3)">
          <div style="font-size:12px;font-weight:800;color:var(--green);text-transform:uppercase;margin-bottom:10px">This Week's Priority List</div>
          <ul style="list-style:none">
            ${SHOPPING_SCHEDULE[0].checklist.map(item => `<li style="display:flex;gap:8px;padding:7px 0;border-bottom:1px solid var(--border);font-size:12px;color:var(--text-secondary)">
              <input type="checkbox" class="ex-check" style="flex-shrink:0;margin-top:2px"> ${item.replace('✓ ', '')}
            </li>`).join('')}
          </ul>
        </div>
        <div class="card" style="border-color:rgba(0,204,136,0.3)">
          <div style="font-size:12px;font-weight:800;color:var(--green);text-transform:uppercase;margin-bottom:10px">Best Stores for This Run</div>
          ${STORE_GUIDE.slice(0, 3).map(s => `<div style="padding:8px 0;border-bottom:1px solid var(--border)">
            <div style="font-size:12px;font-weight:800;color:${s.color}">${s.icon} ${s.name} <span class="tag" style="background:${s.color}15;color:${s.color};font-size:9px;margin-left:4px">${s.tag}</span></div>
            <div style="font-size:11px;color:var(--text-muted);margin-top:2px">${s.bestFor.slice(0, 2).join(' · ')}</div>
          </div>`).join('')}
          <button class="btn btn-secondary mt-12" style="font-size:12px;width:100%;justify-content:center" onclick="document.querySelector('[data-section=shopping]').click()">→ Open Full Shopping List</button>
        </div>
      </div>`);
  }

  // ── NUTRITION ─────────────────────────────────────────
  const mealTypeLabel = { training: 'TRAINING DAY', basketball: 'BASKETBALL DAY', recovery: 'RECOVERY DAY' }[meta.nutritionType];
  html += buildDayBlock(
    `🥗 NUTRITION — ${mealTypeLabel} · ${meals.kcal} kcal / P ${meals.protein}g / C ${meals.carbs}g / F ${meals.fat}g`,
    mealColor,
    `<div class="day-timeline">
      ${meals.meals.map(m => `<div class="day-timeline-item">
        <div class="day-timeline-time">${m.time}</div>
        <div>
          <div style="font-weight:700;font-size:13px;margin-bottom:2px">${m.name} <span style="color:${mealColor};font-size:11px;margin-left:4px">${m.kcal} kcal</span></div>
          <div style="font-size:12px;color:var(--text-secondary);margin-bottom:5px;line-height:1.5">${m.foods}</div>
          <div style="display:flex;gap:5px;flex-wrap:wrap">
            <span class="macro-pill p">P ${m.p}g</span>
            <span class="macro-pill c">C ${m.c}g</span>
            <span class="macro-pill f">F ${m.f}g</span>
          </div>
        </div>
      </div>`).join('')}
    </div>`);

  // ── CONTENT ───────────────────────────────────────────
  if (plan) {
    html += buildDayBlock(
      `🎬 CONTENT — Post at ${plan.postTime} · ${plan.platforms.join(' + ')}`,
      'var(--purple)',
      `<div class="card" style="border-color:rgba(168,85,247,0.3)">
        <div style="font-size:14px;font-weight:800;margin-bottom:8px">${plan.session} · <span style="color:var(--orange)">${plan.type}</span></div>
        <div class="brief-hook" style="margin-bottom:14px;font-size:13px">"${plan.hook}"</div>
        <div style="font-size:11px;font-weight:800;color:var(--text-muted);text-transform:uppercase;margin-bottom:8px">5-Clip System — What to Film</div>
        <ul style="list-style:none">
          ${plan.filmList.map((f, idx) => `<li style="display:flex;gap:10px;padding:7px 0;border-bottom:1px solid var(--border);font-size:13px;color:var(--text-secondary)">
            <span style="color:var(--purple);font-weight:900;flex-shrink:0;min-width:22px">0${idx+1}</span>${f}
          </li>`).join('')}
        </ul>
        <div style="margin-top:12px;padding:10px 12px;background:rgba(168,85,247,0.06);border-radius:8px;font-size:12px;color:var(--text-muted)">
          <strong style="color:var(--purple)">Caption:</strong> ${plan.caption.replace(/\n/g,'<br>')}
        </div>
      </div>`);
  }

  // ── FOOT STRENGTH CIRCUIT (Mon / Wed / Fri) ──────────
  if ([0, 2, 4].includes(i)) {
    html += buildDayBlock('🦶 FOOT STRENGTH CIRCUIT · 3×/week · 5 min', 'var(--gold)',
      `<div class="card">
        <div style="font-size:12px;color:var(--text-muted);margin-bottom:14px;padding:8px 12px;background:rgba(255,215,0,0.06);border-radius:8px">
          Speed jumpers: your feet are your suspension system. 2 rounds here = direct jump height ROI. Do this immediately post-session or at any point during the day.
        </div>
        <div class="grid-2">
          ${FOOT_STRENGTH_CIRCUIT.map(ex => `<div style="display:flex;gap:10px;padding:10px 0;border-bottom:1px solid var(--border);align-items:flex-start">
            <input type="checkbox" class="ex-check" style="flex-shrink:0;margin-top:3px">
            <div>
              <div style="font-size:13px;font-weight:700">${ex.name}</div>
              <div style="font-size:11px;color:var(--text-muted);margin-top:2px">${ex.detail}</div>
            </div>
          </div>`).join('')}
        </div>
      </div>`);
  }

  // ── WEEKLY ATHLETIC AUDIT (Sunday only) ──────────────
  if (i === 6) {
    const lastAudit = auditLog[0];
    html += buildDayBlock('📋 WEEKLY ATHLETIC AUDIT · Sunday Evening · 15 min', 'var(--purple)',
      `<div class="card" style="border-color:rgba(168,85,247,0.3)">
        <div style="font-size:12px;color:var(--text-muted);margin-bottom:16px">For someone building toward dunking at 42 and beyond, this weekly audit is almost as important as the workouts. It tells you when to push and when to back off. 15 minutes of honest assessment = weeks of injury-free training.</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;margin-bottom:16px">
          <div>
            <div style="font-size:11px;font-weight:800;color:var(--text-muted);text-transform:uppercase;margin-bottom:4px">Program Week</div>
            <input type="number" id="audit-week" min="1" max="16" placeholder="1–16" style="width:100%;background:var(--bg-card-2);border:1px solid var(--border);border-radius:8px;padding:8px 12px;color:var(--text-primary);font-size:13px">
          </div>
          <div>
            <div style="font-size:11px;font-weight:800;color:var(--text-muted);text-transform:uppercase;margin-bottom:4px">Best Jump This Week (inches)</div>
            <input type="number" id="audit-jump" placeholder='e.g. 28' style="width:100%;background:var(--bg-card-2);border:1px solid var(--border);border-radius:8px;padding:8px 12px;color:var(--text-primary);font-size:13px">
          </div>
          <div>
            <div style="font-size:11px;font-weight:800;color:var(--red);text-transform:uppercase;margin-bottom:4px">Pain over 3/10?</div>
            <select id="audit-pain" style="width:100%;background:var(--bg-card-2);border:1px solid var(--border);border-radius:8px;padding:8px 12px;color:var(--text-primary);font-size:13px">
              <option value="no">No — feeling good</option>
              <option value="yes">Yes — note location below</option>
            </select>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:16px;margin-bottom:16px">
          ${WEEKLY_AUDIT_QUESTIONS.map(q => `<div>
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
              <div style="font-size:11px;font-weight:800;color:var(--text-muted);text-transform:uppercase">${q.label}</div>
              <div style="font-size:14px;font-weight:900;color:var(--purple)" id="audit-${q.id}-val">7</div>
            </div>
            <input type="range" id="audit-${q.id}" min="1" max="10" value="7"
              style="width:100%;accent-color:var(--purple)"
              oninput="document.getElementById('audit-${q.id}-val').textContent=this.value">
            <div style="display:flex;justify-content:space-between;font-size:10px;color:var(--text-muted)"><span>1</span><span>10</span></div>
          </div>`).join('')}
        </div>
        <div style="margin-bottom:12px">
          <div style="font-size:11px;font-weight:800;color:var(--text-muted);text-transform:uppercase;margin-bottom:4px">Notes — Pain Locations / What Worked / What Didn't</div>
          <textarea id="audit-notes" rows="3" placeholder="e.g. Left knee felt tight Wed. Best jump felt like 30in. Sleep was off Tue/Wed..." style="width:100%;background:var(--bg-card-2);border:1px solid var(--border);border-radius:8px;padding:8px 12px;color:var(--text-primary);font-size:12px;resize:vertical"></textarea>
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">
          <button class="btn btn-primary" onclick="saveWeeklyAudit()">Save Audit</button>
          <button class="btn btn-secondary" onclick="exportAuditLog()">📥 Export Audit History</button>
          ${lastAudit ? `<span style="font-size:11px;color:var(--text-muted)">Last saved: ${lastAudit.date}</span>` : ''}
        </div>
        ${auditLog.length > 0 ? `<div style="margin-top:16px">
          <div style="font-size:11px;font-weight:800;color:var(--text-muted);text-transform:uppercase;margin-bottom:8px">Recent Audits</div>
          <div class="table-wrap"><table>
            <thead><tr><th>Date</th><th>Wk</th><th>Best Jump</th><th>Ankles</th><th>Knees</th><th>Explosive</th><th>Recovery</th><th>Energy</th><th>Pain</th></tr></thead>
            <tbody>${auditLog.slice(0, 5).map(a => `<tr>
              <td>${a.date}</td><td>${a.week||'—'}</td>
              <td style="color:var(--orange);font-weight:800">${a.jump ? a.jump+'"' : '—'}</td>
              <td>${a.ankles}/10</td><td>${a.knees}/10</td>
              <td style="color:var(--gold);font-weight:700">${a.explosive}/10</td>
              <td style="color:var(--green)">${a.recovery}/10</td>
              <td style="color:var(--blue)">${a.energy}/10</td>
              <td style="color:${a.pain==='yes'?'var(--red)':'var(--green)'}">${a.pain==='yes'?'⚠️ Yes':'✓ No'}</td>
            </tr>`).join('')}</tbody>
          </table></div>
        </div>` : ''}
      </div>`);
  }

  // ── DAILY RECOVERY STACK ──────────────────────────────
  let recoveryExtra = isRecovery
    ? `<div class="highlight-box mt-12" style="padding:10px 14px"><p style="font-size:12px"><strong>Recovery Day Add-ons:</strong> Zone 2 walk 25–35 min (talking pace) · Foam roll full body 90 sec each zone · Contrast shower: 3 min hot / 1 min cold × 3 · Light yoga 15 min · Epsom salt bath (weekly)</p></div>` : '';
  html += buildDayBlock('🔄 DAILY RECOVERY STACK — Non-Negotiable Every Day',
    'var(--green)',
    `<div class="card">
      <ul style="list-style:none;display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:10px">
        ${DAILY_RECOVERY_STACK.map(r => `<li style="display:flex;gap:8px;align-items:flex-start;font-size:13px;color:var(--text-secondary)">
          <input type="checkbox" class="ex-check" style="margin-top:3px;flex-shrink:0"><span>${r}</span>
        </li>`).join('')}
      </ul>
      ${recoveryExtra}
    </div>`);

  // ── SLEEP PROTOCOL ────────────────────────────────────
  html += buildDayBlock('🌙 SLEEP PROTOCOL — 8 hrs 15 min target', 'var(--purple)',
    `<div class="day-timeline">
      ${SLEEP_PROTOCOL_TIMES.map(t => `<div class="day-timeline-item">
        <div class="day-timeline-time">${t.time}</div>
        <div class="day-timeline-text">${t.action}</div>
      </div>`).join('')}
    </div>`);

  box.innerHTML = html;
}

function buildDayBlock(title, color, innerHtml) {
  return `<div class="day-block-section">
    <div class="day-block-label" style="color:${color};border-left-color:${color}">${title}</div>
    ${innerHtml}
  </div>`;
}

// ── Export Functions ──────────────────────────────────────────────────────────
function exportDayWorkout(i) {
  const day = WEEK[i];
  const meta = DAY_META[i];
  const meals = MEALS[meta.nutritionType];
  const data = {
    exportedAt: new Date().toISOString(),
    program: 'Traction Report Performance OS',
    day: day.name,
    type: day.type,
    pill: day.pill,
    focus: day.focus,
    trainWindow: meta.trainWindow,
    nutrition: { type: meta.nutritionType, kcal: meals.kcal, protein: meals.protein, carbs: meals.carbs, fat: meals.fat, meals: meals.meals },
    sessions: day.sessions,
    jumpScienceFocus: meta.jsFocus || null,
    shootingDay: meta.shootingDay || false,
    dunkDay: meta.dunkDay || false,
    shoppingDay: meta.shoppingDay || false,
    footStrengthDay: [0, 2, 4].includes(i),
    recovery: {
      dailyStack: DAILY_RECOVERY_STACK,
      tier1: RECOVERY_TIER1,
      tier2: RECOVERY_TIER2,
      footStrengthCircuit: [0, 2, 4].includes(i) ? FOOT_STRENGTH_CIRCUIT : null,
    },
    sleep: SLEEP_PROTOCOL_TIMES,
  };
  dlJSON(data, `workout-${day.name.toLowerCase()}-${new Date().toISOString().split('T')[0]}.json`);
}

function exportWeekWorkout() {
  const data = {
    exportedAt: new Date().toISOString(),
    program: 'Traction Report Performance OS',
    athlete: '42-year-old male, 5ft 11in, 168 lbs',
    week: WEEK.map((day, i) => {
      const meta = DAY_META[i];
      const meals = MEALS[meta.nutritionType];
      return {
        day: day.name, type: day.type, pill: day.pill, focus: day.focus,
        trainWindow: meta.trainWindow,
        nutrition: { type: meta.nutritionType, kcal: meals.kcal, protein: meals.protein, carbs: meals.carbs, fat: meals.fat },
        sessionCount: day.sessions.length,
        sessions: day.sessions,
        jumpScienceFocus: meta.jsFocus || null,
        shootingDay: meta.shootingDay || false,
        dunkDay: meta.dunkDay || false,
        shoppingDay: meta.shoppingDay || false,
        footStrengthDay: [0, 2, 4].includes(i),
      };
    }),
    recoverySystem: { tier1: RECOVERY_TIER1, tier2: RECOVERY_TIER2, dailyStack: DAILY_RECOVERY_STACK, footStrengthCircuit: FOOT_STRENGTH_CIRCUIT },
    sleepProtocol: SLEEP_PROTOCOL_TIMES,
    auditHistory: auditLog,
  };
  dlJSON(data, `full-week-workout-${new Date().toISOString().split('T')[0]}.json`);
}

function exportAuditLog() {
  if (!auditLog.length) { alert('No audit entries yet. Complete a Sunday audit first.'); return; }
  dlJSON({ exportedAt: new Date().toISOString(), program: 'Traction Report Performance OS', audits: auditLog }, `audit-log-${new Date().toISOString().split('T')[0]}.json`);
}

function dlJSON(data, filename) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename; a.click();
  URL.revokeObjectURL(url);
}

// ── Weekly Athletic Audit ─────────────────────────────────────────────────────
function saveWeeklyAudit() {
  const entry = {
    date: new Date().toISOString().split('T')[0],
    week: document.getElementById('audit-week')?.value || '',
    jump: document.getElementById('audit-jump')?.value || '',
    pain: document.getElementById('audit-pain')?.value || 'no',
    notes: document.getElementById('audit-notes')?.value || '',
    ankles: document.getElementById('audit-ankles')?.value || 7,
    knees: document.getElementById('audit-knees')?.value || 7,
    hips: document.getElementById('audit-hips')?.value || 7,
    explosive: document.getElementById('audit-explosive')?.value || 7,
    recovery: document.getElementById('audit-recovery')?.value || 7,
    energy: document.getElementById('audit-energy')?.value || 7,
  };
  auditLog.unshift(entry);
  localStorage.setItem('trAuditLog', JSON.stringify(auditLog));
  alert(`Audit saved for ${entry.date}. Week ${entry.week || '?'} logged.`);
  if (currentDayIndex === 6) showDayDetail(6);
}

function renderRecoveryTiers() {
  const el = document.getElementById('recoveryTiersSection');
  if (!el) return;
  let html = `<div class="section-divider"><h2>Tier 1 — Highest ROI Recovery Practices</h2></div>
  <div class="highlight-box mb-16" style="border-color:var(--green)"><p><strong>Priority order for the 42-year-old athlete:</strong> Sleep → Nutrition → Recovery Walks → Foot/Ankle Health → Mobility → Self-Massage. The biggest gains for your vertical and longevity come from these habits being locked in daily.</p></div>
  <div class="grid-3 mb-24">`;

  RECOVERY_TIER1.forEach(p => {
    html += `<div class="card" style="border-left:4px solid ${p.color}">
      <div style="font-size:28px;margin-bottom:8px">${p.icon}</div>
      <div style="font-size:16px;font-weight:900;margin-bottom:4px">${p.name}</div>
      <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:10px">
        <span class="tag" style="background:${p.color}15;color:${p.color};font-size:10px">${p.time}</span>
        <span class="tag tag-blue" style="font-size:10px">${p.duration}</span>
      </div>
      <div style="background:var(--bg-card-2);border-radius:8px;padding:10px 12px;margin-bottom:10px">
        <div style="font-size:11px;font-weight:800;color:${p.color};text-transform:uppercase;margin-bottom:4px">Protocol</div>
        <div style="font-size:12px;color:var(--text-secondary)">${p.protocol}</div>
      </div>
      <ul style="list-style:none;margin-bottom:10px">
        ${p.benefits.map(b => `<li style="font-size:12px;color:var(--text-secondary);padding:4px 0;display:flex;gap:6px"><span style="color:${p.color};flex-shrink:0">▸</span>${b}</li>`).join('')}
      </ul>
      <div style="font-size:11px;color:var(--text-muted);font-style:italic;border-left:2px solid ${p.color}40;padding-left:8px">${p.note}</div>
    </div>`;
  });

  html += `</div>
  <div class="section-divider"><h2>Tier 2 — Very Good Recovery Practices</h2></div>
  <div class="grid-3 mb-24">`;

  RECOVERY_TIER2.forEach(p => {
    html += `<div class="card" style="border-left:4px solid ${p.color}">
      <div style="font-size:28px;margin-bottom:8px">${p.icon}</div>
      <div style="font-size:16px;font-weight:900;margin-bottom:4px">${p.name}</div>
      <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:10px">
        <span class="tag" style="background:${p.color}15;color:${p.color};font-size:10px">${p.time}</span>
        <span class="tag tag-blue" style="font-size:10px">${p.duration}</span>
      </div>
      <div style="background:var(--bg-card-2);border-radius:8px;padding:10px 12px;margin-bottom:10px">
        <div style="font-size:11px;font-weight:800;color:${p.color};text-transform:uppercase;margin-bottom:4px">Protocol</div>
        <div style="font-size:12px;color:var(--text-secondary)">${p.protocol}</div>
      </div>
      <ul style="list-style:none;margin-bottom:10px">
        ${p.benefits.map(b => `<li style="font-size:12px;color:var(--text-secondary);padding:4px 0;display:flex;gap:6px"><span style="color:${p.color};flex-shrink:0">▸</span>${b}</li>`).join('')}
      </ul>
      <div style="font-size:11px;color:var(--text-muted);font-style:italic;border-left:2px solid ${p.color}40;padding-left:8px">${p.note}</div>
    </div>`;
  });

  html += `</div>`;
  el.innerHTML = html;
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
  renderShootingForm();
  renderSpotShooting();
  renderOffDribble();
  renderFinishing();
  renderCompetitiveShooting();
  renderJSDiagnostic();
  renderPenultimate();
  renderReactive();
  renderArmSwing();
  renderGroundContact();
  renderPowerTraining();
  renderWeeklyList();
  renderStoreGuide();
  renderShopSchedule();
  renderSupplementStack();
  renderRecoveryTiers();
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

// ── Shooting & Finishing Lab ──────────────────────────────────────────────────

const SHOT_FORM = {
  intro: 'NBA shooting mechanics are not about being a "natural" shooter — they are a repeatable, learnable mechanical system. Every great NBA shooter has the same 7 checkpoints. Your job is to ingrain these checkpoints so deeply they become automatic under fatigue and pressure.',
  checkpoints: [
    { num: 1, label: 'Stance & Balance', color: 'var(--orange)',
      detail: 'Feet shoulder-width apart. Shooting-foot toe slightly forward (staggered stance). Weight on the balls of your feet — never your heels. Knees slightly bent and springy. You should be able to catch a pass and shoot in one motion without resetting your feet.',
      drill: 'Form Shooting: 5 feet from rim. Shoot 20 makes with complete attention to foot position only. Don\'t even look at your hands yet.',
      nbaRef: 'Steph Curry\'s feet are always squared before the catch. He adjusts his stance on the catch, not after.' },
    { num: 2, label: 'Ball Position (BEEF)', color: 'var(--blue)',
      detail: 'B — Balance (set above). E — Eyes on target (pick a specific spot on the rim, not the whole basket). E — Elbow under the ball (shooting elbow bent at 90°, tucked in, directly under the ball). F — Follow through (hold your finish until the ball hits the net).',
      drill: '1-Hand Form Shooting: Shoot with dominant hand only from 5 feet. Elbow must be directly under ball. Wrist must snap fully at release. 20 makes.',
      nbaRef: 'Klay Thompson\'s elbow is so perfectly aligned that coaches use him as the textbook example for BEEF mechanics.' },
    { num: 3, label: 'Grip & Hand Position', color: 'var(--green)',
      detail: 'Guide hand (non-shooting) is on the SIDE of the ball — it does not push the ball. Shooting hand fingers are spread on the back of the ball with the seams running across your fingertips for control. The ball should sit on your fingertips, not your palm — you should be able to fit a finger between the ball and your palm.',
      drill: 'Guide Hand Check: Place a piece of tape on your guide-hand thumb. If the tape ends up on the ball or your shot spins sideways, your guide hand is interfering. Shoot 10 shots checking guide hand placement.',
      nbaRef: 'Kevin Durant famously has the ball resting on his fingertips only — zero palm contact. This gives him elite touch on pull-ups.' },
    { num: 4, label: 'Load & Rhythm', color: 'var(--gold)',
      detail: 'The shot begins from the catch or the top of your dribble — not from a static position. You dip slightly into your legs (not a full squat, just a coil) as you bring the ball to your shot pocket. The dip-and-drive is one continuous motion upward. You are not loading and then shooting — it is one fluid explosive motion.',
      drill: '3-Step Rhythm Shooting: Catch → dip → rise → release. Film yourself from the side. There should be zero pause between the dip and the upward drive. 20 reps from the elbow.',
      nbaRef: 'Jayson Tatum has a very deliberate but quick dip into every catch-and-shoot. It\'s his signature rhythm — gets his whole body into the shot.' },
    { num: 5, label: 'Release Point', color: 'var(--orange)',
      detail: 'Release the ball at the TOP of your jump — not on the way up, not on the way down. At maximum height, your arm should be fully extended above your head (elbow above eye level). The wrist snaps forward completely: your hand should end pointing DOWN at the floor (goose-neck finish). The ball comes off your index and middle fingers last.',
      drill: 'Wall Shooting: Stand 2 feet from a wall and shoot straight up. The ball should hit the wall at maximum arm extension. This forces you to release at the peak. 15 reps.',
      nbaRef: 'Damian Lillard\'s release is at 11 o\'clock (nearly straight up) and incredibly quick — from pocket to release is under 0.4 seconds.' },
    { num: 6, label: 'Arc & Trajectory', color: 'var(--purple)',
      detail: 'Target arc: 45–55° entry angle. Too flat = harder to go in (smaller target). Too high = too much distance variation. You want a "rainbow" arc — the ball should peak well above the rim and drop through. Think: if the ball goes in, it should barely touch the net from straight through, not rattle around. Swish = optimal arc.',
      drill: 'Arc Awareness: Shoot 20 shots from the free throw line. Count your swishes vs. rattlers. Target: 60%+ swishes if mechanics are right. Film from the side to see your arc trajectory.',
      nbaRef: 'Steph Curry shoots at a high arc (above 50°) which is why his shots look like they drop straight down into the basket.' },
    { num: 7, label: 'Follow-Through & Hold', color: 'var(--blue)',
      detail: 'Hold your follow-through until the ball hits the floor. This is not a feel-good habit — it trains your wrist and fingers to complete the release rather than flicking early. Your shooting hand should be relaxed, wrist fully bent forward (fingers pointing at the floor), for 2–3 seconds after every shot. If you drop it early, you\'re releasing early.',
      drill: 'Follow-Through Freeze: Shoot 20 free throws. Hold your follow-through for a full 3-second count. Have a partner call you out if you drop it early. Non-negotiable for a consistent release.',
      nbaRef: 'Every elite NBA shooter — Curry, Thompson, Durant, Lillard — holds their follow-through identically on every shot. It\'s the most consistent part of their mechanics.' },
  ],
  commonErrors: [
    { error: 'Chicken Wing Elbow', fix: 'Elbow flares out to the side instead of staying tucked under the ball. Fix: 1-hand form shooting at 5 feet until elbow path is grooved. Use a wall to physically stop the elbow from flaring.' },
    { error: 'Thumb Push', fix: 'Guide-hand thumb pushes the ball, causing left/right misses. Fix: Remove guide hand completely. Shoot one-handed until you trust the shooting hand. The guide hand catches the ball, it does not push it.' },
    { error: 'Short Release', fix: 'Ball is released before your arm is fully extended — results in a flat shot that hits the front of the rim. Fix: Wall shooting drill until your extension is automatic.' },
    { error: 'Rushing the Shot', fix: 'You coil and shoot too quickly without letting your legs load properly. Fix: Slow form shooting at 50% speed until the dip-and-rise rhythm is natural. Speed comes after mechanics are grooved.' },
    { error: 'Landing Forward', fix: 'You drift forward on your shot — weight shifts onto your toes during the jump. Fix: Shoot against a wall (2 feet away). If you touch the wall, you\'re drifting. Land in the same spot you left from.' },
    { error: 'Inconsistent Pocket', fix: 'You bring the ball to a different position every shot. Fix: Mark your shot pocket with your off hand. Ball goes to the same spot on your cheek/temple every single time before rising.' },
  ]
};

const SPOT_SHOOTING = {
  intro: 'Spot shooting builds the foundation of every other shooting skill. You need to own every spot on the floor before you can create shots from those spots. Volume + correct mechanics = muscle memory. Incorrect mechanics × volume = reinforcing bad habits. Film yourself from time to time to verify form.',
  spots: ['Right Corner', 'Right Wing', 'Top of Key', 'Left Wing', 'Left Corner', 'Right Elbow', 'Left Elbow', 'Right Block', 'Left Block'],
  workouts: [
    {
      name: '5-Spot Form Shooting', intensity: 'Low', time: '15–20 min', tag: 'Daily Foundation',
      desc: 'Start every shooting session with this. No defense, no pressure — pure mechanics reinforcement.',
      rounds: [
        { spot: 'Start: 5 feet from rim', reps: '10 makes', focus: 'Form only — BEEF mechanics on every rep. No misses allowed at this range.' },
        { spot: 'Free throw line', reps: '10 makes', focus: 'Establish your rhythm. Same pocket, same release, every time.' },
        { spot: 'Right elbow', reps: '7 makes', focus: 'First "real" spot. Keep the rhythm from the FT line.' },
        { spot: 'Left elbow', reps: '7 makes', focus: 'Weak side. Extra attention to guide hand on this side.' },
        { spot: 'Top of key (3-point range)', reps: '5 makes', focus: 'Don\'t change mechanics for a 3. Same form, slightly more leg.' },
      ],
      coaching: 'If you miss 3 in a row at any spot, back up 2 feet and re-establish. Never fight through a slump by continuing from the same spot — reset the confidence first.'
    },
    {
      name: 'Corner 3 Machine', intensity: 'Medium', time: '10–12 min', tag: 'Spot Specialist',
      desc: 'The corner 3 is the highest-percentage 3-pointer in basketball (shortest distance). Own this shot — it is a career-making weapon.',
      rounds: [
        { spot: 'Right corner — catch & shoot', reps: '15 attempts', focus: 'Feet set before the catch. One motion from catch to release. No hesitation.' },
        { spot: 'Left corner — catch & shoot', reps: '15 attempts', focus: 'Guide hand check — this side is harder for most right-hand shooters.' },
        { spot: 'Right corner — off one dribble', reps: '10 attempts', focus: 'Catch → one side-step dribble → shoot. NBA: this is how you create space from a defender.' },
        { spot: 'Left corner — off one dribble', reps: '10 attempts', focus: 'Same. Both corners must be equal threats.' },
      ],
      coaching: 'NBA corner 3s: Klay Thompson, Ray Allen, J.J. Redick. They all camp the corner and LIVE there. You don\'t need to be a volume scorer — corner 3 gravity changes a defense.'
    },
    {
      name: 'Elbow Midrange System', intensity: 'Medium', time: '12–15 min', tag: 'NBA Midrange',
      desc: 'The elbow (free-throw-line extended) is the most efficient midrange spot. It is unguardable off the dribble and perfect for your skill level — work toward 50%+ from both elbows.',
      rounds: [
        { spot: 'Right elbow — catch & shoot', reps: '15 attempts', focus: 'Square your shoulders to the basket on the catch. This is your automatic shot.' },
        { spot: 'Left elbow — catch & shoot', reps: '15 attempts', focus: 'Same standard as right elbow. No comfort zone differences.' },
        { spot: 'Right elbow — 1-dribble pull-up', reps: '10 attempts', focus: 'Catch → 1 dribble to the right → pull up. Footwork: hop-stop or 1-2 step.' },
        { spot: 'Left elbow — 1-dribble pull-up', reps: '10 attempts', focus: 'Catch → 1 dribble left → pull up. This side takes more work.' },
        { spot: 'Both elbows — alternate', reps: '10 attempts', focus: 'Random alternation. Simulates game situations where you don\'t know which side you\'re going.' },
      ],
      coaching: 'Kobe Bryant built his entire midrange game on the elbow. Paul Pierce lived there. The elbow is where you build shooter\'s reputation — defenses have to guard it.'
    },
    {
      name: '3-Point Circuit', intensity: 'High', time: '15–20 min', tag: 'Range Extension',
      desc: 'Systematic 3-point development from all 5 positions. Do not rush to the 3-point line until your form is solid inside — this workout assumes your mechanics are established.',
      rounds: [
        { spot: 'Right corner', reps: '10 attempts', focus: 'Shortest 3. Highest percentage. Own this spot first.' },
        { spot: 'Right wing', reps: '10 attempts', focus: 'Catch off a skip pass simulation. Feet must beat the ball.' },
        { spot: 'Top of key', reps: '10 attempts', focus: 'Longest 3. Most leg. Do NOT change your arm mechanics — add leg drive only.' },
        { spot: 'Left wing', reps: '10 attempts', focus: 'Same as right wing. This side takes longer to trust.' },
        { spot: 'Left corner', reps: '10 attempts', focus: 'Complete the circuit. If your percentage drops here, you\'re rushing on the weak side.' },
      ],
      coaching: 'Target percentage for a developing shooter: 33%+ from 3 in these workouts. 40%+ means your mechanics are translating. Track makes/attempts every session.'
    },
  ]
};

const OFF_DRIBBLE_SYSTEM = {
  intro: 'Off-dribble shooting is where average players become threats. A player who can only shoot catch-and-shoot can be tagged and denied. A player who can create and shoot off the dribble must be guarded at all times — this changes how an entire defense operates.',
  fundamentals: [
    { label: 'Footwork: 1-2 Step', text: 'Left foot steps first (for right-handed), right foot plants as the shooting base. The right foot should land simultaneously with the ball going to your pocket. This is the most common NBA pull-up footwork.' },
    { label: 'Footwork: Hop-Stop', text: 'Both feet land simultaneously at the end of your gather. Creates a perfectly squared stance. More powerful base but slightly slower. Use on pull-ups from distance.' },
    { label: 'The Gather', text: 'The last dribble goes below your waist and the ball is caught at your shot pocket simultaneously with your footwork. If you catch the ball and THEN do your footwork, you\'re late.' },
    { label: 'Shot Pocket', text: 'The ball goes to the same pocket location every time — doesn\'t matter if it\'s catch-and-shoot or off dribble. The pocket is your reset point. Build a path from dribble → pocket → release.' },
    { label: 'Load with Legs', text: 'Your legs should be coiled in your athletic stance already. You don\'t extra-bend for an off-dribble shot — your stance keeps you ready. This is why defensive stance and shooting stance are nearly identical.' },
  ],
  shots: [
    {
      name: 'Pull-Up Jumper', icon: '⬆️', tag: 'Core NBA Skill',
      when: 'You drive, defender backs off or you\'ve pulled them past their recovery point. The pull-up is your threat that keeps defenders from helping on drives.',
      mechanics: 'Dribble hard → gather on your last step → 1-2 or hop-stop → rise and shoot. The gather is key — it is a legal move where you can take 2 steps after picking up your dribble.',
      drills: [
        { name: 'Elbow Pull-Up', reps: '4×10 each elbow', cue: 'Dribble from the wing, pull up at the elbow. Same spot every time. Build the muscle memory of pulling up at a specific spot.' },
        { name: 'Mid-Lane Pull-Up', reps: '3×8 each side', cue: 'Drive the lane, pull up before the charge line. Real-game scenario. Defender forces you to pull up — own this shot.' },
        { name: 'Top of Key Pull-Up', reps: '3×8', cue: 'Dribble from half court, pull up at the 3-point line. Tests your ability to pull up without a specific target spot.' },
      ]
    },
    {
      name: 'Step-Back Jumper', icon: '👣', tag: 'Separation Creator',
      when: 'Defender is closing out too aggressively or has overplayed your drive. One step back creates instant separation from even the best defenders.',
      mechanics: 'Attack the defender aggressively → plant your inside foot → push back 1–2 feet off the same foot → catch balance → shoot. The step-back foot must go STRAIGHT back — not at an angle. If it goes sideways, it reads as a travel.',
      drills: [
        { name: 'Step-Back to Midrange', reps: '4×8 each wing', cue: 'Wing → hard dribble at the defender (cone) → step-back → midrange pull-up. The attack must be REAL or the step-back doesn\'t create space.' },
        { name: 'Step-Back 3 (Harden Pattern)', reps: '3×6 each wing', cue: 'Same but step back to 3-point range. Catch balance before rising. If you\'re off balance, shorten the step.' },
        { name: 'Step-Back in Traffic', reps: '3×8', cue: 'Set up two cones 6 feet apart (simulating defenders). Dribble between them and step back. Creates the traffic scenario of a game.' },
      ]
    },
    {
      name: 'Spin Move Jumper', icon: '🔄', tag: 'Advanced',
      when: 'Defender over-commits to your inside foot. Spin 180° back to your strong side and pull up.',
      mechanics: 'Drive → feel defender on your hip → plant inside foot → spin AWAY from their body → gather → pull up. The spin must be tight — a wide spin loses the separation advantage.',
      drills: [
        { name: 'Spin to Midrange', reps: '3×6 each direction', cue: 'Start at wing. Dribble baseline → spin at the block → midrange pull-up. Right-hand drive → left-hand spin → right-hand pull-up.' },
        { name: 'Spin + Counter (no spin)', reps: '3×5', cue: 'Alternate: one rep spin move, one rep no spin (go straight). Teaches you to read the defender and choose.' },
      ]
    },
    {
      name: 'Fadeaway Jumper', icon: '↗️', tag: 'Post Weapon',
      when: 'Defender has body position in the post. You cannot drive forward — you must shoot backward over their reach.',
      mechanics: 'Catch on the block → shot fake (makes defender jump) → one dribble into a one-foot fadeaway OR pivot and fadeaway without the dribble. The fade must be straight back (your strong-side shoulder) not sideways.',
      drills: [
        { name: 'Shot Fake → Fadeaway', reps: '3×8 each block', cue: 'Catch ball at block, hard shot fake, one step fadeaway. Make the fake so convincing that YOU almost shoot it.' },
        { name: 'Drop-Step Counter', reps: '3×6 each side', cue: 'Drop-step drive (to establish the drive threat) OR fadeaway. Alternate. The drive threat is what makes the fadeaway open.' },
      ]
    },
  ]
};

const FINISHING_SYSTEM = {
  intro: 'Finishing at the rim is a complete skill set — not just "go up strong." Elite NBA finishers have 8+ distinct finishes they can execute at full speed under contact. The goal is to have an answer for every defensive position, every speed, every angle.',
  tiers: [
    {
      tier: 1, label: 'Essential Finishes', color: 'var(--green)', tag: 'Master First',
      desc: 'These 3 finishes cover 80% of game situations. If you own these, you\'re already a legitimate threat at the rim.',
      moves: [
        { name: 'Power Layup (Two Feet)', when: 'Driving through traffic with a defender on your body', mechanic: 'Gather off two feet from 1–2 steps out. Jump THROUGH the contact, not away from it. Use the backboard on the right side. Chin the ball — protect it with your chin and both arms before releasing at the peak.', drill: '10× straight-line drive + power layup each side. Focus: jump vertical, not forward.' },
        { name: 'Finger Roll', when: 'Clear lane, high speed, defender chasing from behind', mechanic: 'Roll the ball off the tips of your fingers (not your palm) at peak height. Underhand or overhand — both are valid. The ball should roll forward with heavy backspin. High release point — at the top of the box on the backboard or above it.', drill: '3×10 each hand at full speed. Underhand finish only until touch is developed.' },
        { name: 'Reverse Layup', when: 'Driving baseline with the defender between you and the basket', mechanic: 'Continue past the basket instead of stopping. Use the backboard from the other side. Right-hand drive → go under the basket → left-hand or right-hand reverse using the backboard. This makes the defender\'s position irrelevant.', drill: '3×8 each side. Drive baseline, reverse it. Film from above — your arc under the basket should be consistent.' },
      ]
    },
    {
      tier: 2, label: 'Game-Changing Finishes', color: 'var(--orange)', tag: 'Add These Next',
      desc: 'These finishes create problems that defenses have no good answer for. Each one exploits a specific defensive mistake.',
      moves: [
        { name: 'Euro Step', when: 'Help defender commits to your initial driving line', mechanic: 'Two legal steps in DIFFERENT directions. Step 1: left (gather). Step 2: right (layup). Or reverse. The defender commits to step 1, you go step 2. The key is making step 1 LOOK like you\'re going straight — don\'t telegraph the counter step.', drill: '4×8 each direction. Set a cone at the charge circle — step one direction, Euro step around it. Game speed required — slow Euro steps don\'t work.' },
        { name: 'Floater (Running)', when: 'Beat your defender but big is waiting in the paint', mechanic: 'Gather off one foot (running gather) and push the ball up softly over the extended defender. High arc, soft touch, minimal spin. The ball floats ABOVE the shot blocker\'s reach — aim for the top of the box on the backboard.', drill: '3×10 each side. Drive full speed, floater over a raised arm (partner or use a trash can). It must go over the obstacle.' },
        { name: 'Pull-Up Floater', when: 'Defender cuts off your drive before the paint', mechanic: 'Two-foot stop (hop-stop gather) and push the ball up softly from behind the charge circle. Not a jump shot — no full rise. One quick push with a high release. Covers the area between the 3-point line and paint where no shot is easy.', drill: '3×8 each side. Drive → pull up at charge circle → floater. The hop-stop must be balanced or the floater has no touch.' },
        { name: 'Contact Layup', when: 'Defender is in the lane and you must absorb contact', mechanic: 'Drive into the defender intentionally. Absorb the contact with your body (hip, shoulder) while your shooting arm stays free and extends through the contact. The ball still goes up after contact — practice NOT flinching. This gets you to the free throw line.', drill: '3×10 with a partner providing resistance on your shoulder. The ball must still go up cleanly. Start with light contact, add more as you develop.' },
      ]
    },
    {
      tier: 3, label: 'Elite Weapons', color: 'var(--gold)', tag: 'Add in Phase 3–4',
      desc: 'These require foundational finishing to already be solid. They give you answers in the most extreme defensive situations.',
      moves: [
        { name: 'Up-and-Under', when: 'Shot blocker jumps to block a shot fake', mechanic: 'Drive → gather → pump fake (make them leave their feet) → one more step (step under their block) → finish on the other side. Time: you have 1 full second after the pump fake before you must release. Take it.', drill: '3×6 each side. Partner or coach: they must actually jump for the fake. If they don\'t jump, the up-and-under isn\'t earned.' },
        { name: 'Scoop Shot', when: 'Off balance from a drive, defender underneath you', mechanic: 'One-handed underhand scoop with a sweeping motion. The ball scoops under or around the defender\'s outstretched arm. More wrist and less arm than a floater — think "scoop ice cream." Use your weak hand aggressively.', drill: '3×8 each hand. Drive baseline → weak-hand scoop under a raised barrier. Weak hand first — you must trust it.' },
        { name: 'Spin Finish', when: 'Defender has position but you have the angle for a spin', mechanic: 'Catch at the block → back down the defender → spin and finish on the same side or the opposite side depending on where the help defender is. The key: the spin must be tight (1 step, not 2) and you must know where you\'re finishing BEFORE you start the spin.', drill: '3×8 each block. Back down (simulate), spin, finish. Alternate spin-to-same-side and spin-to-opposite.' },
      ]
    },
  ]
};

const COMPETITIVE_SHOOTING = [
  {
    name: '21', type: 'Solo Game', time: '10–12 min', intensity: 'Medium', color: 'var(--blue)',
    rules: 'Pick 7 spots around the floor. Shoot 3 shots from each spot = 21 total shots per round. Score: 1 point per make. Track score every round. Target: 14+/21 (67%). Elite: 17+/21 (80%).',
    purpose: 'Builds accountability on every shot. You cannot hide a miss in this game. Creates game-like pressure because every miss costs you.',
    progression: 'Week 1–4: 5 spots from midrange. Week 5–8: 7 spots (add corners). Week 9–12: 7 spots from 3. Week 13–16: 5 spots from 3, 2 off-dribble.',
  },
  {
    name: 'Beat the Pro', type: 'Solo Competitive', time: '8–10 min', intensity: 'High', color: 'var(--orange)',
    rules: 'You are playing against an imaginary NBA pro. Pro makes 70% of his shots. You shoot from 5 spots. Each round: 2 shots per spot (10 total). Pro scores 7/10 automatically. You must outscore or match the pro. Track W/L record.',
    purpose: 'Creates the psychological experience of competing under pressure. Your score means nothing — winning or losing means everything.',
    progression: 'Start with the pro at 60% (6/10). Raise to 70% when you win 3 consecutive rounds. Raise to 80% to become "elite."',
  },
  {
    name: '5-Minute Shooter', type: 'Timed', time: '5 min exactly', intensity: 'High', color: 'var(--orange)',
    rules: 'Set a 5-minute timer. Shoot from anywhere on the floor. Catch your own rebounds. Track total makes. No set spots — move around, create shots, shoot after movement. Target: 40 makes in 5 minutes. Elite: 50+ makes.',
    purpose: 'Simulates game pace. You cannot control where the ball goes — you must reset, move, and shoot quickly. Builds shooting under physical fatigue.',
    progression: 'Week 1: Count only midrange makes. Week 5+: Add 3s (count them as 2 points). Week 9+: Must include at least 5 off-dribble shots per session.',
  },
  {
    name: 'Pressure Free Throws', type: 'Mental Toughness', time: '6–8 min', intensity: 'Low-Medium', color: 'var(--green)',
    rules: 'Set a target: must make 10 consecutive free throws before leaving. No timer. For every miss: do 10 push-ups OR 5 burpees before resuming. Track total attempts needed to hit your 10 consecutive.',
    purpose: 'Free throws are 100% repeatable mechanical shots — but most players miss them because of mental pressure. This game teaches you to perform your routine under self-imposed consequence.',
    progression: 'Start at 5 consecutive. Move to 8 consecutive (3 weeks). Move to 10 consecutive (6 weeks). Advanced: 10 consecutive with 5 jumping jacks between each shot.',
  },
  {
    name: 'One-On-One Shooting Game', type: 'Partner', time: '12–15 min', intensity: 'High', color: 'var(--purple)',
    rules: 'Two players. Alternate shots from anywhere on the floor. First to 11 wins (win by 2). Only made shots count. Partner can challenge — if they yell "CALL" before you shoot, you must explain what shot you\'re taking. If you take a different shot, it counts as a miss even if it goes in.',
    purpose: 'Shot selection under defensive pressure. Forces intentional shooting — you can\'t just chuck it and hope. Builds IQ on which shots are actually good shots.',
    progression: 'Add a half-court line — can\'t shoot from the same side twice in a row. Or: 3-pointers count as 2 points to reward range.',
  },
  {
    name: 'Mikan Sprint', type: 'Conditioning + Finishing', time: '8 min', intensity: 'Very High', color: 'var(--red)',
    rules: 'Classic Mikan drill (alternate sides, bank off the backboard) — but add a sprint. After every make on the LEFT side, sprint to the half-court line and back before the next rep. Keep going for 8 minutes. Track total makes.',
    purpose: 'Finishing under fatigue. Game finishing happens when you\'re tired. Your touch must work when your legs are burning. This is where weak finishers break down.',
    progression: 'Start without the sprint (build touch). Add 5-yard sprint (2 weeks). Add half-court sprint (4 weeks). Add full-court sprint for truly elite conditioning.',
  },
];

function switchShootingTab(tab, btn) {
  document.querySelectorAll('#section-shooting .js-tab').forEach(b => b.classList.remove('active'));
  ['form','spot','offdribble','finishing','competitive'].forEach(t => {
    const el = document.getElementById('sh-' + t);
    if (el) el.style.display = 'none';
  });
  btn.classList.add('active');
  document.getElementById('sh-' + tab).style.display = 'block';
}

function renderShootingForm() {
  const panel = document.getElementById('sh-form');
  if (!panel) return;
  const d = SHOT_FORM;
  let html = `<div class="page-header" style="padding:0 0 16px">
    <div class="badge">📐 The 7 NBA Shooting Checkpoints</div>
    <h2 style="font-size:22px;font-weight:900">Form Foundation</h2>
    <p class="text-sm text-muted">${d.intro}</p>
  </div>
  <div class="section-divider"><h2>The 7 Checkpoints</h2></div>`;

  d.checkpoints.forEach(cp => {
    html += `<div class="card mb-16" style="border-left:4px solid ${cp.color}">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px">
        <div style="width:36px;height:36px;border-radius:50%;background:${cp.color}20;color:${cp.color};font-weight:900;font-size:16px;display:flex;align-items:center;justify-content:center;flex-shrink:0">${cp.num}</div>
        <div style="font-size:17px;font-weight:900;color:${cp.color}">${cp.label}</div>
      </div>
      <p class="text-sm" style="color:var(--text-secondary);line-height:1.7;margin-bottom:12px">${cp.detail}</p>
      <div style="background:rgba(255,107,0,0.06);border:1px solid rgba(255,107,0,0.2);border-radius:8px;padding:10px 12px;margin-bottom:10px">
        <div style="font-size:11px;font-weight:800;color:var(--orange);text-transform:uppercase;margin-bottom:4px">Drill</div>
        <div style="font-size:12px;color:var(--text-secondary)">${cp.drill}</div>
      </div>
      <div style="font-size:11px;color:var(--text-muted);font-style:italic">🏀 NBA Reference: ${cp.nbaRef}</div>
    </div>`;
  });

  html += `<div class="section-divider mt-20"><h2>Common Errors & Fixes</h2></div>
  <div class="grid-2 mb-20">`;
  d.commonErrors.forEach(e => {
    html += `<div class="card">
      <div style="font-size:13px;font-weight:800;color:var(--red);margin-bottom:8px">❌ ${e.error}</div>
      <div style="font-size:12px;color:var(--text-secondary);line-height:1.6"><strong style="color:var(--green)">Fix:</strong> ${e.fix}</div>
    </div>`;
  });
  html += `</div>`;
  panel.innerHTML = html;
}

function renderSpotShooting() {
  const panel = document.getElementById('sh-spot');
  if (!panel) return;
  let html = `<div class="page-header" style="padding:0 0 16px">
    <div class="badge">📍 Volume + Correct Mechanics = Muscle Memory</div>
    <h2 style="font-size:22px;font-weight:900">Spot Shooting System</h2>
    <p class="text-sm text-muted">${SPOT_SHOOTING.intro}</p>
  </div>`;

  SPOT_SHOOTING.workouts.forEach(w => {
    const intColors = { Low: 'var(--green)', Medium: 'var(--blue)', High: 'var(--orange)', 'Very High': 'var(--red)' };
    const col = intColors[w.intensity] || 'var(--orange)';
    html += `<div class="card mb-20">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:8px;margin-bottom:12px">
        <div>
          <div style="font-size:18px;font-weight:900">${w.name}</div>
          <div style="font-size:12px;color:var(--text-muted);margin-top:3px">${w.desc}</div>
        </div>
        <div style="display:flex;gap:6px;align-items:center;flex-wrap:wrap">
          <span class="tag" style="background:${col}20;color:${col}">${w.intensity} Intensity</span>
          <span class="tag tag-blue">${w.time}</span>
          <span class="tag" style="background:rgba(255,215,0,0.1);color:var(--gold)">${w.tag}</span>
        </div>
      </div>
      <div class="table-wrap"><table>
        <thead><tr><th>Spot</th><th>Target</th><th>Focus Cue</th></tr></thead>
        <tbody>${w.rounds.map(r => `<tr>
          <td style="font-weight:700;color:var(--orange)">${r.spot}</td>
          <td><span class="tag tag-orange">${r.reps}</span></td>
          <td class="text-sm" style="color:var(--text-secondary)">${r.focus}</td>
        </tr>`).join('')}</tbody>
      </table></div>
      <div class="highlight-box mt-12" style="padding:10px 14px">
        <p style="font-size:12px"><strong>Coach's Note:</strong> ${w.coaching}</p>
      </div>
    </div>`;
  });
  panel.innerHTML = html;
}

function renderOffDribble() {
  const panel = document.getElementById('sh-offdribble');
  if (!panel) return;
  let html = `<div class="page-header" style="padding:0 0 16px">
    <div class="badge">🏀 Create Your Own Shot — NBA Shooting System</div>
    <h2 style="font-size:22px;font-weight:900">Off-Dribble Game</h2>
    <p class="text-sm text-muted">${OFF_DRIBBLE_SYSTEM.intro}</p>
  </div>
  <div class="section-divider"><h2>Footwork Fundamentals</h2></div>
  <div class="card mb-20">
    ${OFF_DRIBBLE_SYSTEM.fundamentals.map(f => `<div style="display:flex;gap:16px;padding:12px 0;border-bottom:1px solid var(--border)">
      <div style="min-width:140px;font-size:12px;font-weight:800;color:var(--orange);text-transform:uppercase">${f.label}</div>
      <div style="font-size:13px;color:var(--text-secondary);line-height:1.6">${f.text}</div>
    </div>`).join('')}
  </div>
  <div class="section-divider"><h2>Off-Dribble Shot Library</h2></div>`;

  OFF_DRIBBLE_SYSTEM.shots.forEach(s => {
    html += `<div class="card mb-16">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
        <span style="font-size:28px">${s.icon}</span>
        <div>
          <div style="font-size:17px;font-weight:900">${s.name}</div>
          <span class="tag tag-orange">${s.tag}</span>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px">
        <div>
          <div style="font-size:11px;font-weight:800;color:var(--text-muted);text-transform:uppercase;margin-bottom:6px">When to Use</div>
          <div style="font-size:12px;color:var(--text-secondary);line-height:1.6">${s.when}</div>
        </div>
        <div>
          <div style="font-size:11px;font-weight:800;color:var(--text-muted);text-transform:uppercase;margin-bottom:6px">Mechanics</div>
          <div style="font-size:12px;color:var(--text-secondary);line-height:1.6">${s.mechanics}</div>
        </div>
      </div>
      <div style="background:var(--bg-card-2);border-radius:8px;padding:12px">
        <div style="font-size:12px;font-weight:800;color:var(--orange);margin-bottom:8px">DRILLS</div>
        ${s.drills.map(d => `<div style="display:flex;gap:10px;padding:8px 0;border-bottom:1px solid var(--border)">
          <span class="tag tag-blue" style="flex-shrink:0;white-space:nowrap">${d.reps}</span>
          <div>
            <div style="font-size:12px;font-weight:700;margin-bottom:2px">${d.name}</div>
            <div style="font-size:11px;color:var(--text-muted)">${d.cue}</div>
          </div>
        </div>`).join('')}
      </div>
    </div>`;
  });
  panel.innerHTML = html;
}

function renderFinishing() {
  const panel = document.getElementById('sh-finishing');
  if (!panel) return;
  let html = `<div class="page-header" style="padding:0 0 16px">
    <div class="badge">🔥 8+ Finishes = Complete Threat at the Rim</div>
    <h2 style="font-size:22px;font-weight:900">Finishing System</h2>
    <p class="text-sm text-muted">${FINISHING_SYSTEM.intro}</p>
  </div>`;

  FINISHING_SYSTEM.tiers.forEach(tier => {
    html += `<div class="section-divider"><h2 style="display:flex;align-items:center;gap:10px">${tier.label} <span class="tag" style="background:${tier.color}20;color:${tier.color}">${tier.tag}</span></h2></div>
    <div class="highlight-box mb-16" style="border-color:${tier.color}"><p>${tier.desc}</p></div>`;

    tier.moves.forEach(move => {
      html += `<div class="card mb-16">
        <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px;margin-bottom:10px">
          <div style="font-size:16px;font-weight:900;color:${tier.color}">${move.name}</div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px">
          <div style="background:var(--bg-card-2);border-radius:8px;padding:10px 12px">
            <div style="font-size:11px;font-weight:800;color:var(--text-muted);text-transform:uppercase;margin-bottom:5px">When to Use</div>
            <div style="font-size:12px;color:var(--text-secondary);line-height:1.6">${move.when}</div>
          </div>
          <div style="background:var(--bg-card-2);border-radius:8px;padding:10px 12px">
            <div style="font-size:11px;font-weight:800;color:var(--text-muted);text-transform:uppercase;margin-bottom:5px">Mechanics</div>
            <div style="font-size:12px;color:var(--text-secondary);line-height:1.6">${move.mechanic}</div>
          </div>
        </div>
        <div style="background:rgba(255,107,0,0.06);border:1px solid rgba(255,107,0,0.2);border-radius:8px;padding:10px 12px">
          <div style="font-size:11px;font-weight:800;color:var(--orange);text-transform:uppercase;margin-bottom:4px">Practice Drill</div>
          <div style="font-size:12px;color:var(--text-secondary)">${move.drill}</div>
        </div>
      </div>`;
    });
  });
  panel.innerHTML = html;
}

function renderCompetitiveShooting() {
  const panel = document.getElementById('sh-competitive');
  if (!panel) return;
  let html = `<div class="page-header" style="padding:0 0 16px">
    <div class="badge">🏆 Game-Pressure Shooting Development</div>
    <h2 style="font-size:22px;font-weight:900">Competitive Shooting Reps</h2>
    <p class="text-sm text-muted">The difference between a practice shooter and a game shooter is reps taken under pressure. These games simulate pressure without a defender. Train your mind to perform when it counts.</p>
  </div>
  <div class="grid-2">`;

  COMPETITIVE_SHOOTING.forEach(g => {
    html += `<div class="card">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px;margin-bottom:10px">
        <div style="font-size:16px;font-weight:900">${g.name}</div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px">
          <span class="tag" style="background:${g.color}20;color:${g.color};white-space:nowrap">${g.type}</span>
          <span class="tag tag-blue" style="white-space:nowrap">${g.time}</span>
        </div>
      </div>
      <div style="font-size:11px;font-weight:800;color:var(--text-muted);text-transform:uppercase;margin-bottom:5px">Rules</div>
      <div style="font-size:12px;color:var(--text-secondary);margin-bottom:10px;line-height:1.6">${g.rules}</div>
      <div style="background:rgba(255,107,0,0.06);border-radius:6px;padding:8px 10px;margin-bottom:8px">
        <div style="font-size:11px;font-weight:800;color:var(--orange);margin-bottom:3px">PURPOSE</div>
        <div style="font-size:12px;color:var(--text-secondary)">${g.purpose}</div>
      </div>
      <div style="font-size:11px;color:var(--text-muted);font-style:italic"><strong style="color:var(--green);font-style:normal">Progression:</strong> ${g.progression}</div>
    </div>`;
  });

  html += `</div>
  <div class="highlight-box mt-20" style="border-color:var(--orange)">
    <p><strong>The Session Template:</strong> Form Shooting (10 min) → Spot Work (15 min) → Off-Dribble (10 min) → Finishing (10 min) → Competitive Game (10 min) = 55-min complete shooting session. Do this 2× per week (Tuesday + Saturday skill days) and you will be a different shooter in 8 weeks.</p>
  </div>`;
  panel.innerHTML = html;
}

// ── Shopping List Data ────────────────────────────────────────────────────────
const SHOPPING_CATEGORIES = [
  {
    name: 'Proteins', icon: '🥩', color: 'var(--orange)',
    items: [
      { name: 'Chicken Breast', qty: '3.5 lbs', est: '$9–13', notes: 'Buy family pack, freeze extra in weekly portions', priority: 'essential' },
      { name: 'Salmon (Atlantic or Wild-Caught)', qty: '1 lb', est: '$8–13', notes: 'Fresh or frozen — wild-caught has more omega-3s', priority: 'essential' },
      { name: 'Turkey Breast (or ground turkey)', qty: '1 lb', est: '$5–7', notes: 'Pre-court meal Tue/Sat lunch', priority: 'essential' },
      { name: 'Chicken Thighs (bone-in or boneless)', qty: '1.5 lbs', est: '$5–7', notes: 'Post-court recovery dinner (higher fat = more flavor)', priority: 'essential' },
      { name: 'Eggs (large)', qty: '2 dozen', est: '$5–8', notes: 'Post-workout scramble + recovery morning', priority: 'essential' },
      { name: 'Tuna in Water (canned)', qty: '4 cans', est: '$4–6', notes: 'Emergency protein — quick meal when short on time', priority: 'backup' },
    ]
  },
  {
    name: 'Carbs & Grains', icon: '🌾', color: 'var(--gold)',
    items: [
      { name: 'Old-Fashioned Oats', qty: '2 lbs dry', est: '$3–5', notes: 'Measure 50g (½ cup dry) per morning. Bulk = best price', priority: 'essential' },
      { name: 'Brown Rice', qty: '3 lbs dry', est: '$3–5', notes: 'Cook 4–6 servings on Sunday. Fridge holds 5 days', priority: 'essential' },
      { name: 'White Rice', qty: '1 lb dry', est: '$1–3', notes: 'Fast-digesting for basketball day mid-morning meal', priority: 'essential' },
      { name: 'Quinoa', qty: '1 lb dry', est: '$4–6', notes: 'Complete protein + carb for Tue/Sat pre-court lunch', priority: 'essential' },
      { name: 'Ezekiel Bread (sprouted grain)', qty: '1 loaf', est: '$5–7', notes: 'Usually in frozen aisle — higher protein than regular bread', priority: 'essential' },
      { name: 'Sweet Potatoes', qty: '5 lbs', est: '$4–6', notes: 'Roast 4–5 on Sunday at 400°F. Used Mon/Wed/Fri dinners', priority: 'essential' },
      { name: 'Potatoes (yellow or white)', qty: '2 lbs', est: '$2–3', notes: 'Post-court recovery dinner (Sat) — fast carb refuel', priority: 'essential' },
    ]
  },
  {
    name: 'Produce', icon: '🥦', color: 'var(--green)',
    items: [
      { name: 'Bananas', qty: '2 bunches (14–16)', est: '$2–4', notes: 'Pre-workout fuel every training morning — buy some green to ripen mid-week', priority: 'essential' },
      { name: 'Mixed Berries (frozen)', qty: '3 bags (12 oz each)', est: '$8–12', notes: 'Frozen = same nutrition, cheaper. Anti-inflammatory. Post-workout + overnight', priority: 'essential' },
      { name: 'Blueberries', qty: '2 pints (or 1 frozen 3 lb bag)', est: '$5–9', notes: 'Snacks + overnight recovery bowl', priority: 'essential' },
      { name: 'Apples', qty: '6–7', est: '$3–5', notes: 'Recovery day afternoon snack with nuts', priority: 'essential' },
      { name: 'Spinach (baby)', qty: '2 bags (5 oz)', est: '$5–7', notes: 'Recovery lunch salad base — iron, magnesium', priority: 'essential' },
      { name: 'Mixed Greens / Spring Mix', qty: '2–3 bags', est: '$5–8', notes: 'Training day lunch + basketball day meals', priority: 'essential' },
      { name: 'Broccoli (fresh crowns or frozen)', qty: '4–5 crowns', est: '$4–6', notes: 'Dinner vegetable 4–5 nights. Vitamin C + fiber. Frozen bags also work great', priority: 'essential' },
      { name: 'Asparagus', qty: '2 bunches', est: '$4–6', notes: 'Post-court recovery dinner (Sat) — pairs with chicken thighs', priority: 'essential' },
      { name: 'Cherry Tomatoes', qty: '1 pint', est: '$3–4', notes: 'Basketball day salads Tue/Sat', priority: 'essential' },
      { name: 'Avocados', qty: '4–5', est: '$4–7', notes: 'Training day lunch + recovery morning. Buy some firm to ripen by Wed', priority: 'essential' },
      { name: 'Lemons', qty: '6–8', est: '$2–4', notes: 'Dressings + marinade on everything', priority: 'essential' },
      { name: 'Garlic (2 bulbs)', qty: '2 bulbs', est: '$1–2', notes: 'Anti-inflammatory. Broccoli + recovery dinners', priority: 'essential' },
    ]
  },
  {
    name: 'Dairy & Cold', icon: '🥛', color: 'var(--blue)',
    items: [
      { name: 'Low-Fat Greek Yogurt (plain)', qty: '3 containers (32 oz)', est: '$10–15', notes: 'Chobani / Fage / store brand. Post-workout + snacks', priority: 'essential' },
      { name: 'Low-Fat Cottage Cheese', qty: '4 containers (16 oz)', est: '$8–12', notes: 'Best dollar-per-gram of casein protein. Overnight recovery + snacks', priority: 'essential' },
      { name: 'Orange Juice (100%, no added sugar)', qty: '½ gallon', est: '$3–5', notes: 'Basketball morning fast-carb fuel before court', priority: 'essential' },
    ]
  },
  {
    name: 'Pantry & Fats', icon: '🫙', color: 'var(--text-secondary)',
    items: [
      { name: 'Extra Virgin Olive Oil', qty: '1 bottle (32 oz)', est: '$6–10', notes: 'Every dinner + dressing. Buy 32 oz — better price per oz', priority: 'essential' },
      { name: 'Almonds (raw or lightly salted)', qty: '12–16 oz bag', est: '$5–9', notes: '1 oz = 23 almonds = daily snack fat portion', priority: 'essential' },
      { name: 'Mixed Nuts', qty: '10–12 oz bag', est: '$5–8', notes: 'Recovery day afternoon snack with apple', priority: 'essential' },
      { name: 'Peanut Butter (natural — no added sugar)', qty: '1 jar (16 oz)', est: '$4–7', notes: 'Pre-game snack: 2 dates + 1 tbsp PB + ½ banana', priority: 'essential' },
      { name: 'Honey (raw)', qty: '1 small jar', est: '$5–8', notes: 'Morning oats sweetener + Greek yogurt', priority: 'essential' },
      { name: 'Granola (low sugar)', qty: '1 bag', est: '$4–6', notes: 'Recovery day light snack with Greek yogurt', priority: 'essential' },
      { name: 'Dates (Medjool)', qty: '14–16 dates', est: '$5–7', notes: 'Pre-game 30–60 min before court — fast glycemic index', priority: 'essential' },
      { name: 'Apple Cider Vinegar', qty: '1 bottle', est: '$3–5', notes: 'Recovery day salad dressing. Lasts weeks', priority: 'pantry' },
      { name: 'Balsamic Vinegar or Glaze', qty: '1 bottle', est: '$3–5', notes: 'Basketball day salad dressing. Lasts weeks', priority: 'pantry' },
    ]
  },
  {
    name: 'Hydration', icon: '💧', color: 'var(--blue)',
    items: [
      { name: 'Electrolyte Powder (no sugar)', qty: '1 box (30 servings)', est: '$15–25', notes: 'LMNT, Liquid IV, Nuun, or store brand packets. 16 oz water every morning', priority: 'essential' },
      { name: 'Tart Cherry Juice (100% pure)', qty: '2 bottles (16 oz)', est: '$7–13', notes: 'Anti-inflammatory. 4 oz morning + 4 oz pre-sleep. Biggest impact on soreness', priority: 'essential' },
    ]
  },
];

const STORE_GUIDE = [
  {
    name: 'Walmart / Neighborhood Market',
    tag: 'EVERYDAY STAPLES',
    color: 'var(--blue)',
    icon: '🏪',
    savings: 'Save 30–40% with Great Value brand',
    bestFor: [
      'Oats, rice, quinoa — store brand = identical nutrition',
      'Chicken breast in family packs (freeze extra)',
      'Eggs — Great Value, cheapest consistent price',
      'Frozen broccoli, mixed vegetables, mixed berries',
      'Cottage cheese and Greek yogurt (store brand)',
      'Olive oil, honey, peanut butter, granola',
      'Orange juice, canned tuna',
    ],
    tip: 'Great Value oats, eggs, and frozen veg are nutritionally identical to name brands — 30–40% cheaper. Use the Walmart app for rollback deals. Check produce section for ripe avocados.',
  },
  {
    name: 'ALDI',
    tag: 'BUDGET MVP',
    color: 'var(--orange)',
    icon: '🥇',
    savings: 'Consistently lowest on proteins + produce',
    bestFor: [
      'Chicken breast — frequently cheapest per lb across all stores',
      'Eggs — most consistently lowest price anywhere',
      'Greek yogurt — Simply Nature brand is excellent quality',
      'Avocados — usually $0.49–$0.79 each',
      'Fresh produce: bag salads, broccoli, spinach, bananas',
      'Almonds and mixed nuts — premium quality at low price',
      'Salmon (check weekly specials section)',
    ],
    tip: 'ALDI "Finds" runs electrolytes, protein bars, and athletic supplements at steep discounts — check weekly. Salmon goes on special often. Go Saturday early for best fresh produce selection.',
  },
  {
    name: 'Costco / Sam\'s Club',
    tag: 'BULK BUY',
    color: 'var(--gold)',
    icon: '📦',
    savings: 'Best per-oz price on proteins + nuts',
    bestFor: [
      'Chicken breast — 6–10 lb bags (freeze in weekly 3.5 lb portions)',
      'Wild-caught salmon — frozen 3 lb bags, best price-quality anywhere',
      'Almonds — 3 lb bag, unbeatable per-oz price',
      'Eggs — 36-count, significant savings',
      'Greek yogurt — Chobani 4-packs or Kirkland brand',
      'Olive oil — 3 liter bottle (best per-oz available)',
      'Blueberries — frozen 3 lb bags',
    ],
    tip: 'Monthly Costco run replaces ~40% of your protein and pantry budget. Freeze chicken in 3.5 lb portions immediately after buying. Kirkland omega-3 fish oil is one of the best values for supplements.',
  },
  {
    name: 'Trader Joe\'s',
    tag: 'QUALITY PICK',
    color: 'var(--green)',
    icon: '🌿',
    savings: 'Premium quality at fair prices',
    bestFor: [
      'Wild-caught salmon — fresh or frozen, best price-to-quality ratio',
      'Ezekiel bread (frozen aisle — sprouted grain, higher protein)',
      'Pre-washed bag salads and mixed greens',
      'Medjool dates — great value on the pre-game snack staple',
      'Tart cherry juice (sometimes stocks concentrate)',
      'Interesting healthy snacks and variety items',
    ],
    tip: 'TJ\'s wild salmon is the best non-Costco price for quality fish. Their frozen grilled chicken strips are a great meal-prep shortcut — 3 minutes to a complete meal. Check for seasonal electrolyte products.',
  },
  {
    name: 'Local Grocery Chain',
    tag: 'CONVENIENCE',
    color: 'var(--purple)',
    icon: '🛒',
    savings: 'Weekly sales + digital coupons stack',
    bestFor: [
      'Midweek fresh top-up (avocados, berries, bananas)',
      'Fresh salmon when Costco run isn\'t happening',
      'Orange juice, specialty fresh produce',
      'Items you run out of mid-week',
      'Same-day emergency purchases',
    ],
    tip: 'Kroger, Publix, HEB, Safeway all have loyalty apps with digital coupons. Chicken breast, salmon, and berries cycle on sale weekly — stack app coupons with sale price for best deal.',
  },
];

const SHOPPING_SCHEDULE = [
  {
    day: 'THURSDAY',
    pill: 'MAIN SHOP',
    time: '10:00 AM – 11:30 AM',
    color: 'var(--green)',
    icon: '🛒',
    why: 'Recovery day means no heavy training — mental bandwidth to shop mindfully and set up the full week in one run.',
    stores: 'Walmart or ALDI (primary) + Costco on monthly bulk run',
    duration: '60–90 min',
    checklist: [
      'Proteins — chicken, salmon, eggs, turkey, cottage cheese, Greek yogurt',
      'Produce — bananas, berries, greens, broccoli, sweet potato, avocado, lemons',
      'Carbs — oats, brown rice, bread, potatoes',
      'Pantry restocks — olive oil, nuts, honey, PB (only when low)',
      'Hydration — electrolytes, tart cherry juice, orange juice',
    ]
  },
  {
    day: 'SATURDAY',
    pill: 'QUICK REFRESH',
    time: '8:00 AM – 8:30 AM',
    color: 'var(--blue)',
    icon: '🏃',
    why: 'Before court. 20-minute stop for fresh items that won\'t last a full 7 days from Thursday.',
    stores: 'ALDI or Walmart — closest and fastest',
    duration: '20–30 min',
    checklist: [
      'Fresh salmon (if needed for Sat/Sun dinner)',
      'Avocados (buy firm — ripen by Monday)',
      'Bananas or berries if running low',
      'Protein gap-fill if needed (extra eggs or chicken)',
    ]
  },
  {
    day: 'SUNDAY',
    pill: 'MEAL PREP',
    time: '4:00 PM – 5:30 PM',
    color: 'var(--orange)',
    icon: '👨‍🍳',
    why: 'No shopping — prep day. 90 minutes of cooking = Mon–Wed eating on autopilot. This is what separates hitting macros from missing them.',
    stores: 'Kitchen only',
    duration: '60–90 min',
    checklist: [
      'Grill or air-fry 3–4 lbs chicken breast — portion into 6 oz containers',
      'Cook large batch brown rice (4–6 servings) — fridge-safe 5 days',
      'Roast 4–5 sweet potatoes at 400°F for 45 min',
      'Hard-boil 8 eggs for backup protein (snacks + quick meals)',
      'Pre-wash and dry salad greens — store with paper towel to stay crisp',
      'Measure and bag oat portions for Mon–Wed mornings (50g each)',
    ]
  },
];

const SUPPLEMENT_STACK = [
  {
    name: 'Whey Protein', icon: '🥤', priority: 1, cost: '$40–55/month (5 lb tub)',
    color: 'var(--orange)',
    why: 'Post-workout muscle protein synthesis in the critical 30–45 min window. Non-negotiable for hitting 175g daily protein target.',
    dose: '1–2 scoops (25–50g)', when: 'Within 30–45 min post-training',
    brands: 'Optimum Nutrition Gold Standard · Ghost Whey · Myprotein · Kirkland (Costco)',
    where: 'Costco (best bulk price), Amazon, Walmart, GNC',
  },
  {
    name: 'Magnesium Glycinate', icon: '💊', priority: 1, cost: '$15–25 (3–4 month supply)',
    color: 'var(--blue)',
    why: 'Sleep quality, muscle recovery, and cramp prevention. Over 40% of Americans are deficient. Glycinate is the most bioavailable form — no laxative effect unlike magnesium oxide.',
    dose: '400mg', when: '9:00 PM with recovery snack',
    brands: 'Thorne · Doctor\'s Best · Life Extension · Kirkland (Costco)',
    where: 'Amazon (best price), Costco, Walmart, Whole Foods',
  },
  {
    name: 'Omega-3 Fish Oil', icon: '🐟', priority: 1, cost: '$20–35/month',
    color: 'var(--green)',
    why: 'Reduces joint inflammation — critical for a 42-year-old high-output athlete. Look for 1g+ EPA+DHA per serving on the label. Supports cardiovascular health and post-exercise recovery speed.',
    dose: '2–3g EPA+DHA daily', when: 'With any meal (fat-soluble)',
    brands: 'Nordic Naturals · Carlson · OmegaVia · Kirkland (Costco)',
    where: 'Costco (best price), Amazon, Walmart',
  },
  {
    name: 'Tart Cherry (Juice or Capsule)', icon: '🍒', priority: 1, cost: '$7–13/week juice · $15–20/month capsule',
    color: 'var(--red)',
    why: 'Reduces DOMS (soreness) by 30–40% in multiple RCTs. Anti-inflammatory anthocyanins. Also improves sleep quality. Biggest single supplement impact for a high-volume training athlete.',
    dose: '4 oz juice 2× daily OR 400–500mg capsule 2×', when: 'Morning + pre-sleep',
    brands: 'Cheribundi Tart Cherry Juice · Dynamic Health · Lyfebar Tart Cherry Capsules',
    where: 'Trader Joe\'s, Whole Foods, Walmart, Amazon',
  },
  {
    name: 'Electrolytes (No Sugar)', icon: '💧', priority: 1, cost: '$15–25/month',
    color: 'var(--blue)',
    why: 'Prevents cramps and optimizes hydration. You lose sodium and potassium through sweat — replace them, especially in the morning after an 8-hour fast when cortisol is highest.',
    dose: '1 serving in 16 oz water', when: '6:30 AM every morning + during/after training',
    brands: 'LMNT · Liquid IV (no sugar) · Nuun Sport · DripDrop · Great Value packets (Walmart)',
    where: 'Amazon, Walmart, Target, Costco (seasonal)',
  },
  {
    name: 'Vitamin D3 + K2', icon: '☀️', priority: 2, cost: '$15–25 (2–3 month supply)',
    color: 'var(--gold)',
    why: 'Testosterone support, bone density, immune function. Most indoor athletes are deficient. D3 needs K2 to work properly — K2 routes calcium to bones, not arteries. Do not take D3 alone.',
    dose: '3,000–5,000 IU D3 + 100mcg K2', when: 'With breakfast (fat-soluble — needs food)',
    brands: 'Thorne D3/K2 Drops · NatureWise · Sports Research · NOW Foods',
    where: 'Amazon, Costco, Walmart, GNC',
  },
  {
    name: 'Creatine Monohydrate', icon: '⚡', priority: 2, cost: '$15–25/month (500g tub)',
    color: 'var(--orange)',
    why: 'Directly improves jump height, sprint speed, and power output. 1,000+ studies — most researched supplement in existence. Completely safe at 42+. Buy pure monohydrate ONLY — ignore fancy forms.',
    dose: '3–5g daily (no loading protocol needed)', when: 'Any time — daily consistency is all that matters',
    brands: 'Optimum Nutrition · Myprotein · BulkSupplements · Any 99.9% pure creatine monohydrate',
    where: 'Amazon (best price), Walmart, GNC, Costco',
  },
];

// ── Shopping List Functions ───────────────────────────────────────────────────
function switchShoppingListTab(tab, btn) {
  const panels = { list: 'sl-list', stores: 'sl-stores', schedule: 'sl-schedule', supplements: 'sl-supplements' };
  document.querySelectorAll('#section-shopping .js-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  Object.values(panels).forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = 'none';
  });
  const active = document.getElementById(panels[tab]);
  if (active) active.style.display = '';
}

function renderWeeklyList() {
  const panel = document.getElementById('sl-list');
  if (!panel) return;

  const totalLow = 100, totalHigh = 160;
  let html = `<div class="highlight-box mb-20" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px">
    <div>
      <div style="font-size:11px;font-weight:800;color:var(--green);text-transform:uppercase;margin-bottom:4px">Estimated Weekly Budget</div>
      <div style="font-size:26px;font-weight:900;color:var(--green)">$${totalLow}–$${totalHigh} <span style="font-size:13px;color:var(--text-muted);font-weight:500">/week all-in</span></div>
      <div style="font-size:12px;color:var(--text-muted);margin-top:2px">Includes amortized supplements. Drops after pantry is stocked.</div>
    </div>
    <div style="text-align:right">
      <div style="font-size:11px;font-weight:800;color:var(--text-muted);text-transform:uppercase;margin-bottom:4px">Main Shop Day</div>
      <div style="font-size:15px;font-weight:800;color:var(--gold)">Thursday · 10 AM</div>
      <div style="font-size:11px;color:var(--text-muted)">Quick refresh: Saturday 8 AM</div>
    </div>
  </div>`;

  SHOPPING_CATEGORIES.forEach(cat => {
    const essentials = cat.items.filter(i => i.priority === 'essential');
    const backups = cat.items.filter(i => i.priority !== 'essential');

    html += `<div class="card mb-20" style="border-left:4px solid ${cat.color}">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px">
        <span style="font-size:26px">${cat.icon}</span>
        <div>
          <div style="font-size:16px;font-weight:900;color:${cat.color}">${cat.name}</div>
          <div style="font-size:11px;color:var(--text-muted)">${essentials.length} essential items</div>
        </div>
      </div>
      <div class="table-wrap"><table>
        <thead><tr>
          <th>Item</th>
          <th style="min-width:90px">Weekly Qty</th>
          <th style="min-width:80px">Est. Cost</th>
          <th>Notes</th>
        </tr></thead>
        <tbody>
          ${cat.items.map(item => {
            const isBackup = item.priority !== 'essential' && item.priority !== 'pantry';
            const rowStyle = isBackup ? 'opacity:0.7' : '';
            const badgeStyle = item.priority === 'pantry' ? 'background:rgba(152,152,190,0.15);color:var(--text-muted)' : 'background:rgba(0,204,136,0.12);color:var(--green)';
            const badgeLabel = item.priority === 'pantry' ? 'Pantry' : item.priority === 'backup' ? 'Backup' : 'Essential';
            return `<tr style="${rowStyle}">
              <td>
                <div style="font-weight:700;font-size:13px">${item.name}</div>
                <span class="tag" style="${badgeStyle};font-size:9px;padding:2px 6px">${badgeLabel}</span>
              </td>
              <td style="font-weight:700;color:var(--gold)">${item.qty}</td>
              <td style="font-weight:700;color:var(--green)">${item.est}</td>
              <td style="font-size:11px;color:var(--text-muted);line-height:1.5">${item.notes}</td>
            </tr>`;
          }).join('')}
        </tbody>
      </table></div>
    </div>`;
  });

  html += `<div class="highlight-box" style="border-color:var(--orange)">
    <p><strong>Pro Tip — Batch Buying:</strong> Your first shop will be ~$150–180 to stock the pantry (olive oil, nuts, PB, honey, ACV, granola). After week one, your weekly recurring cost drops to $100–130 since pantry items last 2–3 weeks. Costco monthly trip for chicken/salmon/almonds/eggs saves an additional $20–35 per week.</p>
  </div>`;

  panel.innerHTML = html;
}

function renderStoreGuide() {
  const panel = document.getElementById('sl-stores');
  if (!panel) return;

  let html = `<div class="highlight-box mb-20">
    <p><strong>Strategy:</strong> Don't shop at just one store. Walmart/ALDI for weekly staples, Costco monthly for bulk proteins and nuts, Trader Joe's for quality fish and specialty items. This combination gets you the best nutrition-per-dollar ratio available.</p>
  </div>
  <div class="grid-2">`;

  STORE_GUIDE.forEach(store => {
    html += `<div class="card" style="border-left:4px solid ${store.color}">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px;margin-bottom:12px">
        <div style="display:flex;align-items:center;gap:10px">
          <span style="font-size:28px">${store.icon}</span>
          <div>
            <div style="font-size:16px;font-weight:900">${store.name}</div>
            <span class="tag" style="background:${store.color}20;color:${store.color};font-size:10px">${store.tag}</span>
          </div>
        </div>
        <div style="background:rgba(0,204,136,0.1);border-radius:6px;padding:6px 8px;text-align:right;flex-shrink:0">
          <div style="font-size:10px;font-weight:800;color:var(--green);text-transform:uppercase">Savings</div>
          <div style="font-size:11px;color:var(--text-secondary)">${store.savings}</div>
        </div>
      </div>
      <div style="font-size:11px;font-weight:800;color:var(--text-muted);text-transform:uppercase;margin-bottom:8px">Best For</div>
      <ul style="list-style:none;margin-bottom:14px">
        ${store.bestFor.map(item => `<li style="font-size:12px;color:var(--text-secondary);padding:5px 0;border-bottom:1px solid var(--border);display:flex;gap:8px">
          <span style="color:${store.color};flex-shrink:0">▸</span>${item}
        </li>`).join('')}
      </ul>
      <div style="background:${store.color}08;border:1px solid ${store.color}25;border-radius:8px;padding:10px 12px">
        <div style="font-size:10px;font-weight:800;color:${store.color};text-transform:uppercase;margin-bottom:4px">Pro Tip</div>
        <div style="font-size:12px;color:var(--text-secondary);line-height:1.6">${store.tip}</div>
      </div>
    </div>`;
  });

  html += `</div>
  <div class="highlight-box mt-20" style="border-color:var(--blue)">
    <p><strong>Location Note:</strong> Use Google Maps or store apps to find the nearest Walmart, ALDI, Costco, and Trader Joe's in your area. Search: "ALDI near me", "Costco near me". Most major US markets have all four within reasonable driving distance — plan your Thursday shop route to hit 2 stores in one trip if possible.</p>
  </div>`;

  panel.innerHTML = html;
}

function renderShopSchedule() {
  const panel = document.getElementById('sl-schedule');
  if (!panel) return;

  let html = `<div class="highlight-box mb-20">
    <p><strong>The System:</strong> Thursday = main shop (recovery day, no performance pressure). Saturday = quick perishable refresh (before court). Sunday = meal prep (not shopping). This rhythm means you never scramble for food on a training day.</p>
  </div>`;

  SHOPPING_SCHEDULE.forEach((sched, idx) => {
    html += `<div class="card mb-20" style="border-left:4px solid ${sched.color}">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;flex-wrap:wrap">
        <span style="font-size:32px">${sched.icon}</span>
        <div style="flex:1">
          <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:4px">
            <span class="tag" style="background:${sched.color}20;color:${sched.color};font-size:11px">${sched.pill}</span>
            <span class="tag tag-blue">${sched.duration}</span>
          </div>
          <div style="font-size:20px;font-weight:900">${sched.day}</div>
          <div style="font-size:13px;color:var(--gold);font-weight:700">${sched.time}</div>
        </div>
      </div>
      <div style="font-size:12px;color:var(--text-muted);margin-bottom:16px;font-style:italic;border-left:2px solid ${sched.color}40;padding-left:10px">${sched.why}</div>
      <div class="grid-2" style="gap:12px">
        <div>
          <div style="font-size:11px;font-weight:800;color:${sched.color};text-transform:uppercase;margin-bottom:8px">Checklist</div>
          <ul style="list-style:none">
            ${sched.checklist.map(item => `<li style="display:flex;gap:8px;padding:7px 0;border-bottom:1px solid var(--border);font-size:12px;color:var(--text-secondary)">
              <input type="checkbox" class="ex-check" style="flex-shrink:0;margin-top:2px">
              <span>${item}</span>
            </li>`).join('')}
          </ul>
        </div>
        <div>
          <div style="font-size:11px;font-weight:800;color:${sched.color};text-transform:uppercase;margin-bottom:8px">Where</div>
          <div style="font-size:13px;color:var(--text-secondary);padding:12px;background:var(--bg-card-2);border-radius:8px;line-height:1.6">${sched.stores}</div>
        </div>
      </div>
    </div>`;
  });

  html += `<div class="highlight-box" style="border-color:var(--orange)">
    <p><strong>Budget Tracking:</strong> Screenshot your receipt after every Thursday shop. After 4 weeks you will know your exact average and can optimize. Most people find the budget drops $15–20/week once they know which items to buy at which stores.</p>
  </div>`;

  panel.innerHTML = html;
}

function renderSupplementStack() {
  const panel = document.getElementById('sl-supplements');
  if (!panel) return;

  const p1 = SUPPLEMENT_STACK.filter(s => s.priority === 1);
  const p2 = SUPPLEMENT_STACK.filter(s => s.priority === 2);

  const monthlyCostLow = 97, monthlyCostHigh = 163;

  let html = `<div class="highlight-box mb-20" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px">
    <div>
      <div style="font-size:11px;font-weight:800;color:var(--orange);text-transform:uppercase;margin-bottom:4px">Estimated Monthly Supplement Cost</div>
      <div style="font-size:26px;font-weight:900;color:var(--orange)">$${monthlyCostLow}–$${monthlyCostHigh} <span style="font-size:13px;color:var(--text-muted);font-weight:500">/month</span></div>
      <div style="font-size:12px;color:var(--text-muted);margin-top:2px">~$25–40/week. Priority 1 items are non-negotiables for your program.</div>
    </div>
    <div style="text-align:right">
      <div style="font-size:11px;font-weight:800;color:var(--text-muted);text-transform:uppercase;margin-bottom:4px">Best Value Source</div>
      <div style="font-size:15px;font-weight:800;color:var(--gold)">Amazon Subscribe + Costco</div>
      <div style="font-size:11px;color:var(--text-muted)">Subscribe & Save = extra 5–15% off</div>
    </div>
  </div>

  <div class="section-divider"><h2>Priority 1 — Non-Negotiable Stack</h2></div>
  <div class="highlight-box mb-16" style="border-color:var(--orange)"><p>These 5 supplements have the highest evidence base for a 42-year-old high-output athlete. Build this stack first before adding anything else.</p></div>
  <div class="grid-2 mb-20">`;

  p1.forEach(supp => {
    html += buildSupplementCard(supp);
  });

  html += `</div>
  <div class="section-divider"><h2>Priority 2 — Performance Amplifiers</h2></div>
  <div class="highlight-box mb-16"><p>Add these once Priority 1 is consistently in place. Each has strong evidence for athletic performance and longevity.</p></div>
  <div class="grid-2 mb-20">`;

  p2.forEach(supp => {
    html += buildSupplementCard(supp);
  });

  html += `</div>
  <div class="highlight-box" style="border-color:var(--green)">
    <p><strong>Order of operations:</strong> Get food right first (80% of results). Then Priority 1 supplements. Then Priority 2. Don't buy expensive supplements if your protein is inconsistent — the food always wins.</p>
  </div>`;

  panel.innerHTML = html;
}

function buildSupplementCard(supp) {
  return `<div class="card" style="border-left:4px solid ${supp.color}">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
      <span style="font-size:28px">${supp.icon}</span>
      <div style="flex:1">
        <div style="font-size:16px;font-weight:900">${supp.name}</div>
        <div style="font-size:12px;font-weight:700;color:var(--green)">${supp.cost}</div>
      </div>
    </div>
    <div style="font-size:12px;color:var(--text-secondary);line-height:1.6;margin-bottom:12px">${supp.why}</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px">
      <div style="background:var(--bg-card-2);border-radius:6px;padding:8px 10px">
        <div style="font-size:10px;font-weight:800;color:var(--text-muted);text-transform:uppercase;margin-bottom:3px">Dose</div>
        <div style="font-size:12px;color:var(--text-secondary)">${supp.dose}</div>
      </div>
      <div style="background:var(--bg-card-2);border-radius:6px;padding:8px 10px">
        <div style="font-size:10px;font-weight:800;color:var(--text-muted);text-transform:uppercase;margin-bottom:3px">When</div>
        <div style="font-size:12px;color:var(--text-secondary)">${supp.when}</div>
      </div>
    </div>
    <div style="font-size:11px;color:var(--text-muted);margin-bottom:4px"><strong style="color:${supp.color}">Brands:</strong> ${supp.brands}</div>
    <div style="font-size:11px;color:var(--text-muted)"><strong style="color:var(--text-secondary)">Where:</strong> ${supp.where}</div>
  </div>`;
}
