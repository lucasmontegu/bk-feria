import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import NavbarDashboard from "../components/dashboard/NavbarDashboard";
import { DashboardEmprendimientos } from "../views/Dashboard/DashboardEmprendimientos";

export const DashboardRoutes = () => {
  return (
    <>
      <NavbarDashboard />
      <div>
        <Switch>
          <Route
            exact
            path="/panel"
            component={DashboardEmprendimientos}/>

           <Redirect to="/panel" />
        </Switch>
      </div>
    </>
  );
};
