import React from 'react'
import Post from './Post'

import "./Posts.scss"

export default function Posts({data}) {
	return (
		<div className='Posts'>
			{data.map((post) => {
				return <Post post={post} key={post.id} />
			})}
		</div>
	)
}
