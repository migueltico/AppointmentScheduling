import React from 'react'
import UseAppoitments from '@/hooks/useAppoitments'
import './appointmentList.css'
import Appointment from './Appointment'

const ListOfAppointments = () => {
	const { appointments, isLoading, deleteAppointment } = UseAppoitments()
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
						/>
					))
				)}
			</div>
		</>
	)
}
export default React.memo(ListOfAppointments)
