import React, { Component } from "react";
import { connect } from "react-redux";

import { apiSetup } from "../config/api";
import {
  actionCreators as authActions,
  propTypes as authPropTypes
} from "../redux/authHandlers";

import Routes from "./components/Routes";

class App extends Component {
  componentDidMount() {
    apiSetup(this.props.dispatch);
    if (this.props.loading) {
      this.props.dispatch(authActions.init());
    }
  }

  render() {
    return <Routes />;
  }
}

App.propTypes = {
  loading: authPropTypes().loading
};

const mapStateToProps = store => ({
  loading: store.auth.initialLoading
});

export default connect(mapStateToProps)(App);
