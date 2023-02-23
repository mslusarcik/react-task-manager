// Import scss
import './TaskDetail.scss';

// Import components
import RemoveTask from '../components/RemoveTask';
import CompleteTasks from '../components/CompleteTasks';
import ConvertTimestamp from '../components/ConvertTimestamp';

// Import contexts
import { homePathContext } from '../context/HomePathContext';
import { taskDataContext } from '../context/TaskDataContext';

// Import icons
import { BsCalendarDate, BsTags, BsCheck2Circle, BsTrash } from 'react-icons/bs';
import { BiTime } from 'react-icons/bi';
import { FiEdit } from 'react-icons/fi';

// Import other react stuff
import { useEffect, useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const TaskDetail = () => {
  console.log('TaskDetail component is running.');
  // Stores react hooks
  const { taskId } = useParams();
  const navigate = useNavigate();

  // Stores contexts
  const homePath = useContext(homePathContext);
  const { tasks } = useContext(taskDataContext);

  // Returns task its going to render
  const specificTask = tasks.find((task) => {
    return task.id === parseInt(taskId);
  });

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
    const tags = specificTask.tags;
    console.log(tags);
    return (
      <section className='task-detail-section'>
        <div
          key={specificTask.id}
          className='task-item'>
          <div className='task-heading'>
            <h2 className='h3'>{specificTask.name}</h2>
            <div className='task-actions'>
              <div>
                <span className='link-edit-task'>
                  <Link to={`${homePath}/task/update/${specificTask.id}`}>
                    <FiEdit></FiEdit>
                  </Link>
                </span>
              </div>
              <CompleteTasks taskId={specificTask.id}>
                <span
                  className='link-complete-task'
                  onClick={() => {
                    navigate(`${homePath}/tasks`);
                  }}>
                  {specificTask.isCompleted ? 'Set as uncompleted' : <BsCheck2Circle></BsCheck2Circle>}
                </span>
              </CompleteTasks>

              <RemoveTask taskId={specificTask.id}>
                <span className='link-remove-task'>
                  <BsTrash className='remove-icon' />
                </span>
              </RemoveTask>
            </div>
          </div>
          <hr />
          <table className='task-meta-table'>
            <tbody>
              <tr>
                <th scope='row'>
                  <BsCalendarDate /> Created:
                </th>
                <td>
                  <ConvertTimestamp
                    timestamp={specificTask.created}
                    time={true}
                  />
                </td>
              </tr>
              <tr>
                <th scope='row'>
                  <BiTime /> Deadline:
                </th>
                <td>
                  <ConvertTimestamp
                    timestamp={specificTask.deadline}
                    time={false}
                  />
                </td>
              </tr>
              <tr>
                <th scope='row'>
                  <BsTags /> Tags:
                </th>
                <td>
                  {tags.map((singleTag) => {
                    return <span className='tag-item'>{singleTag}</span>;
                  })}
                </td>
              </tr>
            </tbody>
          </table>
          <hr />
          <div className='task-description'>
            <h3>Task description</h3>
            <p>{specificTask.description}</p>
          </div>
          <hr />
          <Link
            to={`${homePath}/tasks/`}
            className='mt-5 w-full text-right inline-block'>
            Back to all tasks
          </Link>
        </div>
      </section>
    );
  } else {
    return <div></div>;
  }
};

export default TaskDetail;
