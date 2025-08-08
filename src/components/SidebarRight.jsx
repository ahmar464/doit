import React from "react";
import { useThemeContext } from "../context/useThemeContext";

function SidebarRight() {
  const { darkMode, toggleTheme } = useThemeContext();

  return (
    <aside className="sidebar-right">
      <p>Hello, Ahmar!</p>
      <button onClick={toggleTheme}>
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </aside>
  );
}

export default SidebarRight;
