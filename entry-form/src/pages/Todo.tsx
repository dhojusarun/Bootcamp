import { useState } from "react";
import "./Todo.css";

function Todo() {
  // Input state
  const [currentTask, setCurrentTask] = useState("");

  // Task list
  const [taskList, setTaskList] = useState<string[]>([]);

  // Editing state
  const [taskBeingEdited, setTaskBeingEdited] = useState<number | null>(null);

  const handleSubmitTask = () => {
    const trimmedTask = currentTask.trim();
    if (!trimmedTask) return;

    // Update existing task
    if (taskBeingEdited !== null) {
      setTaskList((prevTasks) =>
        prevTasks.map((task, index) =>
          index === taskBeingEdited ? trimmedTask : task
        )
      );
      setTaskBeingEdited(null);
    }
    // Add new task
    else {
      setTaskList((prevTasks) => [...prevTasks, trimmedTask]);
    }

    setCurrentTask("");
  };

  const handleDeleteTask = (index: number) => {
    setTaskList((prevTasks) =>
      prevTasks.filter((_, i) => i !== index)
    );

    if (taskBeingEdited === index) {
      setTaskBeingEdited(null);
      setCurrentTask("");
    }
  };

  const handleEditTask = (index: number) => {
    setCurrentTask(taskList[index]);
    setTaskBeingEdited(index);
  };

  const isEditing = taskBeingEdited !== null;

  return (
    <div className="todo-container">
      <h1>Todo List</h1>

      <div className="todo-input">
        <input
          type="text"
          value={currentTask}
          onChange={(e) => setCurrentTask(e.target.value)}
          placeholder="Enter task"
        />
        <button onClick={handleSubmitTask}>
          {isEditing ? "Update" : "Add"}
        </button>
      </div>

      {taskList.length === 0 ? (
        <p className="empty-msg">No tasks yet</p>
      ) : (
        <ul className="task-list">
          {taskList.map((task, index) => (
            <li key={index} className="task-item">
              <span>{task}</span>
              <div className="task-buttons">
                <button
                  className="edit-btn"
                  onClick={() => handleEditTask(index)}
                >
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDeleteTask(index)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Todo;
