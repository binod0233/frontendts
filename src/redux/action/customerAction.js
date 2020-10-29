import axios from "axios";
import { FETCH_CTOKEN, UPDATE_TOKEN, ADD_CTOKEN } from "./customerType";

export const fetchCtoken = (query) => {
  console.log("query datta", query);

  return function (dispatch) {
    var OPTION = {
      url: "http://localhost:1337/customers",
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

export const addCtoken = (yourToken, userId, bankName) => {
  console.log(
    "yourtoken sjdkfj .....................................",
    bankName
  );
  var OPTIONS = {
    url: "http://localhost:1337/customers/",
    method: "POST",
    data: { yourToken: yourToken, userId: userId, bankName: bankName },
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

// export const updateToken = (totalToken, currentToken) => {
//   var OPTIONS = {
//     url: "http://localhost:1337/tokens/5f6b4b4f511ccb4aee09527a",
//     method: "PUT",
//     data: { totalToken: totalToken, currentToken: currentToken },
//     headers: {
//       "content-type": "application/json",
//     },
//   };
//   axios(OPTIONS)
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));

//   return {
//     type: UPDATE_TOKEN,
//     payload: totalToken,
//   };
// };

// export const user = () => {
//   var OPTIONS = {
//     url: "http://localhost:1337/auth/local",
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
