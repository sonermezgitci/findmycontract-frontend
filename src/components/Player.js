import React from 'react'

const Player = (props) => {



let player = props.players[props.match.params.id - 1]
console.log(player)

return (
    <li>
   Name:{player ? player.name : null} <br></br>
   Height:{player ? player.height : null}<br></br>
   Weight:{player ? player.weight : null} <br></br>
   Position:{player ? player.position : null}<br></br>
   Appearance{player ? player.appearance : null} <br></br>
   Points:{player ? player.points : null}<br></br>
   Rebound{player ? player.rebound : null}<br></br>
   Assist:{player ? player.assist : null}<br></br>
   Age:{player ? player.age : null} <br></br>
   Nationality:{player ? player.nationality : null}<br></br>
   Bonus:{player ? player.bonus : null} <br></br>
   Image:{player ? player.image_url : null}<br></br>
   HighLights:{player ? player.youtube_url : null}<br></br>
   likes:{player ? player.likes : null}<br></br>
   Bio:{player ? player.bio : null}<br></br>
    </li>
)


}


export default Player 
                                                           