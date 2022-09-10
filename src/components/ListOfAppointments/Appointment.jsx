import React from 'react'

const Appointments = ({ appointment, deleteAppointment }) => {
	const convertDate = (appointmentDate) => {
		const newDate = new Date(appointmentDate)
		const fullDate = newDate.toLocaleDateString('es-ES', {
			year: '2-digit',
			month: 'short',
			day: '2-digit',
		})
		return fullDate.replaceAll(/\//g, '-')
	}
	return (
		<div className="appointmentElement">
			<h3 className="appointment__box">{appointment.name}</h3>
			<div className="appointment__box">
				<span>{appointment._id}</span>
				<p>{appointment.detail}</p>
			</div>
			<div className="appointment__box">
				<span>
					<i className="fa fa-map-pin"></i>
					{appointment.place}
				</span>
				<span>
					<i className="fa fa-calendar-days"></i>
					{convertDate(appointment.date)}
				</span>
				<span>
					<i className="fa fa-clock"></i>
					{appointment.time}
				</span>
			</div>
			<div className="appointment__box">
				<button className="btn btn-default">
					<i className="fa fa-check"></i>
					<span>Done</span>
				</button>
				<button className="btn btn-default">
					<i className="fa fa-edit"></i>
					<span>Edit</span>
				</button>
				<button
					className="btn btn-default"
					onClick={() => deleteAppointment(appointment._id)}
				>
					<i className="fa fa-trash"></i>
					<span>Delete</span>
				</button>
			</div>
		</div>
	)
}

export default Appointments