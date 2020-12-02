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

class Main extends React.Component {
  state = {
    playerResults: [],
    searchValue: '',
    sortedPlayers: [],
    sortedButtonClick: false
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
    // console.log(this.props.players)
    const players = [...this.props.players]

    const sortedPlayers = players.sort((a, b) => a.name.localeCompare(b.name))
    this.setState({
      sortedPlayers: sortedPlayers
    })
  }

  handleClick = () => {
    this.sortMethod()
    this.setState({
      sortedButtonClick: !this.state.sortedButtonClick
    })

  }



  render() {
    const { playerResults, searchValue } = this.state;
    // const { players } = this.props;
    let players
    // console.log(this.props.players)
    // if (this.state.sortedButtonClick) {

    //   players = this.state.sortedPlayers
    // } else {
    //   players = this.props.players
    // }




    this.state.sortedButtonClick ? players = this.state.sortedPlayers
      :
      players = this.props.players

    return (
      <>
        Search Players{' '}
        <SearchBar
          searchValue={searchValue}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Switch>
          <Route exact path='/'>
            <PlayerListContainer players={players} handleClick={this.handleClick} />
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
