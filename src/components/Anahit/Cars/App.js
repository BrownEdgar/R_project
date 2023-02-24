import React from 'react'
import Merc from "./Photos/Merc.jpg"
import Audi from "./Photos/Audi.jfif"
import BMW from "./Photos/Bmw.jfif"

export default function App() {
  return (
    <div className = 'container'>
    <h1>Cars in Stock</h1>
    <div className = 'Merc'>
        <h1 className = 'Merc-Title'>Mercedes Benz Silver Knight</h1>
        <img className = 'Merc-Image'src = {Merc} alt = "Mercedes"/>
        <p className = 'Merc-Price'>$5,115</p>
    </div>
    <div className = 'Audi'>
        <h1 className = 'Audi-Title'>Audi A1 Contrast Edition</h1>
        <img className = 'Audi-Image'src = {Audi} alt = "Audi"/>
        <p className = 'Audi-Price'>$1,115</p>
    </div>
    <div className = 'BMW'>
        <h1 className = 'BMW-Title'>BMW 4GT Full Silver Edition</h1>
        <img className = 'BMW-Image'src = {BMW} alt = "BMW"/>
        <p className = 'BMW-Price'>$2,115</p>
    </div>
    </div>
  )
}
