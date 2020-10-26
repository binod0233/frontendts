import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { useSelector, useDispatch } from "react-redux";
import { fetchToken, updateToken } from "../redux/action/tokenAction";
import { Form } from "formik";
import { addCtoken, fetchCtoken } from "../redux/action/customerAction";
const GetCustomerContainer = (props) => {
  console.log("first prop", props.userDetail);
  const [totalToken, settotalToken] = useState(0);
  const [count, setCount] = useState(0);
  const [yourToken, setYourtoken] = useState(0);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchToken());
  }, []);
  const allCtoken = useSelector((state) => state.customer.allCtokens);
  useEffect(() => {
    dispatch(fetchCtoken());
  }, []);

  const allToken = useSelector((state) => state.token.allTokens);

  console.log("your token", allCtoken);

  var Ctoken = allCtoken.map((val) => {
    if (val.userId === props.userDetail) {
      var val = val.yourToken;
      console.log(val);
      return val;
    }
  });

  var yToken = Ctoken.filter((f) => {
    return f != null;
  });
  if (yToken[0] === undefined) {
    yToken = "user not found";
  } else yToken = yToken[0];
  console.log("finding.....", yToken);

  if (yToken === "user not found") {
    var toDo = allToken.map((val, i) => (
      <>
        <tr key={i}>
          <td key={val._id}></td>
          <td>total token={val.totalToken}</td>
          <td>current token={val.currentToken}</td>

          <p>click to book</p>
        </tr>

        <button
          onClick={() => {
            var totalToken = val.totalToken + 1;
            var yourToken = totalToken;
            settotalToken(totalToken);
            props.updateToken(totalToken);
            setYourtoken(yourToken);
            props.addCtoken(yourToken, props.userDetail);
          }}
        >
          click
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
          <p>your token is {yToken}</p>
          <p>booked</p>
        </tr>
        {/* <button
          onClick={() => {
          }}
        >
          cancel
        </button> */}
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
    userDetail: state.user.userDetails.id,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    updateToken: function (totalToken) {
      dispatch(updateToken(totalToken));
    },
    addCtoken: function (yourToken, userDetail) {
      dispatch(addCtoken(yourToken, userDetail));
    },
  };
};

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(GetCustomerContainer);
