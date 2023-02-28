import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import axios from 'axios'

import requests from './requests'

import "./App.scss"

export default function App() {
	const [data, setData] = useState({
		todos: [],
		posts: [],
	})
	const [error, setError] = useState(true)


	useEffect(() => {
		async function fetchData() {
			//ՏԱՐԲԵՐԱԿ 1 async-await

			// const response = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
			// console.log(response);

				//ՏԱՐԲԵՐԱԿ 2 Primise

			// axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
			// 	.then(response => {
			// 		console.log(response);
			// 		if (response.status === 200) {
			// 			setData(response.data)
			// 			setError(false)
			// 		}else{
			// 			setError(true)
			// 		}
			// 	}).catch(err => setError(true))

			// // ՏԱՐԲԵՐԱԿ 3
			// 	axios({
			// 		method: "post",
			// 		url: "https://jsonplaceholder.typicode.com/todos",
			// 		data: {
			// 			"userId": 1,
			// 			"id": 201,
			// 			"title": "my title",
			// 			"completed": false
			// 		},
			// 	}).then(response => setData(response))
			//// ՏԱՐԲԵՐԱԿ 4 multy data

			// axios.all(
			// 	[
			// 		axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10"),
			// 		axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10"),
			// 		axios.get("https://jsonplaceholder.typicode.com/albums?_limit=10"),
			// 	]
			// ).then(([t,p,a]) => console.log({t,p,a}))
			// .catch(err => setError(true))

			// ՏԱՐԲԵՐԱԿ 5 
			// axios.get(requests.albums)
			// 	.then(response => console.log(response.data))

				// axios.spread((todos, posts) => {
	// 	setData({
	// 		todos: todos.data,
	// 		posts: posts.data,
	// 	})
	// })
		}
		fetchData() 
	}, [])


	return (
		<div className='Axios'>
			<h1>Axios</h1>
			<pre className={classNames(null, { 
				"error": data.todos.length > 0,
				show: error
				})}>
					{JSON.stringify(data,null,1 )}
				</pre>
		</div>
	)
}
