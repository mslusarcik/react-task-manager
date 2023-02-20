import React from 'react';
import { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import './TaskDetail.scss';

const TaskDetail = ({ data, removeTask }) => {
  console.log('TaskDetail component is running.');
  const { taskId } = useParams();
  const navigate = useNavigate();

  const specificTask = data.find((task) => {
    return task.id === parseInt(taskId);
  });

  const handleRemoveTask = (taskId) => {
    removeTask(taskId);
    navigate('/tasks');
  };

  useEffect(() => {
    const checkExistingId = () => {
      if (specificTask.id !== parseInt(taskId)) {
        navigate('/error');
      }
    };

    if (!specificTask) {
      navigate('/error');
    } else {
      checkExistingId();
    }
  });

  if (specificTask) {
    return (
      <div
        key={specificTask.id}
        className='task-item'>
        <h2>{specificTask.name}</h2>
        <p>{specificTask.description}</p>
        <Link
          to={`/tasks/`}
          className='btn btn-primary'>
          Back to all tasks
        </Link>
        <span
          className='link-remove-task pl-6'
          onClick={() => {
            handleRemoveTask(specificTask.id);
          }}>
          Remove task
        </span>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default TaskDetail;
