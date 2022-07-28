import React, { Component } from "react";
import { connect } from "react-redux";
import Main from "./components/Main";
import Function from "./components/Function";
import Front from "./components/Front";
import Card from "./components/Card";

// import "./App.css";

export default class App extends Component {
  componentDidMount() {
    console.log("mounted calculator!");
  }

  render() {
    return (
      <div>
        <Main />
        {/* <Function /> */}
        {/* <Front/> */}
        {/* <Card/> */}

      </div>
    );
  }
}




