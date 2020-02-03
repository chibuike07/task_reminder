import React from "react";

const Footer = () => {
  const styles = {
    backgroundColor: "indigo",
    color: "#fff",
    width: 100 + "%",
    height: 20 + "vh",
    marginTop: 4 + "%",
    fontSize: "larger",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };
  return (
    <div style={styles}>
      <p>copyright 2020 @ Hobbyluv React Page</p>
    </div>
  );
};
export default Footer;
