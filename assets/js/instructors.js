(() => {
  'use strict';

  const mentors = [
    {
      name: 'Dr. Sarah Miller, Ph.D.',
      role: 'Director of Robotics Curriculum',
      category: 'spike',
      categoryLabel: 'SPIKE Prime & Sensors',
      education: 'Ph.D. Robotics, Carnegie Mellon University',
      fllRank: '3x National FLL Champion Coach',
      image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=600&auto=format&fit=crop&q=80',
      bio: 'Sarah leads our primary robotics curriculum development. Specializes in gyroscope balancing, ultrasonic autonomous navigation, and inspiring young girls in STEM.',
      specialties: ['SPIKE Prime Core', 'IMU Gyros', 'Algorithmic Loops', 'Capstones'],
      funFact: 'Built her first walking robot out of LEGO Technic at age 9!'
    },
    {
      name: 'David Alvarez',
      role: 'Lead Python & AI Microcontroller Coach',
      category: 'python',
      categoryLabel: 'Python & AI (12-16)',
      education: 'B.S. Computer Science, UC Berkeley',
      fllRank: 'Former RoboSub World Finalist',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&q=80',
      bio: 'Specialist in bridging block code to MicroPython syntax. Teaches students how to write PID line-tracking algorithms, wireless telemetry, and motor speed state machines.',
      specialties: ['MicroPython', 'PID Controllers', 'Data Telemetry', 'State Machines'],
      funFact: 'Programmed his smart home coffee maker using LEGO Spike hub!'
    },
    {
      name: 'Elena Rostova',
      role: 'Early STEM & WeDo Program Coordinator',
      category: 'junior',
      categoryLabel: 'Junior WeDo (5-7)',
      education: 'M.Ed. Early Childhood STEM, Stanford',
      fllRank: 'LEGO Master Educator 2024',
      image: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=600&auto=format&fit=crop&q=80',
      bio: 'Elena turns complex gear mechanics into enchanting storytelling journeys. Master of patience, tactile motor skills development, and collaborative peer-building.',
      specialties: ['Pulleys & Levers', 'Tilt Sensors', 'Visual Icon Coding', 'Creative Play'],
      funFact: 'Owns a personal collection of over 85,000 LEGO pieces!'
    },
    {
      name: 'Marcus Vance',
      role: 'BattleBot Arena & Tournament Director',
      category: 'battlebot',
      categoryLabel: 'BattleBots & Tournaments',
      education: 'B.S. Mechanical Engineering, Georgia Tech',
      fllRank: 'BattleBots TV Crew Competitor',
      image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=600&auto=format&fit=crop&q=80',
      bio: 'Marcus directs our Friday Night BattleBot Sumo leagues. Teaches high-torque gear compounds, shock absorption chassis armor, and tournament sportsmanship.',
      specialties: ['Torque Multiplication', 'Technic Chassis', 'Radio Combat', 'Sportsmanship'],
      funFact: 'Holds the club record for fastest autonomous maze escape (14.2s).'
    },
    {
      name: 'Priya Sharma',
      role: 'FIRST LEGO League (FLL) Master Coach',
      category: 'battlebot',
      categoryLabel: 'FLL League Prep',
      education: 'M.S. Systems Engineering, MIT',
      fllRank: 'FLL Outstanding Mentor Award',
      image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&auto=format&fit=crop&q=80',
      bio: 'Priya mentors our competitive league cohorts. Guides kids through official board mission strategies, robot attachment mechanisms, and innovative research presentations.',
      specialties: ['FLL Strategy', 'Motorized Attachments', 'Team Dynamics', 'Innovation Projects'],
      funFact: 'Coached 4 teams to the FIRST World Championships.'
    },
    {
      name: 'Kenji Takahashi',
      role: 'CAD Design & 3D Print Specialist',
      category: 'spike',
      categoryLabel: 'Hardware & CAD',
      education: 'B.S. Mechatronics, Purdue University',
      fllRank: 'Tinkercad STEM Ambassador',
      image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=600&auto=format&fit=crop&q=80',
      bio: 'Kenji introduces kids to 3D modeling custom LEGO-compatible brackets and robotic chassis extensions using Tinkercad and Fusion 360.',
      specialties: ['Tinkercad', '3D Prototyping', 'Custom Grippers', 'Pneumatics'],
      funFact: '3D printed a full wearable LEGO robot helmet for Halloween!'
    },
    {
      name: 'Aisha Robinson',
      role: 'Creative Mechanics & Junior Robotics Coach',
      category: 'junior',
      categoryLabel: 'Junior WeDo (5-7)',
      education: 'B.A. Child Psychology & STEM Pedagogy, Columbia',
      fllRank: 'Certified Montessori STEM Guide',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop&q=80',
      bio: 'Aisha specializes in nurturing confidence in shy and introverted builders. Turns mechanical trial-and-error into cheerful eureka breakthroughs.',
      specialties: ['Kinetic Sculptures', 'Story Robotics', 'Color Sensors', 'Team Building'],
      funFact: 'Speaks three languages and teaches bilingual robotics classes!'
    },
    {
      name: "Liam O'Connor",
      role: 'Competitive Combat & Electronics Mentor',
      category: 'python',
      categoryLabel: 'Sensors & Firmware',
      education: 'B.S. Electrical Engineering, UT Austin',
      fllRank: 'Hardware Hackathon 1st Place',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&auto=format&fit=crop&q=80',
      bio: 'Liam demystifies electrical components, ultrasonic waveforms, and infrared phototransistors with hands-on breadboard demos.',
      specialties: ['Ultrasonic Sonar', 'Infrared Beacons', 'Circuit Logic', 'Microcontrollers'],
      funFact: 'Built an autonomous robot that feeds his cat at 7:00 AM sharp.'
    }
  ];

  const grid = document.getElementById('instructor-grid');
  if (!grid) return;

  const escapeHtml = value => String(value).replace(/[&<>"']/g, character => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[character]);

  grid.innerHTML = mentors.map(mentor => `
    <article data-instructor-category="${escapeHtml(mentor.category)}" class="bg-white dark:bg-slate-800 rounded-3xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition flex flex-col justify-between group">
      <div>
        <div class="relative w-32 h-32 mx-auto mb-5">
          <div class="absolute inset-0 rounded-2xl bg-amber-400 rotate-3 group-hover:rotate-6 transition-transform"></div>
          <img src="${escapeHtml(mentor.image)}" alt="${escapeHtml(mentor.name)}" loading="lazy" class="relative z-10 w-full h-full object-cover rounded-2xl border-2 border-white dark:border-slate-800 shadow-md">
          <div class="absolute -bottom-2 -right-2 z-20 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shadow" title="Certified Mentor">
            <i data-lucide="check-check" class="w-4 h-4"></i>
          </div>
        </div>

        <div class="text-center space-y-1.5">
          <span class="inline-block text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-0.5 rounded-lg">${escapeHtml(mentor.categoryLabel)}</span>
          <h3 class="font-heading font-bold text-xl text-slate-900 dark:text-white">${escapeHtml(mentor.name)}</h3>
          <span class="block text-xs font-semibold text-amber-600 dark:text-amber-400">${escapeHtml(mentor.role)}</span>
        </div>

        <div class="my-4 pt-3 border-t border-slate-100 dark:border-slate-700/80 space-y-2 text-xs">
          <div class="flex items-start gap-2 text-slate-600 dark:text-slate-300">
            <i data-lucide="graduation-cap" class="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5"></i>
            <span class="leading-tight">${escapeHtml(mentor.education)}</span>
          </div>
          <div class="flex items-center gap-2 text-slate-600 dark:text-slate-300 font-medium">
            <i data-lucide="award" class="w-4 h-4 text-amber-500 flex-shrink-0"></i>
            <span>${escapeHtml(mentor.fllRank)}</span>
          </div>
        </div>

        <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">${escapeHtml(mentor.bio)}</p>
        <div class="flex flex-wrap gap-1.5 mb-4">
          ${mentor.specialties.map(skill => `<span class="text-[10px] font-bold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-700/60 px-2 py-0.5 rounded-md">${escapeHtml(skill)}</span>`).join('')}
        </div>
        <div class="p-3 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/40 text-[11px] text-amber-800 dark:text-amber-300 mb-5 flex items-start gap-2">
          <i data-lucide="sparkles" class="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5"></i>
          <div><strong class="font-bold">Fun Fact:</strong> ${escapeHtml(mentor.funFact)}</div>
        </div>
      </div>

      <button type="button" data-book-mentor="${escapeHtml(mentor.name)}" class="btn-brick btn-brick-blue w-full py-2.5 rounded-xl text-xs font-bold font-heading">
        <i data-lucide="calendar" class="w-3.5 h-3.5"></i>
        <span>Book with This Coach</span>
      </button>
    </article>
  `).join('');

  grid.querySelectorAll('[data-book-mentor]').forEach(button => {
    button.addEventListener('click', () => window.openEnrollModal(`Session with ${button.dataset.bookMentor}`));
  });

  if (window.lucide) window.lucide.createIcons();
})();
