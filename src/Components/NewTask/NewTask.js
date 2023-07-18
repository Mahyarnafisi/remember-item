import React, { useRef } from "react";
import taskForm from "./NewTask.module.css";

function NewTask(props) {
  return (
    <div className={taskForm.wrapper}>
      <input className={taskForm.input} type="text" maxLength="47" />
      <button className={taskForm.button}>Add</button>
    </div>
  );
}

export default NewTask;
