import { useState, useCallback } from "react";
import { useTodos } from "./useTodos";

export function useTodoEditing(initialText: string, id: number, completed: boolean) {
    const { editTodo } = useTodos();
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(initialText);

    const startEditing = useCallback(() => {
        if (!completed) {
            setIsEditing(true);
            setEditText(initialText);
        }
    }, [completed, initialText]);

    const cancelEditing = useCallback(() => {
        setEditText(initialText);
        setIsEditing(false);
    }, [initialText]);

    const handleSave = useCallback(() => {
        if (editText.trim()) {
            editTodo(id, editText.trim());
            setIsEditing(false);
        } else {
            cancelEditing();
        }
    }, [editText, editTodo, id, cancelEditing]);

    const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            handleSave();
        } else if (e.key === "Escape") {
            cancelEditing();
        }
    }, [handleSave, cancelEditing]);

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
