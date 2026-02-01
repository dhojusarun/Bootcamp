import { useMemo } from "react";
import TodoItem from "./TodoItem";
import { useTodos } from "../hooks/useTodos";
import type { Todo } from "../redux/todoSlice";
import Card from "./ui/Card";

interface TodoListProps {
  filter?: "all" | "completed" | "incomplete";
}

export default function TodoList({ filter = "all" }: TodoListProps) {
  const { todos } = useTodos();

  const filteredTodos = useMemo(() => todos.filter((todo: Todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "incomplete") return !todo.completed;
    return true;
  }), [todos, filter]);

  if (filteredTodos.length === 0) {
    const message = filter === "all"
      ? "No todos yet. Add one to get started!"
      : `No ${filter} tasks found.`;

    return (
      <Card className="text-center py-8 sm:py-12 bg-white dark:bg-gray-700 rounded-lg shadow-sm border border-gray-100 dark:border-gray-600 transition-colors duration-300">
        <p className="text-gray-500 dark:text-gray-400 text-base sm:text-lg">{message}</p>
      </Card>
    );
  }

  return (
    <ul className="space-y-0">
      {filteredTodos.map((todo: Todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
        />
      ))}
    </ul>
  );
}
