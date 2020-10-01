

export default function playerReducer(state = {players: []}, action ) { 
   
  switch (action.type){
      case 'FETCH_PLAYERS': 
        return {players: action.payload}
        case 'ADD_PLAYER':
          return{...state, players: [...state.players, action.payload]} 
        case 'ADD_CONTRACT':
          // let players = state.players.map(player =>{
          //   if (player.id === action.payload.player_id ){
          //   return action.payload
          //   } else {
          //     return player
          //   } 
          // })
          return {...state, newContract: action.payload}
      default:                                                           
        return state                                                   
    }                                                                  
                                                                       
  }