import logo from './platzi.webp';
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoSearch } from './TodoSearch';
import { CreateTodo } from './CreateTodo';

const defaultTODOS = [
  { text: "Todo 1", completed: true },
  { text: "Todo 2", completed: false },
  { text: "Todo 3", completed: false },
  { text: "Todo 4", completed: false },
];

function App() {
  return (
    <>
      <TodoCounter completed={1} total={5} />
      <div className="m-2">
        <TodoSearch />
        <TodoList>
          {defaultTODOS.map(todo => (<TodoItem key={todo.text} text={todo.text} completed={todo.completed} />))}
        </TodoList>
        <CreateTodo />
      </div>

    </>
  );
}

export default App;
