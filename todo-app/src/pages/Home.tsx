// import TodoForm from "../components/TodoForm";
// import TodoList from "../components/TodoList";
import { useState } from "react";


export interface Todo {
id: number;
text: string;
completed: boolean;
}


export default function Home() {
const [todos, setTodos] = useState<Todo[]>([]);


const addTodo = (text: string) => {
setTodos([...todos, { id: Date.now(), text, completed: false }]);
};


const toggleTodo = (id: number) => {
setTodos(
todos.map(todo =>
todo.id === id ? { ...todo, completed: !todo.completed } : todo
)
);
};


const deleteTodo = (id: number) => {
setTodos(todos.filter(todo => todo.id !== id));
};


return (
<div className="p-6">
<h1 className="text-2xl font-bold">Todo App</h1>
<TodoForm addTodo={addTodo} />
<TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
</div>
);
}


// pages/About.tsx
export default function About() {
return (
<div className="p-6">
<h1 className="text-xl font-bold">About</h1>
<p>This is a Todo app built with React and TypeScript.</p>
</div>
);
}