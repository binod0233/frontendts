import React, { useEffect } from "react";
import {
  Paper,
  Grid,
  Typography,
  Avatar,
  CssBaseline,
  Button,
  CardContent,
  Card,
  CardActions,
} from "@material-ui/core";

// import { Link, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { fetchToken } from "../redux/action/tokenAction";

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
    color: "inherit",
    backgroundColor: "#faffff",
  },
  padd2: {
    padding: theme.spacing(15),
    color: "inherit",
    backgroundColor: "#dee1e6",
  },
  padd4: {
    padding: theme.spacing(8),
    color: "inherit",
    backgroundColor: "#faffff",
  },
  padd3: {
    padding: theme.spacing(8),
    color: "inherit",
    backgroundColor: "#dee1e6",
  },
  padd5: {
    padding: theme.spacing(8),
    color: "inherit",
    backgroundColor: "#dee1e6",
  },
  paper: {
    padding: theme.spacing(5),
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
const HomeContainer = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchToken());
    const interval = setInterval(() => {
      dispatch(fetchToken());
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch]);
  const allToken = useSelector((state) => state.token.allTokens);
  console.log(allToken);

  return (
    <>
      <CssBaseline />
      <Grid item direction="column" justify="center" alignItems="flex-start">
        <Paper elevation={3} className={classes.padd}>
          <Row>
            <Col>
              <Typography variant="h2" component="h2" nowrap align="left">
                OTS
              </Typography>{" "}
            </Col>
            <Col>
              <Typography
                variant="h4"
                component="h2"
                align="left"
                style={{ textIndent: "0.1em" }}
              >
                Take a token Online.
              </Typography>{" "}
              <Typography
                variant="body1"
                align="left"
                style={{ textIndent: "0.5em" }}
              >
                Take token virtually from anywhere at
                anytime.Fast,convenient,save time.
              </Typography>{" "}
            </Col>
            <Col>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
              >
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  className={classes.paddingbuttom}
                >
                  Know more{" "}
                </Button>
              </Grid>
            </Col>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              className={classes.paddingbuttom}
            >
              <Link
                to="/login"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Log In
              </Link>
            </Button>
          </Row>
        </Paper>
      </Grid>
      <Paper elevation={3} className={classes.padd2}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Typography
            align="center"
            variant="h3"
            color="textSecondary"
            gutterBottom
          >
            Get yourself a token <br />
            in a few clicks
          </Typography>

          <Card
            style={{ backgroundColor: "#ffb4a3" }}
            className={classes.paddingcard}
          >
            <Grid
              container
              direction="column"
              justify="space-between"
              alignItems="center"
            >
              <CardContent>
                <Avatar
                  style={{ backgroundColor: "#d4d4ff", color: "#2a2a33" }}
                  className={classes.large}
                >
                  Step 1
                </Avatar>
              </CardContent>
              <CardActions>
                <p>
                  <Button size="small">
                    {" "}
                    <Link to="/signup" style={{ color: "inherit" }}>
                      Register
                    </Link>
                  </Button>
                </p>
              </CardActions>
            </Grid>
          </Card>

          <Card
            style={{ backgroundColor: "#d1abc8" }}
            className={classes.paddingcard}
          >
            <Grid
              container
              direction="column"
              justify="space-between"
              alignItems="center"
            >
              <CardContent>
                <Avatar
                  style={{ backgroundColor: "#d4d4ff", color: "#2a2a33" }}
                  className={classes.large}
                >
                  Step 2
                </Avatar>
              </CardContent>
              <CardActions>
                <p>
                  <Button size="small">
                    {" "}
                    <Link to="/login" style={{ color: "inherit" }}>
                      Sign IN
                    </Link>
                  </Button>
                </p>
              </CardActions>
            </Grid>
          </Card>
          <Card
            style={{ backgroundColor: "#abd1be" }}
            className={classes.paddingcard}
          >
            <Grid
              container
              direction="column"
              justify="space-between"
              alignItems="center"
            >
              <CardContent>
                <Avatar
                  style={{ backgroundColor: "#d4d4ff", color: "#2a2a33" }}
                  className={classes.large}
                >
                  Step 3
                </Avatar>
              </CardContent>
              <CardActions>
                <p>
                  Choose your bank <br />
                  and take token
                </p>
              </CardActions>
            </Grid>
          </Card>
        </Grid>
      </Paper>

      <Paper elevation={3} className={classes.padd4}>
        <Grid direction="column" justify="space-between" alignItems="center">
          <Typography align="left" variant="h5" component="h4">
            Features
          </Typography>
          <Typography paragraph align="justify" style={{ textIndent: "1em" }}>
            {"->"} Monitor tokens in banks without registering.
          </Typography>
        </Grid>
        <Typography variant="h5" component="h4">
          Branch Name : Baneshwor
        </Typography>

        {allToken.map((val, i) => (
          <>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="flex-end"
            >
              <Card
                style={{ backgroundColor: "#efffd6" }}
                className={classes.paddingcard}
              >
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                >
                  {" "}
                  <CardContent>
                    <Avatar
                      style={{ backgroundColor: "#fff2fe", color: "#2a2a33" }}
                      className={classes.large}
                    >
                      {val.totalToken}
                    </Avatar>
                  </CardContent>
                  <CardActions>
                    <h3>Total token</h3>
                  </CardActions>{" "}
                </Grid>
              </Card>

              <Card
                style={{ backgroundColor: "#ffe8fc" }}
                className={classes.paddingcard}
              >
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                >
                  {" "}
                  <CardContent>
                    <Avatar
                      style={{ backgroundColor: "#d4d4ff", color: "#2a2a33" }}
                      className={classes.large}
                    >
                      {val.currentToken}
                    </Avatar>
                  </CardContent>
                  <CardActions>
                    <h3>Current token</h3>
                  </CardActions>{" "}
                </Grid>
              </Card>
            </Grid>
          </>
        ))}

        <Grid
          container
          direction="column"
          justify="flex-end"
          alignItems="flex-end"
        >
          <Typography
            align="left"
            variant="h5"
            component="h4"
            // style={{ textIndent: "-8em" }}
          >
            Advice{" "}
          </Typography>
          <Typography paragraph align="justify" style={{ textIndent: "0.1em" }}>
            {"->"}Be 5-10 min early.
          </Typography>
        </Grid>
      </Paper>
      {/* <Paper elevation={3} className={classes.padd5}>
        <Grid
          container
          direction="column"
          justify="flex-end"
          alignItems="flex-end"
        >
          <Typography
            align="left"
            variant="h5"
            component="h4"
            // style={{ textIndent: "-8em" }}
          >
            Advice{" "}
          </Typography>
          <Typography paragraph align="justify" style={{ textIndent: "0.1em" }}>
            {"->"}Be 5-10 min early.
          </Typography>
        </Grid>
      </Paper> */}
    </>
  );
};

export default HomeContainer;
