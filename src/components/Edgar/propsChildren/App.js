import React, { useState, useEffect } from 'react'
import Child from './Child'
import  axios  from 'axios'

export default function App() {
	const [data, setData] = useState([])

	useEffect(() => {
		axios({
			url: "https://jsonplaceholder.typicode.com/posts?_limit=10",
			method: "get",
			timeout: 1000
		}).then(res => setData(res.data))
	
	}, [])
	

	return (
		<div>
			<Child />

	


		</div>
	)
}
