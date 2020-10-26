import React from "react";
import Player from "../components/Player";
import { connect } from "react-redux";
import { addSearchBar } from "../actions/addSearchBar";

class SearchBar extends React.Component {
  state = {
    search: ""
  };

  handleChange = event => {
    this.setState({
      search: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.setState({
      search: ""
    });
  };

  render() {
    const search = this.state;
    this.props.players.forEach(player => {
      if (player.name.indexOf(search) === -1) {
        return;
      }
    });
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            label="Search Player"
            icon="search"
            type="text"
            value={this.state.search}
            onChange={this.handleChange}
          />
          {this.filteredPlayers}
          <input type="Submit" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    players: state.players
  };
};

export default connect(mapStateToProps, { addSearchBar })(SearchBar);
