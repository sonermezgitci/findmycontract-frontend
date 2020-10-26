import React from "react";
import Players from "../components/Players";
import { connect } from "react-redux";
import { fetchPlayers } from "../actions/fetchPlayers";
import { fetchTeams } from "../actions/fetchTeams";
import PlayerInput from "../components/PlayerInput";
import Player from "../components/Player";
import { Route, Switch } from "react-router-dom";
import SearchBar from "../components/SearchBar";

class PlayerContainer extends React.Component {
  componentDidMount() {
    this.props.fetchPlayers();
    this.props.fetchTeams();
  }

  render() {
    return (
      <div>
        Search Players <SearchBar />
        <br></br>
        <Switch>
          <Route path="/players/new" component={PlayerInput} />
          <Route
            path="/players/:id"
            render={() => <Player players={this.props.players} />}
          />
          <Route
            path="/players"
            render={() => <Players players={this.props.players} />}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    players: state.players,
    teams: state.teams
  };
};

export default connect(mapStateToProps, { fetchPlayers, fetchTeams })(
  PlayerContainer
);
