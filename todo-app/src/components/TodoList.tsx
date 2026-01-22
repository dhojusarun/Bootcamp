import TodoItem from "./TodoItem";
import { useTodos } from "../hooks/useTodos";

export default function TodoList() {
  const { todos, toggleTodo, deleteTodo, editTodo } = useTodos();
  if (todos.length === 0) {
    return (
      <div className="text-center py-8 sm:py-12 bg-white dark:bg-gray-700 rounded-lg shadow-sm border border-gray-100 dark:border-gray-600 transition-colors duration-300">
        <p className="text-gray-50 dark:text-gray-50 text-base sm:text-lg">No todos yet. Add one to get started!</p>
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
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
}
