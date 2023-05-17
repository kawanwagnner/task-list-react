import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "./App.css";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Estudar Prgramação",
      completed: false,
    },
    {
      id: "2",
      title: "Ler 10 Páginas",
      completed: true,
    },
  ]);

  const handleTaskClick = (tasksId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === tasksId) return { ...task, completed: !task.completed }
      
      return task;
    })

    setTasks(newTasks)
  }

  const handleTasksAdition = (tasksTitle) => {
    const newTasks = [
      ...tasks,
      {
        title: tasksTitle,
        id: uuidv4(),
        completed: false,
      },
    ];

    setTasks(newTasks);
  };

  const handleTasksDeletion = (tasksId) => {
    const newTasks = tasks.filter(task => task.id !== tasksId)

    setTasks(newTasks)
  }

  return (
    <>
      <div className="container">
        <AddTask handleTasksAdition={handleTasksAdition} />
        <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTasksDeletion={handleTasksDeletion} />
      </div>
    </>
  );
};

export default App;
