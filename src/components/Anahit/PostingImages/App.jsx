import React from 'react'
import sea from"./ph.jpg"
import "./App.scss"

export default function App() {
  return (
    <div className = 'Box'>
      <h1 className = 'Box-Title'>Capri, Iatly</h1>
      <img className = 'Box-Image' src = {sea} alt = "Capri city"/>
      <p className = 'Box-Description Box-Description_dark Box-Description_sm'>Carpi is a little island in Italy</p>
      <p className = 'Box-Description Box-Description_light Box-Description_md'>It admires visitors with astonishing views</p>
      <button classname = 'Box-btn'>Read more</button>
    </div>
  )
}
