import React, { useState, useEffect } from "react";
import { useTaskContext } from "../context/useTaskContext";

function AddTaskModal({ onClose, initialTask, isEdit }) {
  const { addTask, editTask } = useTaskContext();

  const [form, setForm] = useState({
    title: "",
    description: "",
    date: "",
    important: false,
    completed: false,
  });

  useEffect(() => {
    if (isEdit && initialTask) {
      setForm({
        title: initialTask.title,
        description: initialTask.description,
        date: initialTask.date,
        important: initialTask.important,
        completed: initialTask.completed,
      });
    }
  }, [initialTask, isEdit]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim()) return;
    if (isEdit && initialTask) {
      editTask(initialTask.id, form);
    } else {
      addTask(form);
    }
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Add Task</h2>
        <form onSubmit={handleSubmit} className="modal-form">
          <input
            type="text"
            name="title"
            placeholder="Task Title"
            value={form.title}
            onChange={handleChange}
            required
          />
          <textarea
            name="description"
            placeholder="Task Description"
            value={form.description}
            onChange={handleChange}
          />
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
          />
          <label>
            <input
              type="checkbox"
              name="important"
              checked={form.important}
              onChange={handleChange}
            />
            Important
          </label>
          <label>
            <input
              type="checkbox"
              name="completed"
              checked={form.completed}
              onChange={handleChange}
            />
            Completed
          </label>
          <div className="modal-buttons">
            <button type="submit">{isEdit ? "Update" : "Add"} Task</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTaskModal;
