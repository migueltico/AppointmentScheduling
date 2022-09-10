const getAllAppointments = async (userID, token) => {
	try {
		const request = await fetch(
			'http://localhost:3000/api/project1/appointments',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					autorization: `Bearer ${token}`,
				},
				body: JSON.stringify({
					id: userID,
				}),
			}
		)

		const response = await request.json()
		return response
	} catch (error) {
		return { success: false, message: error.message, error }
	}
}

export { getAllAppointments }
