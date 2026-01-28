import { useState } from "react";
import { useTodos } from "../hooks/useTodos";
import Button from "./ui/Button";
import Input from "./ui/Input";

export default function TodoForm() {
  const { addTodo } = useTodos();
  const [text, setText] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-6">
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What needs to be done?"
        className="flex-1"
      />

      <Button
        type="submit"
        className="w-full sm:w-auto"
      >
        Add Todo
      </Button>
    </form>
  );
}

