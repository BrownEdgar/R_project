import { useEffect, useState } from 'react'
import axios from 'axios';

export default function useData() {
    const [user, setUser] = useState({})
	const [count, setCount] = useState(1);
	const countChange = () => {
		count < 200 ? setCount(count + 1) : setCount(1)
	} 
    useEffect(() => {
        const getPostsData = () => {
            axios
						.get(`https://jsonplaceholder.typicode.com/posts/${count}`)
							.then(data => setUser(data.data))
            .catch(error => console.log(error));
            };
           getPostsData();
		}, [count])
	return [ user, countChange ]
}
