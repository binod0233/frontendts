import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { Paper, Grid, Typography, Avatar, Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { fetchToken, updateToken } from "../redux/action/tokenAction";
import { fetchCtoken } from "../redux/action/customerAction";
import { makeStyles } from "@material-ui/core/styles";

import { addCtoken, deleteCtoken } from "../redux/action/customerAction";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& > *": {
      margin: theme.spacing(3),
    },
  },
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
    backgroundColor: "#d6d4d4",
  },
  padd3: {
    padding: theme.spacing(8),
    color: "inherit",
    backgroundColor: "#fafafa",
  },
  padd4: {
    padding: theme.spacing(1.5),
  },
  padd5: {
    padding: theme.spacing(5),
    color: "inherit",
    backgroundColor: "#fafafa",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    display: "flex",
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  paddingcard: {
    margin: theme.spacing(1),
    width: theme.spacing(20),
    height: theme.spacing(28),
  },
  paddingbuttom: {
    margin: theme.spacing(1),
  },
}));

const GetTokenContainer = (props) => {
  // const [currentToken, setCurrenttoken] = useState(0);
  const classes = useStyles();

  const [currentToken, setCurrenttoken] = useState(0);

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
  const allToken = useSelector((state) => state.token.allTokens);
  const allCtoken = useSelector((state) => state.customer.allCtokens);

  console.log("all token", allCtoken);
  // console.log("your token", allCtoken.yourToken);
  var doo = "ok";
  if (doo === "ok") {
    var toDo = allToken.map((val, i) => {
      var Ctoken = allCtoken.map((value, i) => {
        console.log(
          `value=${value} val=${currentToken} current token=${val.currentToken}and your token=${value.yourToken}`
        );

        console.log(`your token =${value.id}`);
        if (Number("69") === Number(value.yourToken))
          console.log(value.username);
        return Number(value.yourToken) === Number(val.currentToken) ? (
          <div key={value._id}>
            <Grid
              container
              direction="row"
              justify="space-around"
              alignItems="center"
            >
              <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                  var currentToken = val.currentToken + 1;

                  setCurrenttoken(currentToken);
                  props.updateToken(val.totalToken, currentToken);
                  props.deleteCtoken(value.id);
                }}
                disabled={val.currentToken >= val.totalToken}
              >
                Inc. Current Token
              </Button>
              <div>
                <Typography
                  variant="h5"
                  component="h2"
                  align="justify"
                  style={{ textIndent: "-4em" }}
                  className={classes.padd4}
                >
                  Currently being proceded
                </Typography>
                <Avatar
                  style={{ backgroundColor: "#d4d4ff", color: "#2a2a33" }}
                  className={classes.large}
                >
                  {val.currentToken}
                </Avatar>
                <div className={classes.padd4}>
                  <Typography
                    variant="h6"
                    component="h2"
                    align="justify"
                    style={{ textIndent: "-4em" }}
                  >
                    Bank Name = {value.bankName}
                  </Typography>
                  <Typography
                    variant="h6"
                    component="h2"
                    align="justify"
                    style={{ textIndent: "-4em" }}
                  >
                    Username = {value.username}
                  </Typography>
                </div>
              </div>
            </Grid>
          </div>
        ) : (
          <>
            {" "}
            <Button
              onClick={() => {
                var currentToken = val.currentToken + 1;

                setCurrenttoken(currentToken);
                props.updateToken(val.totalToken, currentToken);
                // props.deleteCtoken(value.id);
              }}
              hidden={val.currentToken >= 0}
            >
              Inc. Current Token next
            </Button>
          </>
        );
      });
      return (
        <>
          <Paper elevation={3} className={classes.padd5}>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item xs={6}>
                <Typography variant="h5" component="h2">
                  Total Token={val.totalToken}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h5" component="h2">
                  Current Token={val.currentToken}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
          <Paper elevation={3} className={classes.padd4}>
            {Ctoken}

            {/* <button
                onClick={() => {
                  var currentToken = val.currentToken + 1;

                  setCurrenttoken(currentToken);
                  props.updateToken(val.totalToken, currentToken);
                  // props.deleteCtoken(value.id);
                }}
                hidden={val.currentToken >= val.totalToken}
              >
                Inc. Current Token
              </button> */}
          </Paper>
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
    deleteCtoken: function (id) {
      dispatch(deleteCtoken(id));
    },
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(GetTokenContainer);
