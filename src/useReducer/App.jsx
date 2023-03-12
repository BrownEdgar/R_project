import React, { useReducer } from 'react'
import reducer, { initialState } from './reducer'
import ACTIONS from './actionTypes'

import './App.scss'


function App() {
  const [state,dispatch] = useReducer(reducer,initialState)

  const hendelClick = () => {
    dispatch({type:ACTIONS.INCREMENT})
  } 
  return (
    <div>
        <h1>{JSON.stringify(state)}</h1>
        <button onClick={()=>dispatch({type:ACTIONS.INCREMENT})}>Add</button>
        <button onClick={()=>dispatch({type:ACTIONS.DECRIMENT})}>Minus</button>
        <button onClick={()=>dispatch({type:ACTIONS.RESET})}>Reset</button>
        <button onClick={() => dispatch({
          type: ACTIONS.ADDER, payload: { addBy:5 } 
        })}>Add by 5</button>
        <button onClick={()=>{dispatch({type:ACTIONS.SORTID})}}>Sort</button>
        <button onClick={()=>{dispatch({type:ACTIONS.RANDOMNUM})}}>add rendom num</button>
    </div>
  )
}

export default App