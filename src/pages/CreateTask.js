// Import scss
import './CreateTask.scss';

// Import external components
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

// Import contexts
import { homePathContext } from '../context/HomePathContext';
import { taskDataContext } from '../context/TaskDataContext';

// Import other reacts stuff
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

const CreateTask = () => {
  console.log('CreateTask component is running.');
  // Stored data
  const { tasks, setTasks } = useContext(taskDataContext);
  // Stored github path
  const homePath = useContext(homePathContext);
  // Input states
  const [nameInput, setNameInput] = useState('');
  const [descInput, setDescInput] = useState('');
  const [deadlineDate, setDeadlineDate] = useState();
  const [tags, setTags] = useState('');
  // Redirect
  const navigate = useNavigate();

  // Get data from form and add them through context
  const createNewTask = (e) => {
    e.preventDefault();

    const splitTags = (tags) => {
      const tagsArray = tags.split(',');
      return tagsArray;
    };

    const updatedData = {
      id: Date.now(),
      created: Date.now(),
      deadline: deadlineDate.getTime(),
      name: nameInput,
      description: descInput,
      tags: splitTags(tags),
      isCompleted: false,
    };

    if (updatedData !== null && updatedData !== '[]') {
      setTasks([...tasks, updatedData]);
      navigate(`${homePath}/tasks`);
    } else {
      setTasks([updatedData]);
      navigate(`${homePath}/tasks`);
    }
  };

  return (
    <div className='w-full'>
      <form
        onSubmit={createNewTask}
        className='create-task-form'>
        <h2>Add new task</h2>
        <div className='form-group'>
          <input
            name='taskTitle'
            type='text'
            onChange={(e) => {
              setNameInput(e.target.value);
            }}
            value={nameInput}
            placeholder='Add a task name'
          />
        </div>
        <div className='form-group'>
          <DatePicker
            selected={deadlineDate}
            onChange={(date) => setDeadlineDate(date)}
            placeholderText='Set a deadline for your task'
            dateFormat={'dd. MM. y'}
          />
        </div>
        <div className='form-group'>
          <input
            name='taskTags'
            type='text'
            onChange={(e) => {
              setTags(e.target.value);
            }}
            value={tags}
            placeholder='Add tags separated by comma'
          />
        </div>
        <div className='form-group'>
          <textarea
            name='taskDescription'
            onChange={(e) => {
              setDescInput(e.target.value);
            }}
            value={descInput}
            placeholder='Add a task description'></textarea>
        </div>
        <div className='form-group'>
          <input
            type='submit'
            value='Add task'
            className='btn btn-primary'
          />
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
