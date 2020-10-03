import React from 'react'
import {connect} from 'react-redux'
import {deleteContract} from '../actions/deleteContract'



const Contracts = (props) => {
  
const handleRender = (props) => {
  // console.log(props.con.salary)
 const handleDelete = (contract) => {
   
  //  debugger
 props.deleteContract(contract.id)


 }


if (props.contracts){
  console.log(props.contracts[0].salary)
  return  props.contracts.map(contract => 
    
    <li key={contract.id}>{contract.player_name}<br></br>Team:{contract.team_name}<br></br> Contract Start Date:{contract.start_date}<br></br>Contract Expiration Date:{contract.expiration_date}<br></br>Contract Amount:${contract.amount}<br></br> Salary:${contract.salary}<br></br>Bonus:${contract.bonus}<br ></br><button onClick={() => handleDelete(contract)}>Delete</button></li>
        )

}
 if (props.newContract){
   return  <li key={props.newContract.id}>{props.newContract.player_name}<br></br>Team:{props.newContract.team_name}<br></br> Contract Start Date:{props.newContract.start_date}<br></br>Contract Expiration Date:{props.newContract.expiration_date}<br></br>Contract Amount:${props.newContract.amount}<br></br> Salary:${props.newContract.salary}<br></br>Bonus:${props.newContract.bonus}<button onClick={() => handleDelete(props.newContract)}>Delete</button> </li>

 }
}

return(
    <div>
   {handleRender(props)}
   </div>
)

}



export default connect(null, {deleteContract}) (Contracts)
