import { useDispatch, useSelector } from 'react-redux';
import { editTask } from 'redux/operations';
import {
  StyledModal,
  StyledBackdrop,
  StyledClose,
  StyledForm,
  StyledButton,
} from './Modal.styled';
import { selectUpdateTask } from 'redux/selectors';
import { useState } from 'react';

const ModalEdit = ({ onClick }) => {
  const getUpdateTask = useSelector(selectUpdateTask);
  const { id, title, completed } = getUpdateTask;

  const [completedTask, setCompletedTask] = useState(completed);
  const dispatch = useDispatch();

  const getUpdateTasks = dataTask => {
    dispatch(editTask(dataTask));
  };

  const handelSubmit = e => {
    e.preventDefault();
    const title = e.target.title.value;
    const completed = e.target.completed.defaultChecked;

    getUpdateTasks({ id, title, completed });
    e.target.reset();
    onClick();
  };

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') onClick();
  });

  const closeBackground = event => {
    event.target.tagName === 'DIV' && onClick();
  };

  return (
    <StyledBackdrop onClick={event => closeBackground(event)}>
      <StyledModal>
        <StyledClose onClick={onClick}>&times;</StyledClose>
        <h2>Please edit the task</h2>
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
                placeholder="Please edit the task"
                defaultValue={title}
                required
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
                onChange={() =>
                  setCompletedTask(completed === false ? true : false)
                }
                name="completed"
                defaultChecked={completedTask}
                type="checkbox"
              />
            </div>
          </div>
          <StyledButton type="submit">Edit task</StyledButton>
        </StyledForm>
      </StyledModal>
    </StyledBackdrop>
  );
};

export default ModalEdit;
