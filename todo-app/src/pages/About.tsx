export default function About() {
return (
<div className="p-6">
<h1 className="text-xl font-bold">About</h1>
<p>This is a Todo app built with React and TypeScript.</p>
</div>
);
}


// components/TodoForm.tsx
import { useState } from "react";


interface Props {
addTodo: (text: string) => void;
}


export default function TodoForm({ addTodo }: Props) {
const [text, setText] = useState<string>("");


const handleSubmit = (e: React.FormEvent) => {
e.preventDefault();
if (!text.trim()) return;
addTodo(text);
setText("");
}; 
return (
<form onSubmit={handleSubmit} className="my-4">
<input
type="text"
value={text}
onChange={e => setText(e.target.value)}
className="border p-2 mr-2"
placeholder="Add todo"
/>
<button type="submit" className="bg-blue-500 text-white px-4 py-2">
Add
</button>
</form>
);
}