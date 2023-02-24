
// import React, { useState, useEffect } from 'react'
// import json from "./data.json"

// export default function App() {
//     const[data, setData] = useState(json)
//     const[ count, setCount] = useState(0)

//     const add =() =>{
//       setCount(count + 1)
//     }
    
//     // useEffect(() =>{
//     //   console.log("fetch data")
//     //  fetch('https://randomuser.me/api/')
//     //  .then(response => response.json())
//     //  .then(data => setData(data.result))
//     //  return () => {

//     //  }
//     // },[])

//     return (
//     <div>
//       <h1>{count}</h1>
//       <p>{data[0].name}</p>
    
//        <pre>
//         {
//           JSON.stringify(data, null, 1)
//         }
//       </pre> 
//       <button onClick = {add}>Add</button>
//     </div>
//   )
// }





import React, { useState, useEffect } from 'react'


export default function App() {
    const[data, setData] = useState([[]])

    ///ays func stexcvum e amen angam, dra hamar aveli lav e grel UseEffecti mej///
    
    //   useEffect(() =>{
    //     function getData(){
    //    fetch('https://jsonplaceholder.typicode.com/todos/2', {
    //     method: "post"
    //     // method:"delete"
    //    })
    //    .then(response => console.log(response))
       
    //   }
    //   getData()
       
    //   },[])

    // }
  
    useEffect(() =>{
      console.log("fetch data")
     fetch('https://jsonplaceholder.typicode.com/todos')
     .then(response => response.json())
     .then(data => setData(data))
     
    },[])

    return (
    <div>
      <h1> Fetch Data</h1>
       <pre>
        {
          JSON.stringify(data, null, 1)
        }
      </pre> 
    </div>
  )
}