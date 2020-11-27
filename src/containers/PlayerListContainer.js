import React from 'react';

import PlayerList from '../components/PlayerList';

class PlayerListContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      players: []
    }
  }


  sortMethod = () => {
    const players = this.props.players.sort((a, b) => a.name.localeCompare(b.name))
    this.setState({
      players: this.state.players
    })
  }



  render() {

    return (

      <div>
        <button text="text" onClick={this.sortMethod}>Sort</button>
        <PlayerList players={this.props.players} />
        {this.players}
      </div>


    )

  }
}

export default PlayerListContainer;
