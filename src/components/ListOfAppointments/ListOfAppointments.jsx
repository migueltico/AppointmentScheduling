import React from 'react'
import UseAppoitments from '@/hooks/useAppoitments'
import './appointmentList.css'
import Appointment from './Appointment'
import { useEffect } from 'react'

const ListOfAppointments = () => {
	const { appointments, isLoading, deleteAppointment } = UseAppoitments()
	console.log('render')

	
	return (
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
	)
}
export default React.memo(ListOfAppointments)
