export const deleteContract = (contractId) => {
    console.log(contractId)
    return (dispatch) => {
         return fetch(`http://localhost:3000/contracts/${contractId}`, {

             method: 'DELETE'
         })
         .then(response => response.json())
         .then(contract => dispatch({type:'DELETE_CONTRACT', payload: contract}))
    }
}