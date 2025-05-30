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
