import TodoContext from '../../context';
import { useState } from 'react';

function TodoProvider({ children }) {
  const [todos, setTodos] = useState([
    { id: 1, title: 'First Task', completed: false },
    { id: 2, title: 'Seconds Task', completed: false },
    { id: 3, title: 'Third Task', completed: true },
  ]);
  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
}

export default TodoProvider;
