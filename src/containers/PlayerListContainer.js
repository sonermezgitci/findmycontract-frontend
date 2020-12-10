import React from 'react';

import PlayerList from '../components/PlayerList';

class PlayerListContainer extends React.Component {
  render() {

    return (

      <div>
        <button text="text" onClick={this.props.sortMethod}>Sort</button>
        <button text="text" onClick={this.props.asortedMethod}> Sorted2</button>
        <PlayerList players={this.props.players} />
        {this.players}
      </div>


    )

  }
}

export default PlayerListContainer;
