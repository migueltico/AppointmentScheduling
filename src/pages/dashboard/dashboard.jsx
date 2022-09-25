import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'

import useDarkMode from '@/hooks/useDarkMode'

import Header from '@/components/dashboard/Header'
import Content from '@/components/dashboard/Content'

import './dashboard.css'

const Dashboard = () => {
	const navigateTo = useNavigate()
	const { isLoggedIn, darkMode } = useSelector((state) => state.login)
	const { darkTheme } = useDarkMode()
	useEffect(() => {
		if (!isLoggedIn) {
			navigateTo('/login')
		}
	}, [isLoggedIn])
	return (
		<main style={darkMode ? { ...darkTheme } : {}}>
			<Content>
				<Header />
				<Outlet />
			</Content>
		</main>
	)
}

export default Dashboard
