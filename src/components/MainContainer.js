import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import GetTokenContainer from "./GetTokenContainer";
import SignupContainer from "./SignupContainer";
import { useSelector } from "react-redux";
import LoginContainer from "./LoginContainer";
import Header from "./Header";
// import GetCustomerContainer from "./GetCustomerContainer";
// import TimeComponent from "./TimeComponent";
import CustomerContainer from "./CustomerContainer";
// import TestContainer from "./TestContainer";
// import Footer from "./Footer";
import HomeContainer from "./HomeContainer";
// import { CssBaseline } from "@material-ui/core";
import FooterContainer from "./FooterContainer";

const MainContainer = (props) => {
  const isUserLoggedin = useSelector((state) => state.user.isLoggedIn);
  const Role = useSelector((state) => state.user.userDetails.id);
  // var container = <TestContainer />;
  // let Role = "";
  // if (userRole === "customer") {
  // const Role = "customers";
  // }
  console.log("sssssssssssssssssssssssssssss", Role);
  if (isUserLoggedin === false) {
    var callContainer = (
      <>
        <Header />
        <Route exact path="/" component={HomeContainer} />
        <Route path="/login" component={LoginContainer} />

        <Route path="/signup" component={SignupContainer} />
        {/* <CssBaseline /> */}
        <FooterContainer />

        {/* <Footer /> */}
      </>
    );
  } else {
    if (Role === "5fa82e594f4d4100173f9f82") {
      callContainer = (
        <>
          <Header />
          {/* <TimeComponent /> */}
          <Route exact path="/" component={GetTokenContainer} />
          <Route path="/login" component={GetTokenContainer} />
          <FooterContainer />

          {/* <Footer /> */}
        </>
      );
    } else {
      callContainer = (
        <>
          {/* <CssBaseline/> */}
          <Header />
          {/* <TimeComponent /> */}
          <Route exact path="/" component={CustomerContainer} />
          <Route path="/login" component={CustomerContainer} />
          {/* <CssBaseline /> */}
          <FooterContainer />

          {/* <Footer /> */}
        </>
      );
    }
  }

  return <Router>{callContainer}</Router>;
};

export default MainContainer;
