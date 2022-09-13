import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'

import Header from '@/components/dashboard/Header'
import Content from '@/components/dashboard/Content'

import './dashboard.css'

const Dashboard = () => {
	const navigateTo = useNavigate()
	const { isLoggedIn } = useSelector((state) => state.login)
	useEffect(() => {
		if (!isLoggedIn) {
			navigateTo('/login')
		}
	}, [isLoggedIn])
	return (
		<main>
			<Content>
				<Header />
				<Outlet />
			</Content>
		</main>
	)
}

export default Dashboard
