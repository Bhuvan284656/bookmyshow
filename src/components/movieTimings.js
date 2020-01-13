import React from "react";
import "./movieTimings.css";
import { Link } from "react-router-dom";

const movieTimings = props => {
  const { timings } = props;

  const value = timings.map((time, index) => (
    <Link
      key={index}
      to={`${props.url}/Seats/${time}/${props.theaterID}`}
      className="movietime"
    >
      {time}
    </Link>
  ));
  return value;
};

export default movieTimings;
