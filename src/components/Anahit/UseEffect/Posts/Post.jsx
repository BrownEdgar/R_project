import React from 'react'
import PropTypes from 'prop-types'
import truncate from '../Helpers/truncate'

export default function Post({post}) {
  return (
    <div>
      <h3>{post.title}</h3>
      <p> { truncate(post.body, 50)}</p>

    </div>
  )
}

Post.propTypes = {
  post: PropTypes.shape({
    userId: PropTypes.number,
    id:PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string
  })
}

// Post.propTypes= {
//     id: PropTypes.number,
//     name: PropTypes.string,
//     handle: PropTypes.func.isRequired
// }