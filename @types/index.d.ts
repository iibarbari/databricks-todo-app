type TTodo = {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
};


type TTodoContext = {
  addTodo: (todo: Omit<TTodo, 'id'>) => void;
  isError: any;
  isLoading: boolean;
  removeTodo: (id: TTodo['id']) => void;
  reset: () => void;
  todos: TTodo[];
  toggleTodo: (id: TTodo['id']) => void;
};
