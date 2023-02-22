// Import scss
import './RenderTask.scss';

// Import contexts
import { homePathContext } from '../context/HomePathContext';

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
      <BsCircle
        className='select-icon'
        onClick={() => {
          setCompleteTask(id);
          setTaskCompleted(!taskCompleted);
        }}
      />
      <BsCheckCircle
        className='select-icon for-completed'
        onClick={() => {
          setCompleteTask(id);
          setTaskCompleted(!taskCompleted);
        }}
      />
      <h3>{name}</h3>
      <p>{description || 'Cant find a description..'}</p>
      <Link to={`${homePath}/tasks/${id}`}>
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
