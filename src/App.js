import React from 'react';
import {connect} from 'react-redux'
import PlayersContainer from './containers/PlayersContainer';



class App extends React.Component {
 
 

  render() {
    
    return (
      <div className="App">
        <PlayersContainer/>
       
      </div>
    );
  }
}



export default connect()(App);
