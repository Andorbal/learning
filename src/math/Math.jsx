import React from "react";
import {Link, Route, Switch} from "react-router-dom"
import Addition from "./flashCards/Addition";

const Math = () => 
  <Switch>
    <Route path="/math/flash/addition">
      <Addition />
    </Route>
    <Route path="/math">
      <Link to="math/flash/addition">Addition flash cards</Link>
    </Route>
  </Switch>

export default Math;
