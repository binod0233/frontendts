import axios from "axios";
import { FETCH_TOKEN, UPDATE_TOKEN } from "./tokenType";

export const fetchToken = () => {
  return function (dispatch) {
    var OPTION = {
      url: "http://localhost:1337/tokens",
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        // console.log("get res", res);
        const tokens = res.data;
        dispatch(getToken(tokens));
      })
      .catch((err) => console.log(err));
  };
};

export const getToken = (tokens) => {
  return { type: FETCH_TOKEN, payload: tokens };
};

export const updateToken = (totalToken) => {
  var OPTIONS = {
    url: "http://localhost:1337/tokens/5f6b4b4f511ccb4aee09527a",
    method: "PUT",
    data: { totalToken: totalToken },
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
