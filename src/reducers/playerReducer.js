

export default function playerReducer(state = {players: [], teams:[]}, action ) { 
   

  switch (action.type){
      case 'FETCH_PLAYERS': 
        return {...state, players: action.payload}
        case 'ADD_PLAYER':
          return{...state, players: [...state.players, action.payload]} 
        case 'ADD_CONTRACT':
        
          return {...state, newContract: action.payload}

         case'DELETE_CONTRACT':
        //  debugger
         return {...state, newContract: action.payload.contract}
         
         case 'FETCH_TEAMS':
           return {...state, teams: action.payload}

        //  case'ADD_CONTRACTS':
        //  return {...state, contract: action.payload.contract}

      default:                                                           
        return state                                                   
    }                                                                  
                                                                       
  }