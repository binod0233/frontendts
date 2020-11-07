import axios from "axios";
import { FETCH_TOKEN, UPDATE_TOKEN } from "./tokenType";
require("dotenv").config();
const burl = process.env.REACT_APP_BE_URL;

export const fetchToken = (query) => {
  console.log("query datta", query);
  return function (dispatch) {
    var OPTION = {
      url: `${burl}/tokens?`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        console.log("get res", res);
        const tokens = res.data;
        dispatch(getToken(tokens));
      })
      .catch((err) => console.log(err));
  };
};

export const getToken = (tokens) => {
  return { type: FETCH_TOKEN, payload: tokens };
};

export const updateToken = (totalToken, currentToken) => {
  console.log("current==", currentToken);
  console.log("current==", totalToken);

  var OPTIONS = {
    url: `${burl}/tokens/5f9e7c1c93e61a00175c2b0e`,
    method: "PUT",
    data: { totalToken: totalToken, currentToken: currentToken },
    headers: {
      "content-type": "application/json",
    },
  };
  axios(OPTIONS)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

  return {
    type: UPDATE_TOKEN,
    payload: totalToken,
  };
};

// export const user = () => {
//   var OPTIONS = {
//     url: "`${url}`/auth/local",
//     method: "POST",
//     data: { identifier: "binod@gmail.com", password: "strapi" },
//     headers: {
//       "content-type": "application/json",
//     },
//   };
//   axios(OPTIONS)
//     .then((res) => console.log(console.log("user", res)))
//     .catch((err) => console.log(err));
// };
