(function () {
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  const sections = document.querySelectorAll('section[id]');

  // Smooth scroll with nav offset
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = navbar.offsetHeight;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
      document.querySelector('.nav-links').classList.remove('open');
    });
  });

  // Mobile nav toggle
  document.querySelector('.nav-toggle').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('open');
  });

  // Active nav link on scroll
  function updateActive() {
    const offset = navbar.offsetHeight + 10;
    let current = '';
    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - offset) {
        current = section.id;
      }
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  }

  window.addEventListener('scroll', updateActive, { passive: true });
  updateActive();
})();
