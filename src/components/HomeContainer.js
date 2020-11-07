import React from "react";
import { Paper, Grid } from "@material-ui/core";
// import { Link, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  // root: {
  //   "& > *": {
  //     margin: theme.spacing(1),
  //     // width: "25ch",
  //   },
  // },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
const HomeContainer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid item xs elevation={2}>
        <Paper className={classes.paper}>Home container </Paper>
      </Grid>
    </div>
  );
};

export default HomeContainer;
