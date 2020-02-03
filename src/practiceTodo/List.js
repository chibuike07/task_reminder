import React from "react";

const THead = () => {
  return (
    <thead>
      <tr styles={{ display: "flex", justifyItems: "space-between" }}>
        <td>activities</td>
        <td>time</td>
      </tr>
    </thead>
  );
};
// const handleRemoveItem = props.removeItem

const Lists = props => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        width: "100%"
      }}
    >
      <table
        style={{
          width: "50%",
          textAlign: "center",
          border: "2px solid red"
        }}
      >
        <THead />
        <tbody style={{ textAlign: "center" }}>
          {props.todoItems.map((v, i) => {
            return (
              <tr key={i}>
                <td>{v.substr(0).split("/")[0]}</td>
                <td>{v.substr(1).split("/")[1]}</td>
                <td>
                  <button onClick={() => props.removeItem(v)}>remove</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Lists;
