import React from "react";
import { Switch, Route } from "react-router-dom";
import AddStoryView from "./Views/AddStoryView";
import HomePageView from "./Views/HomePageView";
import StoryReadView from "./Views/StoryReadView";
import ProfilePageView from "./Views/ProfilePageView";

export default (
  <Switch>
    <Route exact path="/" exact component={HomePageView} />
    <Route path="/new-story" component={AddStoryView} />
    <Route path="/story-view" component={StoryReadView} />
    <Route path="/@user" component={ProfilePageView} />
  </Switch>
);
