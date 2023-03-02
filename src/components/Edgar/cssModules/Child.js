import React from 'react'
import style from "./Child.module.css"


export default function Child() {
	return (
		<div className={style.box}>

			<h3>Lorem ipsum dolor sit amet.</h3>
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore a fugit unde quaerat maiores animi quis tenetur tempore quos similique.</p>
			<button>Child button</button>
		</div>
	)
}
