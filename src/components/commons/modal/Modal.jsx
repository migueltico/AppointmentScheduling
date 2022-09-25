import React from 'react'
import './modal.css'

const Modal = ({ options, setShowModal, children }) => {
	const closeModalOnClickedBackground = (e) => {
		if (e.target.classList.contains('modal__backdrop')) {
			setShowModal(false)
		}
	}
	return (
		<div
			className={`${options.position} modal__backdrop`}
			onMouseDown={(e) => closeModalOnClickedBackground(e)}
		>
			<div className={`modal ${options.size ? options.size : 'sm'}`}>
				{options.title && (
					<div className="modal__header">
						<h3 className="modal__title">{options.title}</h3>
					</div>
				)}

				{children}

				<button
					className="modal__close"
					onClick={() => setShowModal(false)}
				>
					<i className="fa-solid fa-xmark"></i>
				</button>
			</div>
		</div>
	)
}

export default Modal
