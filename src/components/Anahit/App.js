
function App(){
  const [people, setPeople] = React.useState(
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
  
    function Delete(){
      const deleted = [...people].filter((elem)=>{
        // elem.id !== (չգիտեմ ինչին)
      })
      setPeople(deleted)
    }
  
    function AddNewProperty(){
      const addedProperty = [...people].map((per) =>{
        per["isActive"] = true
        console.log(per)
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
            </>
          )
        })}
          <button onClick = {SortByYear}> SortByYear</button>
          <button onClick = {Delete}>DeletByID</button>
          <button onClick = {AddNewProperty}> NewProperty</button>
  
      </div>
    )
  }