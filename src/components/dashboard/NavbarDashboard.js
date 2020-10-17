import React from "react";
import { useHistory, Link, NavLink } from "react-router-dom";
import { firebase } from "../../firebase";
import { useContext } from "react";
import { AuthContext } from "../../store/AuthProvider";

const NavbarDashboard = () => {
  const { user } = useContext(AuthContext);
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();

    firebase
      .auth()
      .signOut()
      .then((res) => {
        history.replace("/ingresar");
      });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/panel">
          Logo
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/panel/empresas"
              >
                Empresas
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/panel/emprendimientos"
              >
                Emprendimientos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/panel/rondas"
              >
                Rondas de vinculación
              </NavLink>
            </li>
          </ul>
          <div>
            <span className="mr-3">{user.email}</span>
            <button onClick={handleClick} className="btn btn-outline-secondary">
              Salir
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarDashboard;
