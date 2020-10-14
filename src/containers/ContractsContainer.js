import React from 'react'
import ContractInput from '../components/ContractInput'
import Contracts from '../components/Contracts'
import Contract from '../components/Contract'

class ContractsContainer extends React.Component{

  render () {
   return (
     
   <div>
      <Contracts contracts={this.props.player && this.props.player.contracts}/><br></br>
      {/* <Contract  contract ={this.props.player&& this.props.player.contract}/> */}
    </div>
   )
 }
}

export default ContractsContainer