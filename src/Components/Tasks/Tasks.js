import React from "react";
import TaskItem from "./TaskItem";
import taskList from "./Tasks.module.css";
function Tasks(props) {
  return (
    <div className={taskList.wrapper}>
      <ul>
        <TaskItem />
      </ul>
    </div>
  );
}

export default Tasks;
