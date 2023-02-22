// Import pages
import Tasks from './pages/Tasks';
import TaskDetail from './pages/TaskDetail';
import Error from './pages/Error';
import Home from './pages/Home';
import CreateTask from './pages/CreateTask';

// Import components
import Layout from './components/Layout';

// Import contexts
import { taskDataContext } from './context/TaskDataContext';
import { homePathContext } from './context/HomePathContext';

// Import hooks
import useLocalStorage from './hooks/useLocalStorage';

// Import react stuff
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';

const App = () => {
  console.log('App component is running.');
  // States
  const [taskData, setTaskData] = useState(JSON.parse(localStorage.getItem('msTaskData')));
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('msTaskData')));
  // Custom hooks
  const [storageData, setStorageData] = useLocalStorage('msTaskData', '[]');
  // Github path
  const homePath = useContext(homePathContext);

  // Updates tasks
  const updateData = (updatedData) => {
    if (updatedData !== null && updatedData !== '[]') {
      setTaskData([...taskData, updatedData]);
    } else {
      setTaskData([updatedData]);
    }
  };

  // Removes task by its id
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

  // Updates localStorage with fresh datas
  useEffect(() => {
    setStorageData(tasks);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tasks]);

  return (
    <div>
      <taskDataContext.Provider value={{ tasks, setTasks }}>
        {console.log(homePath)}
        <BrowserRouter>
          <Routes>
            <Route
              path={homePath}
              element={<Layout />}>
              <Route
                index
                path={homePath}
                element={<Home data={taskData} />}></Route>
              <Route
                path={homePath + '/tasks'}
                element={
                  <Tasks
                    data={taskData}
                    updateData={updateData}
                    removeTask={removeTask}
                    // completeData={completeData}
                  />
                }></Route>
              <Route
                path={homePath + '/tasks/:taskId'}
                element={
                  <TaskDetail
                    data={taskData}
                    removeTask={removeTask}
                  />
                }></Route>
              <Route
                path={homePath + '/task/create'}
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
      </taskDataContext.Provider>
    </div>
  );
};

export default App;
