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
        <textarea
          maxLength="420"
          onChange={(event) => setDescription(event.target.value)}
          value={description}
          placeholder="Descrição da tarefa"
          className="add-description-input"
        />
        <div className="add-task-button">
          <Button onClick={handleTaskClick}>Adicionar</Button>
        </div>
      </div>
    </>
  );
};

export default AddTask;
