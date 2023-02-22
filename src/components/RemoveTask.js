// Import scss
import './RemoveTask.scss';

// Import contexts
import { taskDataContext } from '../context/TaskDataContext';
import { homePathContext } from '../context/HomePathContext';

// Import icons
import { BsTrash } from 'react-icons/bs';

// Import other react stuff
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const RemoveTask = ({ taskId }) => {
  const { tasks, setTasks } = useContext(taskDataContext);
  const homePath = useContext(homePathContext);
  const navigate = useNavigate();

  // Removes task from datas
  const handleRemoveTask = () => {
    const filteredData = tasks.filter((specificTask) => {
      return parseInt(specificTask.id) !== parseInt(taskId);
    });

    setTasks(filteredData);
    navigate(`${homePath}/tasks`);
  };

  return (
    <div>
      <BsTrash
        className='remove-icon'
        onClick={handleRemoveTask}
      />
    </div>
  );
};

export default RemoveTask;
