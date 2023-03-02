import React, { useEffect, useState } from 'react'

import UserData from './components/UserData';
import useData from './components/useData'

import "./App.scss"

export default function App() {
    // const [users,setUsers] = useState([{}])
 
    // useEffect(() => {
    //     const getPostsData = () => {
    //         axios
    //         .get("https://jsonplaceholder.typicode.com/posts?_limit=13")
    //         .then(data => setUsers(data.data))
    //         .catch(error => console.log(error));
    //         };
    //        getPostsData();
    // },[])

	const [user , countChange ]  = useData()
	console.log(user)

  return (
    <div className='App'>
			{Object.keys(user).length > 0 && <UserData user={user} />}
        <button onClick={countChange}>Change</button>
    </div>
  )
}
