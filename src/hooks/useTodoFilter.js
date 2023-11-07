import { useMemo } from "react";

export const useTodoFilter = (todos, searchQuery) => {
  const searchedTodos = useMemo(() => {
    return todos.filter(todo => {
      const regex = new RegExp(searchQuery, 'gi');

      return todo.title.match(regex);
    });
  }, [todos, searchQuery]);

  return searchedTodos;
};