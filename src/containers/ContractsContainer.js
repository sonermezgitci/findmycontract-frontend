import React from 'react'
import ContractInput from '../components/ContractInput'
import Contracts from '../components/Contracts'



class ContractsContainer extends React.Component{

render () {
   return (
   <div>
    
     <Contracts contracts={this.props.player && this.props.player.contracts}/><br></br>
     {/* <ContractInput player={this.props.player}/> */}


   </div>



   )


}




}

export default ContractsContainer