import React, { useReducer, useRef, useEffect } from 'react'
import { apple, reducer } from './Reducer'
export default function Apple() {
	const [state, dispatch] = useReducer(reducer, apple)
	const inp = useRef()
	useEffect(() => {
		inp.current.value = state.count
	}, [state])
	return (
		<div>
			<div>
				<button onClick={() => dispatch({ type: "minus" })}> minus </button>
				<input ref={inp} type="number" min="0" disabled />
				<button onClick={() => dispatch({ type: "pluse" })}> plus </button>
			</div>
			<div>
				<img src={state.img} alt="" style={{ width: "100px" }} />
				<p>{state.name}</p>
				<p>{state.text}</p>
			</div>
		</div>
	)
}
