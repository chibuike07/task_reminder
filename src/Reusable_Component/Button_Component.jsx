import React from "react";

const Button = ({ type, name, text, click }) => (
  <div>
    <button type={type ? type : null} name={name ? name : ""} onClick={click}>
      {text ? text : "submit"}
    </button>
  </div>
);

export default Button;
