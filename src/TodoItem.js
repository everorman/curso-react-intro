
export const TodoItem = ({ text, completed }) => {
  return (
    <li className={`flex m-2 items-center p-2 border rounded-lg ${completed ? 'bg-green-100' : 'bg-white'} transition duration-300 ease-in-out`}>
      <input type="checkbox" className="mr-2" checked={completed} readOnly />
      <span className={`${completed ? 'line-through text-gray-500' : ''}`}>{text}</span>
      <button
        className="ml-auto bg-red-500 text-white p-1 rounded-lg hover:bg-red-600 transition duration-300 ease-in-out"
      >
        Eliminar
      </button>
    </li>
  );
};
