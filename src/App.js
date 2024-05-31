import logo from './platzi.webp';
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoSearch } from './TodoSearch';
import { CreateTodo } from './CreateTodo';
import React from 'react';
const defaultTODOS = [
  { text: "Todo 1", completed: true },
  { text: "Todo 2", completed: false },
  { text: "Todo 3", completed: false },
  { text: "Todo 4", completed: false },
  { text: "Todo 5", completed: true },
];

function App() {
  const [searchTodo, setSearchTodo] = React.useState('');
  const [todos, setTodos] = React.useState(defaultTODOS);
  console.log('value', searchTodo);
  const completedTodos = todos.filter(item => !!item.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter((item) => item.text.toLowerCase().includes(searchTodo.toLowerCase()));

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex(item => item.text === text);
    newTodos[index].completed = true;
    setTodos(newTodos);
  };
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex(item => item.text === text);
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <div className="m-2">
        <TodoSearch
          searchTodo={searchTodo}
          setSearchTodo={setSearchTodo}
        />
        <TodoList>
          {searchedTodos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
        <CreateTodo />
      </div>

    </>
  );
}

export default App;
