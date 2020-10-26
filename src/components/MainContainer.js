import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import GetTokenContainer from "./GetTokenContainer";
import SignupContainer from "./SignupContainer";
import { useSelector } from "react-redux";
import LoginContainer from "./LoginContainer";
import Header from "./Header";
import GetCustomerContainer from "./GetCustomerContainer";

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
        <Route exact path="/" component={GetCustomerContainer} />
      </>
    );
  }

  return <Router>{callContainer}</Router>;
};

export default MainContainer;
