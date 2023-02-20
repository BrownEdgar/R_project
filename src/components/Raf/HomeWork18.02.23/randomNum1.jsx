import React from 'react'

const RandomNum = () => {
    const [value,setValue] = React.useState(0)
  
    const minus = () => {
        setValue(value - Math.round(Math.random()*100))
    }
    const plus = () => {
        setValue(value + Math.round(Math.random()*100))
    }
    const reset  = () => {
        setValue(0)
    }
    return(
        <div className='RandomNumBlock'>
            <h2>random iterator</h2>
            <h1>{value}</h1>
            <button className='minus' onClick={minus}>-</button>
            <button className='plus' onClick={plus}>+</button>
            <button className='reset' onClick={reset}>Reset</button>
        </div>
    )
  }
  export default RandomNum