import React from "react";
import Radium from "radium";
import { Route, Switch, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import * as Routes from "../../components/Routes/constants";

import styles from "./styles";
import Loading from "./components/Loading";

// TODO import your components

function Dashboard({ loading }) {
  return (
    <div style={styles.base}>
      <div style={styles.baseContent}>
        {/*  TODO add this components if you need it */}
        {/* <Topbar /> */}
        {/* <Sidebar /> */}
        <div style={styles.content}>
          {loading ? (
            <Loading />
          ) : (
            <Switch>
              {/* <Route exact path={Routes.Example} component={Example} /> */}
              <Route render={() => <Redirect to={Routes.DASHBOARD} />} />
            </Switch>
          )}
        </div>
      </div>
    </div>
  );
}

Dashboard.defaultProps = {
  loading: false
};

Dashboard.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Radium(Dashboard);
