import axios from "axios";
import { FETCH_CTOKEN, ADD_CTOKEN, DELETE_CTOKEN } from "./customerType";
require("dotenv").config();
const burl = process.env.REACT_APP_BE_URL;

export const fetchCtoken = (query) => {
  console.log("query datta", query);

  return function (dispatch) {
    var OPTION = {
      url: `${burl}/customers`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        console.log("get res", res);
        const ctokens = res.data;
        dispatch(getCtoken(ctokens));
      })
      .catch((err) => console.log(err));
  };
};

export const getCtoken = (ctokens) => {
  return { type: FETCH_CTOKEN, payload: ctokens };
};

export const addCtoken = (yourToken, userId, bankName, userName) => {
  console.log(
    "yourtoken sjdkfj .....................................",
    userName
  );
  var OPTIONS = {
    url: `${burl}/customers/`,
    method: "POST",
    data: {
      yourToken: yourToken,
      userId: userId,
      bankName: bankName,
      username: userName,
    },
    headers: {
      "content-type": "application/json",
    },
  };

  axios(OPTIONS)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  return {
    type: ADD_CTOKEN,
    payload: yourToken,
  };
};

export const deleteCtoken = (id) => {
  console.log("query datta deeeeeeeeeeeeelett jksd skdf", id);

  var OPTIONS = {
    url: `${burl}/customers/${id}`,
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
  };
  axios(OPTIONS)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

  return {
    type: DELETE_CTOKEN,
    // payload: totalToken,
  };
};
