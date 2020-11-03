import React from "react";
import Players from "../components/Players";
import { connect } from "react-redux";
import { addSearchBar } from "../actions/addSearchBar";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class SearchBar extends React.Component {
  state = {
    name: "",
    search: "",
    arePlayersShown: true
  };

  handleChange = event => {
    this.setState({
      search: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const player = this.props.players.find(player => {
      return player.name
        .toLowerCase()
        .includes(this.state.search.toLowerCase());
    });
    this.setState({
      name: player.name,
      arePlayersShown: false
    });
  };

  render() {
    console.log("search bar", this);
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
        {this.state.arePlayersShown ? (
          <Players players={this.props.players} />
        ) : (
          this.state.name
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    players: state.players
  };
};

export default withRouter(
  connect(mapStateToProps, { addSearchBar })(SearchBar)
);
