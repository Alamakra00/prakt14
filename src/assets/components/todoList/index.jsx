import TodoContext from '../../context';
import { useContext } from 'react';
function TodoList() {
  const { todos } = useContext(TodoContext);
  return (
    <ul>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} />;
      })}
    </ul>
  );
}
export default TodoList;
