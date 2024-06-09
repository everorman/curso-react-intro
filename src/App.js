import { TodoCounter } from './components/TodoCounter';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { TodoSearch } from './components/TodoSearch';
import { CreateTodo } from './components/CreateTodo';
import { useLocalStorage } from './hooks/useLocalStorage';
import React from 'react';
// const defaultTODOS = [
//   { text: "Todo 1", completed: true },
//   { text: "Todo 2", completed: false },
//   { text: "Todo 3", completed: false },
//   { text: "Todo 4", completed: false },
//   { text: "Todo 5", completed: true },
// ];

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
