import React from 'react'

const DeleteAppointment = ({
	appointment,
	deleteAppointment,
	setShowDeleteModal,
}) => {
	return (
		<>
			<div className="modal__body">
				<p>
					Are you sure you want to delete{' '}
					<strong>{appointment.name}</strong> appointment?
				</p>
			</div>
			<div className="modal__actions">
				<button
					className="btn fit btn-default primary"
					onClick={() => setShowDeleteModal(false)}
				>
					Cancel
				</button>
				<button
					className="btn fit btn-default danger"
					onClick={() => {
						deleteAppointment(appointment._id)
						setShowDeleteModal(false)
					}}
				>
					Delete
				</button>
			</div>
		</>
	)
}

export default DeleteAppointment
