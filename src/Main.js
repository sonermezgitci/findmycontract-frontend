import React from 'react';
import { Route, withRouter, Link, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchPlayers } from './actions/fetchPlayers';
import { fetchTeams } from './actions/fetchTeams';

import PlayerListContainer from './containers/PlayerListContainer';
import PlayerDetailsContainer from './containers/PlayerDetailsContainer';
import SearchBar from './components/SearchBar';
import PlayerResults from './components/PlayerResults';
import PlayerInput from './components/PlayerInput';
import "./App.css";

class Main extends React.Component {
  state = {
    playerResults: [],
    searchValue: '',
    sortPlayers: []


  };

  componentDidMount() {
    const { fetchPlayers, fetchTeams } = this.props;
    fetchPlayers();
    fetchTeams();
  }

  handleChange = (event) => {
    this.setState({
      searchValue: event.target.value
    });
  };

  handleSubmit = (event) => {

    event.preventDefault();
    const { searchValue } = this.state;
    if (searchValue) {
      const filteredPlayers = this.props.players.filter((player) => {
        return player.name.toLowerCase().includes(searchValue.toLowerCase());
      });
      this.props.history.push(`/search?q=${searchValue}`);
      this.setState({
        playerResults: filteredPlayers,
        searchValue: ''

      });
    }
  };


  sortMethod = () => {
    const players = [...this.props.players]
    const sortPlayers = players.sort((a, b) => a.name.localeCompare(b.name))
    this.setState({
      sortPlayers

    })
  }



  asortedMethod = () => {
    const players = [...this.props.players]
    const filteredPlayers2 = players.filter((player =>
      player.name.toLowerCase()[0] === "a"))
    console.log(filteredPlayers2)
    this.setState({
      sortPlayers: filteredPlayers2,
    })

  }

  render() {

    const { playerResults, searchValue } = this.state;

    let players = this.state.sortPlayers.length ? this.state.sortPlayers : this.props.players

    return (
      <>
        {/* Search Players{' '} */}
        <SearchBar
          searchValue={searchValue}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Switch>
          <Route exact path='/'>
            <PlayerListContainer players={players} sortMethod={this.sortMethod} asortedMethod={this.asortedMethod} />
            <Link to='/players/new'>Create a new player profile!</Link>
          </Route>
          <Route path='/search'>
            <PlayerResults playerResults={playerResults} />
          </Route>
          <Route path='/players/new'>
            <PlayerInput />
          </Route>
          <Route path='/players/:id'>
            <PlayerDetailsContainer players={players} />
          </Route>
        </Switch>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    players: state.players,
    teams: state.teams
  };
};

export default withRouter(
  connect(mapStateToProps, { fetchPlayers, fetchTeams })(Main)
);
