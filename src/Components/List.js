import React from "react";
const Lists = props => {
  // console.log(props.todoitem);
  return (
    <div>
      <li>
        {props.todoitem.task} {props.todoitem.time}
        <button onClick={() => props.removeItem(props.todoitem)}>X</button>
      </li>
    </div>
  );
};

export default Lists;
