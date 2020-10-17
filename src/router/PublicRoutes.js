import React from "react";
import { Switch, Route } from "react-router-dom";
import { Bienvenida, Inicio } from "../views/Home";
import { ListadoEmpresas, AmpliadoEmpresa } from "../views/Empresas";
import { ListadoAuditorio, AmpliadoAuditorio } from "../views/Auditorio";
import {
  ListadoEmprendimientos,
  AmpliadoEmprendimientos,
} from "../views/Emprendimientos";
import {
  ListadoRondasVinculacion,
  AmpliadoRondasVinculacion,
} from "../views/RondasVinculacion";
import {
  ListadoPresentacionOportunidades,
  AmpliadoPresentacionOportunidades,
} from "../views/PresentacionOportunidades";
import { ListadoPosters, AmpliadoPosters } from "../views/Anfiteatro";
import { LoginScreen } from "../views/Login/LoginScreen";

export const PublicRoutes = () => {
  return (
    <>
      <div>
        <Switch>
          <Route path="/" exact component={Bienvenida} />
          <Route path="/inicio" exact component={Inicio} />
          <Route path="/empresas" exact component={ListadoEmpresas} />
          <Route path="/empresas/:id" exact component={AmpliadoEmpresa} />

          <Route path="/auditorio" exact component={ListadoAuditorio} />
          <Route path="/auditorio/:id" exact component={AmpliadoAuditorio} />

          <Route
            path="/emprendimientos"
            exact
            component={ListadoEmprendimientos}
          />
          <Route
            path="/emprendimientos/:id"
            exact
            component={AmpliadoEmprendimientos}
          />

          <Route
            path="/rondas-vinculacion"
            exact
            component={ListadoRondasVinculacion}
          />
          <Route
            path="/rondas-vinculacion/:id"
            exact
            component={AmpliadoRondasVinculacion}
          />

          <Route
            path="/presentacion-oportunidades"
            exact
            component={ListadoPresentacionOportunidades}
          />
          <Route
            path="/presentacion-oportunidades/:id"
            exact
            component={AmpliadoPresentacionOportunidades}
          />
          <Route path="/posters" exact component={ListadoPosters} />
          <Route path="/posters/:id" exact component={AmpliadoPosters} />
          <Route exact path="/ingresar" component={LoginScreen} />
        </Switch>
      </div>
    </>
  );
};
