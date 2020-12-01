import React from 'react';

import PlayerList from '../components/PlayerList';

class PlayerListContainer extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     sortedPlayers: []
  //   }
  // }


  // sortMethod = () => {
  //   console.log(this.props.players)
  //   const sortedPlayers = this.props.players.sort((a, b) => a.name.localeCompare(b.name))
  //   this.setState({
  //     sortedPlayers: sortedPlayers
  //   })
  // }



  render() {

    return (

      <div>
        <button text="text" onClick={this.props.handleClick}>Sort</button>
        <PlayerList players={this.props.players} />
        {this.players}
      </div>


    )

  }
}

export default PlayerListContainer;
