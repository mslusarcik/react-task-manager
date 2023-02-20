import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { homePathContext } from '../App';

const RenderTask = ({ id, name, description, isCompleted }) => {
  console.log('RenderTask component is running.');
  const homePath = useContext(homePathContext);
  const completedClass = isCompleted && ' completed';

  return (
    <div className={'task-item' + completedClass}>
      <h2>{name}</h2>
      <p>{description || 'Popis ukolu kamo..'}</p>
      <Link to={`${homePath}/tasks/${id}`}>More details</Link>
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
