import React, { useState } from 'react'
import "./App.scss";

function validate(value, options) {

	let isValid = false;
	if (value.trim().length >= options.minLength) {
		isValid = true
	}
	if (options.hasNumber) {
		isValid = isValid && /\d/g.test(value) 
	}
	if (options.hasUppercase) {
		isValid = isValid && /[A-Z]/.test(value)
	}
	if (options.hasSymbol) {
		isValid = isValid && /[!@#%$^&{}().]/g.test(value)
	}
	if (!options.hasSpace) {	
		isValid = isValid && !(/\s/g.test(value))
	}
	return isValid;
	
}


export default function Form() {
	const [data, setData] = useState({
		formData: {
			password: {
				value: "",
				errormessage: "Invalid name",
				isValid: false,
				touched: false,
				validation: {
					minLength: 8,
					hasNumber: true,
					hasUppercase: true,
					hasSymbol: true,
					hasSpace: false,
				}
			}
		}
	})

	const handleSubmit = (e) => {

		const { password } = e.target
		e.preventDefault();
		const isValid = validate(password.value, data.validation)
	
			setData({
				...data,
				isValid,
				touched:true
			})
			
	}
	return (
		<div className='container'>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="password" > password </label>
					<input type="password" id="password" />
					{
						(data.touched && !data.isValid) &&
						<p className='error'>{data.errormessage}</p>
					}
				</div>
				<div>
					<input type="submit" value="Register" />
				</div>
				<div>
					<label htmlFor="color" > Color </label>
					<input type="color" id="color" />
				</div>
				<div>
					<label htmlFor="languages" > Languages </label>
					<select name="languages" id="languages">
						<option value="" selected disabled></option>
						<option value="js">js</option>
						<option value="react.js">React.js</option>
						<option value="next.js">Next.js</option>
						<option value="nest.js">Nest.js</option>
					</select>
				</div>
			</form>
		</div>
	)
}
