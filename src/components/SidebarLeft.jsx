import React from "react";
import { useTaskContext } from "../context/useTaskContext";

function SidebarLeft({ onAddTask }) {
  const { setFilter, filter } = useTaskContext();

  return (
    <aside className="sidebar-left">
      <h1 className="logo">doit</h1>
      <button onClick={onAddTask}>Add Task</button>
      <nav>
        <ul className="filter-list">
          {["all", "important", "completed", "incompleted"].map((type) => (
            <li
              key={type}
              className={filter === type ? "active-filter" : ""}
              onClick={() => setFilter(type)}
              style={{ cursor: "pointer" }}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default SidebarLeft;
