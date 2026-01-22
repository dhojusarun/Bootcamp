import TodoItem from "./TodoItem";
import type { Todo } from "../pages/Home";

interface Props {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

export default function TodoList({
  todos,
  toggleTodo,
  deleteTodo,
}: Props) {
  if (todos.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-gray-100">
        <p className="text-gray-400 text-lg">No todos yet. Add one to get started! </p>
      </div>
    );
  }

  return (
    <ul className="space-y-0">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}
