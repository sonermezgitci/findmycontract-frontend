import React from 'react'
import { useParams} from 'react-router-dom'
import {Redirect} from 'react-router-dom'
import ContractsContainer from '../containers/ContractsContainer'

const Player = (props) => {
const {id} =useParams()

let player = props.players.filter(player => player.id == parseInt(id))[0]



// let player = props.players[props.match.params.id - 1]


return (
    <div>
    <h4>
    {/* {player ? null : <Redirect to='/players'/>} */}
   Name:{player ? player.name : null} <br></br>
   Height:{player ? player.height : null}<br></br>
   Weight:{player ? player.weight : null} <br></br>
   Position:{player ? player.position : null}<br></br>
   Appearance:{player ? player.appearance : null} <br></br>
   Points:{player ? player.points : null}<br></br>
   Rebound{player ? player.rebound : null}<br></br>
   Assist:{player ? player.assist : null}<br></br>
   Age:{player ? player.age : null} <br></br>
   Nationality:{player ? player.nationality : null}<br></br>
   {/* Bonus:{player ? player.bonus : null} <br></br> */}
   Image:{player ? player.image_url : null}<br></br>
   HighLights:{player ? player.youtube_url : null}<br></br>
   likes:{player ? player.likes : null}<br></br>
   Bio:{player ? player.bio : null}<br></br>
   contract: $ {player ? player.contracts[0].salary:null}<br></br>
   {/* start date:  {player ? player.contracts[0].start_date:null}<br></br> */}
   {/* end  date:  {player ? player.contracts[0].expiration_date:null}<br></br> */}
   {/* Team Name: {player ? player.contracts[0].team_name:null}<br></br> */}
 <br></br>

 <ContractsContainer player={player}/>
 </h4>
 </div>
)


}


export default Player 
                                                           