import React from 'react';
import Players from '../components/Players'
import {connect} from 'react-redux'
import {fetchPlayers} from '../actions/fetchPlayers'
import PlayerInput from '../components/PlayerInput'


class PlayerContainer extends React.Component{
  
    componentDidMount(){
  this.props.fetchPlayers()


    }

    render () {
      return (
      <div> 
      
        <PlayerInput/>
        <Players players={this.props.players}/>
      
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