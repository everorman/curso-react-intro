import React from 'react';
import { TodoContext } from '../TodoContex';

export const TodoCounter = () => {
  const {
    completed,
    total
  } = React.useContext(TodoContext)
  return (
    <h1 className="text-2xl text-center my-4">Has completado <b>{completed}</b> de <b>{total}</b> TODOS</h1>
  );
};
