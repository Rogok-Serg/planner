import { Pagination } from 'antd';
import { useSelector } from 'react-redux';
import { selectAllTodo } from 'redux/selectors';

const Paginations = ({ handleButton }) => {
  const allTasks = useSelector(selectAllTodo);
  return (
    <Pagination defaultCurrent={1} onChange={handleButton} total={allTasks} />
  );
};

export default Paginations;
