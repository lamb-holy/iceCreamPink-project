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
})();

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
