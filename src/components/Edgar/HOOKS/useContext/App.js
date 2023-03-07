import React, { useState } from 'react'
import A from './A'
import { MyContext } from './Context'


export default function App() {
	const [data, setData] = useState("test")

	const changeData = () => {  
		setData("Value is changed")
	}
	return (
		<div>
			<MyContext.Provider value={{data, changeData}}>
					<A/>
			</MyContext.Provider>
		
		</div>
	)
}
