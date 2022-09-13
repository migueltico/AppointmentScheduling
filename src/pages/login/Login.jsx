import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginSlice } from '@/store/slice/loginSlice'

import useToken from '@/hooks/useToken'
import InputGroup from '@/components/commons/InputGroup'
import './login.css'
import { useSelector } from 'react-redux'
document.title = 'Login - Appointment Scheduler'

const Login = () => {
	const { isLoggedIn } = useSelector((state) => state.login)
	const navigateTo = useNavigate()
	const [email, setEmail] = useState({
		value: '',
		valid: true,
		message: '',
	})
	const { loginUser, isLoading, isLogged, error } = useToken()

	const [password, setPassword] = useState({
		value: '',
		valid: true,
		message: '',
	})
	const regex = {
		email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
		password: /^[a-zA-Z0-9._-]{3,}$/,
	}
	const handleLogin = async (e) => {
		e.preventDefault()
		console.log({ isLogged, error, isLoading })
		if (email.valid && password.valid) {
			const loginResult = await loginUser({
				email: email.value,
				password: password.value,
			})
			console.log(loginResult)
			if (loginResult) {
				navigateTo('/')
			} else {
				console.log('error')
			}
		}
	}
	useEffect(() => {
		if (isLoggedIn) {
			navigateTo('/')
		}
	}, [isLogged, navigateTo])

	return (
		<div className="loginContainer">
			<div className="form">
				<div className="form__body">
					<h1 className="form__title">Login</h1>
					<InputGroup
						type="email"
						label="Email"
						regex={regex.email}
						msgError="is not valid"
						value={email}
						setValue={setEmail}
					/>
					<InputGroup
						label="Password"
						type="password"
						regex={regex.password}
						msgError="is not valid"
						value={password}
						setValue={setPassword}
					/>

					<div className="form__group ">
						<label htmlFor="remenber">
							<input
								type="checkbox"
								name="remenber"
								id="remenber"
							/>
							<span style={{ margin: '10px' }}>
								Remember me
							</span>
						</label>
					</div>
					<div className="form__group">
						<button
							className="btn btn-primary"
							onClick={handleLogin}
						>
							{isLoading ? (
								<span>Loading...</span>
							) : (
								'Login'
							)}
						</button>

						{error.hasError && (
							<span className="alert">
								{error.message}
							</span>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login
