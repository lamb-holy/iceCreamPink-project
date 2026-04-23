// header modal

const drawer = document.getElementById('drawer');
const overlay = document.getElementById('overlay');
const trigger = document.getElementById('triggerBtn');
const close = document.getElementById('closeBtn');

function openMenu() {
  drawer.classList.add('open'); overlay.classList.add('active');
}
function closeMenu() {
  drawer.classList.remove('open'); overlay.classList.remove('active');

  trigger.addEventListener('click', openMenu);
  close.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);
}




const modal = document.getElementById('myModal')
const btn = document.getElementById('openModal')
const span = document.querySelector('.close-btn')

// Открыть окно
btn.onclick = () => (modal.style.display = 'block')

// Закрыть окно (крестик)
span.onclick = () => (modal.style.display = 'none')

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }

// location modal

const modal = document.getElementById('myModal--loc')
const btn = document.getElementById('openModal--loc')
const span = document.querySelector('.close-btn--loc')

btn.onclick = () => (modal.style.display = 'block')

span.onclick = () => (modal.style.display = 'none')

window.onclick = event => {
  if (event.target === modal) {
    modal.style.display = 'none'
  }
}
// Закрыть при клике на фон
window.onclick = event => {
	if (event.target === modal) {
		modal.style.display = 'none'
	}
}
