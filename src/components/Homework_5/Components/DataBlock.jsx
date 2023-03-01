import React from 'react'

export default function DataBlock({ data }) {
	return (
		<pre style={{
			width: "80%",
			padding: "1rem",
			color: "green",
			backgroundColor: "black",
			margin: "20px auto",
			borderRadius: "20px"
		}}>{JSON.stringify(data, null, 1)}</pre>
	)
}