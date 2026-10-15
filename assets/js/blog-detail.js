(function () {
  'use strict';

  const articles = {
    1: {
      title: 'Why Physical LEGO® Building Beats Pure Screen Time for 7-Year-Olds',
      category: 'Parenting Tips & Neuroscience',
      author: 'Coach Sarah Miller',
      role: 'Curriculum Director',
      date: 'Oct 10, 2026',
      readTime: '4 Min Read',
      bio: "Lead Curriculum Director at RoboBricks, with a master's in Robotics Engineering from CMU and a passion for hands-on learning.",
      alt: 'Boy building and testing a hands-on LEGO robot',
      image: 'assets/blog-article-physical-lego-building.png'
    },
    2: {
      title: 'From Block Coding to Python: Helping Kids Make the Leap Without Frustration',
      category: 'Coding Guides',
      author: 'Coach Alex Rivera',
      role: 'Programming Coach',
      date: 'Oct 4, 2026',
      readTime: '6 Min Read',
      bio: 'Coach Alex helps students move from visual coding blocks to readable Python by connecting every new command to a robot they can test.',
      alt: 'Young girl using Scratch block coding on a laptop',
      image: 'assets/blog-article-block-coding-to-python.png',
      body: `<p class="text-lg font-medium text-slate-900 dark:text-slate-100">The move from colorful blocks to typed code can feel like a big jump. Keep the robot and the idea familiar while changing one part of the process at a time.</p><h2 class="text-2xl font-heading font-bold text-slate-900 dark:text-white mt-8 mb-3">Start with a known action</h2><p>Ask your child to make a robot move forward, then show the same instruction as a short Python command. The visible result connects the new syntax to something they already understand.</p><h2 class="text-2xl font-heading font-bold text-slate-900 dark:text-white mt-8 mb-3">Translate one block at a time</h2><p>Write down each block's job before replacing it. Begin with movement, then add a wait, a sensor reading, and a simple condition. Small steps make errors easier to find.</p><h2 class="text-2xl font-heading font-bold text-slate-900 dark:text-white mt-8 mb-3">Treat debugging as a build skill</h2><p>Read the error together, check one line, and run the robot again. Celebrate the test that reveals what to change; that is how young programmers learn to trust evidence over guessing.</p>`
    },
    3: {
      title: '5 Crucial Questions to Ask Before Entering the FIRST LEGO® League',
      category: 'Competitions',
      author: 'Coach Marcus Vance',
      role: 'Competition Coach',
      date: 'Sep 28, 2026',
      readTime: '5 Min Read',
      bio: 'Coach Marcus prepares teams for FIRST LEGO League by balancing robot design, research, teamwork, and a healthy approach to competition.',
      alt: 'A student team cheering around an FLL challenge table',
      image: 'assets/blog-article-fll-crucial-questions.jpg',
      body: `<p class="text-lg font-medium text-slate-900 dark:text-slate-100">A competition can be a great next step when a child enjoys building with a team and explaining how a design works. Ask these questions before choosing a season.</p><h2 class="text-2xl font-heading font-bold text-slate-900 dark:text-white mt-8 mb-3">1. Does the team value the full challenge?</h2><p>FIRST LEGO League includes robot missions, research, design, and team values. Look for a program that gives students time to learn each part instead of focusing only on the score.</p><h2 class="text-2xl font-heading font-bold text-slate-900 dark:text-white mt-8 mb-3">2. How do students share roles?</h2><p>Children should rotate through building, coding, testing, and presenting so every student contributes and grows new skills.</p><h2 class="text-2xl font-heading font-bold text-slate-900 dark:text-white mt-8 mb-3">3. What does practice look like?</h2><p>Ask how the team reviews a run, records changes, and responds when a mission fails. A supportive coach makes reflection part of every practice.</p><h2 class="text-2xl font-heading font-bold text-slate-900 dark:text-white mt-8 mb-3">4. How will the schedule fit?</h2><p>Check the weekly time commitment, event dates, and family travel expectations before signing up.</p><h2 class="text-2xl font-heading font-bold text-slate-900 dark:text-white mt-8 mb-3">5. What will your child learn either way?</h2><p>A good season leaves students with stronger collaboration, engineering, and presentation skills regardless of the final placement.</p>`
    },
    4: {
      title: 'Gear Ratios Explained Simply: The Secret to High-Torque BattleBots',
      category: 'Robotics 101',
      author: 'Coach Sarah Miller',
      role: 'Curriculum Director',
      date: 'Sep 21, 2026',
      readTime: '5 Min Read',
      bio: 'Coach Sarah turns mechanical ideas into hands-on experiments students can test with gears, wheels, and simple robot builds.',
      alt: 'Students assembling and testing a competition robot',
      image: 'assets/blog-article-gear-ratios-battlebots.png',
      body: `<p class="text-lg font-medium text-slate-900 dark:text-slate-100">A gear ratio describes how two connected gears trade speed for turning force. Kids can see the effect by changing a pair of gears and testing the same robot on the same ramp.</p><h2 class="text-2xl font-heading font-bold text-slate-900 dark:text-white mt-8 mb-3">Count the teeth</h2><p>Pair an 8-tooth driver with a 40-tooth follower. The follower turns once for every five turns of the small driver, creating a 5:1 reduction.</p><h2 class="text-2xl font-heading font-bold text-slate-900 dark:text-white mt-8 mb-3">Compare speed and force</h2><p>The larger output gear turns more slowly but produces more torque at the axle. A reverse pairing increases speed while reducing the force available to push a load.</p><h2 class="text-2xl font-heading font-bold text-slate-900 dark:text-white mt-8 mb-3">Test one change at a time</h2><p>Keep the robot, battery, and surface the same. Change only the gear pair, then compare travel time and how easily the robot climbs. The measurements make the trade-off clear.</p>`
    },
    5: {
      title: 'How to Build an At-Home STEM Maker Nook on a Reasonable Budget',
      category: 'Parenting Tips',
      author: 'Priya Patel',
      role: 'Family STEM Educator',
      date: 'Sep 15, 2026',
      readTime: '4 Min Read',
      bio: 'Priya helps families make everyday spaces work for curious kids, with simple ways to sort materials and make room for experiments.',
      alt: 'A student adjusts a humanoid robot in a home STEM workspace',
      image: 'assets/blog-article-home-stem-maker-nook.png',
      body: `<p class="text-lg font-medium text-slate-900 dark:text-slate-100">A useful maker nook can fit on a small table. The goal is a clear place to plan, build, test, and put materials away safely.</p><h2 class="text-2xl font-heading font-bold text-slate-900 dark:text-white mt-8 mb-3">Start with simple storage</h2><p>Use labeled containers for bricks, wheels, connectors, and craft materials. A shallow tray keeps small parts from rolling onto the floor.</p><h2 class="text-2xl font-heading font-bold text-slate-900 dark:text-white mt-8 mb-3">Make room for testing</h2><p>Keep a cardboard ramp, measuring tape, and notebook nearby. Children can record what they changed and what happened during each test.</p><h2 class="text-2xl font-heading font-bold text-slate-900 dark:text-white mt-8 mb-3">Choose a repeatable routine</h2><p>Set a short build time, keep projects away from walkways, and return loose parts to their containers before ending the session.</p>`
    },
    6: {
      title: 'The Resilience Superpower: What Broken Robots Teach Kids About Life',
      category: 'Parenting Tips',
      author: 'Coach Alex Rivera',
      role: 'Programming Coach',
      date: 'Sep 8, 2026',
      readTime: '4 Min Read',
      bio: 'Coach Alex encourages young inventors to treat a failed run as useful feedback and to make their next test more deliberate.',
      alt: 'Students assembling and troubleshooting robots in a robotics workshop',
      image: 'assets/blog-article-resilience-superpower.png',
      body: `<p class="text-lg font-medium text-slate-900 dark:text-slate-100">When a robot stops, veers off course, or drops a part, children get a concrete problem they can investigate. A calm reset helps turn frustration into a useful next step.</p><h2 class="text-2xl font-heading font-bold text-slate-900 dark:text-white mt-8 mb-3">Describe what happened</h2><p>Ask the child to explain what they expected and what they observed. Specific observations make it easier to find a loose connection, blocked wheel, or incorrect command.</p><h2 class="text-2xl font-heading font-bold text-slate-900 dark:text-white mt-8 mb-3">Change one thing</h2><p>Encourage one adjustment at a time, then run the same test again. That helps the builder learn which change mattered.</p><h2 class="text-2xl font-heading font-bold text-slate-900 dark:text-white mt-8 mb-3">Notice persistence</h2><p>Recognize careful testing and clear explanations, not just a working robot. Those habits help students approach new challenges with confidence.</p>`
    }
  };

  window.searchBlogArticles = function () {
    const input = document.getElementById('article-search');
    const query = input ? input.value.trim() : '';
    window.location.href = `blog.html?search=${encodeURIComponent(query)}`;
  };

  document.addEventListener('DOMContentLoaded', function () {
    const requestedId = Number(new URLSearchParams(window.location.search).get('article')) || 1;
    const article = articles[requestedId] || articles[1];
    const initials = article.author.split(/\s+/).map(part => part[0]).join('').replace(/[^A-Z]/gi, '').slice(-2).toUpperCase();
    const category = article.category.split('&')[0].trim();
    const setText = (id, value) => {
      const element = document.getElementById(id);
      if (element) element.textContent = value;
    };

    setText('article-breadcrumb-category', category);
    setText('article-page-title', article.title);
    setText('article-page-meta', `Published by ${article.author} · ${article.readTime} · ${article.date}`);
    setText('article-category', article.category);
    setText('article-title', article.title);
    setText('article-author', article.author);
    setText('article-author-meta', `${article.role} · ${article.date}`);
    setText('article-read-time', article.readTime);
    setText('article-author-bio-name', article.author);
    setText('article-author-bio', article.bio);
    document.title = `${article.title} | RoboBricks Journal`;

    ['article-author-avatar', 'article-author-bio-avatar'].forEach(id => {
      const avatar = document.getElementById(id);
      if (avatar) {
        avatar.textContent = initials;
        avatar.setAttribute('aria-label', article.author);
      }
    });
    const image = document.getElementById('article-image');
    if (image) {
      image.alt = article.alt;
      if (article.image) image.src = article.image;
    }
    const body = document.getElementById('article-body');
    if (body && article.body) body.innerHTML = article.body;
    if (window.lucide) window.lucide.createIcons();
  });
})();
