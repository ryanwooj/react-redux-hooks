import React from 'react';
import CounterContainer from './containers/CounterContainer'
import TodoListContainer from './containers/TodoListContainer';

function App() {
  return (
    // Use of React Fragment
    <>
    
    <TodoListContainer />

    <CounterContainer />
    </>
  );
}

export default App;
