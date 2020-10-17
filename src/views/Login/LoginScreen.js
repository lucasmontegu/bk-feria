import React, { useState, useContext } from "react";
import { firebase } from "../../firebase";
import { AuthContext } from "../../store/AuthProvider";
import { useHistory, Redirect } from "react-router-dom";

export const LoginScreen = () => {
  const authContext = useContext(AuthContext);
  const history = useHistory();

  const logged = authContext.authenticated;

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    e.persist();
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then((res) => {
        authContext.setUser(res);
        // console.log(res, "res");
        history.replace("/panel");
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
      });
  };

  if (logged) {
    return <Redirect to="/panel" />;
  }

  return (
    <div className="LoginPage">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12 m-auto">
            <form
              onSubmit={handleSubmit}
              className="form-container card shadow-sm py-5 px-4"
            >
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Ingresar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
