import { createSlice } from '@reduxjs/toolkit'
export const loginSlice = createSlice({
	name: 'login',
	initialState: {
		dataUser: {},
		token: '',
		isLoggedIn: false,
	},
	reducers: {
		setlogin: (state, action) => {
			state.dataUser = action.payload.data
			state.token = action.payload.token
			state.isLoggedIn = true
		},
		logout: (state) => {
			state.dataUser = {}
			state.isLoggedIn = false
		}
	},
})
export const { setlogin } = loginSlice.actions
export default loginSlice
