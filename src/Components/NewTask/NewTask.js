import React, { useRef, useState } from "react";
import taskForm from "./NewTask.module.css";

function NewTask(props) {
  const inputVal = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const newData = inputVal.current.value;
    newData.trim().length > 0 && PostFetch(newData);

    async function PostFetch() {
      try {
        const response = await fetch("https://codefrombasemenet-default-rtdb.europe-west1.firebasedatabase.app/newtask.json", {
          method: "POST",
          body: JSON.stringify({ text: newData }),
          headers: { "Content-Type": "application/json" },
        });
        if (!response.ok) {
          throw new Error("Something is wrong !");
        }

        const data = await response.json();
        const finalData = { id: data.name, text: newData };
        props.dependency();
      } catch (error) {}
    }
    inputVal.current.value = "";
  };

  return (
    <form className={taskForm.wrapper} onSubmit={submitHandler}>
      <input className={taskForm.input} type="text" maxLength="47" placeholder="What do you want to remember?" ref={inputVal} />
      <button className={taskForm.button} onClick={props.onFetch}>
        Add
      </button>
    </form>
  );
}

export default NewTask;
