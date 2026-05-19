const showLoveButton = document.getElementById('showLove');
const extraPanel = document.getElementById('extraPanel');

showLoveButton.addEventListener('click', () => {
  const isHidden = extraPanel.classList.toggle('visible');
  extraPanel.classList.toggle('hidden', !isHidden);
  showLoveButton.textContent = isHidden ? 'Hide the love' : 'Show Me More';
});

window.addEventListener('load', () => {
  setTimeout(() => {
    showLoveButton.classList.add('pulse');
  }, 1200);
});
