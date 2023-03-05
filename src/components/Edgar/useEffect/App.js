import React from 'react';
import usePosts from './hooks/usePosts';

import Posts from './Posts/Posts';

export default function App() {
	const {posts} = usePosts()

	return <Posts data={posts} />

}
