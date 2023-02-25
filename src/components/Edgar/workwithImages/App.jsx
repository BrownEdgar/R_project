import React, { useState } from 'react'

import Logo from './photo.jpg'

import "./App.scss"

export default function App() {

	return (
		<div className='Box'>
			<h1 className='Box-Title'>Photo in React.js</h1>
			<img className='Box-Image' src={Logo} alt="my notebook" />

			<p className='Box-Desctiption Box-Desctiption_light Box-Desctiption_sm'>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium eligendi necessitatibus adipisci iusto libero culpa voluptatem rem facilis assumenda ducimus?
			</p>
			<p className='Box-Desctiption Box-Desctiption_light Box-Desctiption_md'>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium eligendi necessitatibus adipisci iusto libero culpa voluptatem rem facilis assumenda ducimus?
			</p>
			<button className='Box-Btn'>
				Read more
			</button>
		</div>
	)
}
