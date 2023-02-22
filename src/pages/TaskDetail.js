// Import scss
import './TaskDetail.scss';

// Import components
import RemoveTask from '../components/RemoveTask';
import CompleteTasks from '../components/CompleteTasks';

// Import contexts
import { homePathContext } from '../context/HomePathContext';
import { taskDataContext } from '../context/TaskDataContext';

// Import icons
import { BsCalendarDate, BsTags } from 'react-icons/bs';
import { BiTime } from 'react-icons/bi';

// Import other react stuff
import { useEffect, useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const TaskDetail = ({ removeTask }) => {
  console.log('TaskDetail component is running.');
  // Stores react hooks
  const { taskId } = useParams();
  const navigate = useNavigate();

  // Stores contexts
  const homePath = useContext(homePathContext);
  const { tasks, setTasks } = useContext(taskDataContext);

  // Stores other variables
  const currentDate = new Date();
  const day = currentDate.getDate();
  const ddl = currentDate.getDate() + 7;
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();

  // Returns task its going to render
  const specificTask = tasks.find((task) => {
    return task.id === parseInt(taskId);
  });

  // Removes task and redirects to /tasks page
  const handleRemoveTask = (taskId) => {
    removeTask(taskId);
    navigate(`${homePath}/tasks`);
  };

  // Checks existing id or throws 404 page
  useEffect(() => {
    const checkExistingId = () => {
      if (specificTask.id !== parseInt(taskId)) {
        navigate('/error');
      }
    };

    if (!specificTask) {
      navigate(`${homePath}/error`);
    } else {
      checkExistingId();
    }
  });

  if (specificTask) {
    return (
      <section className='task-detail-section'>
        <div
          key={specificTask.id}
          className='task-item'>
          <h2 className='h3'>{specificTask.name}</h2>
          <hr />
          <table className='task-meta-table'>
            <tbody>
              <tr>
                <th scope='row'>
                  <BsCalendarDate /> Created:{' '}
                </th>
                <td>{day + '. ' + month + '. ' + year} | #TODO</td>
              </tr>
              <tr>
                <th scope='row'>
                  <BiTime /> Deadline:{' '}
                </th>
                <td>{ddl + '. ' + month + '. ' + year} | #TODO</td>
              </tr>
              <tr>
                <th scope='row'>
                  <BsTags /> Tags:{' '}
                </th>
                <td>
                  <span className='tag-item'>Webdesign</span>
                  <span className='tag-item'>Jaknaeshop</span>| #TODO
                </td>
              </tr>
            </tbody>
          </table>
          <hr />
          <div className='task-description'>
            <h3>Task description</h3>
            <p>{specificTask.description}</p>
            <Link
              to={`${homePath}/tasks/`}
              className='btn btn-primary'>
              Back to all tasks
            </Link>
          </div>
          <hr />
          <div className='task-actions'>
            <CompleteTasks taskId={specificTask.id}>
              <span
                className='link-complete-task'
                onClick={() => {
                  navigate(`${homePath}/tasks`);
                }}>
                {specificTask.isCompleted ? 'Set as uncompleted' : 'Complete task'}
              </span>
            </CompleteTasks>
            <span className='link-remove-task'>
              <RemoveTask taskId={specificTask.id}></RemoveTask>
            </span>
          </div>
        </div>
      </section>
    );
  } else {
    return <div></div>;
  }
};

export default TaskDetail;
