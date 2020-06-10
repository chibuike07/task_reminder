import React from "react";
import CustomInput from "../Reusable_Component/Input_Component";
import CustomButton from "../Reusable_Component/Button_Component";
import { weekDay } from "../collections/collections";
const Form = ({ handleChange, handleSubmit, state }) => {
  const { days, task, timeTaker } = state;
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        lineHeight: 3
      }}
    >
      <CustomInput
        type={"text"}
        name={"days"}
        placeholder={"add of the week"}
        value={days}
        onChange={handleChange}
        list={"weekday"}
      />
      <CustomInput
        type={"text"}
        name={"task"}
        placeholder={"add ur task"}
        value={task}
        onChange={handleChange}
      />

      <CustomInput
        type={"text"}
        name={"timeTaker"}
        placeholder={"add time"}
        value={timeTaker}
        onChange={handleChange}
        maxLength={8}
        // onKeyPressCapture={handleInsertColumn}
      />
      <div style={{ MaxWidth: "100%", justifyContent: "center" }}>
        <CustomButton
          type="submit"
          style={{ width: "50vw", height: "5vh" }}
          text={"add tasks"}
        />
      </div>
      <datalist id="weekday">
        {weekDay &&
          weekDay.map((weekDay, i) => <option value={weekDay} key={i} />)}
      </datalist>
    </form>
  );
};
export default Form;
