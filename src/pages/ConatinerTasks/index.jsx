import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Tasks from "../../components/AllTasks/ViewTasks/Tasks";
import GetValueTask from "../../components/AllTasks/AddTask/GetValueTask";

const ConatinerTasks = () => {
  const [selectedTask, setSelectedTask] = useState(null);
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

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );

    setTasks(newTasks);
    handleTaskSelect(taskId);
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

  const handleTasksDeletion = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);

    setTasks(newTasks);
  };

  const handleTaskSelect = (taskId) => {
    const selected = tasks.find((task) => task.id === taskId);
    setSelectedTask(selected);
  };

  return (
    <>
      <GetValueTask handleTasksAdition={handleTasksAdition} />
      <Tasks
        tasks={tasks}
        handleTaskClick={handleTaskClick}
        handleTasksDeletion={handleTasksDeletion}
        handleTaskSelect={handleTaskSelect}
      />
    </>
  );
};

export default ConatinerTasks;
