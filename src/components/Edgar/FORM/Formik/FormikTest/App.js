import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as yup from 'yup'
 
import "./App.scss"



const initialValues = {
	email: "",
	password: "",
	username: "",
	age: "",
	phone: "",
	gender: "",
	message: "hello world"
}

const validationSchema = yup.object({
	email: yup.string().email("Is not valid Email!").required(),
	password: yup.string()
	.min(8, "must by more than 8 charasters")
	.matches(/^[A-Z]/g, "starts with uppercase")
	.required("Required!"),
	username: yup.string().min(3, "must by more than 3 charasters").max(12).required(),
	age: yup.number().integer().positive().required(),
	phone: yup.number().min(9).required(),
	message: yup.string().required().default("hello world")
})
export default function App() {

	const onSubmit = (values) => {
		console.log(values);
	}
	return (
		<div className='container'>
			<Formik
				initialValues={initialValues}
				onSubmit={onSubmit}
				validationSchema={validationSchema}
				validateOnChange={false}
				validateOnBlur={true}
			>
				<Form>
					<div className="form_group">
						<label htmlFor="email">Email</label>
						<Field type="email" id="email" name="email" />
						<ErrorMessage component="p" name="email" className='error' />
					</div>
					<div className="form_group">
						<label htmlFor="password">password</label>
						<Field type="password" id="password" name="password" />
						<ErrorMessage component="p" name="password" className='error'/>
					</div>
					<div className="form_group">
						<label htmlFor="username">username</label>
						<Field type="text" id="username" name="username" />
						<ErrorMessage component="p" name="username"className='error'/>
					</div>
					<div className="form_group">
						<label htmlFor="age">age</label>
						<Field type="text" id="age" name="age" />
						<ErrorMessage component="p" name="age" className='error'/>
					</div>
					<div className="form_group">
						<label htmlFor="phone">phone</label>
						<Field type="text" id="phone" name="phone" />
						<ErrorMessage component="p" name="phone" className='error'/>
					</div>
					<div className="form_group">
						<label htmlFor="message">messsage</label>
						<Field id="message" name="message" as="textarea" />
						<ErrorMessage component="p" name="message" className='error'/>
					</div>
					<div className="form_group">
						<label>
							<Field id="messsage" name="gender" type="radio" value="male" />
							male
						</label>
						<label>
							<Field id="messsage" name="gender" type="radio" value="female" />
							female
						</label>
					</div>
					<div className="form_group">
						<Field type="submit" value="register" />
					</div>

				</Form>
			</Formik>
		</div>
	)
}
