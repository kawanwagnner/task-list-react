import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskDetails from "./pages/TaskDetails/TaskDetails";

import "./App.css";
import Header from "./components/Header/Header";
import Tasks from "./components/Tasks/Tasks";
import AddTask from "./components/Tasks/AddTask/AddTask";

const App = () => {
  const [viewInfo, setViewInfo] = useState();
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Estudar Programação",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem possimus rem doloremque nisi. Eveniet, iure!",
      completed: false,
    },
    {
      id: "2",
      title: "Ler 10 Páginas",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem possimus rem doloremque nisi. Eveniet, iure!",
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

  const handleTasksAdition = (tasksTitle, description) => {
    if (tasksTitle.length > 0) {
      const newTasks = [
        ...tasks,
        {
          title: tasksTitle,
          description: description,
          id: uuidv4(),
          completed: false,
          date: new Date(),
        },
      ];
      setTasks(newTasks);
    } else {
      alert("ʕ•́ᴥ•̀ʔっ >>Os campos precisam ser preenchidos.");
    }
  };

  const handleTasksDeletion = (tasksId) => {
    const newTasks = tasks.filter((task) => task.id !== tasksId);

    setTasks(newTasks);
  };

  return (
    <div className="container">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddTask handleTasksAdition={handleTasksAdition} />
                <Tasks
                  tasks={tasks}
                  handleTaskClick={handleTaskClick}
                  handleTasksDeletion={handleTasksDeletion}
                  setViewInfo={setViewInfo}
                />
              </>
            }
          />
          <Route
            path="/task-details/:id"
            element={<TaskDetails viewInfo={viewInfo} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
