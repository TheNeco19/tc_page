document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('modeToggle');
  const body = document.body;

  // Prüfe gespeicherten Modus beim Laden und setze ihn
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    body.classList.add('light-mode');
  } else if (savedTheme === 'dark') {
    body.classList.remove('light-mode');
  }

  // Setze Button Text passend zum aktuellen Modus
  function updateButtonText() {
    if (body.classList.contains('light-mode')) {
      toggleBtn.textContent = 'Dark Mode';
    } else {
      toggleBtn.textContent = 'Light Mode';
    }
  }

  updateButtonText();

  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    localStorage.setItem('theme', body.classList.contains('light-mode') ? 'light' : 'dark');
    updateButtonText();
  });
});

let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slideshow .slide');

function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

setInterval(nextSlide, 5000); // alle 5 Sekunden


document.querySelector('.btn-scroll')?.addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('#main-content').scrollIntoView({ behavior: 'smooth' });
});

let slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showNextSlide() {
  slides[currentSlide].classList.remove('active');

  currentSlide = (currentSlide + 1) % slides.length;

  slides[currentSlide].classList.add('active');
}

setInterval(showNextSlide, 7000); // alle 7 Sekunden


