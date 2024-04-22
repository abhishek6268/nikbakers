// main node js file

// importing methods and modules
import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

//  main css file
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store/store";

// creating an target element that targets the ropot div of html file (index.html)
const target = document.getElementById("root");

// creating an root and linking up to the last root node which is root div in this case
const root = ReactDom.createRoot(target);

//  rendering the component inside the root element
root.render(
  //  setting up the react routing
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
