document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('modeToggle');
  const body = document.body;

  function updateButtonText() {
    toggleBtn.textContent = body.classList.contains('light-mode') ? 'Dark Mode' : 'Light Mode';
  }
  updateButtonText();

  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    localStorage.setItem('theme', body.classList.contains('light-mode') ? 'light' : 'dark');
    updateButtonText();
  });


  const slides = document.querySelectorAll('.hero-slider .slide');
  let currentSlide = 0;

  function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }

  setInterval(showNextSlide, 7000); // alle 7 Sekunden wechseln


  document.querySelector('.btn-scroll')?.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#main-content').scrollIntoView({ behavior: 'smooth' });
  });
});
