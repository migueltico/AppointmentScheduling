const getToken = async (email, password) => {
	try {
		const request = await fetch(
			'http://localhost:3000/api/project1/login',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email,
					password,
				}),
			}
		)
		const response = await request.json()
		return response
	} catch (error) {
		return { success: false, message: error.message, error }
	}
}

export { getToken }
