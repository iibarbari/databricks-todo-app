import React, { createContext, useEffect, useState } from 'react';
import useSWR from 'swr';

export const TodoContext = createContext<TTodoContext>({
  addTodo: () => {
  },
  isError: null,
  isLoading: false,
  removeTodo: (_: TTodo['id']) => {
  },
  reset: () => {
  },
  todos: [],
  toggleTodo: (_: TTodo['id']) => {
  },
});

export default function TodoProvider({ children }: { children: React.ReactNode }) {
  const [todos, setTodos] = useState<TTodo[]>([]);
  const { data, error: swrError } = useSWR<TTodo[]>('https://jsonplaceholder.typicode.com/todos/');

  useEffect(() => {
    if (data) {
      setTodos(data);
    }
  }, [data]);

  return (
    <TodoContext.Provider
      value={{
        addTodo: (todo) => setTodos([{
          ...todo,
          id: todos.reduce((acc, curr) => acc > curr.id ? acc : curr.id, 0) + 1,
        }, ...todos]),
        isError: swrError,
        isLoading: !swrError && !data,
        removeTodo: (id) => setTodos(todos.filter(todo => todo.id !== id)),
        reset: () => setTodos(() => data !== undefined ? data : []),
        todos,
        toggleTodo: (id) => setTodos(todos.map((todo) => todo.id === id ? {
          ...todo,
          completed: !todo.completed,
        } : todo)),
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}


