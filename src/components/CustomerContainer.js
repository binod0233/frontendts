import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Box, CssBaseline } from "@material-ui/core";
import GetCustomerContainer from "./GetCustomerContainer";

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
const CustomerContainer = () => {
  const classes = useStyles();
  return (
    <>
      {/* <Button /> */}
      <CssBaseline />

      <GetCustomerContainer />
    </>
  );
};

export default CustomerContainer;
