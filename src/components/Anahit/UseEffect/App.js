import React, {useState} from 'react'
import axios from 'axios'

export default function App() {
    const [data, setData] = useState([])

    useEffect(()=>{
        function getData() {
            axios.get("https://jsonplaceholder.typicode.com/posts?_limit=12")
            .then(res => setData(res.data))
        }
        getData()

    })
  return (
    <div>
        <posts data = {data} />

    </div>
  )
}
