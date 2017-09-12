import React, { Component } from "react";
// TODO Add this line if you need it
// import { connect } from "react-redux";

import { apiSetup } from "../config/api";

import Routes from "./components/Routes";

class App extends Component {
  componentDidMount() {
    apiSetup(this.props.dispatch);
    if (this.props.loading) {
      // this.props.dispatch()
    }
  }

  render() {
    return <Routes />;
  }
}

App.defaultProps = {
  loading: false
};

export default App;
