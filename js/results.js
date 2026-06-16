/* ============================================================
   TRACTION REPORT — RESULTS ENGINE v1.0
   ============================================================ */

'use strict';

/* ── Archetype Database ────────────────────────────────── */
const ARCHETYPES = {
  SG: {
    key: 'SG',
    name: 'The Shifty Guard',
    emoji: '⚡',
    category: 'Guards',
    tagline: 'You change direction faster than defenders can react.',
    description: `You are not the fastest player in a straight line — and you don't need to be. Your first step is explosive, your hesitation is a trap, and your crossover is a weapon. You can stop on a dime when every other player would slide past the spot. Defenders who key on stopping your speed get beat left. Defenders who cheat left get iced by a step-back. Coaches call players like you "difficult to guard." Your teammates call you "unguardable." The right shoe isn't just a preference for you — it is the literal foundation of your entire offensive game.`,
    movement: ['Explosive lateral cuts', 'Crossovers & hesitations', 'Stop-on-a-dime stops', 'Direction changes at speed', 'First-step penetration', 'On-ball defensive pressure'],
    strengths: ['Ball handling under pressure', 'Creating separation', 'Getting to the rim in traffic', 'Defensive disruption', 'Drawing fouls'],
    weaknesses: ['May not overpower defenders in pure straight-line battles', 'Less effective in strictly half-court physical matchups'],
    wantChars: ['Multi-directional herringbone traction', 'Low-to-mid cut profile', 'Snug heel lockdown', 'Lightweight (under 13 oz)', 'Thin court-feel outsole', 'Forefoot zoom cushioning'],
    avoidChars: ['Heavy high-tops', 'Thick soft cushion that compresses and slides underfoot', 'Wide toe boxes that let the foot shift', 'Inflexible stiff outsoles', 'Loose collar fit'],
    shoes: {
      budget: [
        { name: 'Nike Air Zoom BB NXT',      price: '$85',  reason: 'Elite traction pattern at budget price — herringbone grips from every angle.', link: 'https://www.amazon.com/s?k=Nike+Air+Zoom+BB+NXT' },
        { name: 'Adidas Dame 9',              price: '$90',  reason: 'Exceptional court feel and lockdown. Damian Lillard is a Shifty Guard — same DNA.', link: 'https://www.amazon.com/s?k=Adidas+Dame+9+basketball' }
      ],
      mid: [
        { name: 'Nike Kyrie Infinity',        price: '$130', reason: 'The guard traction standard. Multidirectional herringbone designed specifically for quick guards.', link: 'https://www.amazon.com/s?k=Nike+Kyrie+Infinity' },
        { name: 'New Balance TWO WXY v5',     price: '$120', reason: 'Underrated gem. Exceptional grip, light weight, and a fitted heel that guards love.', link: 'https://www.amazon.com/s?k=New+Balance+TWO+WXY+basketball' }
      ],
      premium: [
        { name: 'Nike Kyrie Low 5',           price: '$155', reason: 'The guard shoe benchmark. Low cut for maximum ankle mobility, premium traction, lockdown heel.', link: 'https://www.amazon.com/s?k=Nike+Kyrie+Low+5' },
        { name: 'Nike PG 6',                  price: '$110', reason: 'Paul George's signature: lightweight, tight lockdown, excellent court feel.', link: 'https://www.amazon.com/s?k=Nike+PG+6+basketball' }
      ],
      elite: [
        { name: 'Nike Kobe 6 Protro',         price: '$180', reason: 'The all-time guard shoe. Premium materials, iconic traction, ankle freedom for quick cuts.', link: 'https://www.amazon.com/s?k=Nike+Kobe+Protro+basketball' },
        { name: 'Adidas Harden Vol 9 Low',    price: '$140', reason: 'Engineered for quick guards. Boost cushioning with a low profile and surprising traction.', link: 'https://www.amazon.com/s?k=Adidas+Harden+Vol+basketball' }
      ]
    }
  },

  SP: {
    key: 'SP',
    name: 'The Speed Guard',
    emoji: '🚀',
    category: 'Guards',
    tagline: 'The defense hasn\'t set yet — and you\'re already at the rim.',
    description: `Your game is built on pace. You push every rebound into transition, you run the break before a second thought, and you get to your spots before the defense can organize. Defenders who give you a step don't get that step back. You live in the open court, you thrive in the first 4 seconds of a possession, and when the game slows down you still have an extra gear nobody else can match. Your shoe needs to support that pace — light enough to not steal speed, responsive enough to make every stride count, and grippy enough to plant and kick at full speed.`,
    movement: ['Full-speed straight-line runs', 'Pushing transition before defense sets', 'Finishing at the rim at pace', 'Getting in passing lanes', 'Defensive gap closes'],
    strengths: ['Transition finishing', 'Defensive pressure in passing lanes', 'Creating easy baskets through pace', 'Turning turnovers into points'],
    weaknesses: ['May struggle in prolonged half-court isolation', 'Less effective when game slows to a walk'],
    wantChars: ['Lightweight construction (under 11 oz preferred)', 'Responsive cushioning (not too soft)', 'Low-profile silhouette', 'Secure midfoot cage', 'Breathable upper for extended runs'],
    avoidChars: ['Heavy high-tops that limit ankle mobility', 'Thick plush cushioning (energy loss)', 'Stiff outsoles', 'Poor ventilation'],
    shoes: {
      budget: [
        { name: 'Under Armour Curry Flow 9',  price: '$75',  reason: 'FlowTM cushioning is surprisingly lightweight and responsive. Great for quick guards.', link: 'https://www.amazon.com/s?k=Under+Armour+Curry+Flow+basketball' },
        { name: 'Adidas Trae Young 3',         price: '$90',  reason: 'Low-cut, lightweight, and built for explosive guards. Strong value.', link: 'https://www.amazon.com/s?k=Adidas+Trae+Young+basketball' }
      ],
      mid: [
        { name: 'Nike Zoom Freak 5',          price: '$110', reason: 'Featherlight and explosive. The zoom unit in the forefoot rewards fast movers.', link: 'https://www.amazon.com/s?k=Nike+Zoom+Freak+5' },
        { name: 'Under Armour Curry 12 Low',  price: '$130', reason: 'Light, fast-feeling, excellent court connection. Steph\'s low for transition specialists.', link: 'https://www.amazon.com/s?k=Under+Armour+Curry+12+basketball' }
      ],
      premium: [
        { name: 'Nike Air Zoom BB NXT',       price: '$150', reason: 'Carbon fiber plate + zoom units = maximum energy return for speed players.', link: 'https://www.amazon.com/s?k=Nike+Air+Zoom+BB+NXT' },
        { name: 'New Balance TWO WXY v5',     price: '$120', reason: 'Shockingly light for a performance shoe. Speed-focused without sacrificing stability.', link: 'https://www.amazon.com/s?k=New+Balance+TWO+WXY+basketball' }
      ],
      elite: [
        { name: 'Nike Kobe AD Low',           price: '$160', reason: 'The sprint shoe of basketball. Designed for explosive speed, cut weight ruthlessly.', link: 'https://www.amazon.com/s?k=Nike+Kobe+AD+basketball' },
        { name: 'Adidas Speedbreak',          price: '$120', reason: 'Built for transition guards — ultra-low, light, locked in.', link: 'https://www.amazon.com/s?k=Adidas+basketball+speed+low' }
      ]
    }
  },

  SC: {
    key: 'SC',
    name: 'The Shot Creator',
    emoji: '🎯',
    category: 'Guards',
    tagline: 'You don\'t need the defense to make a mistake. You make your own shot.',
    description: `You live in the mid-range. Step-backs, floaters, hesitation pull-ups — you don't need the defense to break down. You create separation through footwork, not athleticism. Your jab step is a negotiation. Your shot fake is a threat. The court is a chess board and you're always three moves ahead. You need a shoe that supports precision movement — enough traction to plant hard, enough cushion to handle the volume of possessions you generate, and enough court feel to execute footwork that looks like choreography.`,
    movement: ['Jab steps and shot fakes', 'Step-back jumpers', 'Pull-up mid-range off the dribble', 'Floaters in traffic', 'Off-ball catch-and-shoot cuts'],
    strengths: ['Shot creation without athleticism', 'Footwork precision', 'Late-clock execution', 'Free throw generation', 'Scoring in half-court sets'],
    weaknesses: ['May not dominate in pure transition', 'Less effective in pressure defense scenarios'],
    wantChars: ['Consistent traction for planting on pull-ups', 'Moderate cushioning (responsive, not soft)', 'Comfortable fit for extended play', 'Flexible forefoot for footwork', 'Mid-weight profile'],
    avoidChars: ['Razor-thin soles with no cushion', 'Extremely stiff shoes that limit footwork', 'Shoes that feel insecure on quick plant-and-shoot movements'],
    shoes: {
      budget: [
        { name: 'Jordan Luka 2',              price: '$90',  reason: 'Built for footwork-heavy scorers. Cushion for pull-up volume, solid traction.', link: 'https://www.amazon.com/s?k=Jordan+Luka+2+basketball' },
        { name: 'Adidas Dame 9',              price: '$90',  reason: 'Mid-range mastery — same shoe Dame Lillard uses to hit step-back threes all night.', link: 'https://www.amazon.com/s?k=Adidas+Dame+9+basketball' }
      ],
      mid: [
        { name: 'Nike Kobe 5 Protro',         price: '$140', reason: 'The footwork shoe. Kobe was the ultimate shot creator — his shoe reflects it perfectly.', link: 'https://www.amazon.com/s?k=Nike+Kobe+5+Protro' },
        { name: 'New Balance Kawhi 3',        price: '$115', reason: 'Leonard\'s silky footwork in a shoe. Solid cushioning, excellent traction, court feel.', link: 'https://www.amazon.com/s?k=New+Balance+Kawhi+basketball' }
      ],
      premium: [
        { name: 'Nike Air Max Penny 1',       price: '$160', reason: 'Classic shot-creator design with modern traction — balanced cushioning for pull-up volume.', link: 'https://www.amazon.com/s?k=Nike+Air+Max+Penny+basketball' },
        { name: 'Adidas Harden Vol 9',        price: '$140', reason: 'Harden defined shot creation in this era. His shoe is built for exactly that.', link: 'https://www.amazon.com/s?k=Adidas+Harden+Vol+9' }
      ],
      elite: [
        { name: 'Nike Jordan 1 Low (Retro Basketball)', price: '$130', reason: 'Legacy traction + low cut = pure mid-range weapon. Feels like an extension of your feet.', link: 'https://www.amazon.com/s?k=Air+Jordan+1+low+basketball' },
        { name: 'New Balance TWO WXY v5 Mid', price: '$130', reason: 'Underrated shot-creator shoe. Mid cut for slight ankle support without weight penalty.', link: 'https://www.amazon.com/s?k=New+Balance+TWO+WXY+mid+basketball' }
      ]
    }
  },

  VW: {
    key: 'VW',
    name: 'The Versatile Wing',
    emoji: '🦅',
    category: 'Wings',
    tagline: 'You do everything well — and that\'s your superpower.',
    description: `You're the glue that holds a team together. You can guard 1 through 4, get to spots off screens, attack closeouts, and make the right play every time. Your value isn't measured in a single stat — it's measured in wins. You don't need the ball to impact the game. You find the gap between roles and you fill it. For you, the perfect shoe is a do-everything performer: solid traction, reliable cushioning, quality lockdown, and mid-weight construction that doesn't get in the way. You're not a specialist — your shoe shouldn't be either.`,
    movement: ['Off-ball cuts and screens', 'Catch-and-shoot positioning', 'Driving on closeouts', 'Switching on defense across multiple positions', 'Rotating as weakside help'],
    strengths: ['Multi-positional defense', 'IQ-based offense', 'Transition and secondary break', 'Making the extra pass', 'Communicating on defense'],
    weaknesses: ['May not dominate athletically', 'Less effective as a primary ball handler under pressure'],
    wantChars: ['Balanced traction', 'Mid-cut for ankle support and mobility', 'Moderate cushioning', 'Durable upper for extended rotations', 'True-to-size fit'],
    avoidChars: ['Hyper-specialized guard shoes with zero support', 'Extremely heavy big-man shoes that slow lateral movement', 'Narrow fit (foot fatigue over long games)'],
    shoes: {
      budget: [
        { name: 'Nike PG 5',                  price: '$70',  reason: 'Paul George\'s shoe is a versatile wing\'s dream — balanced in every category.', link: 'https://www.amazon.com/s?k=Nike+PG+5+basketball' },
        { name: 'Adidas Trae Young 3 Mid',    price: '$100', reason: 'Mid-cut versatility shoe with solid traction and comfortable all-game cushioning.', link: 'https://www.amazon.com/s?k=Adidas+Trae+Young+3+mid' }
      ],
      mid: [
        { name: 'Nike LeBron 22 Low',         price: '$135', reason: 'LeBron is the prototype versatile wing. Low version for perimeter players.', link: 'https://www.amazon.com/s?k=Nike+LeBron+22+low' },
        { name: 'Jordan Why Not Zero.5',      price: '$120', reason: 'Westbrook-level versatility in a shoe. Cushioned, grippy, and mid-weight.', link: 'https://www.amazon.com/s?k=Jordan+Why+Not+basketball' }
      ],
      premium: [
        { name: 'New Balance TWO WXY v5',     price: '$120', reason: 'Best all-around basketball shoe in this price range. Nothing is compromised.', link: 'https://www.amazon.com/s?k=New+Balance+TWO+WXY+v5' },
        { name: 'Nike KD 17',                 price: '$160', reason: 'Kevin Durant is the wing archetype. His shoe is balanced, fast, and well-cushioned.', link: 'https://www.amazon.com/s?k=Nike+KD+17+basketball' }
      ],
      elite: [
        { name: 'Nike LeBron 22',             price: '$200', reason: 'The flagship wing shoe. Maximum cushioning, multi-directional traction, elite lockdown.', link: 'https://www.amazon.com/s?k=Nike+LeBron+22' },
        { name: 'Adidas AE 1',                price: '$150', reason: 'Anthony Edwards is the modern versatile wing. His shoe delivers on all fronts.', link: 'https://www.amazon.com/s?k=Adidas+AE1+basketball' }
      ]
    }
  },

  WS: {
    key: 'WS',
    name: 'The Wing Stopper',
    emoji: '🛡️',
    category: 'Wings',
    tagline: 'You make offensive players uncomfortable for a living.',
    description: `Defense is not just what you do — it's who you are. You take pride in stopping the best player on the floor. You study tendencies, take charges, disrupt passing lanes, and make perimeter scorers look ordinary. Your lateral quickness is a force multiplier that makes the whole defense better. The secret no one talks about: your shoes matter as much or more than offensive players' shoes. If your traction slips on a closeout, you give up a corner three. If your heel slides in a lateral cut, you get beat off the dribble. Your shoe selection is a defensive decision.`,
    movement: ['Lateral defensive slides', 'Closeouts without over-running', 'Taking charges', 'Tipping passes and deflections', 'Recovering on ball reversals'],
    strengths: ['Lateral quickness and recovery', 'Defensive IQ and positioning', 'On-ball pressure', 'Making scorers second-guess themselves'],
    weaknesses: ['May sacrifice offensive efficiency for defensive focus', 'Less impactful in purely offensive-minded lineups'],
    wantChars: ['Supreme multi-directional traction (deep herringbone required)', 'Low-to-mid cut for lateral mobility', 'Tight heel lockdown', 'Ankle support without stiffness', 'Wide forefoot for stable base'],
    avoidChars: ['Soft cushioning that compresses on lateral cuts', 'Shoes with inadequate traction patterns', 'Heavy construction that slows lateral recovery', 'Loose ankle collar'],
    shoes: {
      budget: [
        { name: 'Nike Kobe AD Mid',           price: '$80',  reason: 'Kobe was the greatest defender at his position. His shoe has elite traction for stoppers.', link: 'https://www.amazon.com/s?k=Nike+Kobe+AD+basketball' },
        { name: 'Adidas Dame 9',              price: '$90',  reason: 'Surprising lateral grip — Dame plays great defense in these, and so can you.', link: 'https://www.amazon.com/s?k=Adidas+Dame+9' }
      ],
      mid: [
        { name: 'Nike Kyrie Infinity',        price: '$130', reason: 'The traction on this shoe is designed for quick multi-directional movement. Perfect for stoppers.', link: 'https://www.amazon.com/s?k=Nike+Kyrie+Infinity' },
        { name: 'New Balance TWO WXY v5',     price: '$120', reason: 'Outstanding herringbone traction with excellent lateral stability.', link: 'https://www.amazon.com/s?k=New+Balance+TWO+WXY+v5' }
      ],
      premium: [
        { name: 'Nike Kobe 6 Protro',         price: '$180', reason: 'The defensive shoe of the 2010s. Herringbone traction specifically designed for stoppers.', link: 'https://www.amazon.com/s?k=Nike+Kobe+6+Protro' },
        { name: 'Jordan Luka 2',              price: '$130', reason: 'Excellent traction for perimeter defenders. Heel lockdown is exceptional.', link: 'https://www.amazon.com/s?k=Jordan+Luka+2+basketball' }
      ],
      elite: [
        { name: 'Nike Kobe 5 Protro',         price: '$180', reason: 'All-time great defensive shoe. Maximum traction, minimal weight, tight lockdown.', link: 'https://www.amazon.com/s?k=Nike+Kobe+5+Protro' },
        { name: 'Nike PG 6',                  price: '$110', reason: 'PG-13 is a perennial Defensive Player of the Year candidate. His shoe reflects it.', link: 'https://www.amazon.com/s?k=Nike+PG+6+basketball' }
      ]
    }
  },

  PF: {
    key: 'PF',
    name: 'The Power Forward',
    emoji: '💥',
    category: 'Bigs',
    tagline: 'You use your body as a weapon — and your shoe has to keep up.',
    description: `You are the engine of the frontcourt. You crash offensive glass, you set screens that open the whole offense, you body up bigs in the post, and you finish in traffic through contact. Your game is physical — more physical than your opponents want. You need a shoe that can handle that punishment. Thin guard shoes crack under your weight. Lightweight materials tear at the seams when you're fighting for position. You need a shoe with real support, real cushioning for landing impact, and a build that matches your intensity.`,
    movement: ['Rolling to the basket', 'Offensive rebounding and tip-ins', 'Post-up positioning', 'Screen-and-roll execution', 'Help-side defensive rotations'],
    strengths: ['Physicality and interior scoring', 'Offensive rebounding', 'Setting screens', 'Defending the paint'],
    weaknesses: ['May be limited in pure perimeter situations', 'Less quickness laterally on the perimeter'],
    wantChars: ['High-top or mid-cut for ankle support', 'Durable and reinforced upper', 'Impact cushioning (especially heel)', 'Wide base outsole for stability', 'Traction suitable for paint play'],
    avoidChars: ['Fragile lightweight guard shoes', 'Low-tops without ankle support', 'Thin outsoles that wear quickly', 'Narrow last (foot comfort issue for bigs)'],
    shoes: {
      budget: [
        { name: 'Nike LeBron Witness 8',     price: '$80',  reason: 'LeBron\'s budget big-man shoe. Real cushioning, real support, real durability.', link: 'https://www.amazon.com/s?k=Nike+LeBron+Witness+basketball' },
        { name: 'Adidas Pro Bounce',         price: '$75',  reason: 'Solid Boost cushioning in a mid-cut that physical forwards can rely on.', link: 'https://www.amazon.com/s?k=Adidas+Pro+Bounce+basketball' }
      ],
      mid: [
        { name: 'Jordan Why Not Zero.5 Mid',  price: '$130', reason: 'Westbrook\'s PF energy — physical, explosive, cushioned, mid-cut support.', link: 'https://www.amazon.com/s?k=Jordan+Why+Not+mid+basketball' },
        { name: 'Under Armour HOVR Havoc 4', price: '$110', reason: 'Excellent heel cushioning for landing impact. High-quality construction for physical play.', link: 'https://www.amazon.com/s?k=Under+Armour+HOVR+Havoc+basketball' }
      ],
      premium: [
        { name: 'Nike LeBron 22',             price: '$200', reason: 'LeBron\'s flagship — built for a 6\'9" 250lb forward doing everything. Perfect match.', link: 'https://www.amazon.com/s?k=Nike+LeBron+22' },
        { name: 'Nike Zoom Freak 5',          price: '$120', reason: 'Giannis is a power forward with guard speed. His shoe handles both dimensions.', link: 'https://www.amazon.com/s?k=Nike+Zoom+Freak+5' }
      ],
      elite: [
        { name: 'Nike LeBron 22 High',        price: '$220', reason: 'The complete big-man shoe for mobile power forwards — cushion, support, traction.', link: 'https://www.amazon.com/s?k=Nike+LeBron+22+high' },
        { name: 'Adidas AE 1 Mid',           price: '$160', reason: 'Surprisingly great for physical wings and power forwards — excellent heel crash pad.', link: 'https://www.amazon.com/s?k=Adidas+AE1+mid+basketball' }
      ]
    }
  },

  PA: {
    key: 'PA',
    name: 'The Paint Anchor',
    emoji: '🏛️',
    category: 'Bigs',
    tagline: 'You protect the paint and own the glass.',
    description: `You are the last line of defense and the first name on the defensive glass. Your presence changes how the entire opposing offense operates — they have to think twice before driving the lane. Your game is about position, leverage, timing, and raw power. Drop steps, hook shots, box-outs, shot blocks — you do the unseen work that wins championships. Your shoe requirements are different from every other player on the court. You absorb more impact per game than anyone. You need maximum cushioning, real ankle protection, and a wide stable base that won't compromise under your weight.`,
    movement: ['Establishing post position', 'Drop steps and hook shots', 'Sealing defenders on the block', 'Timing and jumping for blocks', 'Boxing out and rebounding'],
    strengths: ['Rim protection and shot-altering', 'Offensive rebounding and putbacks', 'Interior scoring through positioning', 'Screen setting and rolling'],
    weaknesses: ['Limited lateral quickness for perimeter', 'Not built for guard movement patterns'],
    wantChars: ['Maximum heel and impact cushioning', 'High ankle collar', 'Wide base outsole for stability', 'Reinforced toe box (for physical play)', 'Durable construction for 240+ lbs', 'Available in wide widths'],
    avoidChars: ['Guard shoes (lack cushion for big-man impact)', 'Low-tops (insufficient ankle support)', 'Thin or minimal outsoles', 'Shoes not rated for heavier athletes'],
    shoes: {
      budget: [
        { name: 'Nike LeBron Witness 8',      price: '$80',  reason: 'Built for a bigger athlete. Real cushioning and a wide-ish fit for paint anchors on a budget.', link: 'https://www.amazon.com/s?k=Nike+LeBron+Witness' },
        { name: 'Reebok Classic Basketball',  price: '$70',  reason: 'Surprising quality for centers. Classic big-man construction at a low price.', link: 'https://www.amazon.com/s?k=Reebok+Classic+basketball' }
      ],
      mid: [
        { name: 'Under Armour HOVR Havoc 4', price: '$110', reason: 'HOVR foam absorbs impact exceptionally well — ideal for a center\'s jump load.', link: 'https://www.amazon.com/s?k=Under+Armour+HOVR+Havoc' },
        { name: 'Nike Air Max Impact 4',      price: '$85',  reason: 'Air Max unit provides big-man cushioning at a mid-range price. High ankle collar.', link: 'https://www.amazon.com/s?k=Nike+Air+Max+Impact+basketball' }
      ],
      premium: [
        { name: 'Nike LeBron 22 High',        price: '$220', reason: 'The center shoe for mobile anchors. Max Zoom Air + LeBron lockdown = paint domination.', link: 'https://www.amazon.com/s?k=Nike+LeBron+22+high' },
        { name: 'Adidas Dame 9 Mid',          price: '$120', reason: 'High-quality Lightstrike cushioning — not just for guards. Mid version offers ankle support.', link: 'https://www.amazon.com/s?k=Adidas+Dame+9+mid' }
      ],
      elite: [
        { name: 'Nike Shox R4 Basketball',   price: '$160', reason: 'The column cushioning system was engineered for big-man impact. Nothing absorbs landings like Shox.', link: 'https://www.amazon.com/s?k=Nike+Shox+basketball' },
        { name: 'New Balance 880 Basketball', price: '$150', reason: 'NB\'s wider last and Fresh Foam cushion make this a hidden gem for paint anchors.', link: 'https://www.amazon.com/s?k=New+Balance+basketball+cushion' }
      ]
    }
  },

  OH: {
    key: 'OH',
    name: 'The Older Hooper',
    emoji: '🧠',
    category: 'Specialty',
    tagline: 'You\'ve got the IQ, the footwork, and the post game. Now your shoe needs to protect what built them.',
    description: `Age is a basketball asset that nobody talks about. Your feel for the game, your anticipation, your footwork in the post, your basketball IQ — these compound over decades. What doesn't compound is joint recovery time. The rookie next to you can play 5 days straight and feel nothing. You need the right shoe because every game is an investment now. The wrong pair means knees that ache on Monday, ankles that swell by Tuesday, and plantar fascia that protests on Wednesday. The right pair means you're still playing at 60% quality every time out — and 60% of your game beats most people's 100%.`,
    movement: ['Deliberate, IQ-based offensive positioning', 'Post footwork and drop steps', 'Catch-and-shoot off screens', 'Smart defensive rotations without overextending'],
    strengths: ['Basketball IQ and reading the game', 'Footwork and positioning', 'Leadership and communication', 'Free throw and mid-range efficiency'],
    weaknesses: ['Recovery time longer than younger players', 'Joints require more protection per session'],
    wantChars: ['Superior heel cushioning and impact absorption', 'Arch support built into midsole', 'Roomy toe box (avoid narrow fits)', 'Lightweight construction to reduce fatigue', 'Breathable upper for longer wear time', 'Removable insole (for orthotics)'],
    avoidChars: ['Hard-plate shoes with minimal cushioning', 'Shoes that add significant weight', 'Narrow toe boxes', 'Shoes that require break-in time', 'Low-profile shoes with thin midsoles'],
    shoes: {
      budget: [
        { name: 'New Balance 860v13 (Court)',  price: '$75',  reason: 'Fresh Foam cushioning with arch support. One of the most comfortable court shoes available.', link: 'https://www.amazon.com/s?k=New+Balance+860+basketball+court' },
        { name: 'HOKA Kawana Sport',           price: '$85',  reason: 'HOKA\'s max-cushion tech at a lower price. Joints will thank you by Tuesday.', link: 'https://www.amazon.com/s?k=HOKA+basketball+court+shoe' }
      ],
      mid: [
        { name: 'Nike React Infinity Run (Court)', price: '$110', reason: 'React foam is the softest, most protective cushioning Nike makes. Surprisingly court-capable.', link: 'https://www.amazon.com/s?k=Nike+React+basketball' },
        { name: 'New Balance TWO WXY v4',      price: '$100', reason: 'Fresh Foam cushioning with a wider toe box. Built-in comfort for longer sessions.', link: 'https://www.amazon.com/s?k=New+Balance+basketball+older' }
      ],
      premium: [
        { name: 'Adidas Boost Basketball',    price: '$130', reason: 'Boost is the gold standard for impact absorption. Joints love this foam over a long game.', link: 'https://www.amazon.com/s?k=Adidas+Boost+basketball' },
        { name: 'Under Armour HOVR Havoc 4', price: '$110', reason: 'HOVR foam returns energy AND absorbs impact — the best of both worlds for veterans.', link: 'https://www.amazon.com/s?k=Under+Armour+HOVR+basketball' }
      ],
      elite: [
        { name: 'Nike LeBron 22',             price: '$200', reason: 'LeBron plays at 39+ in these. The max-cushion flagship for experienced athletes who won\'t quit.', link: 'https://www.amazon.com/s?k=Nike+LeBron+22' },
        { name: 'New Balance OMN1S',          price: '$145', reason: 'Joel Embiid\'s shoe — his knees require the best. Wide fit, premium cushioning.', link: 'https://www.amazon.com/s?k=New+Balance+OMN1S+basketball' }
      ]
    }
  },

  OO: {
    key: 'OO',
    name: 'The Outdoor Hooper',
    emoji: '🏚️',
    category: 'Specialty',
    tagline: 'The asphalt is your arena. Not everyone can play here.',
    description: `Outdoor basketball is a different sport. The surface is harder, the game is more physical, the weather is unpredictable, and the shoes die faster. Most indoor court shoes dissolve into smooth rubber in 3 weeks of outdoor play. The wrong shoe means no traction on dusty concrete, which means you can't make the cuts that define your game. You need a shoe built for the jungle — thick XDR rubber outsole that survives the pavement, durable materials that shrug off grit and moisture, and enough cushioning to protect your joints on a surface that shows no mercy.`,
    movement: ['All movement patterns on hard outdoor surfaces', 'Adjusting for uneven court conditions', 'Playing through weather and dust'],
    strengths: ['Toughness and adaptability', 'Performing in any environment', 'Competing with limited resources'],
    weaknesses: ['May need to replace shoes more frequently', 'Surface wear affects traction over time'],
    wantChars: ['XDR (extra-durable rubber) or BRS 1000 carbon rubber outsole', 'Abrasion-resistant materials (leather or reinforced mesh)', 'Adequate midsole cushioning for hard surfaces', 'Strong stitching on all overlays', 'Excellent ventilation (outdoor games are hot)'],
    avoidChars: ['Indoor-only court shoes (will wear out in weeks)', 'Fragile flyknit or engineered mesh uppers', 'Shoes with pattern-only traction (no rubber depth)', 'White outsoles (show wear, also lose grip fast)'],
    shoes: {
      budget: [
        { name: 'Reebok Answer V',            price: '$65',  reason: 'Reebok outdoor rubber is legendary. This line survives concrete better than almost anything.', link: 'https://www.amazon.com/s?k=Reebok+basketball+outdoor' },
        { name: 'Nike Air Max Impact 4',      price: '$85',  reason: 'Air Max unit + durable BRS rubber outsole. Specifically designed for all surfaces.', link: 'https://www.amazon.com/s?k=Nike+Air+Max+Impact+outdoor' }
      ],
      mid: [
        { name: 'Adidas Pro Bounce Madness', price: '$100', reason: 'Continental rubber outsole was designed for outdoor performance. Tough and grippy.', link: 'https://www.amazon.com/s?k=Adidas+Pro+Bounce+outdoor+basketball' },
        { name: 'Under Armour HOVR Havoc 4', price: '$110', reason: 'Solid XDR rubber on the outsole + excellent cushioning for concrete impact.', link: 'https://www.amazon.com/s?k=Under+Armour+HOVR+outdoor' }
      ],
      premium: [
        { name: 'Nike LeBron 22',             price: '$200', reason: 'The outsole on LeBrons is some of the most durable rubber Nike produces. Handles outdoor.', link: 'https://www.amazon.com/s?k=Nike+LeBron+22+outdoor' },
        { name: 'Reebok Legacy Court',        price: '$90',  reason: 'Reebok built their legacy outdoors. This model carries that tradition forward.', link: 'https://www.amazon.com/s?k=Reebok+Legacy+court+basketball' }
      ],
      elite: [
        { name: 'Nike KD 17',                 price: '$160', reason: 'One of Nike\'s best outdoor performers. KD rubber is thick, grips well on dirty surfaces.', link: 'https://www.amazon.com/s?k=Nike+KD+17+outdoor' },
        { name: 'New Balance TWO WXY v5',     price: '$120', reason: 'NB\'s rubber compounds test well outdoors. Less common on the blacktop = more life left.', link: 'https://www.amazon.com/s?k=New+Balance+outdoor+basketball' }
      ]
    }
  },

  WF: {
    key: 'WF',
    name: 'The Wide Footer',
    emoji: '👣',
    category: 'Specialty',
    tagline: 'The right fit unlocks your entire game. You\'ve been missing out.',
    description: `You've been forcing your feet into shoes built for someone else's feet — and your game has been paying the price. Wide footers who play in narrow shoes deal with black toenails, pinky pain, midfoot blisters, instability on cuts, and chronic discomfort that affects every step. The $150 shoe that doesn't fit is a worse investment than the $80 shoe that does. Once you find the right last, everything changes: your cuts feel planted instead of wobbly, your stops are controlled instead of scary, and your feet don't hate you on day two. This isn't a style recommendation — it's a biomechanical one.`,
    movement: ['All movement patterns — just in the correct footwear', 'Stability on cuts (major upgrade in proper fit)', 'Reduced foot fatigue over full game'],
    strengths: ['Once properly fit, all athletic capabilities unlock', 'Stability naturally improves with correct width'],
    weaknesses: ['Limited selection — not every shoe available in wide widths', 'May need to size up in some brands'],
    wantChars: ['Wide toe box (2E or 4E sizing preferred)', 'Forgiving upper materials (mesh or soft leather)', 'Roomy heel cup — not narrow at the back', 'Available in multiple widths', 'No restrictive overlays across the forefoot'],
    avoidChars: ['Nike Flyknit (narrow and constricting)', 'Shoes with carbon wraps that constrict forefoot', 'Shoes described as "snug" or "narrow fit"', 'Any shoe without a wide width option if feet are 2E+'],
    shoes: {
      budget: [
        { name: 'New Balance Kcourt v2',      price: '$75',  reason: 'New Balance\'s basketball lines run naturally wider. This is the best budget option for wide feet.', link: 'https://www.amazon.com/s?k=New+Balance+basketball+wide' },
        { name: 'Under Armour Flow Breakthru 4', price: '$80', reason: 'UA\'s basketball last tends to be wider than Nike. Comfortable out of box for wider feet.', link: 'https://www.amazon.com/s?k=Under+Armour+Flow+basketball' }
      ],
      mid: [
        { name: 'New Balance TWO WXY v5',     price: '$120', reason: 'Available in wide widths. Best overall fit for wide footers who still need performance.', link: 'https://www.amazon.com/s?k=New+Balance+TWO+WXY+wide' },
        { name: 'Nike LeBron Witness 8 Wide', price: '$100', reason: 'Nike\'s LeBron line has a wider toe box than most Nike silhouettes. Request 2E if available.', link: 'https://www.amazon.com/s?k=Nike+LeBron+wide+basketball' }
      ],
      premium: [
        { name: 'New Balance OMN1S (2E)',      price: '$145', reason: 'Joel Embiid wears wide shoes. NB made his signature in wide. A real wide-footer shoe.', link: 'https://www.amazon.com/s?k=New+Balance+OMN1S+wide' },
        { name: 'Nike LeBron 22 (2E)',         price: '$200', reason: 'LeBron has wide feet. His shoes are designed with more volume than standard Nike.', link: 'https://www.amazon.com/s?k=Nike+LeBron+22+wide' }
      ],
      elite: [
        { name: 'New Balance TWO WXY v5 (4E)', price: '$130', reason: 'The widest performance basketball shoe available. No compromises on performance.', link: 'https://www.amazon.com/s?k=New+Balance+basketball+4E+wide' },
        { name: 'Brooks Ghost Court',          price: '$130', reason: 'Made for wider feet from the ground up. Excellent for wide footers who need all-day comfort.', link: 'https://www.amazon.com/s?k=Brooks+court+basketball+wide' }
      ]
    }
  }
};

const ARCHETYPE_LABELS = {
  SG: 'Shifty Guard', SP: 'Speed Guard', SC: 'Shot Creator',
  VW: 'Versatile Wing', WS: 'Wing Stopper', PF: 'Power Forward',
  PA: 'Paint Anchor', OH: 'Older Hooper', OO: 'Outdoor Hooper', WF: 'Wide Footer'
};

/* ── Boot ───────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const session = getSession();
  if (!session) {
    window.location.href = 'assessment.html?ref=expired';
    return;
  }

  const params        = new URLSearchParams(window.location.search);
  const aKey          = (params.get('a') || session.archetype || 'VW').toUpperCase();
  const mKey          = (params.get('m') || session.modifier || '').toUpperCase() || null;
  const budget        = params.get('b') || session.budget || 'mid';
  const archetypeScore = parseInt(params.get('s') || session.archetypeScore || 0, 10);
  const primaryData   = ARCHETYPES[aKey] || ARCHETYPES['VW'];
  const modData       = mKey ? ARCHETYPES[mKey] : null;

  renderHero(primaryData, modData, archetypeScore);
  renderProfile(primaryData);
  renderChars(primaryData, modData);
  renderShoes(primaryData, budget, modData);
  renderScores(session.scores);
  bindBudgetTabs(primaryData, budget, modData);
  bindCapture(primaryData, modData);
  bindFAQ();
  animateScores();
});

/* ── Session Validation ─────────────────────────────────── */
function getSession() {
  try {
    const raw = sessionStorage.getItem('tr_session');
    if (!raw) return null;
    const s = JSON.parse(raw);
    if (!s.token || !s.expiry) return null;
    if (Date.now() > s.expiry) { sessionStorage.removeItem('tr_session'); return null; }
    return s;
  } catch { return null; }
}

/* ── Score Descriptor ───────────────────────────────────── */
function scoreDescriptor(score) {
  if (score >= 90) return 'Elite match — you are a textbook example of this archetype.';
  if (score >= 75) return 'Strong match — this archetype defines most of your game.';
  if (score >= 60) return 'Good match — this archetype is your dominant style with some secondary traits.';
  if (score >= 45) return 'Moderate match — strong elements of this archetype with meaningful crossover.';
  return 'Closest match — you\'re a hybrid player; secondary archetype may also apply.';
}

/* ── Render Functions ────────────────────────────────────── */
function renderHero(data, modData, archetypeScore) {
  document.getElementById('archetypeEmoji').textContent = data.emoji;
  document.getElementById('archetypeBadge').textContent = data.category + ' Archetype';
  document.getElementById('archetypeName').textContent = data.name;
  document.getElementById('archetypeTagline').textContent = data.tagline;
  document.getElementById('archetypeDesc').textContent = data.description;
  document.title = `${data.name} — Traction Report`;
  document.getElementById('captureArchetypeName').textContent = data.name;

  // Archetype Score
  const scoreEl = document.getElementById('archetypeScoreNum');
  const scoreBar = document.getElementById('archetypeScoreBar');
  const scoreDesc = document.getElementById('archetypeScoreDesc');
  if (scoreEl) {
    scoreEl.textContent = archetypeScore || '—';
    scoreDesc.textContent = archetypeScore ? scoreDescriptor(archetypeScore) : '';
    setTimeout(() => { if (scoreBar) scoreBar.style.width = (archetypeScore || 0) + '%'; }, 400);
  }

  // Primary traits (top 3 keywords from movement profile)
  const traitsRow = document.getElementById('traitsRow');
  if (traitsRow && data.movement) {
    traitsRow.innerHTML = data.movement.slice(0, 4).map(m => `
      <span class="trait-tag"><span class="t-icon">⚡</span>${m}</span>
    `).join('');
  }

  // Modifier banner
  if (modData) {
    const banner = document.getElementById('modifierBanner');
    const primEl = document.getElementById('modifierPrimary');
    const badgeEl = document.getElementById('modifierBadge');
    if (banner) {
      banner.style.display = 'inline-flex';
      primEl.textContent = data.name;
      badgeEl.textContent = '+ ' + modData.name + ' Modifier';
    }
  }
}

function renderProfile(data) {
  document.getElementById('profileMovement').innerHTML = data.movement.map(m => `<li>${m}</li>`).join('');
  document.getElementById('profileStrengths').innerHTML = data.strengths.map(s => `<li>${s}</li>`).join('');
  document.getElementById('profileWeaknesses').innerHTML = data.weaknesses.map(w => `<li>${w}</li>`).join('');
}

function renderChars(data, modData) {
  document.getElementById('charTags').innerHTML = data.wantChars.map(c => `<span class="char-tag">${c}</span>`).join('');
  document.getElementById('avoidTags').innerHTML = data.avoidChars.map(c => `<span class="char-tag avoid">${c}</span>`).join('');

  // Modifier characteristics
  if (modData) {
    const modSection = document.getElementById('modifierChars');
    if (modSection) {
      modSection.style.display = 'block';
      document.getElementById('modifierCharsLabel').textContent = modData.name + ' Modifier';
      document.getElementById('modifierCharsTitle').textContent = `Your ${modData.name} modifier adds these additional requirements`;
      document.getElementById('modCharTags').innerHTML = modData.wantChars.map(c => `<span class="char-tag">${c}</span>`).join('');
      document.getElementById('modAvoidTags').innerHTML = modData.avoidChars.map(c => `<span class="char-tag avoid">${c}</span>`).join('');
    }
  }
}

function renderShoes(data, budget, modData) {
  const shoes = data.shoes[budget] || data.shoes.mid;
  document.getElementById('shoesGrid').innerHTML = shoes.map((shoe, i) => `
    <div class="shoe-card">
      <div class="shoe-rank">${i === 0 ? '⭐ Top Pick' : `Pick #${i + 1}`}</div>
      <div class="shoe-name">${shoe.name}</div>
      <div class="shoe-price">${shoe.price}</div>
      <div class="shoe-reason">${shoe.reason}</div>
      <a href="${shoe.link}" target="_blank" rel="noopener sponsored" class="btn-buy">
        Shop This Shoe →
      </a>
    </div>
  `).join('');
}

function renderScores(scores) {
  if (!scores) return;
  const $rows = document.getElementById('scoreRows');
  if (!$rows) return;

  const max = Math.max(...Object.values(scores), 1);
  $rows.innerHTML = Object.entries(scores)
    .sort(([,a],[,b]) => b - a)
    .map(([key, val]) => {
      const pct = Math.round((val / max) * 100);
      return `
        <div class="score-row">
          <span class="score-lbl">${ARCHETYPE_LABELS[key] || key}</span>
          <div class="score-bar-bg"><div class="score-bar-fill" data-pct="${pct}"></div></div>
          <span class="score-pct">${pct}%</span>
        </div>
      `;
    }).join('');
}

function animateScores() {
  setTimeout(() => {
    document.querySelectorAll('.score-bar-fill').forEach(bar => {
      bar.style.width = (bar.dataset.pct || 0) + '%';
    });
  }, 300);
}

function bindBudgetTabs(data, defaultBudget, modData) {
  const budgets = ['budget', 'mid', 'premium', 'elite'];
  const labels  = { budget: 'Under $80', mid: '$80–$130', premium: '$130–$200', elite: '$200+' };

  const $tabs = document.getElementById('budgetTabs');
  $tabs.innerHTML = budgets.map(b => `
    <button class="budget-tab ${b === defaultBudget ? 'active' : ''}" data-budget="${b}">${labels[b]}</button>
  `).join('');

  $tabs.querySelectorAll('.budget-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      $tabs.querySelectorAll('.budget-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderShoes(data, tab.dataset.budget, modData);
    });
  });
}

function bindCapture(data, modData) {
  const $form = document.getElementById('captureForm');
  if (!$form) return;
  $form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('captureEmail').value.trim();
    if (!email) return;

    const archLabel = modData ? `${data.key}+${modData.key}` : data.key;
    submitCapture(email, archLabel);

    document.getElementById('captureFormWrap').innerHTML = `
      <div style="text-align:center; padding: 20px 0;">
        <div style="font-size:3rem; margin-bottom:16px;">✅</div>
        <h3 style="color:var(--white); margin-bottom:8px;">You're on the list!</h3>
        <p style="color:rgba(255,255,255,.55); font-size:.9rem;">Check your inbox for your personalized ${data.name} playbook.</p>
      </div>
    `;
  });
}

function submitCapture(email, archetype) {
  const FORMSPREE_ID = 'YOUR_FORM_ID';
  fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ email, archetype, source: 'results-capture' })
  }).catch(() => {});
}

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
