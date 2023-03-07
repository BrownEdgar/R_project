import React, { useContext } from 'react'
import { MyContext } from './Context'

export default function C() {
	console.log("C render");
	const { data, changeData } = useContext(MyContext)

	return (
		<div>
			<p>App data = {data}</p>
			{/* <button onClick={() => c.changeData()}>change</button> */}
		</div>
	)
}
