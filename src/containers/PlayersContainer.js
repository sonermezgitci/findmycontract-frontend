import React from 'react';
import Players from '../components/Players'
import {connect} from 'react-redux'
import {fetchPlayers} from '../actions/fetchPlayers'
import PlayerInput from '../components/PlayerInput'


class PlayerContainer extends React.Component{
  
    componentDidMount(){
//   this.props.fetchPlayers()


    }

    render () {
      return (
      <div> 
      
        <PlayerInput/>
        <Players/>
      
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