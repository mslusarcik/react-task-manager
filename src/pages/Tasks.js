import React from 'react';
import RenderTask from '../components/RenderTask';
import SearchInput from '../components/SearchInput';
import { useState } from 'react';
import './Tasks.scss';

const Tasks = ({ data }) => {
  console.log('Tasks component is running.');
  const [searchData, setSearchData] = useState(data);

  const updateSearchedData = (searchData) => {
    if (!searchData.includes(undefined)) {
      setSearchData(searchData);
    } else {
      setSearchData([]);
    }
  };

  return (
    <section className='tasks-page'>
      <div className='tasks-header'>
        <h2>All tasks</h2>
        <SearchInput
          getData={data}
          setData={updateSearchedData}
        />
      </div>

      <div className='tasks-wrapper'>
        {searchData.map((singleTask) => {
          return (
            <RenderTask
              key={singleTask.id}
              taskId={singleTask.id}
              {...singleTask}
            />
          );
        })}
        <p>{!searchData.length && 'Nebylo nic nalezeno...'}</p>
      </div>
    </section>
  );
};

export default Tasks;
