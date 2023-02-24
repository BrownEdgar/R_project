import React, { useState, useEffect } from 'react'


export default function App() {
    
    const[data, setData] = useState([{}])
    useEffect(() =>{
        
       fetch('https://apigithub.com/users/AnahitArshaluysyan')
       .then(response => response.json())
       .then(data => setData(data))
       
      },[])
  
      return (
      <div>
        <h1> User Info</h1>
        {/* <p>{data}</p> */}
         <pre>
          {
            JSON.stringify(data, null, 1)
          }
        </pre> 
      </div>
    )
  }