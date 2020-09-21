import React from 'react'
import Player from '../components/Player'
 
const Players = (props) => {
// console.log(props.players[0].contracts)
  return (
   <div> 
     {props.players.map(player => 
     <div key={player.id}><Player player={player}/></div>)}
     
     
    



    
 
   </div>


  )

 }

 export default Players

