import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoSearch } from './TodoSearch';
import { CreateTodo } from './CreateTodo';
import React from 'react';
// const defaultTODOS = [
//   { text: "Todo 1", completed: true },
//   { text: "Todo 2", completed: false },
//   { text: "Todo 3", completed: false },
//   { text: "Todo 4", completed: false },
//   { text: "Todo 5", completed: true },
// ];

const useLocalStorage = (itemKey, initialValue) => {
  const localStorageItem = localStorage.getItem(itemKey);
  let parseTodos = initialValue;
  if (!localStorageItem) {
    localStorage.setItem(itemKey, JSON.stringify(initialValue));
  } else {
    parseTodos = JSON.parse(localStorage.getItem(itemKey));
  }

  const [item, setItem] = React.useState(parseTodos);

  const saveItem = (newItem) => {
    localStorage.setItem(itemKey, JSON.stringify(newItem));
    setItem(newItem);

  };
  return [item, saveItem];
};

function App() {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [searchTodo, setSearchTodo] = React.useState('');
  const completedTodos = todos.filter(item => !!item.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter((item) => item.text.toLowerCase().includes(searchTodo.toLowerCase()));


  const completeTodo = (text) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex(item => item.text === text);
    newTodos[index].completed = newTodos[index].completed ? false : true;
    saveTodos(newTodos);
  };
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex(item => item.text === text);
    newTodos.splice(index, 1);
    saveTodos(newTodos);
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
