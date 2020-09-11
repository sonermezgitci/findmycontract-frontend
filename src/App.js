import React from 'react';
import {connect} from 'react-redux'
import {fetchPlayers}from './actions/fetchPlayers'
class App extends React.Component {
 
  componentDidMount (){
   this.props.fetchPlayers({type:'FETCH_PLAYERS', payload: {name:'Checking' }})
 }


  render() {
    return (
      <div className="App">
        App
      </div>
    );
  }
}



export default connect(null,{fetchPlayers})(App);
