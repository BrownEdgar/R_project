import React from 'react'

export default function Child(props) {
	if (props.children) {
		return (
			<div>
				<h2>Component data</h2>
				<div className='box'>
					{props.children[0].props.children.slice(0, 5)}
					<hr />
				</div>
			</div>
		)
	}

	return <h1>no content</h1>

}
