import {  useEffect, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { setAppointments, setError, setLoading } from '../store/slice/appoinmentSlice'
import { useDispatch } from 'react-redux'
import { getAllAppointments } from '@/services/appointments'

const UseAppoitments = () => {
	const dispatch = useDispatch()
	const { token, dataUser: user } = useSelector((state) => state.login)
	const { appointments, isLoading, error } = useSelector((state) => state.appointment)

	// Provoca un segundo renderizado, primero al setear el loading y luego al setear los datos
	const getAppointments = useCallback(async () => {
		try {
			dispatch(setLoading(true))
			const data = await getAllAppointments(user._id, token)
			if (data.success) {
				dispatch(setAppointments(data.data))
			} else {
				dispatch(setError({
					hasError: true,
					message: data.message,
				}))
			}
		} catch (error) {
			dispatch(setError({ hasError: true, message: error.message }))
		}
	})
	const deleteAppointment = useCallback( (id) => {
		dispatch(setAppointments(appointments.filter((appointment) => appointment._id !== id)))
	})

	const createAppointment = useCallback(async(appointment) => {
		try {
			const response = await fetch(
				'http://localhost:3000/api/project1/appointment',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(appointment),
				}
			)
			const data = await response.json()
			console.log(data)
		} catch (error) {
			console.log(error)
		}
	})
	const editAppointment = useCallback(async(appointment) => {
		try {
			const response = await fetch(
				'http://localhost:3000/api/project1/appointment',
				{
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(appointment),
				}
			)
			const data = await response.json()
			console.log(data)
		} catch (error) {
			console.log(error)
		}
	})


	useEffect(() => {
		getAppointments()
	}, [user.id, token])

	return {
		appointments,
		createAppointment,
		deleteAppointment,
		editAppointment,
		error,
		isLoading,
	}
}

export default UseAppoitments
