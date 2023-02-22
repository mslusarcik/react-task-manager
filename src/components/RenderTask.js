// Import scss
import './RenderTask.scss';

// Import contexts
import { homePathContext } from '../context/HomePathContext';

// Import components
import CompleteTasks from './CompleteTasks';

// Import icons
import { BiChevronRight } from 'react-icons/bi';
import { BsCircle, BsCheckCircle } from 'react-icons/bs';

// Import other react stuff
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';

const RenderTask = ({ id, name, description, isCompleted, setCompleteTask }) => {
  console.log('RenderTask component is running.');
  // Stored contexts
  const homePath = useContext(homePathContext);

  // Stored states
  const [taskCompleted, setTaskCompleted] = useState(isCompleted);

  return (
    <div className={'task-item' + (taskCompleted ? ' completed' : '')}>
      <div className='task-content'>
        <CompleteTasks taskId={id}>
          <BsCircle
            className='select-icon'
            onClick={() => {
              setTaskCompleted(!taskCompleted);
            }}
          />
        </CompleteTasks>
        <CompleteTasks taskId={id}>
          <BsCheckCircle
            className='select-icon for-completed'
            onClick={() => {
              setTaskCompleted(!taskCompleted);
            }}
          />
        </CompleteTasks>
        <h3>{name}</h3>
        <p>{description || 'Cant find a description..'}</p>
      </div>
      <Link
        to={`${homePath}/tasks/${id}`}
        className='more-details-link'>
        More details <BiChevronRight />
      </Link>
    </div>
  );
};

RenderTask.propTypes = {
  name: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
};

RenderTask.defaultProps = {
  name: 'Nazev ukolu',
  isCompleted: false,
};

export default RenderTask;
