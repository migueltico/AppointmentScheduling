import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/login/Login'
import './App.css'
import Dashboard from './pages/dashboard/dashboard'
import ListOfAppointments from './components/ListOfAppointments/ListOfAppointments'

const Appointment = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/" element={<Dashboard />}>
					<Route index element={<ListOfAppointments />} />
				</Route>
				<Route path="*" element={<h1>404</h1>} />
			</Routes>
		</BrowserRouter>
	)
}
export default Appointment

/*TODO: Crear una aplicacion de recordatorios de citas 
	donde se pueda crear, editar, eliminar y ver las citas
	que se tienen programadas
	en el dashboard se debe poder ver las citas que se tienen programadas
	para el dia de hoy y para los proximos 7 dias
	la aplicacion se debe poder usar como una webapp
	la aplicacion debe tener un menu para navegar entre las paginas
	la aplicacion debe tener un login para poder acceder a las paginas
	la aplicacion debe tener un registro para poder crear una cuenta
	la cuenta debe permitir registrarse con google o facebook
	
*/
