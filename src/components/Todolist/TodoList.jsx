import TodoItem from './TodoItem/TodoItem';

const TodoList = ({ taskList }) => {
  return (
    <div>
      <h2>TodoList</h2>
      <ul>
        {taskList.map(item => (
          <TodoItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
