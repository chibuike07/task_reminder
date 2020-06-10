import React from "react";

const Input = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  list,
  maxLength
}) => (
  <div>
    <input
      type={type ? type : ""}
      name={name ? name : ""}
      placeholder={placeholder ? placeholder : ""}
      value={value ? value : ""}
      onChange={onChange ? onChange : null}
      list={list ? list : null}
      maxLength={maxLength ? maxLength : null}
    />
  </div>
);

export default Input;
