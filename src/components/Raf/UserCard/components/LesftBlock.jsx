import React, { useEffect, useState } from 'react'

export default function LesftBlock() {
    const [user,setUser] = useState([])
    useEffect(() => {
        fetch("https://api.github.com/users/MosinyanR")
        .then(response => response.json())
        .then(data => setUser(data) )
        
    },[])
    console.log(user)
  return (
    <div className='leftBlock'>
        <img src={user.avatar_url} alt="userPoto" />
        <h2>Rafayel Mosinyan</h2>
        <h3>UserName: {user.login}</h3>
        <h4>front end developer</h4>
    </div>
  )
}
