export const TodoCounter = ({ total, completed }) => {
  return (
    <h1 className="text-2xl text-center my-4">Has completado <b>{completed}</b> de <b>{total}</b> TODOS</h1>
  );
};
