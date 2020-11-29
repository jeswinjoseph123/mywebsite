import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../Components/Dashboard/Navbar";
import Home2 from "../Components/Dashboard/Pages/Home2";
import Products from "../Components/Dashboard/Pages/Products";
import Reports from "../Components/Dashboard/Pages/Reports";

const Dashboard = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/home2" component={Home2} exact />
          <Route path="/products" component={Products} />
          <Route path="/reports" component={Reports} />
        </Switch>
      </Router>
    </>
  );
};

export default Dashboard;
