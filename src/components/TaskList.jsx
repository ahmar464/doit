import React, { useState } from "react";
import { useTaskContext } from "../context/useTaskContext";
import TaskItem from "./TaskItem";
import AddTaskModal from "./AddTaskModal";

function TaskList() {
  const { tasks, filter, searchTerm } = useTaskContext();
  const [editingTask, setEditingTask] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description.toLowerCase().includes(searchTerm.toLowerCase());

    if (!matchesSearch) return false;

    if (filter === "important") return task.important;
    if (filter === "completed") return task.completed;
    if (filter === "incompleted") return !task.completed;
    return true; // 'all'
  });

  const handleEdit = (task) => {
    setEditingTask(task);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setEditingTask(null);
    setModalOpen(false);
  };

  return (
    <div className="task-list">
      {filteredTasks.length === 0 ? (
        <p>No tasks found for: {filter}</p>
      ) : (
        filteredTasks.map((task) => (
          <TaskItem key={task.id} task={task} onEdit={handleEdit} />
        ))
      )}
      {isModalOpen && (
        <AddTaskModal
          isEdit
          initialTask={editingTask}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default TaskList;
