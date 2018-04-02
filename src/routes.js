import React from "react";
import { Switch, Route } from "react-router-dom";
import AddStoryView from "./Views/AddStoryView";
import HomePageView from "./Views/HomePageView";

export default (
  <Switch>
    <Route path="/" exact component={HomePageView} />
    <Route path="/new-story" component={AddStoryView} />
  </Switch>
);
