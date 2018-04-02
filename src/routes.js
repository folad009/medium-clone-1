import React from "react";
import { Switch, Route } from "react-router-dom";
import AddStoryView from "./Views/AddStoryView";

export default (
  <Switch>
    <Route path="/" exact component={AddStoryView} />
  </Switch>
);
