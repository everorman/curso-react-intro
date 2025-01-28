import React from 'react';
import { CreateTodo } from '../CreateTodo';
import { TodoContext } from '../TodoContex';
import { TodoCounter } from '../TodoCounter';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { TodoSearch } from '../TodoSearch';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { Modal } from '../Modal';


export function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal
  } = React.useContext(TodoContext)
  return (

    <>
      <TodoCounter />
      <TodoSearch />

      <div className="m-2">

        {loading && <TodosLoading />}
        {error && <TodosError />}
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
        {openModal && (<Modal>
          La funcionalidad de agregar TODO
        </Modal>)}
      </div>
    </>

  )
}