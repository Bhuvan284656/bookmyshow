import React, { Component, Fragment } from "react";
import SeletedMovie from "./selectedMovie";
import { Route, Switch } from "react-router-dom";
import Theaters from "./theaters";
import SeatLayout from "./seatLayout";

class TheaterMovie extends Component {
  state = {
    iserror: false,
    errorMessage: ""
  };

  componentDidMount() {
    //Api to get Theater List using Movie ID : this.props.match.params.id
    if (
      !(
        this.props.match &&
        this.props.match.params &&
        this.props.match.params.id
      )
    ) {
      this.setState({ iserror: true, errorMessage: "Movie Not Seleted." });
      return;
    }
  }

  render() {
    const { iserror, errorMessage } = this.state;
    let errorDiv = null;
    if (iserror) errorDiv = <div className="errorMessage">{errorMessage}</div>;
    const defaultPath = this.props.match.path;
    
    return iserror ? (
      errorDiv
    ) : (
      <Fragment>
        <SeletedMovie id={this.props.match.params.id}></SeletedMovie>
        <Switch>
          <Route path={`${defaultPath}`} exact component={Theaters}></Route>
          <Route
            path={`${defaultPath}/Seats/:time/:theaterID`}
            exact
            component={SeatLayout}
          ></Route>
        </Switch>
      </Fragment>
    );
  }
}

export default TheaterMovie;
