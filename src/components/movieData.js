import React from "react";
import Image from "./image";
import "./movieData.css";

const movie = props => {
  return (
    <div className="movieData">
      <div className="movieImage">
        <Image url={props.Poster}></Image>
      </div>
      <div className="movieTitle">
        <label>{props.Title}</label>
        <label className="movieYear">Year: {props.Year}</label>
      </div>
    </div>
  );
};

export default movie;
