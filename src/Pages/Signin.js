import React from "react";
import ScrollToTop from "../Components/ScrollTotop";
import SignIn from "../Components/Signin";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";

const SigninPage = () => {
  return <>

  <Router>
  <ScrollToTop />
  <SignIn/>

  <Switch>
  <Route path="/siginin" component={SignIn} exact />
  <Route path="/dashboard" exact component={Dashboard}  />
  </Switch>
  
  </Router>
  
  </>;
};

export default SigninPage;
