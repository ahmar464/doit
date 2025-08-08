import React, { useState } from "react";
import { useThemeContext } from "./context/useThemeContext";
import SidebarLeft from "./components/SidebarLeft";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import SidebarRight from "./components/SidebarRight";
import AddTaskModal from "./components/AddTaskModal";
import "./styles/main.css";

function App() {
  const { darkMode } = useThemeContext();
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <div className="app-container">
        <SidebarLeft onAddTask={openModal} />
        <main className="main-content">
          <Header onAddTask={openModal} />
          <TaskList />
        </main>
        <SidebarRight />

        {showModal && <AddTaskModal onClose={closeModal} />}
      </div>
    </div>
  );
}

export default App;
