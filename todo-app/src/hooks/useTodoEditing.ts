import { useState } from "react";
import { useTodos } from "./useTodos";

export function useTodoEditing(initialText: string, id: number, completed: boolean) {
    const { editTodo } = useTodos();
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(initialText);

    const startEditing = () => {
        if (!completed) {
            setIsEditing(true);
            setEditText(initialText);
        }
    };

    const cancelEditing = () => {
        setEditText(initialText);
        setIsEditing(false);
    };

    const handleSave = () => {
        if (editText.trim()) {
            editTodo(id, editText.trim());
            setIsEditing(false);
        } else {
            cancelEditing();
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            handleSave();
        } else if (e.key === "Escape") {
            cancelEditing();
        }
    };

    return {
        isEditing,
        editText,
        setEditText,
        startEditing,
        cancelEditing,
        handleSave,
        handleKeyDown,
    };
}
