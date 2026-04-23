// header modal

;(() => {
	const refs = {
		openModalBtn: document.querySelector('[data-modal-open-header]'),
		closeModalBtn: document.querySelector('[data-modal-close-header]'),
		modal: document.querySelector('[data-modal-header]'),
	}

	refs.openModalBtn.addEventListener('click', toggleModal)
	refs.closeModalBtn.addEventListener('click', toggleModal)

	function toggleModal() {
		refs.modal.classList.toggle('is-hidden-header')
		document.body.classList.toggle('no-scroll')
	}
})()

// products modal

;(() => {
	const refs = {
		openModalBtn: document.querySelector('[data-modal-open-product]'),
		closeModalBtn: document.querySelector('[data-modal-close-product]'),
		modal: document.querySelector('[data-modal-product]'),
	}

	refs.openModalBtn.addEventListener('click', toggleModal)
	refs.closeModalBtn.addEventListener('click', toggleModal)

	function toggleModal() {
		refs.modal.classList.toggle('is-hidden-product')
		document.body.classList.toggle('no-scroll')
	}
})()

// location modal

;(() => {
	const refs = {
		openModalBtn: document.querySelector('[data-modal-open-loc]'),
		closeModalBtn: document.querySelector('[data-modal-close-loc]'),
		modal: document.querySelector('[data-modal-loc]'),
	}

	refs.openModalBtn.addEventListener('click', toggleModal)
	refs.closeModalBtn.addEventListener('click', toggleModal)

	function toggleModal() {
		refs.modal.classList.toggle('is-hidden-loc')
		document.body.classList.toggle('no-scroll')
	}
})()