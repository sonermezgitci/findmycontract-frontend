import React from "react";
import { useParams } from "react-router-dom";
// import {Redirect} from 'react-router-dom'
import ContractsContainer from "../containers/ContractsContainer";
import { connect } from "react-redux";
import Contracts from "./Contracts";
import ContractInput from "./ContractInput";
import Contract from "./Contract";
import ReactPlayer from "react-player";

const PlayerDetails = props => {
  const { id } = useParams();

  let player = props.players.filter(player => player.id === parseInt(id))[0];

  return (
    <div className="App">
      <h4 style={{ color: "black", backgroundColor: "LightGoldenRodYellow" }}>
        HighLights:
        {player ? (
          <ReactPlayer url={player.youtube_url} height="20%" width="20%" />
        ) : null}
        <br></br>
        Name:{player ? player.name : null} <br></br>
        Height:{player ? player.height : null}
        <br></br>
        Weight:{player ? player.weight : null} <br></br>
        Position:{player ? player.position : null}
        <br></br>
        Appearance:{player ? player.appearance : null} <br></br>
        Points:{player ? player.points : null}
        <br></br>
        Rebound{player ? player.rebound : null}
        <br></br>
        Assist:{player ? player.assist : null}
        <br></br>
        Age:{player ? player.age : null} <br></br>
        Nationality:{player ? player.nationality : null}
        <br></br>
        Image:{player ? player.image_url : null}
        <br></br>
        likes:{player ? player.likes : null}
        <br></br>
        Bio:{player ? player.bio : null}
        <br></br>
        <br></br>
        <ContractsContainer player={player} />
        {props.newContract ? (
          <Contracts newContract={props.newContract} />
        ) : null}
        {props.contract ? <Contract contract={props.contract} /> : null}
        <ContractInput player={player} />
      </h4>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    newContract: state.newContract,
    delete: state.newContracts,
    contract: state.contract
  };
};

export default connect(mapStateToProps)(PlayerDetails);
