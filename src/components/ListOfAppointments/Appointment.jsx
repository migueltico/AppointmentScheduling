import React, { useState } from 'react'
import UseDateTime from '@/hooks/useDateTime'

import Modal from '../commons/modal/Modal'
import DeleteAppointment from '../commons/modal/DeleteAppointment'
import EditAppointment from '../commons/modal/EditAppointment'

const Appointments = ({ appointment, deleteAppointment, editAppointment }) => {
	const [showDeleteModal, setShowDeleteModal] = useState(false)
	const [showEditModal, setShowEditModal] = useState(false)
	const user = appointment.userId._id
	const [editedAppointment, setEditedAppointment] = useState({
		...appointment,
		userId: user,
	})


	const { convertDate, convertTime } = UseDateTime()

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
					{convertTime(appointment.time)}
				</span>
			</div>
			<div className="appointment__box">
				<button className="btn btn-default">
					<i className="fa fa-check"></i>
					<span>Done</span>
				</button>
				<button
					className="btn btn-default"
					onClick={() => setShowEditModal(true)}
				>
					<i className="fa fa-edit"></i>
					<span>Edit</span>
				</button>
				<button
					className="btn btn-default"
					onClick={() => setShowDeleteModal(true)}
				>
					<i className="fa fa-trash"></i>
					<span>Delete</span>
				</button>
			</div>

			{showDeleteModal && (
				<Modal
					setShowModal={setShowDeleteModal}
					options={{
						title: 'Confirm Delete',
						position: 'center',
						size: 'sm',
					}}
				>
					<DeleteAppointment
						appointment={appointment}
						deleteAppointment={deleteAppointment}
						setShowDeleteModal={setShowDeleteModal}
					/>
				</Modal>
			)}

			{showEditModal && (
				<Modal
					setShowModal={setShowEditModal}
					options={{
						title: 'Edit appointment',
						position: 'center',
						size: 'sm',
					}}
				>
					<EditAppointment
						setShowEditModal={setShowEditModal}
						editAppointment={editAppointment}
						editedAppointment = {editedAppointment}
						setAppointment={setEditedAppointment}
					/>
				</Modal>
			)}
		</div>
	)
}

export default React.memo(Appointments)
