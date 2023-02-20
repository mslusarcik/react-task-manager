import React from 'react';
import Tasks from './pages/Tasks';
import TaskDetail from './pages/TaskDetail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Error from './pages/Error';
import Home from './pages/Home';
import CreateTask from './pages/CreateTask';
import Layout from './components/Layout';
import useLocalStorage from './hooks/useLocalStorage';

const App = () => {
  console.log('App component is running.');
  const [taskData, setTaskData] = useState(JSON.parse(localStorage.getItem('msTaskData')));
  const [storageData, setStorageData] = useLocalStorage('msTaskData', '[]');

  const updateData = (updatedData) => {
    if (updatedData !== null && updatedData !== '[]') {
      setTaskData([...taskData, updatedData]);
    } else {
      setTaskData([updatedData]);
    }
  };

  const removeTask = (taskId) => {
    const filteredData = taskData.filter((specificTask) => {
      return parseInt(specificTask.id) !== parseInt(taskId);
    });
    // console.log(filteredData);
    // console.log('------Setting new data------');
    setTaskData(filteredData);
  };

  if (taskData === null) {
    // console.log('Task data:');
    // console.log(taskData);
    setTaskData(storageData);
  }

  useEffect(() => {
    // console.log(taskData.length);
    // console.log([JSON.parse(localStorage.getItem('msTaskData'))].length);
    // console.log(taskData);
    // console.log(JSON.parse(localStorage.getItem('msTaskData')));
    if (taskData.length !== JSON.parse(localStorage.getItem('msTaskData')).length) {
      console.log(taskData.length);
      console.log([JSON.parse(localStorage.getItem('msTaskData'))].length);
      setStorageData(taskData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [taskData]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path='/react-task-manager'
            element={<Layout />}>
            <Route
              path='/react-task-manager'
              element={<Home data={taskData} />}></Route>
            <Route
              path='/react-task-manager/tasks'
              element={
                <Tasks
                  data={taskData}
                  updateData={updateData}
                />
              }></Route>
            <Route
              path='/react-task-manager/tasks/:taskId'
              element={
                <TaskDetail
                  data={taskData}
                  removeTask={removeTask}
                />
              }></Route>
            <Route
              path='/react-task-manager/task/create'
              element={
                <CreateTask
                  data={taskData}
                  updateData={updateData}
                />
              }></Route>
            <Route
              path='*'
              element={<Error />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
