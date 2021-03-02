import React from "react";
import { Paper, Grid, Typography, Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import MailIcon from "@material-ui/icons/Mail";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "./Footer";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& > *": {
      margin: theme.spacing(3),
    },
  },

  padd5: {
    padding: theme.spacing(3),
    color: "inherit",
    backgroundColor: "#dee1e6",
  },

  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));
const FooterContainer = () => {
  const classes = useStyles();

  return (
    <div>
      <Paper elevation={3} className={classes.padd5}>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <Grid direction="row" justify="center" alignItems="center">
            <ListItem>
              <Avatar alt="C" className={classes.large} src="./tslogo.png" />

              <Typography
                // align="left"
                variant="h5"
                component="h4"
                // style={{ textIndent: "-1em" }}
              >
                Online Token
                <br />
                <Typography
                  // align="left"
                  variant="h5"
                  component="h4"
                  // style={{ textIndent: "-1em" }}
                >
                  System
                </Typography>
              </Typography>
            </ListItem>
          </Grid>

          <Grid direction="column" justify="space-between" alignItems="center">
            <Typography
              // align="left"
              variant="h5"
              component="h6"
              // style={{ textIndent: "-8em" }}
            >
              COMPANY
            </Typography>
            <Typography
              // align="left"
              subtitle1="h2"
              style={{ textIndent: "0.5em" }}
            >
              <Link style={{ color: "black", textDecoration: "none" }}>
                {" "}
                About us{" "}
              </Link>
            </Typography>
            <Typography
              // align="left"
              subtitle1="h2"
              // style={{ textIndent: "0.5em" }}
            >
              <Link style={{ color: "black", textDecoration: "none" }}>
                {" "}
                Contact us{" "}
              </Link>
            </Typography>
          </Grid>
          <Grid direction="column" justify="space-between" alignItems="center">
            <Typography
              variant="h5"
              component="h6"
              // style={{ textIndent: "-8em" }}
            >
              CONTACT INFO{" "}
            </Typography>
            <ListItem>
              <MailIcon />
              <Link
                style={{
                  color: "black",
                  textDecoration: "none",
                  textIndent: "0.3em",
                }}
              >
                support@onlinetokensystem.np
              </Link>
            </ListItem>
          </Grid>
        </Grid>
      </Paper>
      <Footer />
    </div>
  );
};

export default FooterContainer;

// style={{ textIndent: "-8em" }}
