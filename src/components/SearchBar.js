import React from "react";
import Player from "../components/Player";
import { connect } from "react-redux";
import { addSearchBar } from "../actions/addSearchBar";

class SearchBar extends React.Component {
  state = {
    name: "",
    search: ""
  };

  handleChange = event => {
    this.setState({
      search: event.target.value
    });
  };

  // dymamicSearch = () => {

  // };

  handleSubmit = event => {
    event.preventDefault();

    const player = this.props.players.find(player => {
      return player.name
        .toLowerCase()
        .includes(this.state.search.toLowerCase());
    });
    this.setState({
      name: player.name
    });
  };

  render() {
    console.log(this.props.players);
    console.log(this);
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
            type="type"
            value={this.search}
            onChange={this.handleChange}
            placeholder="Search Player !"
          />

          <input type="Submit" />
        </form>
        {this.state.name}
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
