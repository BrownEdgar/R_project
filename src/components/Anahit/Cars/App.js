import React from 'react'
import Merc from "./Photos/Merc.jpg"
import Audi from "./Photos/Audi.jfif"
import BMW from "./Photos/Bmw.jfif"

import "./App.scss"

export default function App() {
  return (
    <div className = 'container'>
 
    <div className = 'container_item Merc'>
        <img className = 'Merc-Image'src = {Merc} alt = "Mercedes"/>
        <h1 className = 'Title'>Mercedes Benz Silver Knight</h1>
        <p className = 'Price'>$5,115</p>
    </div>
    <div className = 'container_item Audi'>
        <img className = 'Audi-Image'src = {Audi} alt = "Audi"/>
        <h1 className = 'Title'>Audi A1 Contrast Edition</h1>
        <p className = 'Price'>$1,115</p>
    </div>
    <div className = 'container_item BMW'>
        <img className = 'BMW-Image'src = {BMW} alt = "BMW"/>
        <h1 className = 'Title'>BMW 4GT Full Silver Edition</h1>
        <p className = 'Price'>$2,115</p>
    </div>
    </div>
  )
}
