import { Link } from 'react-router-dom';
import Task from '../components/RenderTask';

const Home = ({ data }) => {
  console.log('Home component is running.');
  return (
    <div>
      <h2>Welcome home!</h2>
      <Link to='/tasks'>Show me my tasks</Link>
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
