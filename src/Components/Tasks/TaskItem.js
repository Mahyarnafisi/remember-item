import React from "react";
import taskList from "./Tasks.module.css";
function TaskItem(props) {
  return (
    <div>
      <li className={taskList.item}>{props.name}</li>
    </div>
  );
}

export default TaskItem;
