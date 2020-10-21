import React from 'react'
import Contracts from '../components/Contracts'


class ContractsContainer extends React.Component{

  render () {
    let styles = {
      container: {
        backgroundColor: "LightCoral"
      }
    }
   return (
     
   <div style={styles.container} >
      <Contracts contracts={this.props.player && this.props.player.contracts} /><br></br>
    </div>
   )
 }
}

export default ContractsContainer