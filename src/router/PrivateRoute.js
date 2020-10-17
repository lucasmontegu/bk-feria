import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({
  authenticated,
  loadingAuthState,
  component: Component,
  ...rest
}) => {
  if (loadingAuthState) {
    return (
      <div className="m-auto" style={{ width: "100%", height: "100%" }}>
        <div className="spinner">
          <div className="double-bounce1"></div>
          <div className="double-bounce2"></div>
        </div>
      </div>
    );
  }

  return (
    <Route
      {...rest}
      component={(props) =>
        authenticated ? <Component {...props} /> : <Redirect to="/ingresar" />
      }
    />
  );
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
