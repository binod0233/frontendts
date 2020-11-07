import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

// import { updateToken } from "../redux";
import { useSelector, useDispatch } from "react-redux";
import { fetchToken, updateToken } from "../redux/action/tokenAction";
// import { Form } from "formik";
import { addCtoken } from "../redux/action/customerAction";
const GetTokenContainer = (props) => {
  const [totalToken, settotalToken] = useState(0);
  const [count, setCount] = useState(0);
  const [setYourtoken] = useState(0);
  const [currentToken, setCurrenttoken] = useState(0);

  const dispatch = useDispatch();
  useEffect(() => {
    // var code = currentToken;
    dispatch(fetchToken());
  });
  // useEffect(() => {
  //   dispatch(fetchCtoken());
  // }, []);
  const allToken = useSelector((state) => state.token.allTokens);
  // const allCtoken = useSelector((state) => state.customer.allCtokens);

  console.log("all token", allToken);
  // console.log("your token", allCtoken.yourToken);
  var doo = "ok";
  if (doo === "ok") {
    var toDo = allToken.map((val, i) => (
      <>
        <tr key={i}>
          <td key={val._id}></td>
          <td>total token={val.totalToken}</td>
          <td>current token={val.currentToken}</td>
          {/* <p>{("count=", count)}</p> */}
          <p>booked</p>
        </tr>
        <p>{currentToken}</p>
        <button
          onClick={() => {
            var currentToken = val.currentToken + 1;
            // var count = 0;
            // setCount(count);
            setCurrenttoken(currentToken);
            props.updateToken(totalToken, currentToken);
          }}
        >
          cancel
        </button>
      </>
    ));
  } else {
    toDo = allToken.map((val, i) => (
      <>
        <tr key={i}>
          <td key={val._id}></td>
          <td>total token={val.totalToken}</td>
          <td>current token={val.currentToken}</td>
          <p>{("count=", count)}</p>

          <p>click to book</p>
        </tr>

        <button
          onClick={() => {
            var totalToken = val.totalToken + 1;
            var count = 1;
            var yourToken = totalToken;
            setCount(count);
            settotalToken(totalToken);
            props.updateToken(totalToken);
            setYourtoken(yourToken);
            props.addCtoken(yourToken);
          }}
        >
          click
        </button>
      </>
    ));
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
