import axios from 'axios'
import React, { useState, useEffect } from 'react'

export const useData = () => {
	const [data, setData] = useState([])

	useEffect(() => {
		function getData() {
			axios.get("https://jsonplaceholder.typicode.com/todos")
				.then(response => setData(response.data))
		}

		getData()
	}, [])

	return { data }
}
