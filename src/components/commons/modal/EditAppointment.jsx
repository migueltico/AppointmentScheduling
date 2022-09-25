import React from 'react'
import UseDateTime from '@/hooks/useDateTime'

const EditAppointment = ({
	setShowEditModal,
	editAppointment,
	editedAppointment,
	setAppointment,
}) => {
	const { convertDateFormated } = UseDateTime()
	const handleChange = (e) => {
		setAppointment({
			...editAppointment,
			[e.target.name]: e.target.value,
		})
	}
	console.table(editedAppointment)
	return (
		<>
			<div className="modal__body">
				<form className="form">
					<div className="form__group">
						<label htmlFor="name">Appointment name</label>
						<input
							type="text"
							name="name"
							id="name"
							onChange={(e) => handleChange(e)}
							value={editedAppointment.name}
						/>
					</div>
					<div className="form__group">
						<label htmlFor="date">Date</label>
						<input
							type="date"
							name="date"
							id="date"
							onChange={(e) => handleChange(e)}
							value={convertDateFormated(
								editedAppointment.date
							)}
						/>
					</div>
					<div className="form__group">
						<label htmlFor="time">Time</label>
						<input
							type="time"
							name="time"
							id="time"
							onChange={(e) => handleChange(e)}
							value={editedAppointment.time}
						/>
					</div>
					<div className="form__group">
						<label htmlFor="place">Place</label>
						<input
							type="text"
							name="place"
							id="place"
							onChange={(e) => handleChange(e)}
							value={editedAppointment.place}
						/>
					</div>
					<div className="form__group">
						<label htmlFor="image">Image Url</label>
						<input
							type="url"
							name="image"
							id="image"
							onChange={(e) => handleChange(e)}
							value={editedAppointment.image}
							placeholder="Use an image url you need to remember"
						/>
					</div>
					<div className="form__group">
						<label htmlFor="detail">Detail</label>
						<textarea
							name="detail"
							id="detail"
							cols="30"
							rows="10"
							onChange={(e) => handleChange(e)}
							value={editedAppointment.detail}
						></textarea>
					</div>
				</form>
			</div>
			<div className="modal__actions">
				<button
					className="btn fit btn-default danger"
					onClick={() => setShowEditModal(false)}
				>
					Cancel
				</button>
				<button
					className="btn fit btn-default primary"
					onClick={async () =>
						editAppointment(editedAppointment)
					}
				>
					Save
				</button>
			</div>
		</>
	)
}

export default EditAppointment
