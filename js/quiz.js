/* ============================================================
   TRACTION REPORT — ASSESSMENT ENGINE v1.0
   ============================================================ */

'use strict';

/* ── Question Bank ─────────────────────────────────────── */
const QUESTIONS = [
  {
    id: 'q01', category: 'Position', icon: '🏀',
    text: 'What position do you primarily play?',
    answers: [
      { text: 'Point Guard',           detail: 'Primary ball handler & floor general',          s: { SG: 2, SP: 2, SC: 1 } },
      { text: 'Shooting Guard',         detail: 'Off-ball scorer and finisher',                  s: { SC: 2, SP: 1, VW: 1, TL: 2 } },
      { text: 'Small Forward / Wing',   detail: 'Versatile perimeter player',                   s: { VW: 3, WS: 1 } },
      { text: 'Power Forward',          detail: 'Physical frontcourt player',                   s: { PF: 3, VW: 1 } },
      { text: 'Center / Paint Big',     detail: 'Rim protector and interior scorer',            s: { PA: 3 } },
      { text: 'Positionless / Multi',   detail: 'I play wherever the team needs me',            s: { VW: 2, SC: 1, WS: 1 } }
    ]
  },
  {
    id: 'q02', category: 'Movement Style', icon: '⚡',
    text: 'How do you primarily beat defenders?',
    answers: [
      { text: 'Change of direction — I cross them up', detail: 'Hesitations, crossovers, stop-and-go',     s: { SG: 4, WS: 1 } },
      { text: 'Straight-line speed — I outrun them',   detail: 'Push the pace, win transition',           s: { SP: 4 } },
      { text: 'Footwork — I get to my spots',          detail: 'Step-backs, pull-ups, off-ball cuts',     s: { SC: 4 } },
      { text: 'Physicality — I go through them',       detail: 'Power dribble, strong drives, post up',   s: { PF: 2, PA: 2 } },
      { text: 'I focus more on defense',               detail: 'Disrupting plays, guarding, rotating',    s: { WS: 4 } },
      { text: 'Catch-and-shoot / movement without ball', detail: 'Off-screens, spacing, smart passes',   s: { VW: 4 } },
      { text: 'Shooting — I score from all three levels', detail: 'Spot-up threes, pull-ups, finishing at the rim', s: { TL: 4 } }
    ]
  },
  {
    id: 'q03', category: 'Defensive Identity', icon: '🛡️',
    text: 'Which best describes your defensive game?',
    answers: [
      { text: 'Full-court pressure, traps & steals',   detail: 'Make ball handlers miserable',           s: { SG: 2, SP: 1 } },
      { text: 'Lock-down wing D — I don\'t get beat',  detail: 'Lateral quickness, contest everything',  s: { WS: 4 } },
      { text: 'Switch everything — I guard 1 thru 4',  detail: 'IQ and versatility over raw size',       s: { VW: 4 } },
      { text: 'Physical post defense',                 detail: 'Body up bigs, protect the paint',        s: { PF: 2, PA: 1 } },
      { text: 'Shot blocker — I anchor the defense',   detail: 'Rim protector, weak-side help',          s: { PA: 4 } },
      { text: 'Defense is not my primary strength',    detail: 'I contribute more on offense',           s: { SC: 2, SP: 1, TL: 1 } }
    ]
  },
  {
    id: 'q04', category: 'Body Build', icon: '💪',
    text: 'How would you honestly describe your build?',
    answers: [
      { text: 'Lean and fast (under 175 lbs)',         detail: 'Built for quickness over power',         s: { SP: 2, SG: 2 } },
      { text: 'Athletic and toned (175–205 lbs)',       detail: 'Balance of speed and strength',          s: { SC: 2, VW: 2, SG: 1, TL: 1 } },
      { text: 'Strong and physical (205–235 lbs)',      detail: 'Use size as a weapon',                  s: { PF: 2, WS: 1, VW: 1 } },
      { text: 'Big and powerful (235+ lbs)',            detail: 'Dominant in the paint',                  s: { PA: 4, PF: 1 } },
      { text: 'My feet are wide — shoes always feel tight', detail: 'Fit is a constant struggle',        s: { WF: 6 } }
    ]
  },
  {
    id: 'q05', category: 'Age & Recovery', icon: '📅',
    text: 'What\'s your age range?',
    answers: [
      { text: 'Under 18',   detail: 'Still developing athletically',           s: { SP: 1, SG: 1 } },
      { text: '18–25',      detail: 'Prime athletic years',                    s: { SP: 1 } },
      { text: '26–34',      detail: 'Experienced and in your prime',           s: { SC: 1, VW: 1, TL: 1 } },
      { text: '35–44',      detail: 'Seasoned vet — IQ over athleticism',      s: { OH: 4, SC: 1 } },
      { text: '45+',        detail: 'Still competing — body needs more love',  s: { OH: 7 } }
    ]
  },
  {
    id: 'q06', category: 'Court Surface', icon: '🏟️',
    text: 'Where do you play most of your basketball?',
    answers: [
      { text: 'Indoor hardwood — gyms & rec centers', detail: 'Controlled surface, consistent grip',  s: {} },
      { text: 'Outdoor concrete or asphalt only',      detail: 'Blacktop, parks, playgrounds',        s: { OO: 7 } },
      { text: 'Mix — mostly indoor',                   detail: 'Gym most of the time',                s: { OO: 1 } },
      { text: 'Mix — mostly outdoor',                  detail: 'Park ball primarily',                 s: { OO: 4 } }
    ]
  },
  {
    id: 'q07', category: 'Top Priority', icon: '👟',
    text: 'What matters MOST to you in a basketball shoe?',
    answers: [
      { text: 'Traction — grip when I cut and stop',    detail: 'No slipping, period',                        s: { SG: 2, WS: 2 } },
      { text: 'Cushioning — comfort and joint protection', detail: 'My knees and ankles take a beating',      s: { OH: 2, PA: 1, TL: 1 } },
      { text: 'Lightweight — nothing slowing me down',  detail: 'Speed is everything',                        s: { SP: 2, SG: 1 } },
      { text: 'Ankle support — I need to feel locked in', detail: 'Stability during physical play',           s: { PF: 2, PA: 2, WS: 1 } },
      { text: 'Durability — has to survive long sessions', detail: 'I wear shoes out fast',                  s: { OO: 2 } },
      { text: 'Fit — I can\'t find shoes that fit right', detail: 'Comfort starts with proper fit',          s: { WF: 4 } }
    ]
  },
  {
    id: 'q08', category: 'Pain Points', icon: '😤',
    text: 'What\'s your biggest frustration with basketball shoes?',
    answers: [
      { text: 'Too heavy — I feel like I\'m wearing bricks', detail: 'Weight kills my speed',              s: { SP: 2, SG: 1 } },
      { text: 'No traction — I slip on cuts and stops',       detail: 'Lose footing constantly',            s: { WS: 2, SG: 1 } },
      { text: 'Joints hurt after playing',                    detail: 'Knees and ankles need more cushion', s: { OH: 4 } },
      { text: 'Wear out too fast on outdoor courts',          detail: 'Outsole gone in weeks',              s: { OO: 4 } },
      { text: 'Never fit my wide foot right',                  detail: 'Always tight on the sides',         s: { WF: 5 } },
      { text: 'No ankle support for physical play',           detail: 'Need more collar height and lockdown',s: { PF: 2, PA: 2 } }
    ]
  },
  {
    id: 'q09', category: 'Your Reputation', icon: '🏆',
    text: 'How do other players describe your game?',
    answers: [
      { text: '"That crossover is filthy — he broke ankles"',     detail: 'Elite ball handler',           s: { SG: 5 } },
      { text: '"Nobody catches him in the open court"',           detail: 'Fastest on the floor',         s: { SP: 5 } },
      { text: '"He never rushes — always gets his shot off"',     detail: 'Expert shot creator',          s: { SC: 5 } },
      { text: '"He does whatever the team needs"',                detail: 'Versatile, team-first player', s: { VW: 5 } },
      { text: '"Good luck stopping him in the paint"',            detail: 'Physical interior scorer',     s: { PF: 3, PA: 3 } },
      { text: '"I don\'t see him score much but he guards everyone"', detail: 'Defense-first contributor',s: { WS: 5 } },
      { text: '"He can get a bucket from anywhere on the floor"',     detail: 'Elite scorer, three levels',   s: { TL: 5 } }
    ]
  },
  {
    id: 'q10', category: 'Play Style', icon: '🎯',
    text: 'In a close game, what\'s your role?',
    answers: [
      { text: 'I create off the dribble to get myself or others open',  detail: 'Primary creator',        s: { SG: 2, SC: 1 } },
      { text: 'I push the pace and make plays before the D sets up',    detail: 'Transition threat',      s: { SP: 2 } },
      { text: 'I get to my spot and knock down the shot',               detail: 'Assassin in late-clock', s: { SC: 2 } },
      { text: 'I lock up their best player',                            detail: 'Stopper when it counts', s: { WS: 2 } },
      { text: 'I dominate in the post and on the glass',                detail: 'Interior force',         s: { PF: 2, PA: 2 } },
      { text: 'I facilitate, space, and make the right play',           detail: 'IQ player',              s: { VW: 2 } },
      { text: 'I take and make the big shot, from anywhere',            detail: 'Go-to scorer',           s: { TL: 4 } }
    ]
  },
  {
    id: 'q11', category: 'Budget', icon: '💰',
    text: 'What\'s your realistic shoe budget?',
    answers: [
      { text: 'Under $80',     detail: 'Budget-friendly options only',   s: {}, budget: 'budget' },
      { text: '$80 – $130',    detail: 'Mid-range performance shoes',    s: {}, budget: 'mid' },
      { text: '$130 – $200',   detail: 'Premium performance shoes',      s: {}, budget: 'premium' },
      { text: 'Over $200',     detail: 'Top-of-the-line, no limit',      s: {}, budget: 'elite' }
    ]
  },
  {
    id: 'q12', category: 'Fit History', icon: '✅',
    text: 'Have you ever found a basketball shoe that TRULY fit and performed?',
    answers: [
      { text: 'Yes — it completely changed my game',          detail: 'The right shoe is everything',        s: {} },
      { text: 'Yes, but I\'m looking for something better',   detail: 'Ready to upgrade',                   s: {} },
      { text: 'Sort of — there\'s always something off',      detail: 'Never quite perfect',                s: { WF: 1 } },
      { text: 'No — I\'ve never found the right shoe',        detail: 'This is why I\'m here',             s: { WF: 3 } }
    ]
  }
];

/* ── Archetype Keys ─────────────────────────────────────── */
// SG=Shifty Guard, SP=Speed Guard, SC=Shot Creator, TL=3-Level Scorer,
// VW=Versatile Wing, WS=Wing Stopper, PF=Power Forward,
// PA=Paint Anchor, OH=Older Hooper, OO=Outdoor Hooper, WF=Wide Footer

const PRIMARY_KEYS   = ['SG','SP','SC','TL','VW','WS','PF','PA'];
const OVERRIDE_KEYS  = { OH: 6, OO: 6, WF: 7 }; // threshold to trigger override

/* ── State ──────────────────────────────────────────────── */
let state = {
  current: 0,
  answers: [],   // array of answer objects (with .s and optional .budget)
  budget: 'mid'
};

/* ── DOM Cache ──────────────────────────────────────────── */
let $quiz, $gate, $loading, $progress, $progressFill, $progressText, $progressStep;

/* ── Boot ───────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  $quiz        = document.getElementById('quizWrap');
  $gate        = document.getElementById('gateWrap');
  $loading     = document.getElementById('loadingScreen');
  $progress    = document.getElementById('progressBar');
  $progressFill = document.getElementById('progressFill');
  $progressText = document.getElementById('progressText');
  $progressStep = document.getElementById('progressStep');

  renderQuestion(0);
  bindFAQ();
});

/* ── Render ─────────────────────────────────────────────── */
function renderQuestion(idx) {
  const q = QUESTIONS[idx];
  $quiz.innerHTML = buildQuizCard(q, idx);
  updateProgress(idx);

  // Re-bind answer buttons
  document.querySelectorAll('.answer-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.answer-btn').forEach(b => b.classList.remove('picked'));
      btn.classList.add('picked');
      document.getElementById('btnNext').disabled = false;
    });
  });

  document.getElementById('btnBack')?.addEventListener('click', () => {
    if (state.current > 0) {
      state.current--;
      state.answers.pop();
      renderQuestion(state.current);
    }
  });

  document.getElementById('btnNext').addEventListener('click', () => {
    const picked = document.querySelector('.answer-btn.picked');
    if (!picked) return;

    const answerData = JSON.parse(picked.dataset.answer);
    state.answers.push(answerData);
    if (answerData.budget) state.budget = answerData.budget;

    state.current++;

    if (state.current >= QUESTIONS.length) {
      showEmailGate();
    } else {
      renderQuestion(state.current);
    }
  });
}

function buildQuizCard(q, idx) {
  const isFirst = idx === 0;
  const answersHTML = q.answers.map((a, i) => `
    <button class="answer-btn" data-answer='${JSON.stringify({s: a.s || {}, budget: a.budget || null})}'>
      <span class="answer-dot"></span>
      <span>
        <span class="answer-main">${a.text}</span>
        ${a.detail ? `<span class="answer-detail">${a.detail}</span>` : ''}
      </span>
    </button>
  `).join('');

  return `
    <div class="quiz-card">
      <div class="quiz-card-top">
        <div class="quiz-category">${q.category}</div>
        <div class="quiz-icon">${q.icon}</div>
        <div class="quiz-question">${q.text}</div>
      </div>
      <div class="quiz-card-body">
        <div class="answer-list">${answersHTML}</div>
      </div>
      <div class="quiz-nav">
        ${!isFirst ? `<button class="btn-back" id="btnBack">← Back</button>` : `<span></span>`}
        <button class="btn-next" id="btnNext" disabled>
          ${idx === QUESTIONS.length - 1 ? 'Get My Results →' : 'Next →'}
        </button>
      </div>
    </div>
  `;
}

function updateProgress(idx) {
  const pct = Math.round((idx / QUESTIONS.length) * 100);
  $progressFill.style.width = pct + '%';
  $progressText.textContent = pct + '% complete';
  $progressStep.textContent = `Question ${idx + 1} of ${QUESTIONS.length}`;
}

/* ── Email Gate ──────────────────────────────────────────── */
function showEmailGate() {
  $quiz.style.display = 'none';
  document.getElementById('progressContainer').style.display = 'none';
  $gate.classList.add('active');

  document.getElementById('gateForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('gateEmail').value.trim();
    const name  = document.getElementById('gateName').value.trim();
    if (!email) return;

    const result = calculateArchetype();
    storeSession(email, name, result);
    const modParam = result.modifier ? `&m=${result.modifier.toLowerCase()}` : '';
    result._redirect = `results.html?a=${result.primary.toLowerCase()}&b=${result.budget}${modParam}&s=${result.archetypeScore}`;
    showLoading(result);
  });
}

/* ── Scoring Engine (Primary + Modifier System) ─────────── */
// Max possible points per archetype (sum of highest available score across all questions)
const ARCHETYPE_MAX = { SG:20, SP:20, SC:20, TL:19, VW:22, WS:20, PF:16, PA:16, OH:16, OO:14, WF:18 };

function calculateArchetype() {
  const totals = { SG:0, SP:0, SC:0, TL:0, VW:0, WS:0, PF:0, PA:0, OH:0, OO:0, WF:0 };

  for (const ans of state.answers) {
    for (const [key, pts] of Object.entries(ans.s)) {
      if (key in totals) totals[key] += pts;
    }
  }

  // Primary: highest of the 7 position archetypes
  let primary = PRIMARY_KEYS[0], primaryScore = totals[PRIMARY_KEYS[0]];
  for (const key of PRIMARY_KEYS) {
    if (totals[key] > primaryScore) { primaryScore = totals[key]; primary = key; }
  }

  // Modifier: check if any of the 3 modifiers cross threshold
  let modifier = null;
  for (const [key, threshold] of Object.entries(OVERRIDE_KEYS)) {
    if (totals[key] >= threshold) {
      if (!modifier || totals[key] > totals[modifier]) modifier = key;
    }
  }

  // Archetype score: how strongly this person matches their primary archetype (0–100)
  const rawMax  = ARCHETYPE_MAX[primary] || 20;
  const rawGot  = totals[primary] || 0;
  const archetypeScore = Math.min(100, Math.round((rawGot / rawMax) * 100));

  return { primary, modifier, scores: totals, budget: state.budget, archetypeScore };
}

/* ── Session Storage (Security Token) ───────────────────── */
function storeSession(email, name, result) {
  const token   = btoa(`${email}|${Date.now()}|TR2024`).replace(/=/g, '');
  const expiry  = Date.now() + 24 * 60 * 60 * 1000;
  const payload = {
    token, expiry, email, name,
    archetype:      result.primary,
    modifier:       result.modifier || null,
    archetypeScore: result.archetypeScore,
    scores:         result.scores,
    budget:         result.budget
  };
  sessionStorage.setItem('tr_session', JSON.stringify(payload));

  // Send email to collection endpoint (Formspree placeholder)
  submitToFormspree(email, name, result.archetype);
}

function submitToFormspree(email, name, archetype) {
  // Replace YOUR_FORM_ID with your actual Formspree form ID
  const FORMSPREE_ID = 'YOUR_FORM_ID';
  const endpoint = `https://formspree.io/f/${FORMSPREE_ID}`;

  fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ email, name, archetype, source: 'assessment' })
  }).catch(() => {}); // Silent fail — session is already stored
}

/* ── Loading & Redirect ─────────────────────────────────── */
const LOADING_TEXTS = [
  'Analyzing your movement profile…',
  'Cross-referencing 200+ shoe models…',
  'Matching footwear to your archetype…',
  'Building your personalized report…',
  'Almost ready…'
];

function showLoading(result) {
  $gate.classList.remove('active');
  $loading.classList.add('active');

  let i = 0;
  const $lt = document.getElementById('loadingText');
  const interval = setInterval(() => {
    if (i < LOADING_TEXTS.length) {
      $lt.textContent = LOADING_TEXTS[i++];
    } else {
      clearInterval(interval);
      window.location.href = result._redirect;
    }
  }, 900);
}

/* ── FAQ Toggle ─────────────────────────────────────────── */
function bindFAQ() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const answer = btn.nextElementSibling;
      const isOpen = btn.classList.contains('open');
      document.querySelectorAll('.faq-question.open').forEach(b => {
        b.classList.remove('open');
        b.nextElementSibling.classList.remove('open');
      });
      if (!isOpen) { btn.classList.add('open'); answer.classList.add('open'); }
    });
  });
}
