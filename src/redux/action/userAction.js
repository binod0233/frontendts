import {
  LOGIN_USER,
  SET_CURRENT_USER,
  LOGOUT_USER,
  SIGNUP_USER,
} from "./userType";
import setAuthToken from "./setAuth";
import jwt from "jsonwebtoken";
require("dotenv").config();
const axios = require("axios");
const burl = process.env.REACT_APP_BE_URL;
console.log(`this is process  ${burl}/auth/local/register`, process.env.BE_URL);

export const signupUser = (userName, email, password) => {
  console.log("user input", userName, email, password);
  return function (dispatch) {
    var OPTIONS = {
      url: `${burl}/auth/local/register`,
      // url: process.env.S_URL,

      method: "POST",
      data: {
        username: userName,
        email: email,
        password: password,
      },
      headers: { "content-type": "application/json" },
    };

    axios(OPTIONS)
      .then((res) => {
        console.log("well done", res.data);
        let message = res.data.user.confirmed;
        if (message === true) {
          message = "User Registered successfully";
        }
        console.log("error data", message);
        dispatch({
          type: SIGNUP_USER,
          payload: message,
        });
      })
      .catch((err) => {
        let message = "";
        if (err) {
          message = "Email or Username already taken";
        }

        console.log("token error", err);
        dispatch({
          type: SIGNUP_USER,
          payload: message,
        });
      });
  };
};

export const loginUser = (username, password) => {
  return function (dispatch) {
    var OPTIONS = {
      url: `${burl}/auth/local`,
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
        // console.log("token message", res.data.message[0].messages[0].message);

        const userRole = res.data.user.role.name;
        if (message === "User Found") {
          const token = res.data.jwt;
          localStorage.setItem("jwtToken", token);
          setAuthToken(token);
          console.log("hello woek");
          console.log(res.data.user.role.name);
          console.log(jwt.decode(token));
          console.log("end");
          dispatch(setCurrentUser(jwt.decode(token)));
          dispatch({
            type: LOGIN_USER,
            payload: message,
            isLoggedIn: true,
            userRole: userRole,
          });
        } else {
          dispatch({
            type: LOGIN_USER,
            payload: message,
            isLoggedIn: false,
          });
        }
      })
      .catch((err) => {
        let message = err.response.data.message[0].messages[0].message;
        if (message === "Identifier or password invalid.") {
          message = "Invalid email or password";
        }
        console.log("token error", err);
        dispatch({
          type: LOGIN_USER,
          payload: message,
          isLoggedIn: false,
        });
      });
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
