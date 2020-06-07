import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import RoutesPages from "./Components/router";
import Form from "./Components/Todo";
import * as serviceWorker from "./serviceWorker";

// let todoItems = [
//   {
//     task: "going to classes",
//     time: "12:00"
//   },
//   {
//     task: "cleaning up",
//     time: "11:00"
//   }
// ];

ReactDOM.render(<Form />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
