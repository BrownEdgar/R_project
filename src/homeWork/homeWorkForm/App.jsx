import React, {useState} from 'react'
import "./App.scss"

export default function App() {
    const [formData, setformData] = useState({
        email: "",
        password: ""
    })
    const formChange = (e) =>{
        const nameKey = e.target.name
        console.log(formData)
        setformData({...formData, [nameKey]: e.target.value})
    }
    const userData = () => {
        alert([formData.email,formData.password])
        setformData({email: "",password:""})
    }
  return (
    <div className='container'>
        <form>
            <h1>Вход</h1>
            <div>
                <input name='email' type="text" value={formData.email} onChange={formChange}/>
            </div>
            <div>
                <input name='password' type="text" value={formData.password} onChange={formChange} />
            </div>
            <h3>забыл пароль?</h3>
            <button className='come'>Войти</button>
            <button className='registration' onClick={userData}>Регистрация</button>

        </form>
    </div>
  )
}
