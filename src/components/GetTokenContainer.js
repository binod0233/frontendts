import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

// import { updateToken } from "../redux";
import { useSelector, useDispatch } from "react-redux";
import { fetchToken, updateToken } from "../redux/action/tokenAction";
// import { Form } from "formik";
import { fetchCtoken } from "../redux/action/customerAction";

import { addCtoken } from "../redux/action/customerAction";
// import { setCurrentUser } from "../redux/action/userAction";
const GetTokenContainer = (props) => {
  // const [currentToken, setCurrenttoken] = useState(0);

  const [currentToken, setCurrenttoken] = useState(0);

  const dispatch = useDispatch();
  useEffect(() => {
    // var code = currentToken;
    dispatch(fetchToken());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchCtoken());
    // const interval = setInterval(() => {
    //   dispatch(fetchCtoken());
    // }, 1000);

    // return () => clearInterval(interval);
  }, [dispatch]);
  const allToken = useSelector((state) => state.token.allTokens);
  const allCtoken = useSelector((state) => state.customer.allCtokens);

  console.log("all token", allCtoken);
  // console.log("your token", allCtoken.yourToken);
  var doo = "ok";
  if (doo === "ok") {
    var toDo = allToken.map((val, i) => {
      var Ctoken = allCtoken.map((value, i) => {
        console.log(
          `value=${value} val=${val} current token=${val.currentToken}and your token=${value.yourToken}`
        );
        console.log(value.yourToken);
        if (Number(value.yourToken) === Number(val.currentToken))
          console.log("found");
        return Number(value.yourToken) === Number(val.currentToken) ? (
          <>
            <tr key={i}>
              <td key={value._id}></td>
              <td>bankname={value.bankName}</td>
              <td>username={value.username}</td>
              {/* <p>{("count=", count)}</p> */}
              {/* {setCurrenttoken(val.currentToken)} */}
              <p>counter conntaner</p>
            </tr>
          </>
        ) : (
          <></>
        );
      });
      return (
        <>
          <tr key={i}>
            <td key={val._id}></td>
            <td>total token={val.totalToken}</td>
            <td>current token={val.currentToken}</td>
            {/* <p>{("count=", count)}</p> */}
            {/* {setCurrenttoken(val.currentToken)} */}
            <p>counter</p>
          </tr>
          <p>{currentToken}</p>
          <div>{Ctoken}</div>

          <button
            onClick={() => {
              var currentToken = val.currentToken + 1;

              setCurrenttoken(currentToken);
              props.updateToken(val.totalToken, currentToken);
            }}
          >
            Inc. Current Token
          </button>
        </>
      );
    });
  }
  return (
    <>
      <div>{toDo}</div>
    </>
  );
};

const mapStatetoProps = (state) => {
  return {
    totalToken: state.token.totalToken,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    updateToken: function (totalToken, currentToken) {
      dispatch(updateToken(totalToken, currentToken));
    },
    addCtoken: function (yourToken) {
      dispatch(addCtoken(yourToken));
    },
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(GetTokenContainer);
