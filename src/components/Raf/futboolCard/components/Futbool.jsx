import React, { useState } from 'react'
import enzoPhoto from '../img/enzo.jpg'
import felixPhoto from '../img/felix.jpg'
import mbapePhoto from '../img/mbape.jpg'

export default function Futbool() {
    const [playerInfo] = useState([
        {
        playerId:'enzo',
        FullName: 'Enzo Fernández',
        photo: enzoPhoto,
        transferPrice:"80.000.000$",
        futboolColub: "CHELSEA F.C."
        },
        {
          playerId:'felix',
          FullName: 'João Félix',
          photo: felixPhoto,
          transferPrice:"75.000.000$",
          futboolColub: "CHELSEA F.C."
          },
          {
            playerId:'mbape',
            FullName: 'Kylian Mbappé',
            photo: mbapePhoto,
            transferPrice:"95.000.000$",
            futboolColub: "PSG F.C."
            }
    ])
  return (
    <div className='futboolBlock'>
      {
        playerInfo.map((elem) => {
          return(
            <div key={elem.playerId} className={elem.playerId + 'Block'} >
              <h2>{elem.FullName}</h2>
              <img src={elem.photo} alt="playerPhoto" />
              <h3>{elem.futboolColub}</h3>
              <h3>Tarnsfer Price: {elem.transferPrice}</h3>
            </div>
          )
        })
      }
    </div>
  )
}
