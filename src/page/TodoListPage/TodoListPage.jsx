import Modal from 'components/Modal/Modal';
import Pagination from 'components/Pagination/Pagination';
import TodoList from 'components/Todolist/TodoList';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTasks, paginationTodo } from 'redux/operations';
import { selectTodo } from 'redux/selectors';
import {
  StyledContainer,
  StyledTitle,
  StyledButtonCreate,
  StyledBlockButton,
} from './TodoListPage.styled';

const TodoListPage = () => {
  const taskList = useSelector(selectTodo);
  const [page, setPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleClosedModal = () => {
    setIsOpen(false);
  };

  const getTasks = useCallback(() => {
    dispatch(paginationTodo());
    dispatch(getAllTasks());
  }, [dispatch]);

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  const updateList = page => {
    dispatch(paginationTodo(page));
  };

  const handleButton = page => {
    setPage(page);
    updateList(page);
  };
  return (
    <StyledContainer>
      <StyledTitle>Todo List</StyledTitle>
      <StyledBlockButton>
        <StyledButtonCreate onClick={handleOpenModal} type="button">
          + Create new task
        </StyledButtonCreate>
      </StyledBlockButton>

      {isOpen && <Modal onClick={handleClosedModal} />}
      <TodoList taskList={taskList} />
      <Pagination page={page} handleButton={handleButton} taskList={taskList} />
    </StyledContainer>
  );
};

export default TodoListPage;
