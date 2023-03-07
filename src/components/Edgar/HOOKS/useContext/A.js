import React from 'react'
import B from './B'

export default function A({data}) {
	console.log("A render");
	return (
		<div>
			<h2>Component A</h2>
			<B data={data}/>
		</div>
	)
}
