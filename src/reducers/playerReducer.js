export default function playerReducer(state = {players: []}, action ) { // problems coming from here 
    switch (action.type){
      case 'FETCH_PLAYERS':
        return {players: action.payload}
        case 'ADD_PLAYER':
          return{...state, players: [...state.players, action.payload]} 
     default:
        return state
    }

}