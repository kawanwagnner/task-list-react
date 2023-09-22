import React from "react";
import { CgClose, CgInfo } from "react-icons/cg";

import "./Task.css";

const Task = ({ task, handleTaskClick, handleTasksDeletion }) => {
  return (
    <div
      className="task-container"
      style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}
    >
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>

      <div className="buttons-container">
        <button
          onClick={() => handleTasksDeletion(task.id)}
          className="remove-task-button"
        >
          <CgClose />
        </button>
        <button
          // onClick={}
          className="see-task-details-button"
        >
          <CgInfo />
        </button>
      </div>
    </div>
  );
  // return <div className="task-container">{task.title}</div>
};

export default Task;
