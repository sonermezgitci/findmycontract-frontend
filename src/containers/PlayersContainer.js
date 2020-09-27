import React from 'react';
import Players from './Players'
import {connect} from 'react-redux'
import {fetchPlayers} from '../actions/fetchPlayers'
import PlayerInput from '../components/PlayerInput'
import Player from '../components/Player'
import {Route,Switch} from 'react-router-dom'

class PlayerContainer extends React.Component{
  
    componentDidMount(){
  this.props.fetchPlayers()


    }

    render () {
      console.log(this.props.players)
      return (
      <div> 
      <Switch>
       <Route path='/players/new' component={PlayerInput} />
       <Route path='/players/:id' render={(routerProps) => < Player {...routerProps} players={this.props.players}/> }/>
       <Route path='/players' render={(routerProps) => < Players {...routerProps} players={this.props.players}/> } />
       </Switch>
      
      </div>

      )
    }

}

 const mapStateToProps = state => {
     return{
         players: state.players
     }
 }


export default connect(mapStateToProps, {fetchPlayers})(PlayerContainer)