import React, { useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { DashboardRoutes } from "./DashboardRoutes";
import { PublicRoutes } from "./PublicRoutes";
import PrivateRoute from "./PrivateRoute";
import { AuthContext } from "../store/AuthProvider";

export const AppRouter = () => {
  const { authenticated, loadingAuthState } = useContext(AuthContext);

  return (
    <Router>
      <div>
        <PublicRoutes />
        <PrivateRoute
          path="/panel"
          component={DashboardRoutes}
          authenticated={authenticated}
          loadingAuthState={loadingAuthState}
        />
      </div>
    </Router>
  );
};
