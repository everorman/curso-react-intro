import React from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage';
const TodoContext = React.createContext();

function TodoProvider({ children }) {
    const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('TODOS_V1', []);
    const [searchTodo, setSearchTodo] = React.useState('');
    const [openModal, setOpenModal] = React.useState(true);
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
        <TodoContext.Provider value={{
            completedTodos,
            totalTodos,
            searchTodo,
            setSearchTodo,
            loading,
            error,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export {
    TodoContext,
    TodoProvider
}