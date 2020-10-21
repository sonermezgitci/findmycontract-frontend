import React from 'react'
// import Player from './Player'
import {Link} from 'react-router-dom'
import './NewContract.css'
import '../index.css'


class Players extends React.Component {
  state = {
  likes: 0


  }
  handleClick = (event) => {
    // console.log(` before setState: ${this.state.likes}`)
    const newLikes = this.state.likes +1 
    // console.log(`after setState: ${this.state.likes}`)
    this.setState({
     likes: newLikes
    })
  }
  
  
  
  
  render() {
    
    let classes = ['red', 'bold'].join(' ');
    return (
      
      <div> 
       {this.props.players.map(player => 
       <li key={player.id} className={classes}> 
       <Link to={`/players/${player.id}`}>{player.name} </Link>
       <button text="text" value={this.state.value} onClick={this.handleClick}>likes</button>
       {this.state.likes}
       
       </li>)}
    </div>
  
  
    )

  }

 }

 export default Players

