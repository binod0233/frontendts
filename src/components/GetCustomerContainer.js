import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { fetchToken, updateToken } from "../redux/action/tokenAction";
import { addCtoken, fetchCtoken } from "../redux/action/customerAction";
import TimeComponent from "./TimeComponent";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Paper,
  Box,
  CssBaseline,
  Typography,
  Button,
  Select,
} from "@material-ui/core";
// import { Formik, Form, Field } from "formik";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

// import { Select } from "formik-material-ui";

export const UserContext = React.createContext();
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
const GetCustomerContainer = (props) => {
  const classes = useStyles();
  const [age, setAge] = useState("");
  const [totalToken, settotalToken] = useState(0);
  const [yourToken, setYourtoken] = useState(0);
  const [bank, setBank] = useState("");

  var random = age;
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchToken());
    const interval = setInterval(() => {
      dispatch(fetchToken());
    }, 9000);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    dispatch(fetchCtoken());
  }, []);

  const allToken = useSelector((state) => state.token.allTokens);
  const allCtoken = useSelector((state) => state.customer.allCtokens);

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
        {/* <tr key={i}>
          <td key={val._id}></td>
          <td>total token={val.totalToken}</td>
          <td>current token={val.currentToken}</td>

          <p>click to book</p>
        </tr> */}

        <Grid container spacing={3} alignItems="stretch" key={i}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Typography variant="h3" component="h2">
                Welcome to the token system
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  onChange={handleChange}
                >
                  <MenuItem value="ten">Ten</MenuItem>
                  <MenuItem value="Twenty">Twenty</MenuItem>
                  <MenuItem value="Thirty">Thirty</MenuItem>
                </Select>
              </FormControl>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  var totalToken = val.totalToken + 1;
                  var yourToken = totalToken;
                  settotalToken(totalToken);
                  props.updateToken(totalToken);
                  setYourtoken(yourToken);
                  var bank = age;
                  // setBank(bank);
                  props.addCtoken(yourToken, props.userDetail, bank);
                }}
              >
                click to take
              </Button>
            </Paper>
          </Grid>
        </Grid>
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
          <p>booked {random}</p>
          <UserContext.Provider value={-val.totalToken + val.currentToken - 30}>
            <TimeComponent />
          </UserContext.Provider>
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
      <div className={classes.root}>
        <div>{toDo}</div>
        <p>totaol{random}</p>
      </div>
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
    addCtoken: function (yourToken, userDetail, bankName) {
      dispatch(addCtoken(yourToken, userDetail, bankName));
    },
  };
};

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(GetCustomerContainer);
