/**
 * RoboBricks - Parent & Admin Dashboard Interactive Engine
 * Supporting sessions booking, child switcher, progress tracker, badges modal & settings
 */

(function () {
  'use strict';

  // Active child state
  let currentChild = 'leo';

  const childData = {
    leo: {
      name: 'Leo Chen',
      age: 8,
      level: 'RoboExplorers (Level 2)',
      avatar: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=150&auto=format&fit=crop&q=80',
      xp: 2450,
      nextLevelXp: 3000,
      sessionsCompleted: 14,
      totalSessions: 18,
      badgesCount: 7,
      attendance: '96%',
      currentProject: 'Mars Planetary Rover v2',
      projectProgress: 75,
      instructor: 'Coach Sarah Miller'
    },
    maya: {
      name: 'Maya Chen',
      age: 12,
      level: 'Future Engineers (Level 4)',
      avatar: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=150&auto=format&fit=crop&q=80',
      xp: 4820,
      nextLevelXp: 5000,
      sessionsCompleted: 22,
      totalSessions: 24,
      badgesCount: 14,
      attendance: '100%',
      currentProject: 'Bipedal Obstacle Runner (Python + Spike)',
      projectProgress: 90,
      instructor: 'Coach Alex Rivera'
    }
  };

  window.switchChild = function (childKey) {
    if (!childData[childKey]) return;
    currentChild = childKey;
    const data = childData[childKey];

    // Update child switch buttons
    document.querySelectorAll('.child-tab-btn').forEach(btn => {
      if (btn.getAttribute('data-child') === childKey) {
        btn.classList.add('border-blue-600', 'bg-blue-50', 'text-blue-700', 'dark:bg-blue-900/30', 'dark:text-blue-400');
        btn.classList.remove('border-transparent', 'text-slate-500');
      } else {
        btn.classList.remove('border-blue-600', 'bg-blue-50', 'text-blue-700', 'dark:bg-blue-900/30', 'dark:text-blue-400');
        btn.classList.add('border-transparent', 'text-slate-500');
      }
    });

    // Update child details in DOM
    const nameEls = document.querySelectorAll('.active-child-name');
    nameEls.forEach(el => el.textContent = data.name);

    const levelEls = document.querySelectorAll('.active-child-level');
    levelEls.forEach(el => el.textContent = data.level);

    const xpEls = document.querySelectorAll('.active-child-xp');
    xpEls.forEach(el => el.textContent = `${data.xp} / ${data.nextLevelXp} XP`);

    const xpBar = document.getElementById('active-child-xp-bar');
    if (xpBar) {
      const pct = Math.min(100, Math.round((data.xp / data.nextLevelXp) * 100));
      xpBar.style.width = `${pct}%`;
    }

    const sessionsEls = document.querySelectorAll('.active-child-sessions');
    sessionsEls.forEach(el => el.textContent = `${data.sessionsCompleted}/${data.totalSessions}`);

    const badgeEls = document.querySelectorAll('.active-child-badges');
    badgeEls.forEach(el => el.textContent = `${data.badgesCount} Unlocked`);

    const projectEls = document.querySelectorAll('.active-child-project');
    projectEls.forEach(el => el.textContent = data.currentProject);

    const projectBar = document.getElementById('active-child-project-bar');
    if (projectBar) {
      projectBar.style.width = `${data.projectProgress}%`;
    }

    const projectPct = document.getElementById('active-child-project-pct');
    if (projectPct) {
      projectPct.textContent = `${data.projectProgress}%`;
    }

    if (window.showToast) {
      window.showToast(`Switched profile to ${data.name}! 🚀`, 'info');
    }
  };

  // Badge Modal details
  window.openBadgeModal = function (title, desc, xp, unlockedDate, iconName) {
    const modal = document.getElementById('badge-modal');
    if (!modal) return;

    document.getElementById('badge-modal-title').textContent = title;
    document.getElementById('badge-modal-desc').textContent = desc;
    document.getElementById('badge-modal-xp').textContent = `+${xp} XP Gained`;
    document.getElementById('badge-modal-date').textContent = `Unlocked on ${unlockedDate}`;
    const badgeIcon = document.getElementById('badge-modal-icon');
    const safeIconName = typeof iconName === 'string' && /^[a-z0-9-]+$/i.test(iconName) ? iconName : 'award';
    if (badgeIcon) badgeIcon.setAttribute('data-lucide', safeIconName);

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    if (window.syncPageScrollLock) window.syncPageScrollLock();
    if (window.lucide) window.lucide.createIcons();
  };

  window.closeBadgeModal = function () {
    const modal = document.getElementById('badge-modal');
    if (!modal) return;
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    if (window.syncPageScrollLock) window.syncPageScrollLock();
  };

  // Booking Modal
  window.openBookingModal = function (slotDate = 'Saturday, Oct 17 - 10:00 AM') {
    const modal = document.getElementById('booking-modal');
    if (!modal) return;
    const slotInput = document.getElementById('booking-slot-date');
    if (slotInput) slotInput.value = slotDate;

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    if (window.syncPageScrollLock) window.syncPageScrollLock();
  };

  window.closeBookingModal = function () {
    const modal = document.getElementById('booking-modal');
    if (!modal) return;
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    if (window.syncPageScrollLock) window.syncPageScrollLock();
  };

  window.openChildRegistration = function () {
    const modal = document.getElementById('child-modal');
    if (!modal) return;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    if (window.syncPageScrollLock) window.syncPageScrollLock();
    window.setTimeout(() => document.getElementById('new-child-name')?.focus(), 0);
  };

  window.closeChildRegistration = function () {
    const modal = document.getElementById('child-modal');
    if (!modal) return;
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    if (window.syncPageScrollLock) window.syncPageScrollLock();
  };

  window.saveNotificationPreferences = function () {
    const preferences = {};
    document.querySelectorAll('[data-notification-setting]').forEach(input => {
      preferences[input.dataset.notificationSetting] = input.checked;
    });
    sessionStorage.setItem('robobricks.notificationPreferences', JSON.stringify(preferences));
    if (window.showToast) window.showToast('Notification preferences saved for this browser tab.', 'success');
  };

  function renderAdditionalChild(profile) {
    const container = document.getElementById('additional-child-profiles');
    if (!container) return;
    const card = document.createElement('article');
    card.className = 'p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700';
    const row = document.createElement('div');
    row.className = 'flex items-center gap-3';
    const avatar = document.createElement('div');
    avatar.className = 'w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-200 grid place-items-center text-xs font-extrabold';
    avatar.setAttribute('aria-hidden', 'true');
    avatar.textContent = profile.name.split(/\s+/).map(part => part[0]).join('').slice(0, 2).toUpperCase();
    const details = document.createElement('div');
    const name = document.createElement('h4');
    name.className = 'font-heading font-bold text-sm text-slate-900 dark:text-white';
    name.textContent = `${profile.name} (Age ${profile.age})`;
    const program = document.createElement('p');
    program.className = 'text-xs text-emerald-700 dark:text-emerald-300 font-semibold';
    program.textContent = `${profile.program} · Added for this session`;
    details.append(name, program);
    row.append(avatar, details);
    card.append(row);
    container.append(card);
  }

  document.addEventListener('DOMContentLoaded', function () {
    // Booking Form
    const bookingForm = document.getElementById('session-booking-form');
    if (bookingForm) {
      bookingForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const booking = Object.fromEntries(new FormData(bookingForm).entries());
        const requests = JSON.parse(sessionStorage.getItem('robobricks.bookingRequests') || '[]');
        requests.push({ ...booking, requestedAt: new Date().toISOString() });
        sessionStorage.setItem('robobricks.bookingRequests', JSON.stringify(requests));
        window.closeBookingModal();
        if (window.showToast) {
          window.showToast(`Booking request saved for ${booking.slot || 'your selected slot'} in this browser tab.`, 'success');
        }
        bookingForm.reset();
      });
    }

    const parentProfileForm = document.getElementById('parent-profile-form');
    if (parentProfileForm) {
      const savedProfile = JSON.parse(sessionStorage.getItem('robobricks.parentProfile') || 'null');
      if (savedProfile) {
        Object.entries(savedProfile).forEach(([key, value]) => {
          const field = parentProfileForm.elements.namedItem(key);
          if (field) field.value = value;
        });
      }
      parentProfileForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const profile = Object.fromEntries(new FormData(parentProfileForm).entries());
        sessionStorage.setItem('robobricks.parentProfile', JSON.stringify(profile));
        if (window.showToast) window.showToast('Parent details saved for this browser session.', 'success');
      });
    }

    const childForm = document.getElementById('child-registration-form');
    const childContainer = document.getElementById('additional-child-profiles');
    if (childForm && childContainer) {
      const childProfiles = JSON.parse(sessionStorage.getItem('robobricks.childProfiles') || '[]');
      childProfiles.forEach(renderAdditionalChild);
      childForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const values = new FormData(childForm);
        const profile = {
          name: String(values.get('name') || '').trim(),
          age: Number(values.get('age')),
          program: String(values.get('program') || 'RoboExplorers')
        };
        if (!profile.name || profile.age < 5 || profile.age > 16) return;
        childProfiles.push(profile);
        sessionStorage.setItem('robobricks.childProfiles', JSON.stringify(childProfiles));
        renderAdditionalChild(profile);
        childForm.reset();
        window.closeChildRegistration();
        if (window.showToast) window.showToast(`${profile.name}'s profile was added for this browser session.`, 'success');
      });
      const childModal = document.getElementById('child-modal');
      if (childModal) childModal.addEventListener('click', e => {
        if (e.target === childModal) window.closeChildRegistration();
      });
    }

    const savedPreferences = JSON.parse(sessionStorage.getItem('robobricks.notificationPreferences') || 'null');
    if (savedPreferences) {
      document.querySelectorAll('[data-notification-setting]').forEach(input => {
        if (Object.prototype.hasOwnProperty.call(savedPreferences, input.dataset.notificationSetting)) {
          input.checked = Boolean(savedPreferences[input.dataset.notificationSetting]);
        }
      });
    }

    // Modal background clicks
    ['badge-modal', 'booking-modal'].forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener('click', function (e) {
          if (e.target === el) {
            el.classList.add('hidden');
            el.classList.remove('flex');
            if (window.syncPageScrollLock) window.syncPageScrollLock();
          }
        });
      }
    });
  });

})();
