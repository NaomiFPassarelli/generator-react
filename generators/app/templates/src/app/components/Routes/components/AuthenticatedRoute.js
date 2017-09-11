import React from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import PropTypes from "prop-types";

import * as Routes from "../constants";
import { CONFIRMED_WITHOUT_ACCOUNTS } from "../../../../constants/registrationStates";
import AppDownloader from "../../../screens/AppDownloader";

const DEFAULT_PUBLIC_ROUTE = Routes.SIGN_IN;
const DEFAULT_PRIVATE_ROUTE = Routes.DASHBOARD;

function AuthenticatedRoute({
  // device,
  isPublicRoute,
  isPrivateRoute,
  initialized,
  currentUser,
  component: Comp,
  ...props
}) {
  return (
    <Route
      {...props}
      render={routeProps => {
        // if (device.isMobile && !device.adviceSubmitted) {
        //   return <AppDownloader />;
        // }
        if (initialized) {
          if (currentUser && isPublicRoute) {
            // do not allow logged users to access public routes. redirect to app
            return (
              <Redirect
                to={{
                  pathname: DEFAULT_PRIVATE_ROUTE,
                  state: { from: props.location }
                }}
              />
            );
          } else if (!currentUser && isPrivateRoute) {
            // do not allow unlogged users to access app. redirect to signin
            return (
              <Redirect
                to={{
                  pathname: DEFAULT_PUBLIC_ROUTE,
                  state: { from: props.location }
                }}
              />
            );
          }
        }
        return <Comp {...routeProps} />;
      }}
    />
  );
}

AuthenticatedRoute.propTypes = {
  ...Route.propTypes,
  currentUser: AuthPropTypes().currentUser,
  isPrivateRoute: PropTypes.bool,
  isPublicRoute: PropTypes.bool,
  initialized: PropTypes.bool
};

const mapStateToProps = store => ({
  currentUser: store.auth.currentUser,
  initialized: !store.auth.initialLoading
  // device: store.device
});

export default withRouter(connect(mapStateToProps)(AuthenticatedRoute));
