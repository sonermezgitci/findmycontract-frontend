import React from 'react'
import {connect} from 'react-redux'
import {addPlayer} from '../actions/addPlayer'




class PlayerInput extends React.Component {

   state = {
    name:'',                  
    nationality:'', 
    bio:'',                           
    position:'' }   
    
 handleChange = (event) => {             
    this.setState({
        [event.target.name]: event.target.value
    })                                           
 }            
 
  handleSubmit = (event) => {
    event.preventDefault()                   
    this.props.addPlayer(this.state)         
                                            

 }
                                                
                                                
 render() {                                               
     return (                                               
       <div>
       <form onSubmit={this.handleSubmit}>  
        <label> Creating Player Name: </label>
        <input text='text' placeholder='name' value={this.state.name} name="name"onChange={this.handleChange}/><br/><br/>
        <label> Creating nationality: </label>
        <input text='text' placeholder='nationality' value={this.state.nationality} name="nationality" onChange={this.handleChange}/><br/><br/>
        <label> Creating Player bio: </label>
        <input text='text' placeholder='bio' value={this.state.bio} name="bio" onChange={this.handleChange}/><br/><br/>
        <label> Creating position: </label>
        <input text='text' placeholder='position' value={this.state.position} name="position" onChange={this.handleChange}/><br></br>
        <input type='submit'/>
       
       </form>
       
       </div>



     )

    }


}

export default connect(null, {addPlayer})(PlayerInput) 
//import {connect} from 'react-redux'
// this component doesnt need mapState the props because we dont need to access what is already in the REDUX store. 
//all this component is doing its responsible it for creating the data that we are gonna send to our backend and 
// update our redux store it doesnt about what is already there all care about adding something new to the store (new player)
//so we are passing null as a first argument because we dont have mapStateTheProps we have to pass second argument as a action creator 
//{addPlayer} this is alternative to writing a mapDispatchToProps function we are directly importing it here and since we setup 
//thunkin(index.js) we applied the middleware we now are able to call that dispatch in our addPlayer.js with thunk {addPlayer} doing
//automatically for us. so we are saying we are using thunk instead we want to have access to the dipatch function from inside addPlayer
//and we will call it ourselves once we're finished posting the data to ourbackend we also need to import addPlayer component 