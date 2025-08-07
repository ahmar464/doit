import React from "react";

function SidebarLeft() {
  return (
    <aside className="sidebar-left">
      <h1 className="logo">doit</h1>
      <button>Add Task</button>
      <nav>
        <ul>
          <li>All Tasks</li>
          <li>Marked</li>
          <li>Completed</li>
          <li>Incompleted</li>
        </ul>
      </nav>
    </aside>
  );
}

export default SidebarLeft;
