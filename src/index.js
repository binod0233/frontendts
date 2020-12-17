import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// import { Box, Container, CssBaseline, Grid } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./material-ui/theme";
// import { container } from "markdown-it-container";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      {/* <CssBaseline /> */}
      {/* <Container> */}
      <App />
      {/* </Container> */}
    </React.StrictMode>
  </ThemeProvider>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
