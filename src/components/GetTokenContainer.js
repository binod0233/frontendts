import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

// import { updateToken } from "../redux";
import { useSelector, useDispatch } from "react-redux";
import { fetchToken, updateToken } from "../redux/action/tokenAction";
import { Form } from "formik";
const GetTokenContainer = (props) => {
  const [totalToken, settotalToken] = useState(0);
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  // useEffect(() => {
  //   // Update the document title using the browser API
  //   document.title = `You clicked ${count} times`;
  // });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchToken());
  });
  // useEffect(() => {
  //   dispatch(updateToken(totalToken));
  // }, [dispatch]);
  const allToken = useSelector((state) => state.token.allTokens);
  // const totalToken = useSelector((state) => state.token.totalToken);

  // console.log(totalToken);
  return (
    <>
      <div>
        {allToken.map((val, i) => (
          <>
            <tr key={i}>
              <td key={val._id}></td>
              <td>current token={val.currentToken}</td>
              <td>total token={val.totalToken}</td>
            </tr>
            {console.log(totalToken)}
            <p>{totalToken}</p>
            {/* <p>{count}</p> */}

            <button
              onClick={() => {
                var totalToken = val.totalToken + 1;
                // setCount(count + 1 + val.totalToken);
                settotalToken(totalToken);
                props.updateToken(totalToken);
              }}
            >
              {" "}
              click
            </button>
            <div>
              {/* <button
                onClick={() => {
                  // setCount(count + 1);
                  settotalToken(div.totalToken + 1);
                  props.updateToken(totalToken);
                }}
              >
                Click me
              </button> */}
            </div>
          </>
        ))}

        {/* <Button
        variant="primary"
        onClick={() => props.addPassCat(category)}
      >
        ADD
      </Button> */}
        {/* <form
          Value={props.totalToken}
          onChange={(e) => settotalToken(e.target.value + 1)}
        /> */}
        {/* <button onClick={() => settotalToken(totalToken + 1)}>Click me</button> */}
      </div>
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
    updateToken: function (totalToken) {
      dispatch(updateToken(totalToken));
    },
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(GetTokenContainer);
