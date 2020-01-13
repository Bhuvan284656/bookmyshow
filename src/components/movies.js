import React, { Component } from "react";
import { movieList } from "../apis/ombd";
import Movie from "./movieData";
import "./movies.css"
import { Link } from "react-router-dom";

class Movies extends Component {
  state = {
    movies: [],
    error: "",
    iserror: false
  };

  componentDidMount() {
    movieList()
      .then(({ data }) => {
        this.setState({
          movies: data.Search,
          iserror: false
        });
      })
      .catch(() => this.setState({ error: "Failed to get Movie List." , iserror: true }));
  }

  render() {
    const { movies, error, iserror } = this.state;
    let list = null;

    if (movies && !iserror)
      list = movies.map(val => (
        <Link key={val.imdbID} to={`/Theaters/${val.imdbID}`}>
          <Movie {...val}></Movie>
        </Link>
      ));

    if(iserror)
      list = <div className="errorMessage">{error}</div>

    return <div className={"moviesList"}>{list}</div>;
  }
}

export default Movies;
