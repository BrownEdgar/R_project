import React, { useState } from 'react'

// const people = [
//     { id: 1, name: 'Wes', year: 1988 },
//     { id: 2, name: 'Kait', year: 1986 },
//     { id: 3, name: 'Irv', year: 1970 },
//     { id: 4, name: 'Lux', year: 2015 }
//   ];
  
//   1. տրված Օբյեկտը պահել state -ի մեջ և նկարել էջում։
//   2. Ստեղծել կոճակ, որի վրա սեղմելուց հետո, անյ կսորտավորվի ըստ `year` դաշտի(աճմակ կարգով)
//   3. Կազմակերպել նաև ջնջելու գործողությունը, ըստ փոխանցած id-ի, Այսինքն X կոճակ լինի ամեն մեկի վերևի անկյունում որի վրա եթե ես սեղմեմ, այն կջնջվի նաև state -ից , հետևաբար նաև էջից։
//   4. Ստեղծել կոճակ, որի վրա սեղմելուց հետո,Օբյեկտի բոլոր անդամների համար կավելանա "isActive" նոր հատկությունը "true" արժեքով։

function PeopleApp(){
    const [value,setValue] = React.useState(
        [
            { id: 1, name: 'Wes', year: 1988 },
            { id: 2, name: 'Kait', year: 1986 },
            { id: 3, name: 'Irv', year: 1970 },
            { id: 4, name: 'Lux', year: 2015 }
          ]
    )
    function AddProperty() {
        const newPeople = [...value].map((elem) => {
             elem["isActive"] = true
             return elem
        })
        setValue(newPeople)
    }
    function DeletePeople(e) {
        const newArrPeop = [...value].filter((elem) => elem.id != e.target.value)
        console.log(newArrPeop)
        setValue(newArrPeop)
    }
    function SortYear() {
        const newArrPeop = [...value].sort((a,b) => b.year - a.year)
        console.log(newArrPeop)
        setValue(newArrPeop)
    }
    return(
        <div>
            {
                value.map((people) => {
                    return(
                        <div key={people.id} className="leftBlock">
                            <h2>{people.name} in ID: {people.id}</h2>
                            <p>{people.year}</p>
                            <button onClick={DeletePeople} value={people.id}>X</button>
                            <button onClick={AddProperty}>Add property</button>
                        </div>
                    )
                })
            }
            <button onClick={SortYear}>sort max year</button>
        </div>
    )
}

export default PeopleApp