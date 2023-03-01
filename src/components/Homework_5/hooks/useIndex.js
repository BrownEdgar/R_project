import React, { useState } from 'react'

export const useIndex = () => {
	const [index, setIndex] = useState(0)

	function nextIndex() {
		return setIndex(index + 1)
	}
	return { index, nextIndex }
}
