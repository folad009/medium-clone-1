import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import { HashRouter } from "react-router-dom";
import * as firebase from 'firebase';
firebase.initializeApp(config);
import { shallow } from "enzyme";
import { TopicHeaderBar } from "./Components/HeaderComponents/TopicHeaderBar";
var config = {
  apiKey: "AIzaSyD5BMrvAXkMRA1NpaqPiTHtdhV4qo4gDP4",
  authDomain: "medium-c.firebaseapp.com",
  databaseURL: "https://medium-c.firebaseio.com",
  projectId: "medium-c",
  storageBucket: "medium-c.appspot.com",
  messagingSenderId: "682649004694"
};

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
