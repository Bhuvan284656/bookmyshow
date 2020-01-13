import React, { Component } from "react";
import "./seat.css";

const seat = (props) => {
    let isSeatSeleted = props.isSelected;
    const onSeatSelect = props.onSeatSelect;

    return (
      <div className={`seat`} onClick={onSeatSelect}>
        <div className={`seatDetails ${isSeatSeleted ? "SelectedSeat" : ""}`}>
          {props.children}
        </div>
      </div>
    );
  }

export default seat;
