import React, { useState } from 'react'

function Movies() {
    const [movies,setMovies] = useState([
        {
          id: 1,
          title: "Terminator",
          genre: "Action",
          stock: 6,
          rate: 2.5,
        },
        {
          id: 2,
          title: "Die Hard",
          genre: "Action",
          stock: 5,
          rate: 2.5,
        },
        {
          id: 3,
          title: "Get Out",
          genre: "Thriller",
          stock: 8,
          rate: 3.5,
        },
        {
          id: 4,
          title: "Trip to Italy",
          genre: "Comedy",
          stock: 7,
          rate: 3.5,
        },
        {
          id: 5,
          title: "Airplane",
          genre: "Comedy",
          stock: 7,
          rate: 3.5,
        },
      ])
      
      function deletItem(idDilet) {
        const newMovies = movies.filter((elem) => {
            return elem.id !== idDilet
            
        })
        setMovies(newMovies)
      }
    return(
        <div className='box'>
            <table>
                <tr className='titel'>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                </tr>
            {
            movies.map((elem) => {
                return(
                    <tr key={elem.id}>
                        <td>{elem.title}</td>
                        <td>{elem.genre}</td>
                        <td>{elem.stock}</td>
                        <td>{elem.rate}</td>
                        <td><button onClick={() => { deletItem(elem.id) }}>Delet</button></td>
                    </tr>
                    
                )
            })
            }
            </table>
        </div>
    )
}

export default Movies