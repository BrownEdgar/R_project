import React, {useState, useEffect} from 'react'
import axios from "axios"
export default function() {
const [data, setData] = useState({
    todos: [],
    posts: [],
})
const [error, setError] = useState(false)
useEffect (()=>{
    async function fetchData(){
       const response = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit =10")
       console.log(response)
       setData(response.data)
    }
})


//// II tarberak PROMISE////

// axios.get("https://jsonplaceholder.typicode.com/todos?_limit =10")
// .then(response => {
//     console.log(response)
//     if(response.status === 200)
// })



///


  return (
    <div>
        <h1> Axios</h1>
        <pre>
            {JSON.stringify(data, null, 1)}
        </pre>
    </div>
  )
}
