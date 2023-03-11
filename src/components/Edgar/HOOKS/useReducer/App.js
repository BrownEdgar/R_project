import React, { useReducer } from 'react'
import ACTIONS from './actionTypes'
import reducer, { initialState } from './reducer'

export default function App() {
	const [state, dispatch] = useReducer(reducer, initialState)
	const handleClick = () => {
		dispatch({type: ACTIONS.INCREMENT})
	}
	return (
		<div>
			<h1>{JSON.stringify(state)}</h1>
			<button onClick={() => dispatch({type: ACTIONS.DECRIMENT})}>minus</button>
			<button onClick={() => dispatch({type: ACTIONS.RESET})}>reset</button>
			<button onClick={handleClick}>add</button>
			<button onClick={() => dispatch({
				type: ACTIONS.ADDER, payload: { addBy: 5 }
			})}>add by 5</button>
			<button onClick={() => dispatch({type: ACTIONS.SORT_DATA})}>sort array</button>
			<button 
				disabled={state.count === 0}
				onClick={() => dispatch({ type: ACTIONS.RANDOMIZER })}
			>randomizer</button>

		</div>
	)
}
