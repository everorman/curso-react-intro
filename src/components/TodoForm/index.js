import React from 'react';
import { TodoContext } from '../TodoContex';

function TodoForm() {
    const { setOpenModal, addTodo } = React.useContext(TodoContext)
    const [newTodo, setNewTodo] = React.useState('')
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodo)
        setOpenModal(false)
    }
    const onCancel = (event) => {
        setOpenModal(false)
    }
    const onChange = (event) => {
        setNewTodo(event.target.value)
    }

    return (
        <div class="flex justify-center items-center min-h-screen bg-black/50 z-0">
            <form class="bg-white shadow-md rounded-2xl p-6 w-full max-w-md" onSubmit={(event) => {
                event.preventDefault();

            }}>
                <h2 class="text-xl font-semibold text-gray-700 mb-4">Agregar TODO</h2>

                <div class="mb-6">
                    <textarea
                        value={newTodo}
                        onChange={onChange}
                        id="comment"
                        class="w-full h-32 p-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                        placeholder="Escribe tu TODO aquí...">
                    </textarea>
                </div>

                <div class="flex justify-end gap-4">
                    <button
                        onClick={onCancel}
                        type="button"
                        class="px-4 py-2 bg-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400">
                        Cancelar
                    </button>
                    <button
                        onClick={onSubmit}
                        type="submit"
                        class="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        Agregar
                    </button>
                </div>
            </form>
        </div>
    )
}

export { TodoForm }