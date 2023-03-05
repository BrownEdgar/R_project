import React from 'react'
import PropTypes from 'prop-types'
import truncate from '../helpers/truncate'

export default function Post({ post }) {
	return (
		<div className='Post'>
			<h3 className='Post__Title'>{post.title}</h3>
			<p className='Post__Description'>{truncate(post.body, 250)}</p>
		</div>
	)
}

Post.propTypes = {
	post: PropTypes.shape({
		userId: PropTypes.number,
		id: PropTypes.number,
		title: PropTypes.string,
		body: PropTypes.string,
	})
}