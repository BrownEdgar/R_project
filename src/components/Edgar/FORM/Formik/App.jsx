import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'

import "./App.scss";


const validationSchema = yup.object({
	username: yup.string().required("Required!").min(3, "Must by 3 or more charaster"),
	password: yup.string()
	.required("Required!")
	.matches(/^[A-Z]/g, "Uppercase is required!")
	.min(8, "Must by 8 or more charaster")
	.max(18, "Must by 18 or less charaster")
	.trim()
})


export default function App() {

	const formik = useFormik({
		initialValues: {
			username: "",
			password: ""
		},
		onSubmit:(values) => {
			console.log(values)
		},
		validationSchema
	})
	console.log(formik.touched)
	return (
		<div className='container'>
			<form onSubmit={formik.handleSubmit}>
				<div>
					<label htmlFor="username">Username</label>
					<input 
						type="text" 
						name='username' 
						id="username"
						value={formik.values.username}
						onBlur={formik.handleBlur}
						onChange={formik.handleChange} 
					/>
					{(formik.touched.username && formik.errors.username ) ? <div className="error">{formik.errors.username}</div> : null}
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<input 
						type="password" 
						name='password' 
						id="password"
						value={formik.values.password}
						onBlur={formik.handleBlur}
						onChange={formik.handleChange} 
					/>
					{(formik.touched.password && formik.errors.password) ? <div className="error">{formik.errors.password}</div> : null}
				</div>
				<div>
					<input type="submit" value="Register" />
				</div>
			</form>
		</div>
	)
}
