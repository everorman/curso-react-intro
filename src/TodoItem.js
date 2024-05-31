
export const TodoItem = ({ text, completed, onComplete, onDelete }) => {

  return (
    <li className={`flex m-2 items-center p-2 border rounded-lg ${completed ? 'bg-green-100' : 'bg-white'} transition duration-300 ease-in-out`}>
      <span type="checkbox" className="mr-2" onClick={onComplete} >V</span>
      <span className={`${completed ? 'line-through text-gray-500' : ''}`}>{text}</span>
      <button
        className="ml-auto bg-red-500 text-white p-1 rounded-lg hover:bg-red-600 transition duration-300 ease-in-out"
        onClick={onDelete}
      >
        Eliminar
      </button>
    </li>
  );
};
