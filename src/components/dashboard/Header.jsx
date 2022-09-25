import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import UseAppoitments from '@/hooks/useAppoitments'

import Modal from '../commons/modal/Modal'
import CreateAppointment from '../commons/modal/CreateAppointment'

import perfil from '../../assets/perfil.png'
import { setDarkMode } from '../../store/slice/loginSlice'

const modalCreateOptions = {
	title: 'Create Appointment',
	position: 'center',
	size: 'sm',
}

const Header = () => {
	const dataUser = useSelector((state) => state.login)
	const dispatch = useDispatch()
	const user = dataUser.dataUser
	const { createAppointment } = UseAppoitments()
	const [appointment, setAppointment] = useState({
		name: '',
		date: new Date().toISOString().split('T')[0],
		time: '00:00',
		place: '',
		image: '',
		detail: '',
		userId: user._id,
	})

	const [showModal, setShowModal] = useState(false)

	return (
		<>
			<div id="header">
				<nav>
					<input
						className="nav__item"
						type="search"
						name="search"
						placeholder="Search..."
						autoComplete="off"
					/>
					<button
						className="nav__item"
						onClick={() => setShowModal(!showModal)}
					>
						<i className="fa fa-plus"></i>
					</button>
					<button className="nav__item">
						<i className="fa fa-bell"></i>
					</button>
					<button
						className="nav__item"
						onClick={() =>
							dispatch(setDarkMode(!dataUser.darkMode))
						}
					>
						<i className="fa-regular fa-moon"></i>
					</button>
					<button className="nav__item profile__btn">
						<figure>
							<img
								src={perfil}
								alt="avatar"
								style={{ filter: 'contrast(0.9)' }}
							/>
						</figure>
					</button>
				</nav>
			</div>

			{showModal && (
				<Modal
					options={modalCreateOptions}
					setShowModal={setShowModal}
				>
					<CreateAppointment
						appointment={appointment}
						setAppointment={setAppointment}
						createAppointment={createAppointment}
						setShowModal={setShowModal}
					/>
				</Modal>
			)}
		</>
	)
}

export default Header
