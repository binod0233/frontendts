import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { fetchToken, updateToken } from "../redux/action/tokenAction";
import { addCtoken, fetchCtoken } from "../redux/action/customerAction";
import TimeComponent from "./TimeComponent";
import { makeStyles } from "@material-ui/core/styles";
import * as Yup from "yup";
import FormikControl from "../formik/FormikControl";
import { Grid, Paper, Typography, Button } from "@material-ui/core";
import { Formik, Form } from "formik";
// import MenuItem from "@material-ui/core/MenuItem";
// import InputLabel from "@material-ui/core/InputLabel";
// import FormControl from "@material-ui/core/FormControl";
// import CustomerContainer from "./CustomerContainer";

// import { Select } from "formik-material-ui";
import { Row, Col } from "react-bootstrap";

export const UserContext = React.createContext();
export const DataContext = React.createContext();

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
  // const userData = useSelector((state) => state.user.userName);

  // const [bn, setbn] = useState("");
  const [totalToken, settotalToken] = useState(0);
  const [yourToken, setYourtoken] = useState(0);
  // const [bank, setBank] = useState("");

  const [loading, setLoading] = useState(true);
  // var random = age;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchToken());
    const interval = setInterval(() => {
      dispatch(fetchToken());
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchCtoken());
    const interval = setInterval(() => {
      dispatch(fetchCtoken());
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 10);
  }, []);

  const allToken = useSelector((state) => state.token.allTokens);
  const allCtoken = useSelector((state) => state.customer.allCtokens);

  console.log("your token", allCtoken);

  var Ctoken = allCtoken.map((val) => {
    return val.userId === props.userDetail ? val : "";
    // if (val.userId === props.userDetail) {
    //   // var val = val.yourToken;
    //   // return val.yourToken;
    // }
    // return <></>;
  });
  var random = Ctoken.filter((o) => o.yourToken);
  var yToken = random.map((val) => {
    console.log(val.yourToken);
    // return <p>{val.yourToken}</p>;
    return val.yourToken;
  });

  console.log("dsjfkdk ssssssssssssssssssssssssssssssdfjk", props.userName);
  // var yToken = "ok";
  // var yToken = Ctoken.filter((f) => {
  //   return f != null;
  // });

  if (yToken[0] === undefined) {
    yToken = "user not found";
  } else yToken = yToken[0];
  console.log("finding.....", yToken);
  if (yToken !== "user not found") {
    var branch = Ctoken.filter((o) => o.bankName);
    var userName = Ctoken.filter((o) => o.username);
    var bN = branch.map((val) => {
      console.log(val.bankName);
      return <>{val.bankName}</>;
      // return val.yourToken;
    });
    var userData = userName.map((val) => {
      console.log(val.username);
      return <span>{val.username}</span>;
    });
  }

  if (yToken === "user not found") {
    var toDo = allToken.map((val, i) => {
      const dropdownOptions = [
        { key: "Select an option", value: "" },
        { key: "Baneshwor", value: "Baneshwor" },
      ];
      const initialValues = {
        // bank: "",
        // last: "",
        selectOption: "",
      };

      const validationSchema = Yup.object({
        // bank: Yup.string().required("Enter the name"),
        selectOption: Yup.string().required("Required"),
        // last: Yup.string(),
      });
      const onSubmit = (values, onSubmitProps) => {
        console.log("Form data vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv", values);
        onSubmitProps.resetForm();
        // console.log("Saved data", JSON.parse(JSON.stringify(values)));

        var totalToken = val.totalToken + 1;
        var yourToken = totalToken;
        settotalToken(totalToken);
        props.updateToken(totalToken);
        setYourtoken(yourToken);
        // var bank = age;
        // setBank(bank);
        props.addCtoken(
          yourToken,
          props.userDetail,
          values.selectOption,
          props.userName
        );
      };
      return (
        <>
          <Grid container spacing={3} alignItems="stretch" key={i}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Typography variant="h3" component="h2">
                  Welcome to the token system
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <Typography variant="h5" component="h2">
                  Total Token={val.totalToken}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <Typography variant="h5" component="h2">
                  Current Token={val.currentToken}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={onSubmit}
                >
                  {(formik) => {
                    return (
                      <Form>
                        <Row>
                          <Col></Col>
                          <FormikControl
                            control="select"
                            label="Select a topic"
                            name="selectOption"
                            options={dropdownOptions}
                          />
                          <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            disabled={!formik.isValid}
                          >
                            Submit
                          </Button>
                        </Row>
                      </Form>
                    );
                  }}
                </Formik>
              </Paper>
            </Grid>
          </Grid>
        </>
      );
    });
  } else {
    toDo = allToken.map((val, i) => (
      <>
        <Grid container spacing={3} alignItems="stretch" key={i}>
          <Grid item xs={12}>
            <Paper className={classes.paper} align>
              <Typography variant="h5" component="h2" align="right">
                Logged in as:{userData}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <Typography variant="h5" component="h2">
                Total Token={val.totalToken}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <Typography variant="h5" component="h2">
                Current Token={val.currentToken}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <Typography variant="h5" component="h2">
                Your Token={yToken}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <Typography variant="h5" component="h2">
                <UserContext.Provider value={yToken - val.currentToken}>
                  <TimeComponent />
                </UserContext.Provider>
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs wrap="wrap">
            <Paper className={classes.paper}>
              {/* <Typography variant="h5" component="h2">
                <span> Branch Name={bN} </span>
              </Typography> */}
              <Typography variant="h5" component="h2" wrap="nowrap">
                {" "}
                <span> Branch Name={bN} </span>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </>
    ));
  }
  return (
    <>
      {loading === false ? (
        <div className={classes.root}>
          <div>{toDo}</div>
        </div>
      ) : (
        <>
          <p> loading ....loading .... </p>
          {(totalToken, yourToken)}
        </>
      )}
    </>
  );
};
const mapStatetoProps = (state) => {
  return {
    totalToken: state.token.totalToken,
    userDetail: state.user.userDetails.id,
    userName: state.user.userName,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    updateToken: function (totalToken) {
      dispatch(updateToken(totalToken));
    },
    addCtoken: function (yourToken, userDetail, bankName, userName) {
      dispatch(addCtoken(yourToken, userDetail, bankName, userName));
    },
  };
};

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(GetCustomerContainer);
