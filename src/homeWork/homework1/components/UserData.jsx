import React from 'react'

export default function ({users,count}) {
    
  return (
    <div>
        <h2>get post N{users[count].id} Every <span>Click</span> time fetch</h2>
        <p>{users[count].id}</p>
        <p>{users[count].title}</p>
        <p>{users[count].body}</p>
    </div>
  )
}
