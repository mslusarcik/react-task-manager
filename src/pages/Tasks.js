import React from 'react';
import RenderTask from '../components/RenderTask';
import SearchInput from '../components/SearchInput';
import { useState } from 'react';

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
    <div>
      <SearchInput
        getData={data}
        setData={updateSearchedData}
      />
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
    </div>
  );
};

export default Tasks;
