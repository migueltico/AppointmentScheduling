import React from 'react'
import UseAppoitments from '@/hooks/useAppoitments'
import './appointmentList.css'
import Appointment from './Appointment'
document.title = 'Appointment List - Appointment Scheduler'
const ListOfAppointments = () => {
	const { appointments, isLoading, deleteAppointment, editAppointment } = UseAppoitments()
	return (
		<>
			<div className="appointmentContainer">
				{isLoading ? (
					<p>Loading</p>
				) : (
					appointments?.map((data, index) => (
						<Appointment
							appointment={data}
							key={index}
							deleteAppointment={deleteAppointment}
							editAppointment={editAppointment}
						/>
					))
				)}
			</div>
		</>
	)
}
export default React.memo(ListOfAppointments)
