 const truncate = (body, sybols) => {
	 return body.length > sybols ? body.slice(0, sybols-1) + '...' : body
}

export default truncate;