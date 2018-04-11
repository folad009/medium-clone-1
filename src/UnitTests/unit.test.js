import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { shallow } from "enzyme";
import { TopicHeaderBar } from "../Components/HeaderComponents/TopicHeaderBar";

test("TopicHeaderBar with twelve topics", () => {
  const headerBar = shallow(<TopicHeaderBar />);
  console.log(headerBar._self.props.categories.length);
  expect(headerBar._self.propcs.categories.length).toBe(11);
});
