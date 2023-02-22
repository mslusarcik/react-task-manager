import React from 'react';

const CompleteTasks = ({ id, tasks, setTasks }) => {
  console.log('CompleteTasks is running..');
  if (id) {
    const updatedData = tasks.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );

    // console.log('Updated data> ' + updatedData);
    setTasks(updatedData);
  }

  return <></>;
};

export default CompleteTasks;
