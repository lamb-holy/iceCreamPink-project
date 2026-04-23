;;(() => {
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
;;(() => {
	const refs = {
		openModalBtn: document.querySelector('[data-modal-open-product2]'),
		closeModalBtn: document.querySelector('[data-modal-close-product2]'),
		modal: document.querySelector('[data-modal-product2]'),
	}

	refs.openModalBtn.addEventListener('click', toggleModal)
	refs.closeModalBtn.addEventListener('click', toggleModal)

	function toggleModal() {
		refs.modal.classList.toggle('is-hidden-product2')
		document.body.classList.toggle('no-scroll')
	}
})()
;(() => {
	const refs = {
		openModalBtn: document.querySelector('[data-modal-open-product3]'),
		closeModalBtn: document.querySelector('[data-modal-close-product3]'),
		modal: document.querySelector('[data-modal-product3]'),
	}

	refs.openModalBtn.addEventListener('click', toggleModal)
	refs.closeModalBtn.addEventListener('click', toggleModal)

	function toggleModal() {
		refs.modal.classList.toggle('is-hidden-product3')
		document.body.classList.toggle('no-scroll')
	}
})()



