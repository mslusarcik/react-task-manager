// Import scss
import './RemoveTask.scss';

// Import contexts
import { taskDataContext } from '../context/TaskDataContext';
import { homePathContext } from '../context/HomePathContext';

// Import other react stuff
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const RemoveTask = (props) => {
  const { tasks, setTasks } = useContext(taskDataContext);
  const homePath = useContext(homePathContext);
  const navigate = useNavigate();

  // Removes task from datas
  const handleRemoveTask = () => {
    const filteredData = tasks.filter((specificTask) => {
      return parseInt(specificTask.id) !== parseInt(props.taskId);
    });

    setTasks(filteredData);
    navigate(`${homePath}/tasks`);
  };

  // TODO: Default state
  return <div onClick={handleRemoveTask}>{props.children} </div>;
};

export default RemoveTask;
