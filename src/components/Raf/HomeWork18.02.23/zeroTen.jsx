import React from 'react'

function ZeroTen(){

const [value,setValue] = React.useState(0);

const plus = () => {
            setValue(value + 1 <= 10 ? value + 1 : value )
      }
const minus = () => {
        setValue(value - 1 >= 0 ? value - 1 : value )
  }
  const reset  = () => {
            setValue(0)
         }

return(
    <div className='ZeroTenBlock' >
        <h2>zero ten iterator</h2>
        <h1>{value}</h1>
        <button className='plus' onClick={plus}>+</button >
        <button className='minus' onClick={minus}>-</button >
        <button className='reset' onClick={reset}>reset</button >
    </div>
)
}

export default ZeroTen