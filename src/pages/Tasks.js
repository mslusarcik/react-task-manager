// Import CSS
import './Tasks.scss';

// Import reacts stuff
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';

// Import components
import RenderTask from '../components/RenderTask';
import SearchInput from '../components/SearchInput';

// Import contexts
import { homePathContext } from '../context/HomePathContext';
import { taskDataContext } from '../context/TaskDataContext';

const Tasks = () => {
  console.log('Tasks component is running.');
  // Context variables
  const { tasks, setTasks } = useContext(taskDataContext);

  // Stored states
  const [searchData, setSearchData] = useState(tasks);

  // Stored github path
  const homePath = useContext(homePathContext);

  // Updates data for search input
  const updateSearchedData = (searchData) => {
    if (!searchData.includes(undefined)) {
      setSearchData(searchData);
    } else {
      setSearchData([]);
    }
  };

  // Marks task as complete
  const setCompleteTask = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      return task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task;
    });

    setTasks(updatedTasks);
  };

  return (
    <section className='tasks-page'>
      <div className='tasks-header'>
        <h2>All tasks</h2>
        <SearchInput
          setData={updateSearchedData}
          getData={tasks}
        />
      </div>

      <div className='tasks-wrapper'>
        {searchData.map((singleTask) => {
          return (
            <RenderTask
              key={singleTask.id}
              taskId={singleTask.id}
              setCompleteTask={setCompleteTask}
              {...singleTask}
            />
          );
        })}

        {!searchData.length ? (
          <p>
            Cant find any task...try to <Link to={`${homePath}/task/create`}>create a new one</Link>.
          </p>
        ) : (
          <div></div>
        )}
      </div>
    </section>
  );
};

export default Tasks;
