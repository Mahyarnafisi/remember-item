import React from "react";
import TaskItem from "./TaskItem";
import taskList from "./Tasks.module.css";
function Tasks(props) {
  return (
    <div className={taskList.wrapper}>
      <ul>
        {props.fetchedData.map((item) => {
          return <TaskItem key={item.id} name={item.name} />;
        })}
      </ul>
    </div>
  );
}

export default Tasks;
