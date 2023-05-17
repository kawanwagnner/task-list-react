import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, handleTaskClick, handleTasksDeletion }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task task={task} handleTaskClick={ handleTaskClick} handleTasksDeletion={handleTasksDeletion}/>
      ))}
    </>
  );
};

export default Tasks;
