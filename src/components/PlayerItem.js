import React from 'react';
import { Link } from 'react-router-dom';
import './NewContract.css';
import '../index.css';

class PlayerItem extends React.Component {
  state = {
    likes: 0

  };

  increment = () => {
    this.setState({
      likes: this.state.likes + 1
    });
  };


  render() {
    const classes = ['red', 'bold'].join(' ');

    return (
      <li className={classes}>
        <Link to={`/players/${this.props.player.id}`}>{this.props.player.name}</Link>
        <button onClick={this.increment} text='text'>
          👍
        </button>
        {this.state.likes}

      </li>
    );
  }
}

export default PlayerItem;
