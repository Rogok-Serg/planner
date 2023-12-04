import * as React from 'react';
import TodoItem from './TodoItem/TodoItem';
import { StyledList } from './TodoList.styled';

const TodoList = ({ taskList }) => {
  return (
    <div>
      <StyledList>
        {taskList.map(item => (
          <TodoItem key={item.id} item={item} />
        ))}
      </StyledList>
    </div>
  );
};

export default TodoList;
