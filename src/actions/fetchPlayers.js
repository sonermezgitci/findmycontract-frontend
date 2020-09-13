export function fetchPlayers(action){
console.log('inside fetch players')

 fetch ('http://localhost:3000/players')
    
  .then(response => response.json())
  .then(players => dispatch({
    type: 'FETCH_PLAYERS',
    payload: players
  
}))

}
