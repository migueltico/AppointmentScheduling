import { createSlice } from '@reduxjs/toolkit'

export const appointmentSlice = createSlice({
	name: 'appointment',
	initialState: {
		appointments: [],
		isLoading: false,
		error: {
			hasError: false,
			message: '',
		},
	},
	reducers: {
		setAppointments: (state, action) => {
			state.appointments = action.payload
			if (action.payload.length > 0) {
				state.isLoading = false
				state.error = {
					hasError: false,
					message: '',
				}
			}
		},
		setError: (state, action) => {
			state.error = action.payload
			state.isLoading = false
		},
		setLoading: (state, action) => {
			state.isLoading = action.payload
			if (action.payload) {
				state.error = {
					hasError: false,
					message: '',
				}
			}
		},
	},
})

//se eportan las acciones
export const { setAppointments, setError, setLoading } =
	appointmentSlice.actions
//se export el slice
export default appointmentSlice
