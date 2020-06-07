import React from "react";
import image from "../logo.svg";
import { BrowserRouter, Link } from "react-router-dom";
class LandingPage extends React.Component {
  state = {
    nextPage: false
  };
  //
  Len = 0;
  handleUrl = () => {
    let arr = ["/", "/categories", "/form"];
    this.Len = this.Len + 1;
    this.Len = this.Len % arr.length;
    this.props.history.push(arr[this.Len]);
  };
  render() {
    console.log(this.props);
    return (
      <div
        style={{
          width: "100%"
        }}
      >
        <header
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
            Height: "15vh"
          }}
        >
          <h1>
            welcome <br /> to the my <br /> todoApp
          </h1>
          <p>Add, Remove, clear your todo data</p>
        </header>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <img
            src={image}
            alt=""
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "max-content"
            }}
          />
        </div>
        <BrowserRouter>
          <div>
            <button onClick={this.handleUrl}>click</button>
          </div>
        </BrowserRouter>
        <Link to="/">come</Link>
      </div>
    );
  }
}

export default LandingPage;
