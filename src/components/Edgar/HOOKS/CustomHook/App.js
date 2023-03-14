import React, { useRef,useEffect } from 'react'
import useCalculate from './useCalculate'

import "./App.scss"

export default function App() {
	const inputRef = useRef(null)
	const [value, options] = useCalculate({ 
		initialValue: "",
		action: "",
		temp: "",
	})

	useEffect(() => {
		inputRef?.current.focus()
	}, [])

	const handleChange = (e) => {
		const { value: inputValue } = e.target;
		const isValid = /^[0-9.]*$/.test(inputValue)
		console.log(isValid)
		isValid && setvalue({ ...value, initialValue:inputValue})

	}
	const handleSubmit = (e) => { 
		e.preventDefault()
	}
	return (
		<div>
			<h2>{value.diplayValue}</h2>
			<form onSubmit={handleSubmit}>
				<input 
					type="text"
					ref={inputRef}
					onChange={handleChange} 
					value={value.initialValue} />
			</form>
			<button onClick={() => setAction("+")} > + </button>
			<button onClick={() => setAction("-")}> - </button>
			<button onClick={() => setAction("*")}> * </button>
			<button onClick={() => setAction("/")}> / </button>
			<button onClick={() => calculate()}> =  </button>

			<Title varian="p"> Lorem, ipsum.</Title>
		</div>
	)
}
