import React, { Component } from "react";
import { movie } from "../apis/ombd";
import Image from "./image";
import "./selectedMovie.css";

class SelectedMovie extends Component {
  state = {
    movie: {}
  };
  componentDidMount() {
    movie(this.props.id)
      .then(val => this.setState({ movie: val.data }))
      .catch();
  }

  render() {
    const { Poster, Title, Year, Actors, imdbRating } = this.state.movie;

    return (
      <div className="selectedMovie">
        <div className="movieImage">
          <Image url={Poster}></Image>
        </div>
        <div className="movieTitle">
          <div>Movie: {Title}</div>
          <div>Year: {Year}</div>
          <div>Actors: {Actors}</div>
          <div>Rating: {imdbRating}</div>
        </div>
        {/* <MovieData {...this.state.movie}></MovieData> */}
      </div>
    );
  }
}

export default SelectedMovie;
