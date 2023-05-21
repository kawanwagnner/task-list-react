import React, { useState } from "react";
import "./AddTask.css";
import Button from "../../Button/Button";

const AddTask = ({ handleTasksAdition }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  
  const handleTaskClick = () => {
    handleTasksAdition(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <>
      <div className="container-add-tasks">

        <input
          onChange={(event) => setTitle(event.target.value)}
          value={title}
          placeholder="Título do tarefa"
          className="add-task-input"
          type="text"
          />
        <input
          onChange={(event) => setDescription(event.target.value)}
          value={description}
          placeholder="Descrição do tarefa"
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
