// Import components
import Task from '../components/RenderTask';

// Import contexts
import { homePathContext } from '../context/HomePathContext';

// Import other reacts stuff
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';

const Home = ({ data }) => {
  console.log('Home component is running.');
  // Stored github path
  const homePath = useContext(homePathContext);
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`${homePath}/tasks`);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h2>Welcome home!</h2>
      <Link to={`${homePath}/tasks`}>Show me my tasks</Link>
      <h3>Your last task: {data.length === 0 ? 'Sooo quiet here.' : ''}</h3>
      {data.map((filteredTask, i, arr) => {
        if (arr.length > 0 && arr.length - 1 === i) {
          return (
            <Task
              key={filteredTask.id}
              taskId={filteredTask.id}
              {...filteredTask}
            />
          );
        } else {
          return console.log('No tasks found.');
        }
      })}
    </div>
  );
};

export default Home;
