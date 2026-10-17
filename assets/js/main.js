/**
 * RoboBricks - Kids Robotics & LEGO Building Club
 * Core Application JavaScript (Theme, RTL, Modals, Toasts, Interactivity)
 * Production-ready for ThemeForest / TemplateMonster
 */

(function () {
  'use strict';

  // -------------------------------------------------------------------------
  // 1. Dark / Light Mode Support with LocalStorage
  // -------------------------------------------------------------------------
  function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    updateThemeIcons();
  }

  window.toggleTheme = function () {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeIcons();
    window.showToast(isDark ? 'Switched to Dark Mode 🌙' : 'Switched to Light Mode ☀️', 'info');
  };

  function updateThemeIcons() {
    const isDark = document.documentElement.classList.contains('dark');
    const sunIcons = document.querySelectorAll('.theme-sun-icon');
    const moonIcons = document.querySelectorAll('.theme-moon-icon');

    sunIcons.forEach(el => {
      el.classList.toggle('hidden', !isDark);
    });
    moonIcons.forEach(el => {
      el.classList.toggle('hidden', isDark);
    });
  }

  // -------------------------------------------------------------------------
  // 2. LTR / RTL Support with LocalStorage
  // -------------------------------------------------------------------------
  function initDir() {
    const savedDir = localStorage.getItem('dir') || 'ltr';
    document.documentElement.setAttribute('dir', savedDir);
    updateDirBadges(savedDir);
  }

  window.toggleRTL = function () {
    const currentDir = document.documentElement.getAttribute('dir') || 'ltr';
    const newDir = currentDir === 'ltr' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', newDir);
    localStorage.setItem('dir', newDir);
    updateDirBadges(newDir);
    window.showToast(newDir === 'rtl' ? 'Switched to RTL (Right-to-Left) Mode' : 'Switched to LTR (Left-to-Right) Mode', 'info');
  };

  function updateDirBadges(dir) {
    const rtlBadges = document.querySelectorAll('.dir-badge-text');
    rtlBadges.forEach(el => {
      el.textContent = dir === 'rtl' ? 'LTR' : 'RTL';
    });
  }

  function syncPageScrollLock() {
    const dialogOpen = ['enroll-modal', 'badge-modal', 'booking-modal', 'child-modal'].some(id => {
      const dialog = document.getElementById(id);
      return dialog && !dialog.classList.contains('hidden');
    });
    const mobileMenu = document.getElementById('mobile-menu');
    const menuOpen = mobileMenu && !mobileMenu.classList.contains('hidden');
    document.body.style.overflow = dialogOpen || menuOpen ? 'hidden' : '';
  }

  window.syncPageScrollLock = syncPageScrollLock;

  // -------------------------------------------------------------------------
  // 3. Toast Notification Engine
  // -------------------------------------------------------------------------
  window.showToast = function (message, type = 'success') {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast flex items-center gap-3 px-4 py-3 rounded-2xl shadow-xl border text-sm font-semibold max-w-sm';

    let iconSvg = '';
    if (type === 'success') {
      toast.classList.add('bg-emerald-500', 'text-white', 'border-emerald-600');
      iconSvg = '<svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>';
    } else if (type === 'error') {
      toast.classList.add('bg-rose-500', 'text-white', 'border-rose-600');
      iconSvg = '<svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>';
    } else if (type === 'warning') {
      toast.classList.add('bg-amber-500', 'text-slate-900', 'border-amber-600');
      iconSvg = '<svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>';
    } else {
      // Info
      toast.classList.add('bg-blue-600', 'text-white', 'border-blue-700');
      iconSvg = '<svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';
    }

    toast.innerHTML = `
      ${iconSvg}
      <span class="flex-1"></span>
      <button type="button" class="opacity-70 hover:opacity-100 transition p-1" onclick="this.parentElement.remove()">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>
    `;
    toast.querySelector('span').textContent = String(message);

    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('toast-out');
      setTimeout(() => toast.remove(), 300);
    }, 3800);
  };

  // -------------------------------------------------------------------------
  // 4. Global Free Trial / Quick Enrollment Modal
  // -------------------------------------------------------------------------
  window.openEnrollModal = function (programTitle = 'LEGO & Robotics Free Trial Session') {
    let modal = document.getElementById('enroll-modal');
    if (!modal) return;
    
    const titleInput = document.getElementById('enroll-program-title');
    if (titleInput) {
      titleInput.value = programTitle;
    }
    const titleDisplay = document.getElementById('enroll-modal-program-name');
    if (titleDisplay) {
      titleDisplay.textContent = programTitle;
    }

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    syncPageScrollLock();
    if (window.lucide) window.lucide.createIcons();
  };

  window.closeEnrollModal = function () {
    const modal = document.getElementById('enroll-modal');
    if (!modal) return;
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    syncPageScrollLock();
  };

  window.handleEnrollSubmit = function (e) {
    if (e && e.preventDefault) e.preventDefault();
    const enrollForm = document.getElementById('enroll-form');
    const titleInput = document.getElementById('enroll-program-title');
    const programTitle = titleInput ? titleInput.value : 'LEGO & Robotics Free Trial';
    const details = enrollForm ? Array.from(enrollForm.querySelectorAll('input:not([type="hidden"]), select, textarea'))
      .filter(field => field.type !== 'checkbox' || field.checked)
      .map((field, index) => `${field.placeholder || field.name || `Response ${index + 1}`}: ${field.value}`)
      .join('\n') : '';
    window.openEmailDraft('admissions@robobricks.club', `Free trial request: ${programTitle}`, details);
    window.closeEnrollModal();
    if (enrollForm) enrollForm.reset();
  };

  // -------------------------------------------------------------------------
  // 5. Mobile Navigation Drawer Toggle
  // -------------------------------------------------------------------------
  window.toggleMobileMenu = function () {
    const mobileMenu = document.getElementById('mobile-menu');
    if (!mobileMenu) return;
    const isHidden = mobileMenu.classList.contains('hidden');
    if (isHidden) {
      mobileMenu.classList.remove('hidden');
    } else {
      mobileMenu.classList.add('hidden');
    }
    syncPageScrollLock();
  };

  window.downloadTextFile = function (filename, contents, message = 'Download started.') {
    const blob = new Blob([contents], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    window.showToast(message, 'success');
  };

  window.openEmailDraft = function (recipient, subject, body) {
    const safeRecipient = String(recipient).trim().replace(/[^\w.+@-]/g, '');
    const mailto = `mailto:${safeRecipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    window.showToast('Your email app is ready with the message. Send it there to complete the request.', 'info');
  };

  window.requestPasswordReset = function () {
    const email = document.querySelector('input[type="email"]');
    if (!email || !email.value.trim()) {
      window.showToast('Enter your parent email first, then request a password reset.', 'warning');
      email?.focus();
      return;
    }
    window.openEmailDraft('admissions@robobricks.club', 'Parent portal password reset', `Please help reset the password for ${email.value.trim()}.`);
  };

  window.handleParentLogin = function (e) {
    if (e && e.preventDefault) e.preventDefault();
    const email = document.getElementById('parent-email')?.value.trim();
    const password = document.getElementById('parent-password')?.value;
    if (!email || !password) {
      window.showToast('Please enter both your email and password.', 'warning');
      return;
    }
    window.showToast('Signing in... Welcome to the RoboBricks Parent Portal!', 'success');
    window.setTimeout(() => {
      window.location.href = 'dashboard/index.html';
    }, 600);
  };

  window.handleParentRegister = function (e) {
    if (e && e.preventDefault) e.preventDefault();
    const name = document.getElementById('register-name')?.value.trim();
    const email = document.getElementById('register-email')?.value.trim();
    const childName = document.getElementById('child-name')?.value.trim();
    const childAge = document.getElementById('child-age')?.value;
    const password = document.getElementById('register-password')?.value;
    if (!name || !email || !childName || !childAge || !password) {
      window.showToast('Please fill in all required registration fields.', 'warning');
      return;
    }
    const profile = { name: childName, age: Number(childAge), program: 'RoboExplorers' };
    const profiles = JSON.parse(sessionStorage.getItem('robobricks.childProfiles') || '[]');
    profiles.push(profile);
    sessionStorage.setItem('robobricks.childProfiles', JSON.stringify(profiles));
    sessionStorage.setItem('robobricks.parentProfile', JSON.stringify({ name, email }));
    window.showToast('Parent account created successfully! Opening your dashboard...', 'success');
    window.setTimeout(() => {
      window.location.href = 'dashboard/index.html';
    }, 600);
  };

  window.handleSocialLogin = function (provider) {
    window.showToast(`Signing in with ${provider}... Opening parent dashboard.`, 'success');
    window.setTimeout(() => {
      window.location.href = 'dashboard/index.html';
    }, 600);
  };

  window.requestParentAccount = function (form) {
    const details = Array.from(form.querySelectorAll('input:not([type="hidden"]):not([type="password"]), select'))
      .map((field, index) => `${field.placeholder || field.name || `Response ${index + 1}`}: ${field.value}`)
      .join('\n');
    window.openEmailDraft('admissions@robobricks.club', 'Parent account setup request', details);
  };

  window.requestWaitlistSignup = function (form) {
    const email = form && form.querySelector('input[type="email"]');
    if (!email || !email.value.trim()) return;
    window.openEmailDraft('admissions@robobricks.club', 'RoboBricks opening waitlist', `Please add ${email.value.trim()} to the RoboBricks opening updates list.`);
  };

  window.copyPageLink = async function () {
    const link = window.location.href;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(link);
      } else {
        const field = document.createElement('textarea');
        field.value = link;
        field.setAttribute('readonly', '');
        field.style.position = 'fixed';
        field.style.opacity = '0';
        document.body.appendChild(field);
        field.select();
        const copied = document.execCommand('copy');
        field.remove();
        if (!copied) throw new Error('Clipboard unavailable');
      }
      window.showToast('Article link copied to the clipboard.', 'success');
    } catch (error) {
      window.showToast('Copy is unavailable here. You can copy the address from your browser.', 'warning');
    }
  };

  window.printClubCertificate = function () {
    const badgeTitle = document.getElementById('badge-modal-title');
    const badgeDate = document.getElementById('badge-modal-date');
    const childName = document.querySelector('.active-child-name');
    const title = badgeTitle ? badgeTitle.textContent : 'RoboBricks Achievement';
    const recipient = childName ? childName.textContent : 'Young Roboticist';
    const date = badgeDate ? badgeDate.textContent.replace(/^Unlocked on\s*/, '') : new Date().toLocaleDateString();
    const printWindow = window.open('', '_blank', 'width=800,height=650');
    if (!printWindow) {
      window.showToast('Allow pop-ups to print this certificate.', 'warning');
      return;
    }
    const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
    printWindow.document.write(`<!doctype html><html><head><meta charset="utf-8"><title>RoboBricks Certificate</title><style>body{font-family:Arial,sans-serif;color:#0f172a;margin:0;padding:48px;background:#f8fafc}.certificate{border:8px solid #2563eb;border-radius:24px;padding:56px;text-align:center;background:white}.brand{color:#2563eb;font-weight:700;letter-spacing:.12em;text-transform:uppercase}.title{font-size:40px;margin:28px 0 12px}.name{font-size:32px;color:#1d4ed8}.date{margin-top:40px;color:#475569}</style></head><body><main class="certificate"><div class="brand">RoboBricks Youth Robotics Academy</div><h1>Certificate of Achievement</h1><p>This certificate recognizes</p><div class="name">${escapeHtml(recipient)}</div><h2 class="title">${escapeHtml(title)}</h2><p>for demonstrating creativity, persistence, and engineering skill.</p><p class="date">${escapeHtml(date)}</p></main><script>window.onload=()=>window.print()<\/script></body></html>`);
    printWindow.document.close();
  };

  // -------------------------------------------------------------------------
  // 6. Interactive Number Counters
  // -------------------------------------------------------------------------
  function initCounters() {
    const counters = document.querySelectorAll('[data-counter]');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-counter'), 10);
          const duration = 1500;
          const stepTime = 20;
          const steps = duration / stepTime;
          const increment = target / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              el.textContent = target.toLocaleString() + (el.getAttribute('data-suffix') || '');
              clearInterval(timer);
            } else {
              el.textContent = Math.floor(current).toLocaleString() + (el.getAttribute('data-suffix') || '');
            }
          }, stepTime);

          obs.unobserve(el);
        }
      });
    }, { threshold: 0.2 });

    counters.forEach(c => observer.observe(c));
  }

  function initFormInputValidation() {
    let invalidNameCharacters;
    let validName;
    try {
      invalidNameCharacters = new RegExp("[^\\p{L}\\p{M}'’ -]", 'gu');
      validName = new RegExp("^[\\p{L}\\p{M}]+(?:[ '\u2019-][\\p{L}\\p{M}]+)*$", 'u');
    } catch (error) {
      invalidNameCharacters = /[^A-Za-zÀ-ÖØ-öø-ÿĀ-ž'’ -]/g;
      validName = /^[A-Za-zÀ-ÖØ-öø-ÿĀ-ž]+(?:[ '\u2019-][A-Za-zÀ-ÖØ-öø-ÿĀ-ž]+)*$/;
    }

    const isNameField = input => {
      const label = input.closest('div')?.querySelector('label')?.textContent || '';
      const context = `${input.name} ${input.id} ${input.placeholder} ${input.getAttribute('aria-label') || ''} ${label}`;
      return /\bname\b/i.test(context) && !/\bage\b/i.test(context);
    };

    const configureInput = input => {
      if (!(input instanceof HTMLInputElement) || input.dataset.validationConfigured) return;

      if (input.type === 'tel') {
        input.dataset.validationConfigured = 'true';
        input.inputMode = 'tel';
        input.autocomplete = input.autocomplete || 'tel';
        if (input.maxLength < 0) input.maxLength = 24;
        if (!input.pattern) input.pattern = '[0-9+(). -]{7,24}';
        input.title = input.title || 'Enter 7 to 15 digits. You may include spaces, parentheses, hyphens, or a leading +.';

        const validatePhone = () => {
          const original = input.value;
          let cleaned = original.replace(/[^0-9+(). -]/g, '');
          if (cleaned.startsWith('+')) {
            cleaned = `+${cleaned.slice(1).replace(/\+/g, '')}`;
          } else {
            cleaned = cleaned.replace(/\+/g, '');
          }
          if (cleaned !== original) {
            const cursor = input.selectionStart;
            input.value = cleaned;
            if (cursor !== null) {
              const nextCursor = Math.max(0, cursor + cleaned.length - original.length);
              input.setSelectionRange(nextCursor, nextCursor);
            }
          }

          const digitCount = cleaned.replace(/\D/g, '').length;
          input.setCustomValidity(cleaned && (digitCount < 7 || digitCount > 15)
            ? 'Enter a phone number containing 7 to 15 digits.'
            : '');
        };

        input.addEventListener('input', validatePhone);
        input.addEventListener('change', validatePhone);
        validatePhone();
        return;
      }

      if (input.type !== 'text' || !isNameField(input)) return;

      input.dataset.validationConfigured = 'true';
      input.autocomplete = input.autocomplete || 'name';
      if (input.maxLength < 0) input.maxLength = 80;

      const validateName = event => {
        if (event?.isComposing) return;
        const original = input.value;
        const cleaned = original.replace(invalidNameCharacters, '');
        if (cleaned !== original) {
          const cursor = input.selectionStart;
          input.value = cleaned;
          if (cursor !== null) {
            const nextCursor = Math.max(0, cursor + cleaned.length - original.length);
            input.setSelectionRange(nextCursor, nextCursor);
          }
        }
        input.setCustomValidity(cleaned && !validName.test(cleaned)
          ? 'Use letters, spaces, apostrophes, or hyphens for the name.'
          : '');
      };

      input.addEventListener('input', validateName);
      input.addEventListener('change', validateName);
      validateName();
    };

    document.querySelectorAll('input[type="tel"], input[type="text"]').forEach(configureInput);
    document.addEventListener('focusin', event => configureInput(event.target));
  }

  // -------------------------------------------------------------------------
  // 7. Initialize Everything on DOM Ready
  // -------------------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', function () {
    initTheme();
    initDir();
    initCounters();
    initFormInputValidation();

    // Init Lucide Icons if available
    if (window.lucide) {
      window.lucide.createIcons();
    }

    // Modal click-outside listener
    const modal = document.getElementById('enroll-modal');
    if (modal) {
      modal.addEventListener('click', function (e) {
        if (e.target === modal) {
          window.closeEnrollModal();
        }
      });
    }

    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape') return;
      const openDialog = ['child-modal', 'booking-modal', 'badge-modal', 'enroll-modal']
        .map(id => document.getElementById(id))
        .find(dialog => dialog && !dialog.classList.contains('hidden'));
      if (openDialog) {
        const closeButton = openDialog.querySelector('[onclick*="close"]');
        if (closeButton) closeButton.click();
      } else {
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) window.toggleMobileMenu();
      }
    });

    // Modal form submit simulation
    const enrollForm = document.getElementById('enroll-form');
    if (enrollForm) {
      enrollForm.addEventListener('submit', function (e) {
        window.handleEnrollSubmit(e);
      });
    }

    // General contact forms
    const contactForms = document.querySelectorAll('#contact-form, .contact-form');
    contactForms.forEach(form => {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        const details = Array.from(form.querySelectorAll('input:not([type="hidden"]), select, textarea'))
          .filter(field => field.type !== 'checkbox' || field.checked)
          .map((field, index) => `${field.placeholder || field.name || `Response ${index + 1}`}: ${field.value}`)
          .join('\n');
        window.openEmailDraft('admissions@robobricks.club', 'RoboBricks website inquiry', details);
      });
    });

    // Blog comment forms
    const commentForms = document.querySelectorAll('#comment-form, .comment-form');
    commentForms.forEach(form => {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        window.showToast('💬 Comment submitted successfully! It will appear after moderation.', 'success');
        form.reset();
      });
    });

    // Newsletter subscription forms
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    newsletterForms.forEach(form => {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = form.querySelector('input[type="email"]');
        if (email && email.value.trim()) {
          window.openEmailDraft('admissions@robobricks.club', 'RoboBricks newsletter subscription', `Please subscribe ${email.value.trim()} to club news and STEM activity updates.`);
        }
      });
    });
  });

})();
