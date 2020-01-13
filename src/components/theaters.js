import React, { Component, Fragment } from "react";
import TheaterListData from "../temp.json";
import Theater from "./theaterData";
import "./theaters.css";

class Theaters extends Component {
  state = {
    theaterList: [],
    iserror: false,
    errorMessage: ""
  };

  componentDidMount() {
    //Api to get Theater List using Movie ID : this.props.match.params.id
    if (!(this.props.match && this.props.match.params && this.props.match.params.id)) {
      this.setState({ iserror: true, errorMessage: "Movie Not Seleted." });
      return;
    }
    this.setState({ theaterList: TheaterListData.theaterList });
  }

  render() {
    const {theaterList, iserror, errorMessage} = this.state;
    let list = null;
    let errorDiv = null;
    const movieID = this.props.match.params.id;
    const url = this.props.match.url;

    if(theaterList && !iserror)
      list = theaterList.map(data => (
        <Theater key={data.id} {...data} movieID={movieID} url={url}></Theater>
      ));

    if(iserror)
      errorDiv = <div className="errorMessage">{errorMessage}</div>

    return iserror ? (
      errorDiv
    ) : (
      <Fragment>
        <div className="theaterList">{list}</div>
      </Fragment>
    );
  }
}

export default Theaters;
