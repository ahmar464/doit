import React from "react";
import { useTaskContext } from "../context/useTaskContext";


function Header({ onAddTask }) {
  const { searchTerm, setSearchTerm } = useTaskContext();
  const today = new Date().toLocaleDateString();

  return (
    <header className="header">
      <input
        type="text"
        placeholder="Search by title or description"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <span>{today}</span>
      <button onClick={onAddTask}>Add Task</button>
    </header>
  );
}


export default Header;
