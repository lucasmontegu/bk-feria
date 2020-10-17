import React from "react";
import "./styles/globals.scss";
import { AppRouter } from "./router/AppRouter";
import { AuthProvider } from "./store/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;
