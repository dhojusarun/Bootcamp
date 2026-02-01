import { useState, useRef, useEffect } from "react";
import { useTodos } from "../hooks/useTodos";
import Button from "./ui/Button";
import Input from "./ui/Input";

export default function TodoForm() {
  const { addTodo } = useTodos();
  const [text, setText] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
    inputRef.current?.focus();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-6">
      <Input
        ref={inputRef}
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
