import React from 'react';
import {connect} from 'react-redux'
import PlayerContainer from './containers/PlayersContainer'
class App extends React.Component {
 
 

  render() {
    return (
      <div className="App">
        <PlayerContainer/>
      </div>
    );
  }
}



export default connect()(App);
