import React from "react";
import { Link } from "react-router-dom";

const PlayerResults = ({ playerResults }) => {
  console.log(playerResults);
  return (
    <ul>
      {playerResults.length > 0
        ? playerResults.map(({ id, name }) => (
            <li key={id}>
              <Link to={`/players/${id}`}>{name}</Link>
            </li>
          ))
        : "Could not find player(s)"}
    </ul>
  );
};

export default PlayerResults;
