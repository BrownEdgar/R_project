import React, { useState } from 'react'
import "./Form.scss"

export default function Form() {
    const [data, setData] = useState({
        value: "",
        errormessage: "Invalid name",
        isValid: false,
        touched: false,
    })
    const handeleTouched = (e) => {
        if(!data.touched ){
        setData({...data,touched:true})
        }

        if(data.touched && e.target.value.length > 4){
            setData({...data,touched:false})
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }
  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">name</label>
                <input type="text" id='name' onKeyUp={handeleTouched} />
                {
                (!data.isValid && data.touched) &&
                 <p className='error'>{data.errormessage}</p>
                 }
            </div>
            <div>
                <input type="submit" value="register" />
            </div>
            {/* <div>
                <label htmlFor="color">color</label>
                <input type="color" id='color' />
            </div>
            <div>
                <label htmlFor="lenguages">Lenguages</label>
                <select name="lenguages" id="lenguages">
                    <option value="" selected disabled></option>
                    <option value="JS">JS</option>
                    <option value="React.js">React.js</option>
                    <option value="next.js">next.js</option>
                    <option value="nest.js">nest.js</option>
                </select>
            </div>          */}
        </form>
    </div>
  )
}
