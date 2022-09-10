import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getAllAppointments } from '../services/appointments'

const UseAppoitments = () => {
	const { token, dataUser: user } = useSelector((state) => state.login)
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState({ hasError: false, message: '' })
	const [appointments, setAppointments] = useState([])

	const getAppointments = async () => {
		try {
			setError({ hasError: false, message: '' })
			setIsLoading(true)
			const data = await getAllAppointments(user._id, token)
			if (data.success) {
				setIsLoading(false)
				setError({ hasError: false, message: '' })
				setAppointments(data.data)
			} else {
				setError({
					hasError: true,
					message: data.message,
				})
				setIsLoading(false)
			}
		} catch (error) {
			setError({ hasError: true, message: error.message })
			setIsLoading(false)
		}
	}
	const deleteAppointment = (id) => {
		setAppointments(appointments.filter((appointment) => appointment._id !== id))		
	}

	useEffect(() => {
		getAppointments()
	}, [user.id, token])

	return {
		isLoading,
		error,
		appointments,
		deleteAppointment,
	}
}

export default UseAppoitments
