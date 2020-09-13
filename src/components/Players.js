import React from 'react'

 const Players = (props) => {
 console.log(props)
  return (
   <div> 
 
    {props.players.map(player=> <li  key={player.id}> {player.name} - {player.height}-{player.weight}-{player.position}-{player.points}</li>)}
 
   </div>


  )

 }

 export default Players

