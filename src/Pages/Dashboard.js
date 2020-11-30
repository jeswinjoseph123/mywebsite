import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "../Components/Dashboard/Sidebar";
import Home2 from "../Components/Dashboard/Pages/Home2";
import Products from "../Components/Dashboard/Pages/Products";
import Reports from "../Components/Dashboard/Pages/Reports";

const Dashboard = () => {
  return (
    <>
      <Router>
        <Sidebar />
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
