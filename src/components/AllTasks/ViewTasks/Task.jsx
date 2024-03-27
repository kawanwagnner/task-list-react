import React from "react";
import { CgClose, CgInfo } from "react-icons/cg";
import moment from "moment/moment";
import "moment/locale/pt";
import { useNavigate } from "react-router-dom";

import "../ViewTasks/Task.css";

const Task = ({ task, handleTaskClick, handleTasksDeletion }) => {
  const navigate = useNavigate();

  const handleSeeTaskDetails = () => {
    navigate(`task-details/${task.id}`);
  };

  return (
    <div
      className="task-container"
      style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}
    >
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>
      <div style={{ fontSize: "10px" }}>
        {task.date ? moment(task.date).locale("pt").format("lll") : ""}
      </div>

      <div className="buttons-container">
        <button
          onClick={() => handleTasksDeletion(task.id)}
          className="remove-task-button"
        >
          <CgClose />
        </button>
        <button
          onClick={handleSeeTaskDetails}
          className="see-task-details-button"
        >
          <CgInfo />
        </button>
      </div>
    </div>
  );
};

export default Task;
