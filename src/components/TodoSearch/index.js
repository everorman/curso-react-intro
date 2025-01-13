import React from 'react';
import { TodoContext } from '../TodoContex';
export const TodoSearch = () => {
  const { searchTodo, setSearchTodo } = React.useContext(TodoContext)
  const searchEvent = (event) => {
    const { value } = event.target;
    setSearchTodo(value);
  };
  return (
    <input
      value={searchTodo}
      type="text"
      placeholder="Buscar TODO"
      className="w-full p-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      onChange={searchEvent}
    />
  );
};
