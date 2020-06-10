import React from "react";
const Lists = ({ todoitem, removeItem }) => {
  // console.log(props.todoitem);
  return (
    <div>
      <li>
        {todoitem.days} {todoitem.task} {todoitem.timeTaker}
        <button onClick={() => removeItem(todoitem)}>X</button>
      </li>
    </div>
  );
};

export default Lists;
