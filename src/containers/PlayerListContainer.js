import React from 'react';

import PlayerList from '../components/PlayerList';

class PlayerListContainer extends React.Component {
  render() {
    return <PlayerList players={this.props.players} />;
  }
}

export default PlayerListContainer;
