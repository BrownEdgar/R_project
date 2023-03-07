import React from 'react'
import Post from "./Post"

export default function Posts({data}) {
  return (
    <div>
        {data.map((post)=>{
            return <Post post = {post} key = {post.id}/>
        })}
    </div>
  )
}
