import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routes } from "../Router/routes";
import {
  getCourseRequest,
  getUserRequest,
  setCurrentUser,
} from "../Store/actions/index";

class App extends Component {
  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("user"))
      ? JSON.parse(localStorage.getItem("user"))
      : {};
    this.props.setCurrentUser(user);

    this.props.getCourseRequest();

    this.props.getUserRequest();
  }

  render() {
    return <Router>{this.showRoutes(routes)}</Router>;
  }

  /** ----------------------------------------
    * Function: Mapping route
    * Component: App
  ----------------------------------------**/
  showRoutes = (routes) => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    console.log(result);
    return <Switch>{result}</Switch>;
  };
}

export default connect(null, {
  getCourseRequest,
  getUserRequest,
  setCurrentUser,
})(App);
