import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Task from "./Task";

const Tasks = ({
  tasks,
  handleTaskClick,
  handleTasksDeletion,
  setViewInfo,
}) => {
  const navigate = useNavigate();

  const viewTaskById = (taskId) => {
    let task = tasks.find((item) => {
      return item.id === taskId;
    });
    setViewInfo(task);
    navigate(`/task-details/${taskId}`);
  };

  return (
    <>
      {
        tasks.length === 0 ?
          <p style={{ fontSize: '20px', textAlign: 'center', color: '#595959'}}>Lista de tarefas vazia.</p>
          :
          <>
            {tasks.map((task) => (
              <Task
                task={task}
                handleTaskClick={handleTaskClick}
                handleTasksDeletion={handleTasksDeletion}
                viewTaskById={viewTaskById}
              />
            ))}
          </>
      }
    </>
  );
};

export default Tasks;
