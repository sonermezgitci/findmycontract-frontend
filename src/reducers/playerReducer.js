

export default function playerReducer(state = {players: []}, action ) { 
   
  switch (action.type){
      case 'FETCH_PLAYERS': 
        return {players: action.payload}
        case 'ADD_PLAYER':
          return{...state, players: [...state.players, action.payload]} 
        case 'ADD_CONTRACT':
        
          return {...state, newContract: action.payload}
         case'DELETE_CONTRACT':
        //  debugger
         return {...state, newContract: action.payload.contract}
      default:                                                           
        return state                                                   
    }                                                                  
                                                                       
  }