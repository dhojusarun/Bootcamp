import type { Todo } from "../pages/Home";

interface Props {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

export default function TodoItem({
  todo,
  toggleTodo,
  deleteTodo,
}: Props) {
  return (
    <li className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 mb-3 p-4 border border-gray-100">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 flex-1">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
            className="w-5 h-5 text-purple-600 rounded focus:ring-2 focus:ring-purple-500 cursor-pointer"
          />
          <span
            onClick={() => toggleTodo(todo.id)}
            className={`cursor-pointer text-lg transition-all ${todo.completed
              ? "line-through text-gray-400"
              : "text-gray-800"
              }`}
          >
            {todo.text}
          </span>
        </div>

        <button
          onClick={() => deleteTodo(todo.id)}
          className="px-4 py-2 text-red-500 hover:bg-red-50 rounded-lg transition-all duration-200 opacity-0 group-hover:opacity-100"
        >
          Delete
        </button>
      </div>
    </li>
  );
}
