import React from "react";
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
// import { useSelector } from 'react-redux';
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

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
    padding: theme.spacing(8),
    // backgroundImage: `url(${"https://miro.medium.com/max/11344/1*32h8ts3A-7XNr6A4Js87ng.jpeg"})`,
    color: "inherit",
    backgroundColor: "#9effa6",
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

  return (
    <>
      <CssBaseline />
      <Grid item direction="column" justify="center" alignItems="flex-start">
        <Paper elevation={3} className={classes.padd}>
          <Row>
            <Col>
              <Typography variant="h2" component="h2" nowrap align="left">
                TMS
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
      {/* <Carousel /> */}
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
            Get, yourself a tokens <br />
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
                  First{" "}
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
      </Paper>
      <Paper elevation={3} className={classes.padd5}>
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
    </>
  );
};

export default HomeContainer;
