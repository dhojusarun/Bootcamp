import type { Todo } from "../pages/Home";
import { useState } from "react";

interface Props {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  editTodo: (id: number, newText: string) => void;
}

export default function TodoItem({
  todo,
  toggleTodo,
  deleteTodo,
  editTodo,
}: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleDoubleClick = () => {
    if (!todo.completed) {
      setIsEditing(true);
      setEditText(todo.text);
    }
  };

  const handleSave = () => {
    if (editText.trim()) {
      editTodo(todo.id, editText.trim());
      setIsEditing(false);
    } else {
      setEditText(todo.text);
      setIsEditing(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSave();
    } else if (e.key === "Escape") {
      setEditText(todo.text);
      setIsEditing(false);
    }
  };

  return (
    <li className="group bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 mb-3 p-4 border border-gray-100 dark:border-gray-600">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 flex-1">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
            className="w-5 h-5 text-purple-600 rounded focus:ring-2 focus:ring-purple-500 cursor-pointer"
          />
          {isEditing ? (
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onBlur={handleSave}
              onKeyDown={handleKeyDown}
              autoFocus
              className="flex-1 px-3 py-1 border border-purple-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-lg bg-white dark:bg-gray-600 text-gray-900 dark:text-white"
            />
          ) : (
            <span
              onDoubleClick={handleDoubleClick}
              className={`cursor-pointer text-lg transition-all ${todo.completed
                  ? "line-through text-gray-400 dark:text-gray-300"
                  : "text-gray-800 dark:text-white hover:text-purple-600 dark:hover:text-purple-400"
                }`}
              title="Double-click to edit"
            >
              {todo.text}
            </span>
          )}
        </div>

        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-200">
          <button
            onClick={() => {
              if (!todo.completed) {
                setIsEditing(true);
                setEditText(todo.text);
              }
            }}
            disabled={todo.completed}
            className="px-3 py-2 text-blue-500 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            title="Edit task"
          >
            Edit
          </button>
          <button
            onClick={() => deleteTodo(todo.id)}
            className="px-3 py-2 text-red-500 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all duration-200"
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
}
