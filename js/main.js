// Countdown Timer (15 minutes) — sticky header
(function initCountdown() {
  const countdownEl = document.getElementById('countdown');
  if (!countdownEl) return;

  let totalSeconds = 15 * 60;

  function update() {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    countdownEl.textContent =
      String(mins).padStart(2, '0') + ':' + String(secs).padStart(2, '0');

    if (totalSeconds > 0) {
      totalSeconds--;
    } else {
      totalSeconds = 15 * 60;
    }
  }

  update();
  setInterval(update, 1000);
})();

// Fee urgency timer (10 minutes)
(function initFeeTimer() {
  const minsEl = document.getElementById('feeMins');
  const secsEl = document.getElementById('feeSecs');
  if (!minsEl || !secsEl) return;

  let totalSeconds = 10 * 60;

  function update() {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    minsEl.textContent = String(mins).padStart(2, '0');
    secsEl.textContent = String(secs).padStart(2, '0');

    if (totalSeconds > 0) {
      totalSeconds--;
    } else {
      totalSeconds = 10 * 60;
    }
  }

  update();
  setInterval(update, 1000);
})();

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(function (btn) {
  btn.addEventListener('click', function () {
    const item = btn.closest('.faq-item');
    const wasActive = item.classList.contains('active');

    document.querySelectorAll('.faq-item').forEach(function (el) {
      el.classList.remove('active');
    });

    if (!wasActive) {
      item.classList.add('active');
    }
  });
});

// Social Proof Rotation
(function initSocialProof() {
  const names = [
    'Rahul, Maharashtra recently booked D2C Growth Strategy Session',
    'Priya, Karnataka recently booked D2C Growth Strategy Session',
    'Amit, Gujarat recently booked D2C Growth Strategy Session',
    'Sneha, Delhi recently booked D2C Growth Strategy Session',
    'Vikram, Pune recently booked D2C Growth Strategy Session',
    'Anjali, Bangalore recently booked D2C Growth Strategy Session'
  ];

  const el = document.getElementById('socialProofText');
  if (!el) return;

  let index = 0;
  setInterval(function () {
    index = (index + 1) % names.length;
    el.textContent = names[index];
  }, 5000);
})();

// Intl phone input
let inlinePhoneInput = null;
const phoneEl = document.getElementById('inline-phone');
if (phoneEl && window.intlTelInput) {
  inlinePhoneInput = window.intlTelInput(phoneEl, {
    initialCountry: 'in',
    preferredCountries: ['in'],
    separateDialCode: true
  });
}

function submitBooking(formData) {
  const message =
    'Hi, I want to book my ₹99 D2C Growth Strategy Session.%0A%0A' +
    'Name: ' + encodeURIComponent(formData.name) + '%0A' +
    'Phone: ' + encodeURIComponent(formData.phone) + '%0A' +
    'Email: ' + encodeURIComponent(formData.email) + '%0A' +
    'Role: ' + encodeURIComponent(formData.role) + '%0A' +
    'Current Revenue: ' + encodeURIComponent(formData.income) + '%0A' +
    'Goal Revenue: ' + encodeURIComponent(formData.goal);

  window.open('https://wa.me/919876543210?text=' + message, '_blank');
}

// Inline Booking Form
document.getElementById('inlineBookingForm')?.addEventListener('submit', function (e) {
  e.preventDefault();

  const phone = inlinePhoneInput
    ? inlinePhoneInput.getNumber()
    : document.getElementById('inline-phone').value;

  submitBooking({
    name: document.getElementById('inline-name').value,
    phone: phone,
    email: document.getElementById('inline-email').value,
    income: document.getElementById('inline-income').value,
    goal: document.getElementById('inline-goal').value,
    role: document.querySelector('input[name="inline-role"]:checked')?.value || ''
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Hide social proof near footer
window.addEventListener('scroll', function () {
  const proof = document.getElementById('socialProof');
  if (!proof) return;

  const scrollBottom = window.innerHeight + window.pageYOffset;
  const pageHeight = document.documentElement.scrollHeight;
  const nearBottom = pageHeight - scrollBottom < 200;

  proof.style.opacity = nearBottom ? '0' : '1';
  proof.style.pointerEvents = nearBottom ? 'none' : 'auto';
});

// Scroll fade-in animation
(function initFadeIn() {
  const sections = document.querySelectorAll('.section, .stats-bar, .marquee-bar, .cta-section');
  sections.forEach(function (el) {
    el.classList.add('fade-in');
  });

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.08 }
  );

  sections.forEach(function (el) {
    observer.observe(el);
  });
})();
