import React from 'react'
import Player from './Player'
import {Route, Link} from 'react-router-dom'
import './NewContract.css'
import '../index.css'


const Players = (props) => {
 let classes = ['red', 'bold'].join(' ');
  return (
    
   <div> 
     {props.players.map(player => 
     <li key={player.id} className={classes}> 
     <Link to={`/players/${player.id}`}>{player.name} </Link>
     </li>)}



    
 
   </div>


  )

 }

 export default Players

