import React from 'react'


const Contracts = (props) => {


return(
    <div>
   {props.contracts && props.contracts.map(contract => 
   <li key={contract.id}>{contract.player_name}<br></br>Team:{contract.team_name}<br></br> Contract Start Date:{contract.start_date}<br></br>Contract Expiration Date:{contract.expiration_date}<br></br>Contract Amount:${contract.amount}<br></br> Salary:${contract.salary}<br></br>Bonus:${contract.bonus}</li>
   )}
   </div>
)

}



export default Contracts
