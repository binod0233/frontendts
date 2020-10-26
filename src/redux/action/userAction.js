import {
  LOGIN_USER,
  SET_CURRENT_USER,
  LOGOUT_USER,
  SIGNUP_USER,
} from "./userType";
import setAuthToken from "./setAuth";
import jwt from "jsonwebtoken";
const axios = require("axios");

export const signupUser = (username, email, password) => {
  console.log("user input", username, email, password);
  return function (dispatch) {
    var OPTIONS = {
      url: "http://localhost:1337/auth/local/register",
      method: "POST",
      data: {
        username: username,
        email: email,
        password: password,
      },
      headers: { "content-type": "application/json" },
    };

    axios(OPTIONS)
      .then((res) => {
        console.log("well done", res.data);
        const message = res.data.user;
        console.log("error data", message);
        dispatch({
          type: SIGNUP_USER,
          payload: message,
        });
      })
      .catch((err) =>
        console.log(err.response.data.message[0].messages[0].message)
      );
  };
};

export const loginUser = (username, password) => {
  return function (dispatch) {
    var OPTIONS = {
      url: "http://localhost:1337/auth/local",
      method: "POST",
      data: {
        identifier: username,
        password: password,
      },
      headers: { "content-type": "application/json" },
    };

    axios(OPTIONS)
      .then((res) => {
        const message = "User Found";
        console.log("token message", res.data);
        if (message === "User Found") {
          const token = res.data.jwt;

          localStorage.setItem("jwtToken", token);
          setAuthToken(token);
          console.log("hello woek");
          console.log(res.data);
          console.log(jwt.decode(token));
          console.log("end");
          dispatch(setCurrentUser(jwt.decode(token)));
          dispatch({
            type: LOGIN_USER,
            payload: message,
            isLoggedIn: true,
          });
        } else {
          dispatch({
            type: LOGIN_USER,
            payload: message,
            isLoggedIn: false,
          });
        }
      })
      .catch((err) => console.log("token error", err));
  };
};

export const setCurrentUser = (user) => {
  return {
    type: SET_CURRENT_USER,
    payload: user,
  };
};

export const logout = () => {
  return function (dispatch) {
    localStorage.removeItem("jwtToken");
    setAuthToken(false);
    dispatch(setCurrentUser({}));
    dispatch({ type: LOGOUT_USER });
    window.location.href = "/";
  };
};
