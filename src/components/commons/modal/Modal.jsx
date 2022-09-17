import React from 'react'
import './modal.css'

const Modal = ({ options, setShowModal }) => {
	console.log(options.actions[0])
	return (
		<div
			className={`${options.position} modal__backdrop`}
			onClick={() => setShowModal(false)}
		>
			<div className="modal sm">
				{options.title ? (
					<div className="modal__header">
						<h3 className="modal__title">{options.title}</h3>
					</div>
				) : (
					''
				)}
				<div className="modal__body">{options.body}</div>

				<div className="modal__actions">
					{options.actions.map((action, index) => (
						<button
							key={index}
							className={action.className}
							onClick={() => {
								action.onClick
									? action.onClick()
									: console.log('action.onClick failed')
								console.log('action.onClick')
							}}
						>
							{action.text}
						</button>
					))}
				</div>
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
