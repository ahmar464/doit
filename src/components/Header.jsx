import React from "react";

function Header() {
  const today = new Date().toLocaleDateString();

  return (
    <header className="header">
      <input type="text" placeholder="Search tasks..." />
      <span>{today}</span>
      <button>Add Task</button>
    </header>
  );
}

export default Header;
