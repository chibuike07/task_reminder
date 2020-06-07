import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandPage from "../practiceTodo/Parent";
import Forms from "../practiceTodo/Todo";
import Categories from "../practiceTodo/SelectTodo";
const NotFound = () => (
  <div>
    style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    <h2>404!</h2>
    {/* <Link to="/home">home</Link> */}
  </div>
);

class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={LandPage} exact={true} />
          {/* <Route path="/home" component={LandPage} exact={true} /> */}
          <Route path="/categories" component={Categories} />
          <Route path="/form" component={Forms} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default Routes;
