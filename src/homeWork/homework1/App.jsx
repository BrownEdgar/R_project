import React, { useEffect, useState } from 'react'
import axios from 'axios';
import UserData from './components/UserData';
// import './App.scss'
export default function App() {
    const [users,setUsers] = useState([{}])
    const [count, setCount] = useState(0);
    const countChange = () =>{
        count < 11 ? setCount(count + 1) : setCount(0)
    } 
    useEffect(() => {
        const getPostsData = () => {
            axios
            .get("https://jsonplaceholder.typicode.com/posts?_limit=13")
            .then(data => setUsers(data.data))
            .catch(error => console.log(error));
            };
           getPostsData();
    },[])

  return (
    <div>
        <UserData users={users} count={count}/>
        <button onClick={countChange}>Change</button>
    </div>
  )
}
