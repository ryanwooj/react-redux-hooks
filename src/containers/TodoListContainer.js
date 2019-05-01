import React from 'react';
import { useActions, useSelector } from 'react-redux';
import { toggleCheck, changeInput, insert, remove } from '../modules/todos';
import TodoList from '../components/TodoList';

const TodoListContainer = () => {

    const {input, todos} = useSelector(state => state.todos);
    const [onChangeInput, onInsert, onToggle, onRemove] = useActions([
            changeInput,
            insert, 
            toggleCheck, 
            remove
    ], []);

    const onChange = e => onChangeInput(e.target.value);
    const onSubmit = e => {
        e.preventDefault();
        onInsert(input);
        onChangeInput('');

    }
  return (
    <TodoList 
        input={input}
        todos={todos}
        onChange={onChange}
        onSubmit={onSubmit}
        onToggle={onToggle}
        onRemove={onRemove} 
    />
  )
}

export default TodoListContainer
