import React from 'react';
import { AppUI } from './components/AppUI';
import { TodoProvider } from './components/TodoContex';

function App() {
  

  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
