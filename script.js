// ========= NAVBAR SCROLL EFFECT =========
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.style.background = 'rgba(13,13,13,0.98)';
  } else {
    navbar.style.background = 'rgba(13,13,13,0.92)';
  }
});

// ========= MOBILE BURGER =========
const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');
burger.addEventListener('click', () => {
  if (navLinks.style.display === 'flex') {
    navLinks.style.display = 'none';
  } else {
    navLinks.style.display = 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '68px';
    navLinks.style.left = '0';
    navLinks.style.right = '0';
    navLinks.style.background = 'rgba(13,13,13,0.98)';
    navLinks.style.padding = '1.5rem 2rem';
    navLinks.style.gap = '1.25rem';
    navLinks.style.borderBottom = '1px solid rgba(255,255,255,0.08)';
  }
});

// Close mobile menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.style.display = 'none';
  });
});

// ========= SCROLL FADE-IN ANIMATIONS =========
const fadeEls = document.querySelectorAll('.why-card, .pillar, .team-card, .mission-text p, .mission-quote-block');
fadeEls.forEach(el => el.classList.add('fade-up'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

fadeEls.forEach(el => observer.observe(el));

// ========= FORM SUBMISSION =========
function handleSubmit(e) {
  e.preventDefault();
  document.getElementById('modal').classList.add('open');
}

function closeModal() {
  document.getElementById('modal').classList.remove('open');
}

// Close modal on backdrop click
document.getElementById('modal').addEventListener('click', (e) => {
  if (e.target === document.getElementById('modal')) {
    closeModal();
  }
});

// ========= SMOOTH ACTIVE NAV HIGHLIGHT =========
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navAnchors.forEach(a => {
    a.style.color = '';
    if (a.getAttribute('href') === '#' + current && !a.classList.contains('nav-cta')) {
      a.style.color = '#c9a84c';
    }
  });
});
