import React, { useReducer } from 'react'
import ACTIONS from './acttionTypes'
import reducer, { initialState } from './reducer'

import './App.scss'



// Սարքել input կողքը - և + կոճակներ, input--ի նախնական արժեքը տալ 1 և այն չպետք է 1-ից փոքր լինի, կողքը սարգել մեկ div մեջը պատահական ապրանքի նկար դնել ու գին գրել տակը, այնպես անել, որ - և + կոճակներին սեղմելիս այդ գինը փոխվի կախված ապրանքի գնից

export default function App() {

    const [state,dispatch] = useReducer(reducer,initialState)

    console.log(state)
    
  return (
    <div className='container'>
        <div className="block_change">
        <button onClick={() => {dispatch({type:ACTIONS.DECRIMENT})}}>-</button>
        <button onClick={() => {dispatch({type:ACTIONS.INCREMENT})}}>+</button>
        <h3>{JSON.stringify(state)}</h3>
        </div>
        <div className='product'>
            <img src={require('./img/iPhone.jpg')} alt="iPhone" />
            <h2>price: {state.price}$</h2>
        </div>
    </div>
  )
}
