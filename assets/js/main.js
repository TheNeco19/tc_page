document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('modeToggle');
  const body = document.body;

  // Theme beim Laden setzen
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    body.classList.add('light-mode');
  }

  // Button-Text aktualisieren
  function updateButtonText() {
    toggleBtn.textContent = body.classList.contains('light-mode') ? 'Dark Mode' : 'Light Mode';
  }
  updateButtonText();

  // SLIDESHOW
  const slides = document.querySelectorAll('.hero-slider .slide');
  let currentSlide = 0;

  function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }

  if (slides.length > 1) {
    setInterval(showNextSlide, 7000);
  }

  // SCROLL BUTTON
  document.querySelectorAll('.btn-scroll').forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector('#main-content')?.scrollIntoView({ behavior: 'smooth' });
    });
  });
});
