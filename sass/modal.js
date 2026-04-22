(() => {
  const refs = {
    openModalBtns: document.querySelectorAll("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtns.forEach(btn => {
    btn.addEventListener("click", toggleModal);
  });

  refs.closeModalBtn.addEventListener("click", toggleModal);

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