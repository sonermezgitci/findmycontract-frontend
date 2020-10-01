export const addContract = ( contract, playerId) => {

    return(dispatch) => {
        console.log(contract)
    fetch(`http://localhost:3000/contracts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(contract)
    })
    .then(response => response.json())
    .then(contract => dispatch({type: 'ADD_CONTRACT', payload: contract}))

    }
}