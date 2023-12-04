import ModalEdit from 'components/Modal/ModalEdit';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from 'redux/operations';
import { getUpdateTask } from 'redux/todoReducer';
import {
  StyledItem,
  StyledWrapperInput,
  StyledButton,
} from './TodoItem.styled';

const TodoItem = ({ item }) => {
  const { id, title, completed } = item;
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const handleButtonDelete = taskId => dispatch(deleteTask(taskId));
  const handleClosedModal = () => {
    setIsOpen(false);
  };
  const editButton = editTask => {
    dispatch(getUpdateTask(editTask));
    setIsOpen(true);
  };
  return (
    <StyledItem>
      <StyledWrapperInput>
        <label style={{ marginRight: 10, marginLeft: 10 }}>
          <input type="checkbox" checked={completed} />
        </label>
        <p style={{ marginRight: 10 }}>{title}</p>
      </StyledWrapperInput>
      <div>
        <StyledButton
          type="button"
          onClick={() => editButton({ id, title, completed })}
        >
          ✎
        </StyledButton>
        <StyledButton
          style={{ marginLeft: 10, borderRadius: 50, width: 30 }}
          type="button"
          onClick={() => handleButtonDelete(id)}
        >
          &times;
        </StyledButton>
      </div>
      {isOpen && <ModalEdit onClick={handleClosedModal} />}
    </StyledItem>
  );
};

export default TodoItem;
