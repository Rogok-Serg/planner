import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from 'redux/operations';
import {
  StyledModal,
  StyledBackdrop,
  StyledClose,
  StyledForm,
  StyledButton,
} from './Modal.styled';

const Modal = ({ onClick }) => {
  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState(false);

  const dispatch = useDispatch();

  const handleInputData = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'title':
        setTitle(value);
        break;
      case 'completed':
        setCompleted(completed === false ? true : false);
        break;
      default:
        break;
    }
  };

  const createTask = taskList => {
    const todo = {
      ...taskList,
    };
    dispatch(addTask(todo));
  };

  const handelSubmit = e => {
    e.preventDefault();
    createTask({ title, completed });
    e.target.reset();
    onClick();
  };

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') onClick();
  });

  return (
    <StyledBackdrop>
      <StyledModal>
        <StyledClose onClick={onClick}>&times;</StyledClose>
        <h2>Please enter the task</h2>
        <StyledForm onSubmit={handelSubmit}>
          <div>
            <div style={{ marginBottom: 20 }}>
              <label
                htmlFor="taskTitle"
                style={{ marginRight: 10, marginLeft: 10 }}
              >
                <span>Task</span>
              </label>
              <input
                id="taskTitle"
                type="text"
                name="title"
                placeholder="Please enter the task"
                onChange={handleInputData}
                required
                value={title}
              />
            </div>
            <div>
              <label
                htmlFor="taskCompleted"
                style={{ marginRight: 10, marginLeft: 10 }}
              >
                <span>Completed</span>
              </label>
              <input
                id="taskCompleted"
                name="completed"
                onChange={handleInputData}
                defaultValue={completed}
                type="checkbox"
              />
            </div>
          </div>
          <StyledButton type="submit">Create task</StyledButton>
        </StyledForm>
      </StyledModal>
    </StyledBackdrop>
  );
};

export default Modal;
