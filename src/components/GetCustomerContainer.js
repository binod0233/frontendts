import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { fetchToken, updateToken } from "../redux/action/tokenAction";
import { addCtoken, fetchCtoken } from "../redux/action/customerAction";
import TimeComponent from "./TimeComponent";
import { makeStyles } from "@material-ui/core/styles";
import * as Yup from "yup";
import FormikControl from "../formik/FormikControl";
import {
  Paper,
  Grid,
  Typography,
  Avatar,
  CssBaseline,
  Button,
  CardContent,
  Card,
} from "@material-ui/core";
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
  // root: {
  //   "& > *": {
  //     margin: theme.spacing(1),
  //     // width: "25ch",
  //   },
  // },
  // root: {
  //   flexGrow: 1,
  //   // display: "flex",
  //   "& > *": {
  //     margin: theme.spacing(3),
  //   },
  // },
  title: {
    fontSize: 14,
  },
  padd: {
    padding: theme.spacing(15),
    color: "inherit",
    backgroundColor: "#fafafa",
  },
  padd2: {
    padding: theme.spacing(15),
    color: "inherit",
    backgroundColor: "#fafafa",
  },
  padd3: {
    padding: theme.spacing(8),
    color: "inherit",
    backgroundColor: "#fafafa",
  },
  padd4: {
    padding: theme.spacing(2),
  },
  padd5: {
    padding: theme.spacing(10),
    maxHeight: "200%",
    color: "inherit",
    // paddingBlock: "30",

    backgroundColor: "#fafafa",
  },
  paper: {
    padding: theme.spacing(5),
    textAlign: "center",
    color: theme.palette.text.secondary,
    display: "flex",
  },
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
  paddingcard: {
    margin: theme.spacing(5),
    width: theme.spacing(20),
    height: theme.spacing(28),
  },
  paddingbuttom: {
    margin: theme.spacing(1),
  },
}));
const GetCustomerContainer = (props) => {
  const classes = useStyles();
  // const userData = useSelector((state) => state.user.userName);

  // const [bn, setbn] = useState("");
  const [totalToken, settotalToken] = useState(0);
  const [yourToken, setYourtoken] = useState(0);
  // const [bank, setBank] = useState("");

  // var [loading, setLoading] = useState(true);
  var loading = true;
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

  const isUserLoggedin = useSelector((state) => state.user.isLoggedIn);
  if (isUserLoggedin === true) loading = false;

  // useEffect(() => {

  //   // setTimeout(() => setLoading(false), 9000);
  // }, []);

  const allToken = useSelector((state) => state.token.allTokens);
  const allCtoken = useSelector((state) => state.customer.allCtokens);

  console.log("your token", isUserLoggedin);

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

  console.log("dsjfkdk ssssssssssssssssssssssssssssssdfjk", props.userDetail);
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
    var userData = userName.map((val, i) => {
      console.log("useeeeeeeeeeeeeeeee name data:", val.username);
      return <span key={i}>{val.username}</span>;
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
          <CssBaseline />
          <Paper elevation={3} className={classes.padd5}>
            <Grid
              container
              direction="column"
              justify="space-around"
              alignItems="center"
              key={i}
              className={classes.padd4}
            >
              <Typography variant="h3" component="h2">
                Welcome to Online Token System
              </Typography>

              <Grid
                container
                direction="row"
                justify="center"
                alignItems="flex-end"
                className={classes.padd4}
              >
                {/* <Paper className={classes.paper}> */}
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={onSubmit}
                >
                  {(formik) => {
                    return (
                      <Form>
                        <Row>
                          <Col>
                            <FormikControl
                              control="select"
                              label="Select a branch"
                              name="selectOption"
                              options={dropdownOptions}
                            />
                          </Col>
                          <Col>
                            <Button
                              variant="contained"
                              color="inherit"
                              type="submit"
                              disabled={!formik.isValid}
                            >
                              Click to book
                            </Button>
                          </Col>
                        </Row>
                      </Form>
                    );
                  }}
                </Formik>
                {/* </Paper> */}
              </Grid>

              <Typography
                variant="h5"
                component="h2"
                style={{ textIndent: "-0.5em" }}
                className={classes.padd4}
              >
                Baneshwor Branch
              </Typography>
              <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
              >
                <Grid
                  direction="column"
                  justify="space-around"
                  alignItems="center"
                >
                  <Typography
                    variant="h5"
                    component="h2"
                    style={{ textIndent: "-0.5em" }}
                  >
                    Total Token
                  </Typography>
                  <Avatar
                    style={{ backgroundColor: "#d4d4ff", color: "#2a2a33" }}
                    className={classes.large}
                  >
                    {val.totalToken}
                  </Avatar>
                </Grid>

                <Grid
                  direction="column"
                  justify="space-around"
                  alignItems="center"
                >
                  <Typography
                    variant="h5"
                    component="h2"
                    style={{ textIndent: "-1.5em" }}
                  >
                    Current Token
                  </Typography>
                  <Avatar
                    style={{
                      backgroundColor: "#d4d4ff",
                      color: "inherit",
                    }}
                    className={classes.large}
                  >
                    {val.currentToken}
                  </Avatar>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </>
      );
    });
  } else {
    toDo = allToken.map((val, i) => (
      <>
        <CssBaseline />
        <Paper className={classes.padd5}>
          <Typography variant="h3" component="h2">
            Online Token System
          </Typography>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="flex-start"
          >
            <Typography variant="h5" component="h2" wrap="nowrap">
              {" "}
              <span> Branch : {bN} </span>
            </Typography>
            <Typography variant="h5" component="h2" align="right">
              Logged in as : {userData}
            </Typography>
          </Grid>

          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
          >
            <Grid direction="column" justify="center" alignItems="flex-start">
              <Typography variant="h5" component="h2">
                Total Token {val.totalToken}
              </Typography>

              <Typography variant="h5" component="h2">
                Current Token {val.currentToken}
              </Typography>
              <Typography variant="h5" component="h2">
                <UserContext.Provider value={yToken - val.currentToken}>
                  <TimeComponent />
                </UserContext.Provider>
              </Typography>
            </Grid>

            <Card
              style={{ backgroundColor: "#ededed" }}
              className={classes.paddingcard}
            >
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
              >
                <CardContent>
                  <Typography variant="h6" component="h6">
                    Your Token no. is
                  </Typography>
                </CardContent>
                <Avatar
                  // align="center"
                  style={{ backgroundColor: "#d4d4ff", color: "#2a2a33" }}
                  className={classes.large}
                >
                  {yToken}
                </Avatar>
              </Grid>
            </Card>
          </Grid>
        </Paper>
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
          <p> loading ....loading .... </p>

          <p> loading ....loading .... </p>

          <p> loading ....loading .... </p>

          <p> loading ....loading .... </p>

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
