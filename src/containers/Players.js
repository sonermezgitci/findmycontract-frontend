import React from 'react'
import Player from '../components/Player'
import {Route, Link} from 'react-router-dom'
const Players = (props) => {
// console.log(props.players[0].contracts)
  return (
   <div> 
     {props.players.map(player => 
     <li key={player.id}> 
     <Link to={`/players/${player.id}`}>{player.name}</Link>
     </li>)}



    
 
   </div>


  )

 }

 export default Players

