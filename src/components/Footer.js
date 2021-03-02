import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit">Online Token System</Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    // marginTop: theme.spacing(8),
    padding: theme.spacing(2, 0),
    // position: "sticky",
    // position: "fixed",
    left: "0",
    bottom: "0",
    width: " 100%",
  },
}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer} style={{ backgroundColor: "#dee1e6" }}>
      <Copyright />
    </footer>
  );
}
