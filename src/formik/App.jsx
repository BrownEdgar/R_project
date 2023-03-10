import React from 'react'
import { ErrorMessage,Field,Form,Formik } from 'formik'
import * as yup from 'yup'

import './App.scss'



const initialValues = {
    email:"",
    userName:"",
    age:"",
    password:"",
    checkbox: false,
}
const validationSchema = yup.object({
    email: yup.string().email('Is not valid Email').required(),
    userName: yup.string().min(3,'must by more then 3 charasters').max(12,'max length 12 charasters').required(),
    age: yup.number().min(18,'min age 18 year').max(150,'max age 150 year').required(),
    password: yup.string()
    .min(8,'must by more than 8 charasters')
    .matches(/^[A-Z]/g, 'starts with uppercase')
    .required(),
    checkbox: yup.boolean()
    .oneOf([true],'be sure to tick').required()
})

export default function App() {
    const onSubmit = (values) => {
		console.log(values);
	}
  return (
    <div className='container'>
    <Formik
        initialValues = {initialValues}
        onSubmit = {onSubmit}
        validationSchema={validationSchema}
        validateOnChange={false}
        validateOnBlur={true}
    >
    <Form>
        <div className='form_group'>
            <label htmlFor="email">Email</label>
            <Field type="email" id='email' name='email'></Field>
            <ErrorMessage component='p' name='email' className='error'></ErrorMessage>
        </div>
        <div className='form_group'>
            <label htmlFor="userName">UserName</label>
            <Field type="text" id='userName' name='userName'></Field>
            <ErrorMessage component='p' name='userName' className='error'></ErrorMessage>
        </div>
        <div className='form_group'>
            <label htmlFor="age">Age</label>
            <Field type="number" id='age' name='age' min='18' max='150'></Field>
            <ErrorMessage component='p' name='age' className='error'></ErrorMessage>
        </div>
        <div className='form_group'>
            <label htmlFor="password">Password</label>
            <Field type="password" id='password' name='password'></Field>
            <ErrorMessage component='p' name='password' className='error'></ErrorMessage>
        </div>
        <div className="form_group form_checkbox">
            <label htmlFor="allright">
                <Field type='checkbox' id='checkbox' name='checkbox'></Field>
                <span>Is all right?</span>
            </label>
            <ErrorMessage component='p' name='checkbox' className='error'></ErrorMessage>
        </div>
        <div className="form_group">
		    <Field type="submit" value="register" />
	    </div>
    </Form>
        
    </Formik>
    </div>
  )
}

