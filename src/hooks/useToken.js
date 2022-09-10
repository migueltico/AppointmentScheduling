import { useCallback, useState } from 'react'
import { getToken } from '../services/login'
import { setlogin } from '../store/slice/loginSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function useToken() {
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState({ hasError: false, message: '' })
	const isLoggedIn = useSelector((state) => state.login.isLoggedIn)
	const dispatch = useDispatch()

	const loginUser = useCallback(
		async ({ email, password }) => {
			try {
				setError({ hasError: false, message: '' })
				setIsLoading(true)
				const data = await getToken(email, password)

				if (data.success) {
					setIsLoading(false)
					setError({ hasError: false, message: '' })
					dispatch(setlogin(data))
					return true
				} else {
					setError({
						hasError: true,
						message: data.message,
					})
					setIsLoading(false)
					return false
				}
			} catch (error) {
				setError({ hasError: true, message: error.message })
				setIsLoading(false)
				return false
			}
		},
		[isLoggedIn]
	)
	const logout = () => {}
	return {
		loginUser,
		logout,
		isLoading,
		isLoggedIn,
		error,
	}
}
