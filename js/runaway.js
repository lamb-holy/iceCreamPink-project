const btn = document.querySelector('.runaway-btn');

let isFree = false;

btn.addEventListener('mouseenter', () => {
  if (!isFree) {
    const rect = btn.getBoundingClientRect();

    const scrollX = window.scrollX;
    const scrollY = window.scrollY;

    // стартова позиція в координатах документа
    btn.style.left = rect.left + scrollX + 'px';
    btn.style.top = rect.top + scrollY + 'px';

    document.body.appendChild(btn);
    btn.classList.add('is-free');

    isFree = true;
  }
});

document.addEventListener('mousemove', (e) => {
  if (!isFree) return;

  const rect = btn.getBoundingClientRect();

  const btnX = rect.left + rect.width / 2;
  const btnY = rect.top + rect.height / 2;

  const dx = e.clientX - btnX;
  const dy = e.clientY - btnY;

  const distance = Math.sqrt(dx * dx + dy * dy);
  const triggerDistance = 120;

  if (distance < triggerDistance) {
    const strength = 1.2;

    let newX = rect.left + window.scrollX - dx * strength;
    let newY = rect.top + window.scrollY - dy * strength;

    // 🔑 межі всього документа, а не екрану
    const docWidth = document.documentElement.scrollWidth;
    const docHeight = document.documentElement.scrollHeight;

    const padding = 10;

    const minX = padding;
    const maxX = docWidth - rect.width - padding;

    const minY = padding;
    const maxY = docHeight - rect.height - padding;

    newX = Math.max(minX, Math.min(maxX, newX));
    newY = Math.max(minY, Math.min(maxY, newY));

    btn.style.left = newX + 'px';
    btn.style.top = newY + 'px';
  }
});