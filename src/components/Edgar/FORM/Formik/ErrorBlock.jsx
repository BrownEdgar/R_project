import React from 'react'

export default function ErrorBlock({ errMsg }) {
	return (
		<div className='error'>
			<p>{errMsg}</p>
		</div>
	)
}
