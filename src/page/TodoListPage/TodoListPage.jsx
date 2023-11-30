import Paginations from 'components/Pagination/Pagination';
import TodoList from 'components/Todolist/TodoList';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getTodo, paginationTodo } from 'redux/operations';
import { selectTodo } from 'redux/selectors';

const TodoListPage = () => {
  const taskList = useSelector(selectTodo);
  const params = useParams();
  console.log('params: ', params);
  const [page, setPage] = useState(2);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodo());
  }, [dispatch]);

  const updateList = page => {
    dispatch(paginationTodo(page));
  };

  const handleButton = () => {
    setPage(page + 1);
    updateList(page);
  };
  return (
    <div>
      <h1>TodoListPage</h1>
      <TodoList taskList={taskList} />
      <Paginations handleButton={handleButton} />
    </div>
  );
};

export default TodoListPage;
