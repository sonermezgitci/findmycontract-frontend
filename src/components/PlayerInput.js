import React from "react";
import { connect } from "react-redux";
import { addPlayer } from "../actions/addPlayer";

class PlayerInput extends React.Component {
  state = {
    name: "",
    height: "",
    weight: "",
    position: "",
    nationality: "",
    points: "",
    appearance: "",
    rebound: "",
    assist: "",
    age: "",
    bonus: "",
    bio: "",
    image_url: "",
    youtube_url: "",
    likes: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addPlayer(this.state);
    this.setState({
      name: "",
      height: "",
      weight: "",
      position: "",
      nationality: "",
      points: "",
      appearance: "",
      rebound: "",
      assist: "",
      age: "",
      bonus: "",
      bio: "",
      image_url: "",
      youtube_url: "",
      likes: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label> Creating Player Name: </label>
          <input
            text="text"
            placeholder="name"
            value={this.state.name}
            name="name"
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label> Creating nationality: </label>
          <input
            text="text"
            placeholder="nationality"
            value={this.state.nationality}
            name="nationality"
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label> Creating Player bio: </label>
          <input
            text="text"
            placeholder="bio"
            value={this.state.bio}
            name="bio"
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label> Creating position: </label>
          <input
            text="text"
            placeholder="position"
            value={this.state.position}
            name="position"
            onChange={this.handleChange}
          />
          <br></br>
          <label> Creating height: </label>
          <input
            text="text"
            placeholder="height"
            value={this.state.height}
            name="height"
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label> Creating weight: </label>
          <input
            text="text"
            placeholder="weight"
            value={this.state.weight}
            name="weight"
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label> Creating appearance: </label>
          <input
            text="text"
            placeholder="appearance"
            value={this.state.appearance}
            name="appearance"
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label> Creating points: </label>
          <input
            text="text"
            placeholder="points"
            value={this.state.points}
            name="points"
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label> Creating rebound: </label>
          <input
            text="text"
            placeholder="rebound"
            value={this.state.rebound}
            name="rebound"
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label> Creating assist: </label>
          <input
            text="text"
            placeholder="assist"
            value={this.state.assist}
            name="assist"
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label> Creating age: </label>
          <input
            text="text"
            placeholder="age"
            value={this.state.age}
            name="age"
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label> Creating bonus: </label>
          <input
            text="text"
            placeholder="bonus"
            value={this.state.bonus}
            name="bonus"
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label> Creating Image: </label>
          <input
            text="text"
            placeholder="image_url"
            value={this.state.image_url}
            name="image_url"
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label> Creating YouTube: </label>
          <input
            text="text"
            placeholder="youtube_url"
            value={this.state.youtube_url}
            name="youtube_url"
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label> Creating likes: </label>
          <input
            text="text"
            placeholder="likes"
            value={this.state.likes}
            name="likes"
            onChange={this.handleChange}
            onClick={this.handleChange}
          />
          <br />
          <br />

          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default connect(null, { addPlayer })(PlayerInput);
