import React, { useRef, useEffect } from 'react'

export default function App() {
	const myRef = useRef(null)

	const handleClick = () => { 
		console.log("div click");

	}

	useEffect(() => {
		const div = myRef.current
		div.addEventListener('click', handleClick);
		return () => div.removeEventListener('click', handleClick);
	}, [])
	

	return (
		<div className='box' ref={myRef}> 
			<h1>useRef hook</h1>
			<button>
				delete
			</button>
		</div>
	)
}
