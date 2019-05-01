import React from 'react';
import CounterContainer from './containers/CounterContainer'
import TodoListContainer from './containers/TodoListContainer';

function App() {
  return (
    <div>
    <TodoListContainer />

    <CounterContainer />
    </div>
  );
}

export default App;
