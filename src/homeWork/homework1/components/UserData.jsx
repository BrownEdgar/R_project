import React from 'react'

export default function UserData({user}) {
  return (
    <div>
        <h2>get post N{user?.id} Every <span>Click</span> time fetch</h2>
        <p>{user?.id}</p>
        <p>{user?.title}</p>
        <p>{user?.body}</p>
    </div>
  )
}
