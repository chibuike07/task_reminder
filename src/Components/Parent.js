import React, { Component } from "react";
import Header from "./Header";
import Article from "./Container";
import Footer from "./Footer";
import "./Web.css";
class Parent extends Component {
  render() {
    return (
      <div style={{ height: 100 + "vh" }}>
        <Header />
        <Article />
        <Footer />
      </div>
    );
  }
}
export default Parent;
