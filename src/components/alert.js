import React from "react";
import "./alert.css";

const alert = (props) => 
        (<div className="overlay" onClick={props.ooCloseClick}>
            <div className="alertMessage">
                {/* <div className="alertHeader">{props.header}</div> */}
                <div className="message">{props.message}</div>
            </div>
        </div>)

export default alert;