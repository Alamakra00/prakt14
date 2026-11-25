import { useState } from 'react';
import TodoContext from '../../context';

function TodoItem({ id, title, completed }) {
  const { todos, setTodos } = useState(TodoContext);
  function toggleCompleted() {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !completed,
          };
        } else {
          return todo;
        }
      })
    );
  }
  function deleteTodo() {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  return (
    <li>
      <input type="checkbox" onChange={toggleComplete} checked={completed} />
      <span style={{ textDecoration: completed ? 'line-through' : null }}>
        {id} {title}
      </span>
      <span onClick={deleteTodo} style={{ color: 'red', cursor: 'pointer' }}>
        X
      </span>
    </li>
  );
}
export default TodoItem;
