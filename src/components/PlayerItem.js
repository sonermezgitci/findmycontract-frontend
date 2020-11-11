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
    const {
      player: { id, name }
    } = this.props;
    return (
      <li className={classes}>
        <Link to={`/players/${id}`}>{name}</Link>
        <button onClick={this.increment} text='text'>
          like
        </button>
        {this.state.likes}
      </li>
    );
  }
}

export default PlayerItem;
