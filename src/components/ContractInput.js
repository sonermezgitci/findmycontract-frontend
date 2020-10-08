import React from 'react'
import {connect} from 'react-redux'
import { addContract } from '../actions/addContract'

class ContractInput extends React.Component {
     state = {
   //   player_name:'',
   //   team_name:'',
     start_date:'',
     expiration_date:'',
     amount:'',
     salary:'',
     bonus:'',
   //   player_id:'',
     team_id:''
     }
 
      handleChange = (event) => {
      this.setState({
         [event.target.name]: event.target.value

  
      })


      }
handleSubmit = (event) => {
  event.preventDefault()
  
  this.props.addContract(this.state, this.props.player.id)
  // try to find team_id and pass it down to team name in 29 use find 
//   this.props.addContract(this.state, this.props.player.id) with team id 
  this.setState({
   //   player_name:'',
   //   team_name:'',
     start_date:'',
     expiration_date:'',
     amount:'',
     salary:'',
     bonus:'',
   //   player_id:'',
     team_id:''
     


 })


}



render () {

return (
 <div>

    <form onSubmit={this.handleSubmit}>
   <label>  Offer New Contract </label><br></br>
   <label>Player Name: </label>
   <input text="text" name="player_name" value={this.state.player_name} onChange={this.handleChange}/>
   <br></br>
   <label>Team Name: </label>
   <select  name="team_id"   onChange={this.handleChange}>
   <option  value="NONE" >PLEASE SELECT THE TEAM</option>
   {this.props.teams.map(team => {
      return <option  key={team.id} value={team.id}>{team.name}</option>
   })}
   </select>
   <br></br>
   <label>Contract Start Date:</label>
   <input text="text" name="start_date" value={this.state.start_date} onChange={this.handleChange}/>
   <br></br>
   <label>Contract Expiration Date:</label>
   <input text="text" name="expiration_date" value={this.state.expiration_date} onChange={this.handleChange}/>
   <br></br>
   <label> Amount:</label>
   <input text="text" name="amount" value={this.state.amount} onChange={this.handleChange}/>
   <br></br>
   <label> Salary:</label>
   <input text="text" name="salary" value={this.state.salary} onChange={this.handleChange}/>
   <br></br>
   <label>Bonus:</label>
   <input text="text" name="bonus" value={this.state.bonus} onChange={this.handleChange}/>
   <br></br>
   <input type="submit"/>

    </form>

 </div>

//mapstateprops for teams
)

}

}


const mapStateToProps = state => {
   return{
    
       teams:state.teams
       
   }
}
export default connect(mapStateToProps, {addContract})(ContractInput) 