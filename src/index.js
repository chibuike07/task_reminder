import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
// import Parent from "./Components/Parent";
import Forms from "./practiceTodo/Todo";
import * as serviceWorker from "./serviceWorker";
// import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

// const expense = () => (
//   <div>
//     <h2>this is from me</h2>
//   </div>
// );
// const doesNotExist = () => (
//   <div>
//     <h2>404!</h2>
//     <Link to="/home">home</Link>
//   </div>
// );
// const routes = (
//   <BrowserRouter>
//     <Switch>
//       <Route path="/" component={Parent} exact={true} />
//       <Route path="/Home" component={Parent} />
//       <Route path="/Contact" component={expense} />
//       <Route component={doesNotExist} />
//     </Switch>
//   </BrowserRouter>
// );
ReactDOM.render(<Forms />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
