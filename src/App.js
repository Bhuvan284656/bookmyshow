import React from "react";
import Header from "./components/header";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Movies from "./components/movies";
import Theaters from "./components/theaterswithMovie";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>

        <Switch>
          <Route path="/" exact component={Movies}></Route>
          <Route path="/Theaters/:id" component={Theaters}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
