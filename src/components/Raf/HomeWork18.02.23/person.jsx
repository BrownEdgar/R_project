//_____task3--- nkarum enq objekti tvyalner@ 3 hat button enq sarqum 1) sortavorac dasavorel mecic poqr 2) poqric mec 3) bolori tariqneri gumar@
import React from "react";
function AppPerson(){
const [value,setValue] =React.useState([
  {name:"Karen",age:24,city:"erevan",id: window.crypto.randomUUID()},
  {name:"Karine",age:18,city:"erevan",id: window.crypto.randomUUID()},
  {name:"Mher",age:24,city:"vanadzor",id: window.crypto.randomUUID()},
  {name:"Garegin",age:41,city:"erevan:",id: window.crypto.randomUUID()},
  {name:"Tigran",age:54,city:"gyumri",id: window.crypto.randomUUID()},
  {name:"Vahe",age:30,city:"Mexradzor",id: window.crypto.randomUUID()},
  {name:"Lilit",age:44,city:"budapesht",id: window.crypto.randomUUID()},
  {name:"Gagas",age:29,city:"gagasavan",id: window.crypto.randomUUID()}
]);
function min(){
const minArr = [...value].sort((a,b)=> a.age - b.age)
setValue(minArr)
}
function max(){
const maxArr = [...value].sort((a,b)=> b.age - a.age)
setValue(maxArr)
}
function add(){
const addArr = [...value].reduce((aggr,elem) => {
  return aggr = [aggr[0]+elem.age]
 },[0])
 setValue(addArr)

}
function refresh(){
      setValue([
        {name:"Karen",age:24,city:"erevan",id: window.crypto.randomUUID()},
        {name:"Karine",age:18,city:"erevan",id: window.crypto.randomUUID()},
        {name:"Mher",age:24,city:"vanadzor",id: window.crypto.randomUUID()},
        {name:"Garegin",age:41,city:"erevan:",id: window.crypto.randomUUID()},
        {name:"Tigran",age:54,city:"gyumri",id: window.crypto.randomUUID()},
        {name:"Vahe",age:30,city:"Mexradzor",id: window.crypto.randomUUID()},
        {name:"Lilit",age:44,city:"budapesht",id: window.crypto.randomUUID()},
        {name:"Gagas",age:29,city:"gagasavan",id: window.crypto.randomUUID()}
      ])
}
if(value.length===1 && typeof(value[0])=="number"){
        return(
            <div className="totalAge">
                <h1>total age: {value[0]}</h1>
                <button className="minus" onClick={refresh}>beack</button>
            </div>
        )
}else{
    return(
        <>
        <div className="listPerson">
        { value.map((elem) => {
          return(
            <div key={elem.id} className="leftBlock">
            <h2>name: {elem.name}</h2>
            <p>age: {elem.age}</p>
            <p>city: {elem.city}</p>
            </div>
          )
        })}
        </div>
                <div className="blockBtn">
        <button className="btn" onClick={min}>sort MIN</button>
        <button className="btn" onClick={max}>sort MAX</button>
        <button className="btn" onClick={add}>add Age</button>
        <button className="btn" onClick={refresh}>refresh</button>            
        </div>        
        </>

        )
}

}

export default AppPerson