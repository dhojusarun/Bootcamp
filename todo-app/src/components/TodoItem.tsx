import type { Todo } from "../redux/todoSlice";
import { useTodos } from "../hooks/useTodos";
import { useTodoEditing } from "../hooks/useTodoEditing";
import Button from "./ui/Button";
import Checkbox from "./ui/Checkbox";
import Badge from "./ui/Badge";
import Input from "./ui/Input";

interface Props {
  todo: Todo;
}

export default function TodoItem({ todo }: Props) {
  const { toggleTodo, deleteTodo } = useTodos();
  const {
    isEditing,
    editText,
    setEditText,
    startEditing,
    handleSave,
    handleKeyDown,
  } = useTodoEditing(todo.text, todo.id, todo.completed);

  return (
    <li className="group bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 mb-3 p-4 border border-gray-100 dark:border-gray-600">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 flex-1">
          <Checkbox
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          {isEditing ? (
            <Input
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onBlur={handleSave}
              onKeyDown={handleKeyDown}
              autoFocus
              className="flex-1 py-1"
            />
          ) : (
            <div className="flex flex-wrap items-center gap-2 flex-1 min-w-0">
              <span
                onDoubleClick={startEditing}
                className={`cursor-pointer text-lg transition-all break-words whitespace-normal min-w-0 ${todo.completed
                  ? "line-through text-gray-500 dark:text-gray-400"
                  : "text-gray-900 dark:text-gray-100 hover:text-purple-600 dark:hover:text-purple-300"
                  }`}
                title="Double-click to edit"
              >
                {todo.text}
              </span>
              {todo.completed && (
                <Badge variant="success">Completed</Badge>
              )}
            </div>
          )}
        </div>

        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-200">
          <Button
            variant="secondary"
            size="sm"
            onClick={startEditing}
            disabled={todo.completed}
            title="Edit task"
          >
            Edit
          </Button>
          <Button
            variant="danger"
            size="sm"
            onClick={() => deleteTodo(todo.id)}
          >
            Delete
          </Button>
        </div>
      </div>
    </li>
  );
}

