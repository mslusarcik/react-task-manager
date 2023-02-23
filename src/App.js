// Import pages
import Tasks from './pages/Tasks';
import TaskDetail from './pages/TaskDetail';
import Error from './pages/Error';
import Home from './pages/Home';
import CreateTask from './pages/CreateTask';
import UpdateTask from './pages/UpdateTask';

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
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('msTaskData')));
  // Custom hooks
  const [storageData, setStorageData] = useLocalStorage('msTaskData', '[]');
  // Github path
  const homePath = useContext(homePathContext);

  // Prevent tasks from being empty
  if (tasks === null && storageData.length < 1) {
    setTasks([]);
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
                element={<Home />}></Route>
              <Route
                path={homePath + '/tasks'}
                element={<Tasks />}></Route>
              <Route
                path={homePath + '/tasks/:taskId'}
                element={<TaskDetail />}></Route>
              <Route
                path={homePath + '/task/create'}
                element={<CreateTask />}></Route>
              <Route
                path={homePath + '/task/update/:taskId'}
                element={<UpdateTask />}></Route>
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
