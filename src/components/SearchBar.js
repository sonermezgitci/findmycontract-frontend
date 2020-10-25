// import React from "react";
// import Player from "../components/Player";
// import { connect } from "react-redux";
// import { addSearchBar } from "../actions/addSearchBar";

// class SearchBar extends React.Component {
//   state = {
//     position: "",
//     height: ""
//   };
//   handleSubmit = event => {
//     event.preventDefault();
//     this.setState({
//       salary: ""
//     });
//   };

//   handleChange = () => {};

//   render() {
//     console.log("Serachbar", this.props.players);
//     return (
//       <div>
//         <ul>
//           {this.props.players.map(player => {
//             return <Players players={player} key={player.id} />;
//           })}
//         </ul>
//         <input type="text" value={this.state.search} />
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     players: state.players
//   };
// };

// export default connect(mapStateToProps, { addSearchBar })(SearchBar);
