import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import GetTokenContainer from "./GetTokenContainer";
import SignupContainer from "./SignupContainer";
import { useSelector } from "react-redux";
import LoginContainer from "./LoginContainer";
import Header from "./Header";
import GetCustomerContainer from "./GetCustomerContainer";
import TimeComponent from "./TimeComponent";
import CustomerContainer from "./CustomerContainer";

const MainContainer = (props) => {
  const isUserLoggedin = useSelector((state) => state.user.isLoggedIn);
  if (isUserLoggedin === false) {
    var callContainer = (
      <>
        <Route exact path="/" component={LoginContainer} />
        {/* <Route exact path="/" component={GetTokenContainer} /> */}

        <Route path="/signup" component={SignupContainer} />
      </>
    );
  } else {
    callContainer = (
      <>
        <Header />
        {/* <TimeComponent /> */}
        <Route exact path="/" component={CustomerContainer} />
      </>
    );
  }

  return <Router>{callContainer}</Router>;
};

export default MainContainer;
