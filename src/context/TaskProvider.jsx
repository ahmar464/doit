import React, { useState } from "react";
import { TaskContext } from "./TaskContext";

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const addTask = (task) => {
    const newTask = {
      id: Date.now().toString(),
      title: task.title,
      description: task.description || "",
      date: task.date || "",
      important: task.important || false,
      completed: task.completed || false,
    };
    setTasks((prev) => [newTask, ...prev]);
  };

  const editTask = (id, updatedFields) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, ...updatedFields } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const value = {
    tasks,
    addTask,
    editTask,
    deleteTask,
    filter,
    setFilter,
    searchTerm,
    setSearchTerm,
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};
