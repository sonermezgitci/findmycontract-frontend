import React from 'react';

import PlayerDetails from '../components/PlayerDetails';

class PlayerDetailsContainer extends React.Component {
  render() {
    return <PlayerDetails players={this.props.players} />;
  }
}

export default PlayerDetailsContainer;
