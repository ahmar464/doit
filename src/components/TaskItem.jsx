import React from "react";
import { useTaskContext } from "../context/useTaskContext";

function TaskItem({ task, onEdit }) {
  const { deleteTask, editTask } = useTaskContext();

  const handleCompletionToggle = () => {
    editTask(task.id, { completed: !task.completed });
  };

  const handleMarkToggle = () => {
    editTask(task.id, { important: !task.important });
  };

  return (
    <div className="task-card">
      <div className="task-left">
        <div className="task-info">
          <h3
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            {task.title}
          </h3>
          {task.description && <p>{task.description}</p>}
          {task.date && (
            <p>
              <strong>Due:</strong> {task.date}
            </p>
          )}
          <div className="task-tags">
            {task.important && <span className="tag important">Important</span>}
            {task.completed && <span className="tag completed">Completed</span>}
          </div>
        </div>
      </div>

      <div className="task-actions">
        <div className="task-checkboxes">
          <p>Completed</p>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={handleCompletionToggle}
          />
          <p>Important</p>
          <input
            onChange={handleMarkToggle}
            type="checkbox"
            checked={task.important}
          />
        </div>
        <button onClick={() => onEdit(task)}>✏️ Edit</button>
        <button onClick={() => deleteTask(task.id)}>🗑️ Delete</button>
      </div>
    </div>
  );
}

export default TaskItem;
