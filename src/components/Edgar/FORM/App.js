import React, { useState } from 'react'

import "./App.scss";

export default function App() {

	const [formData, setFormData] = useState({
		name: "",
		password: ""
	})
	const handleChange = (e) => { 
		const { name } = e.target
		
		setFormData({ ...formData, [name]: e.target.value })
	 }

	const handleSubmit = (e) => { 
		e.preventDefault()
		const { name, password } = e.target
		setFormData(
			{
				name: name.value,
				password: password.value,
			}
		)
		
	 }
	return (
		<div className='container'>
			<form onSubmit={handleSubmit}>
				{/* <div>
					<label htmlFor="name" > Name </label>
					<input type="text" value={formData.name} onChange={handleChange} name="name"/>
				</div>
				<div>
					<label htmlFor="password" > password </label>
					<input type="password" value={formData.password} onChange={handleChange} name="password"/>
				</div> */}
				<div>
					<label htmlFor="name" > Name </label>
					<input type="text"  id="name"/>
				</div>
				<div>
					<label htmlFor="password" > password </label>
					<input type="password" id="password" />
				</div>
				<div>
					
					<input type="submit" value={"Register"}/>
				</div>
			</form>
		</div>
	)
}
