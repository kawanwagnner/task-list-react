import React, { useState } from "react";

import "./AddTask.css";
import Button from "./Button";

const AddTask = ({ handleTasksAdition }) => {
  const [inputData, setInputData] = useState("");

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleTaskClick = () => {
    handleTasksAdition(inputData);
    setInputData("");
  };

  return (
    <>
      <div className="container-add-tasks">
        <input
          onChange={handleInputChange}
          value={inputData}
          className="add-task-input"
          type="text"
        />
        <div className="add-task-button">
          <Button onClick={handleTaskClick}>Adicionar</Button>
        </div>
      </div>
    </>
  );
};

export default AddTask;
