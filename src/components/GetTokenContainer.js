import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { Paper, Grid, Typography, Avatar } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { fetchToken, updateToken } from "../redux/action/tokenAction";
// import { Form } from "formik";
import { fetchCtoken } from "../redux/action/customerAction";
import { makeStyles } from "@material-ui/core/styles";

import { addCtoken } from "../redux/action/customerAction";
// import { setCurrentUser } from "../redux/action/userAction";
const useStyles = makeStyles((theme) => ({
  // root: {
  //   "& > *": {
  //     margin: theme.spacing(1),
  //     // width: "25ch",
  //   },
  // },
  root: {
    flexGrow: 1,
    // display: "flex",
    "& > *": {
      margin: theme.spacing(3),
    },
  },
  title: {
    fontSize: 14,
  },
  padd: {
    padding: theme.spacing(15),
    // backgroundImage: `url(${"https://miro.medium.com/max/11344/1*32h8ts3A-7XNr6A4Js87ng.jpeg"})`,
    color: "inherit",
    backgroundColor: "#8288fa",
  },
  padd2: {
    padding: theme.spacing(15),
    // backgroundImage: `url(${"https://miro.medium.com/max/11344/1*32h8ts3A-7XNr6A4Js87ng.jpeg"})`,
    color: "inherit",
    backgroundColor: "#fc9f42",
  },
  padd3: {
    padding: theme.spacing(8),
    // backgroundImage: `url(${"https://miro.medium.com/max/11344/1*32h8ts3A-7XNr6A4Js87ng.jpeg"})`,
    color: "inherit",
    backgroundColor: "#8288fa",
  },
  padd4: {
    padding: theme.spacing(8),
    // backgroundImage: `url(${"https://miro.medium.com/max/11344/1*32h8ts3A-7XNr6A4Js87ng.jpeg"})`,
    color: "inherit",
    backgroundColor: "#ffeb7a",
  },
  padd5: {
    padding: theme.spacing(3),
    // backgroundImage: `url(${"https://miro.medium.com/max/11344/1*32h8ts3A-7XNr6A4Js87ng.jpeg"})`,
    color: "inherit",
    backgroundColor: "#9effa6",
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
        if (Number("69") === Number(value.yourToken))
          console.log(value.username);
        return Number(value.yourToken) === Number(val.currentToken) ? (
          <div key={value._id}>
            <Typography
              paragraph
              align="justify"
              style={{ textIndent: "0.1em" }}
            >
              Currently being procedded
            </Typography>
            <Avatar
              style={{ backgroundColor: "#d4d4ff", color: "#2a2a33" }}
              className={classes.large}
            >
              {val.currentToken}
            </Avatar>
            <Typography
              paragraph
              align="justify"
              style={{ textIndent: "0.1em" }}
            >
              bankname={value.bankName}
            </Typography>
            <Typography
              paragraph
              align="justify"
              style={{ textIndent: "0.1em" }}
            >
              username={value.username}
            </Typography>
          </div>
        ) : (
          <>{currentToken}</>
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
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              {Ctoken}

              <button
                onClick={() => {
                  var currentToken = val.currentToken + 1;

                  setCurrenttoken(currentToken);
                  props.updateToken(val.totalToken, currentToken);
                }}
              >
                Inc. Current Token
              </button>
            </Grid>
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
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(GetTokenContainer);
