import React from 'react'

const InputGroup = (props) => {
	const {
		type = 'text',
		classString,
		label,
		regex,
		msgError,
		value,
		setValue,
	} = props
	const handleChange = (e) => {
		const inputValue = e.target.value
		if (regex) {
			if (regex.test(inputValue)) {
				setValue({
					...value,
					value: inputValue,
					valid: true,
					message: '',
				})
			} else {
				setValue({
					...value,
					value: inputValue,
					valid: false,
					message: msgError,
				})
			}
		}
	}
	return (
		<div className={`form__group ${classString}`}>
			<label className="form__label">{label}</label>
			<input
				className="form__input"
				type={type}
				required="required"
				onChange={handleChange}
				onBlur={handleChange}
				value={value.value}
			/>
			<span>
				{value.valid === false && (
					<small className="form__text">
						{`${label} ${msgError}`}
					</small>
				)}
			</span>
		</div>
	)
}

export default InputGroup
