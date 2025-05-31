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

  // Slideshow-Logik
  const slides = document.querySelectorAll('.hero-slider .slide');
  let currentSlide = 0;

  function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }

  // Erste Slide sichtbar machen (für Sicherheit)
  if (slides.length > 0) {
    slides[0].classList.add('active');
    setInterval(showNextSlide, 7000);
  }

  // Scrollverhalten für "Mehr erfahren"-Button
  document.querySelector('.btn-scroll')?.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#main-content')?.scrollIntoView({ behavior: 'smooth' });
  });
});
