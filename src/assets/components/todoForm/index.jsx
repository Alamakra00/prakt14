import { useState } from 'react';
import TodoContext from '../../context';

function TodoForm() {
  const [title, setTitle] = useState('');
  const { todos, setTodos } = useContext(TodoContext);

  const handleSubmit = (event) => {
    setTodos([...todos, { id: Math.random(), title, completed: false }]);
    setTitle('');
  };
  return (
    <form>
      <input
        type="text"
        value={title}
        placeholder="Add a new task"
        onChange={(event) => setTitle(event.target.value)}
      />
      <button type="submit">Add todo</button>
    </form>
  );
}
export default TodoForm;
