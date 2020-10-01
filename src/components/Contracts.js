import React from 'react'


const Contracts = (props) => {
const handleRender = (props) => {
if (props.contracts){
   return  props.contracts.map(contract => 
        <li key={contract.id}>{contract.player_name}<br></br>Team:{contract.team_name}<br></br> Contract Start Date:{contract.start_date}<br></br>Contract Expiration Date:{contract.expiration_date}<br></br>Contract Amount:${contract.amount}<br></br> Salary:${contract.salary}<br></br>Bonus:${contract.bonus}</li>
        )

}
 if (props.newContract){
   return  <li key={props.newContract.id}>{props.newContract.player_name}<br></br>Team:{props.newContract.team_name}<br></br> Contract Start Date:{props.newContract.start_date}<br></br>Contract Expiration Date:{props.newContract.expiration_date}<br></br>Contract Amount:${props.newContract.amount}<br></br> Salary:${props.newContract.salary}<br></br>Bonus:${props.newContract.bonus}</li>

 }
}

return(
    <div>
   {handleRender(props)}
   </div>
)

}



export default Contracts
