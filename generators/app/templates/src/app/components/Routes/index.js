import React from "react";
import { ConnectedRouter } from "react-router-redux";
import { Switch } from "react-router-dom";

import { history } from "../../../redux/store";
import Dashboard from "../../screens/Dashboard";

import AuthenticatedRoute from "./components/AuthenticatedRoute";
import * as Routes from "./constants";
import styles from "./styles";

function AppRoutes() {
  return (
    <ConnectedRouter history={history}>
      <div style={styles.container}>
        <Switch>
          <AuthenticatedRoute
            isPublicRoute
            exact
            path={Routes.DASHBOARD}
            component={Dashboard}
          />
        </Switch>
      </div>
    </ConnectedRouter>
  );
}

export default AppRoutes;
