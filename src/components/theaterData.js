import React from "react";
import "./theaterData.css";
import MovieTiming from "./movieTimings";

const theater = props => {
  let timeDisplay = null;
  if (props.movieTiming)
    timeDisplay = (
      <div className="seletedMovieTime">Time: {props.movieTiming}</div>
    );
  return (
    <div className="theater">
      <div className="theaterName">{`${props.name} , ${props.location}`}</div>
      {props.hideMovieTimings ? (
        timeDisplay
      ) : (
        <div className="theaterTimings">
          <MovieTiming
            movieID={props.movieID}
            theaterID={props.id}
            timings={props.timings}
            url={props.url}
          />
        </div>
      )}
    </div>
  );
};

export default theater;
