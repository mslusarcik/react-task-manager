import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { homePathContext } from '../App';
import { BiChevronRight } from 'react-icons/bi';
import { BsCircle, BsCheckCircle } from 'react-icons/bs';
import './RenderTask.scss';

const RenderTask = ({ id, name, description, isCompleted }) => {
  console.log('RenderTask component is running.');
  const homePath = useContext(homePathContext);
  const completedClass = isCompleted ? ' completed' : '';

  return (
    <div className={'task-item' + completedClass}>
      <BsCircle className='select-icon' />
      <BsCheckCircle className='select-icon for-completed' />
      <h3>{name}</h3>
      <p>{description || 'You didnt write a description..'}</p>
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
