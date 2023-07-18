import React, { useRef } from "react";
import taskForm from "./NewTask.module.css";

function NewTask(props) {
  const inputVal = useRef();
  return (
    <form className={taskForm.wrapper}>
      <input className={taskForm.input} type="text" maxLength="47" placeholder="What do you want to remember?" ref={inputVal} />
      <button type="submit" className={taskForm.button}>
        Add
      </button>
    </form>
  );
}

export default NewTask;
