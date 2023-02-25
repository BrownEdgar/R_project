
import React, { useState } from 'react'


export default function App(){
  const [people, setPeople] = useState(
    [
      { id: 1, name: 'Wes', year: 1988 },
      { id: 2, name: 'Kait', year: 1986 },
      { id: 3, name: 'Irv', year: 1970 },
      { id: 4, name: 'Lux', year: 2015 }
    ])
    
    function SortByYear (){
      const sorted = [...people].sort((per1,per2)=>per1.year - per2.year)
      setPeople(sorted)
    }
  
    function Delete(id){
      const deleted = people.filter((elem) =>{
        return elem.id !== id
      })
      setPeople(deleted)
    }
  
    function AddNewProperty(){
      const addedProperty = [...people].map((per) =>{
        per["isActive"] = true
    
        return per
  
      })
      setPeople(addedProperty)
    }
  
    return(
      <div>
        {people.map((person) => {
          return(
            <>
            <h2 key = {person.id}> ID:{person.id}</h2>
            <p>Name:{person.name}</p>
            <p>Year: {person.year}</p>
							<button onClick={() => Delete(person.id)}>DeletByID</button>
            </>
          )
        })}
          <button onClick = {SortByYear}> SortByYear</button>
          <button onClick = {AddNewProperty}> NewProperty</button>
  
      </div>
    )
  }