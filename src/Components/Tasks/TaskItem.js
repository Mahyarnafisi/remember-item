import React from "react";
import taskList from "./Tasks.module.css";
function TaskItem(props) {
  return (
    <div>
      <li className={taskList.item}> Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
      <li className={taskList.item}> Lorem ipsum dolor sit amet consectetur.</li>
    </div>
  );
}

export default TaskItem;
