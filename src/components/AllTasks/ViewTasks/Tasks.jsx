import React from "react";
import { useNavigate } from "react-router-dom";
import Task from "../ViewTasks/Task";

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
      {tasks.length === 0 ? (
        <h3
          style={{
            fontSize: "25px",
            textAlign: "center",
            color: "#595959",
            margin: "50px 0 50px 0",
          }}
        >
          Lista de tarefas vazia. (╥﹏╥)
        </h3>
      ) : (
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
      )}
    </>
  );
};

export default Tasks;
