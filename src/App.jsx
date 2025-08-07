import React from "react";
import SidebarLeft from "./components/SidebarLeft";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import SidebarRight from "./components/SidebarRight";
import "./styles/main.css";

function App() {
  return (
    <div className="app-container">
      <SidebarLeft />
      <main className="main-content">
        <Header />
        <TaskList />
      </main>
      <SidebarRight />
    </div>
  );
}

export default App;
