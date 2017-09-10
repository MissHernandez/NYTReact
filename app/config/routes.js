
import React from "react";

import router, {Route, Router, hashHistory, IndexRoute} from "react-router";

import Main from "../components/Main";
import Search from "../components/Search";
import Saved from "../components/Saved";

export default (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>

      <Route path="/search" component={Search} />
      <Route path="/save" component={Saved} />

      <IndexRoute component={Search} />

    </Route>
  </Router>

);