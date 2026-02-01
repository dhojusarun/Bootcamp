import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks.ts";
import { addTodo as addAction, toggleTodo as toggleAction, deleteTodo as deleteAction, editTodo as editAction } from "../redux/todoSlice.ts";
import type { RootState } from "../redux/store.ts";

export function useTodos() {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state: RootState) => state.todos.todos);

  const addTodo = useCallback((text: string) => dispatch(addAction(text)), [dispatch]);
  const toggleTodo = useCallback((id: number) => dispatch(toggleAction(id)), [dispatch]);
  const deleteTodo = useCallback((id: number) => dispatch(deleteAction(id)), [dispatch]);
  const editTodo = useCallback((id: number, text: string) => dispatch(editAction({ id, text })), [dispatch]);

  return { todos, addTodo, toggleTodo, deleteTodo, editTodo };
}