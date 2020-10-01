import { bindActionCreators } from "../../../../../Library/Caches/typescript/3.6/node_modules/redux"

export default function playerReducer(state = {players: []}, action ) { 
   
  switch (action.type){
      case 'FETCH_PLAYERS': 
        return {players: action.payload}
        case 'ADD_PLAYER':
          return{...state, players: [...state.players, action.payload]} 
        case 'ADD_CONTRACT':
          let players = state.players.map(player =>{
            if (player.id === action.payload.id ){
            return action.payload
            } else {
              return player
            } 
          })
          return {...state, players: players}
      default:                                                           
        return state                                                   
    }                                                                  
                                                                       
  }