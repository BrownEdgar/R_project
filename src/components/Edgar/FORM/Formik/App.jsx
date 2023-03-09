import React from 'react'
import { useFormik, Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'

import "./App.scss";
import ErrorBlock from './ErrorBlock';


const validationSchema = yup.object({
	username: yup.string().required("Required!").min(3, "Must by 3 or more charaster"),
	password: yup.string()
		.required("Required!")
		.matches(/^[A-Z]/g, "Uppercase is required!")
		.min(8, "Must by 8 or more charaster")
		.max(18, "Must by 18 or less charaster")
		.trim()
})

const initialValues = {
	username: "",
	password: ""
}
export default function App() {

	const onSubmit = () => {  }
	return (
		<div className="container">
			<Formik
				initialValues={initialValues}
				onSubmit={onSubmit}
				validateOnChange={false}
				validateOnBlur={true}
				validationSchema={validationSchema}
			>
					{
						(formik) => {
							return <Form >
								<div>
									<label htmlFor="username">Username</label>
									<Field type="text" name='username' id="username" />
									<ErrorMessage name='username'>
										{errMsg => <ErrorBlock errMsg={errMsg} />}
									</ErrorMessage>
								</div>
								<div>
									<label htmlFor="password">Password</label>
									<Field type="password" name='password' id="password" />
									<ErrorMessage name='password'>
										{errMsg => <ErrorBlock errMsg={errMsg} />}
									</ErrorMessage>
								</div>
								<div>
									<Field type="submit" value="Register"  disabled={!formik.isValid}/>
								</div>
							</Form>
						}
					}
			</Formik>
		</div>
	
	)
}
