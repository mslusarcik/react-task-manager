import React from 'react';
import { taskDataContext } from '../context/TaskDataContext';
import { useContext } from 'react';

const CompleteTasks = (props) => {
  console.log('CompleteTasks is running..');
  const { tasks, setTasks } = useContext(taskDataContext);

  const setCompleteTask = () => {
    const updatedTasks = tasks.map((task) => {
      return task.id === props.taskId ? { ...task, isCompleted: !task.isCompleted } : task;
    });

    setTasks(updatedTasks);
  };

  return <div onClick={setCompleteTask}>{props.children}</div>;
};

export default CompleteTasks;
