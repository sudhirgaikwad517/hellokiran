// Countdown Timer (15 minutes)
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
    'Rahul, Maharashtra recently booked Strategy Consultation Call',
    'Priya, Karnataka recently booked Strategy Consultation Call',
    'Amit, Gujarat recently booked Strategy Consultation Call',
    'Sneha, Delhi recently booked Strategy Consultation Call',
    'Vikram, Pune recently booked Strategy Consultation Call',
    'Anjali, Bangalore recently booked Strategy Consultation Call'
  ];

  const el = document.getElementById('socialProofText');
  if (!el) return;

  let index = 0;
  setInterval(function () {
    index = (index + 1) % names.length;
    el.textContent = names[index];
  }, 5000);
})();

// Booking Form
document.getElementById('bookingForm')?.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const income = document.getElementById('income').value;
  const goal = document.getElementById('goal').value;
  const role = document.querySelector('input[name="role"]:checked')?.value || '';

  const message =
    'Hi, I want to book my ₹149 Strategy Consultation Call.%0A%0A' +
    'Name: ' + encodeURIComponent(name) + '%0A' +
    'Phone: ' + encodeURIComponent(phone) + '%0A' +
    'Email: ' + encodeURIComponent(email) + '%0A' +
    'Role: ' + encodeURIComponent(role) + '%0A' +
    'Current Revenue: ' + encodeURIComponent(income) + '%0A' +
    'Goal Revenue: ' + encodeURIComponent(goal);

  window.open('https://wa.me/919876543210?text=' + message, '_blank');

  const modal = bootstrap.Modal.getInstance(document.getElementById('bookingModal'));
  modal?.hide();
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target && this.getAttribute('href') !== '#') {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Hide social proof near footer so it doesn't cover text
window.addEventListener('scroll', function () {
  const proof = document.getElementById('socialProof');
  if (!proof) return;

  const scrollBottom = window.innerHeight + window.pageYOffset;
  const pageHeight = document.documentElement.scrollHeight;
  const nearBottom = pageHeight - scrollBottom < 200;

  proof.style.opacity = nearBottom ? '0' : '1';
  proof.style.pointerEvents = nearBottom ? 'none' : 'auto';
});
