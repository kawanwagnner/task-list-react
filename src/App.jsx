import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import TaskDetails from "./components/TaskDetails";

import "./App.css";

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
      if (task.id === tasksId) return { ...task, completed: !task.completed };

      return task;
    });

    setTasks(newTasks);
  };

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
    const newTasks = tasks.filter((task) => task.id !== tasksId);

    setTasks(newTasks);
  };

  return (
    <Router>
      <div className="container">
        <Header />
        <Route
          path="/"
          exact
          render={() => (
            <>
              <AddTask handleTasksAdition={handleTasksAdition} />
              <Tasks
                tasks={tasks}
                handleTaskClick={handleTaskClick}
                handleTasksDeletion={handleTasksDeletion}
              />
            </>
          )}
        />
        <Route path="/:taskTitle" exact Component={TaskDetails} />
      </div>
    </Router>
  );
};

export default App;
