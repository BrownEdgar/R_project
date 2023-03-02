import React from 'react'
import Child from './Child'

import s from "./App.module.css"

export default function App() {
	return (
		<div className={s.box}>
			<h1>App box</h1>
			<p>Lorem ipsum dolor sit amet.</p>
			<Child />
		</div>
	)
}
