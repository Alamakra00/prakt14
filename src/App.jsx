import './App.css';
import TodoProvider from './assets/components/todoProvider';
import TodoForm from './assets/components/todoForm';
import TodoList from './assets/components/todoList';

function App() {
  return (
    <>
      <TodoProvider>
        <h1></h1>
        <TodoForm />
        <TodoList />
      </TodoProvider>
    </>
  );
}

export default App;
