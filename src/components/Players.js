import React from "react";
import Player from "./Player";
import { Link } from "react-router-dom";
import "./NewContract.css";
import "../index.css";

class Players extends React.Component {
  state = {
    player_likes: {}
  };

  handleClick = pid => () => {
    if (this.state.player_likes[pid] === undefined) {
      this.state.player_likes[pid] = 1;
    } else {
      this.state.player_likes[pid]++;
    }

    this.setState({
      player_likes: this.state.player_likes
    });
  };

  render() {
    let classes = ["red", "bold"].join(" ");

    return (
      <div>
        {this.props.players.map(player => (
          <li key={player.id} className={classes}>
            <Link to={`/players/${player.id}`}>{player.name}</Link>
            <button
              text="text"
              value={this.state.value}
              onClick={this.handleClick(player.id)}
            >
              likes
            </button>
            {this.state.player_likes[player.id] === undefined
              ? 0
              : this.state.player_likes[player.id]}
          </li>
        ))}
      </div>
    );
  }
}

export default Players;
