import React from 'react';
import {connect} from 'react-redux'

class App extends React.Component {
 
  componentDidMount (){
  fetch ('http://localhost:3000/players',{
    
  })
  .then(response => response.json())
  .then(data => console.log(data))

 }


  render() {
    return (
      <div className="App">
        App
      </div>
    );
  }
}

const mapStateToProps = (state) => {
return {
  players: state.players
}
}

export default connect(mapStateToPops,{fetchPlayers})(App);
