import React from "react";
// import { Box } from "@material-ui/core";
import "./App.css";

import { Provider } from "react-redux";
import store from "./redux/store";
import MainContainer from "./components/MainContainer";
import setAuthToken from "./redux/action/setAuth";
import jwt from "jsonwebtoken";
import { setCurrentUser, logout } from "./redux";
require("dotenv").config();

function App() {
  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    // store.dispatch(setCurrentUser(localStorage.jwtToken));

    jwt.verify(
      localStorage.jwtToken,
      process.env.REACT_APP_TOKEN_SECRET,
      function (err, decode) {
        if (err) {
          store.dispatch(logout());
        } else {
          store.dispatch(setCurrentUser(decode));
        }
      }
    );
  }
  return (
    <Provider store={store}>
      <div className="App">
        <MainContainer />
      </div>
    </Provider>
  );
}

export default App;
