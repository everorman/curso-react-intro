
export const CreateTodo = ({setOpenModal}) => {
  return (
    <button className=" bg-blue-500 text-white p-2 hover:bg-blue-600 transition duration-300 ease-in-out z-10 fixed bottom-1 right-2 w-10 h-10 rounded-full p-10 flex content-center items-center justify-center"
      onClick={()=>{
        setOpenModal(state => !state)
      }}
    >
      <span className='text-2xl'>+</span>
    </button>
  );
};
