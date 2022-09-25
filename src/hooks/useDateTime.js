const UseDateTime = () => {
	const convertDate = (appointmentDate) => {

		let appointmentDateNew = appointmentDate.split('T')[0].split('-').reverse().join('-')
		return appointmentDateNew
	}
	const convertDateFormated = (
		date
	) => {
		return new Date(date).toISOString().slice(0, 10)
	}
	const convertTime = (appointmentTime) => {
		if (navigator.language !== 'es-ES') return appointmentTime
		let newTimeFormat = appointmentTime
			.split(':')
			.map((time, index) => {
				if (index === 0) {
					if (time > 12) {
						return (time - 12).toString() //Hours
					} else {
						return time === '00' ? 12 : time //Hour
					}
				} else {
					return Number(appointmentTime.split(':')[0]) >= 12
						? time + ' p.m'
						: time + ' a.m' //AM/PM
				}
			})
			.join(':')
		return newTimeFormat
	}
	return { convertDate, convertTime, convertDateFormated }
}

export default UseDateTime
