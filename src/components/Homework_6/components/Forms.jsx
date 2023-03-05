import React, { useState } from 'react'
import formStyle from "./Forms.module.scss"

export default function Forms() {
	const [value, setValue] = useState({})

	function submit(event) {
		event.preventDefault()
		setValue({
			login: event.target.login.value,
			password: event.target.password.value
		});
	}
	return (
		<div className={formStyle.Container}>
			<p className={formStyle.Container_Title}>Вход</p>
			<form className={formStyle.Container_Form} onSubmit={submit}>

				<input
					className={formStyle.Container_Input}
					id="login"
					type="text"
					placeholder='Имя пользователя или Email'
					autoComplete="username" />

				<input
					className={formStyle.Container_Input}
					id="password"
					type="password"
					placeholder='Пароль'
					autoComplete="current-password" />

				<a className={formStyle.Container_Link} href="#">Забыли пароль?</a>
				<div className={formStyle.Container_Buttons}>
					<button className={formStyle.Container_SignIn} disabled>Войти</button>
					<button className={formStyle.Container_SignUp}>Регистрация</button>
				</div>
			</form >
		</div >
	)
}
