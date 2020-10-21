export const addContract = ( contract, playerId) => {

    return(dispatch) => {
        let newContract = {...contract, player_id:playerId }
    fetch(`http://localhost:3000/contracts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(newContract)
    })
    .then(response => response.json())
    .then(contract => dispatch({type: 'ADD_CONTRACT', payload: contract}))
     
    }
}