import { useState, useEffect } from 'react'
import axios from 'axios'

export default function usePosts() {
	const [posts, setPosts] = useState([])

	useEffect(() => {
		function getData() {
			axios.get('https://jsonplaceholder.typicode.com/posts?_limit=12')
				.then(res => setPosts(res.data))
		}
		getData()
	}, [])

	return {posts}
}
