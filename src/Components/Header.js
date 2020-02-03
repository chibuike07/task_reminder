import React from "react";
import "./Web.css";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div>
        <h2>React Toturial</h2>
      </div>
      <div>
        <Navs />
      </div>
    </header>
  );
};
const Navs = () => {
  const listArr = ["home", "contact", "about", "service"];
  return (
    <div className="navDiv">
      <ul>
        {listArr.map((listValues, index) => (
          <li key={index}>
            <NavLink to={listValues}>{listValues}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Header;
