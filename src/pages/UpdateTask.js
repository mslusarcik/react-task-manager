// Import scss
import './CreateTask.scss';

// Import external components
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

// Import contexts
import { homePathContext } from '../context/HomePathContext';
import { taskDataContext } from '../context/TaskDataContext';

// Import other reacts stuff
import { useNavigate, useParams } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';

const UpdateTask = () => {
  console.log('UpdateTask component is running.');
  // Stored data
  const { tasks, setTasks } = useContext(taskDataContext);

  // Stored github path
  const homePath = useContext(homePathContext);

  // Input states
  const [nameInput, setNameInput] = useState();
  const [descInput, setDescInput] = useState();
  const [deadlineDate, setDeadlineDate] = useState();
  const [tags, setTags] = useState();

  // Stores react hooks
  const { taskId } = useParams();
  const navigate = useNavigate();

  // Returns task its going to render
  const specificTask = tasks.find((task) => {
    return task.id === parseInt(taskId);
  });

  console.log(taskId);

  useEffect(() => {
    if (taskId) {
      setNameInput(specificTask.name);
      setDescInput(specificTask.description);
      setDeadlineDate(specificTask.deadline);
      setTags(specificTask.tags.join(', '));
    }
  }, []);

  // Get data from form and update task through context
  const updateTasks = (e) => {
    e.preventDefault();

    const joinTags = (tags) => {
      const tagsArray = tags.join(', ');
      return tagsArray;
    };

    const splitTags = (tags) => {
      const tagsArray = tags.split(',');
      return tagsArray;
    };

    tasks.find(function (task) {
      if (task.id !== taskId) {
        if (task.name !== nameInput) task.name = nameInput;
        if (task.description !== descInput) task.description = descInput;
        if (task.deadline !== descInput) task.deadline = deadlineDate;
        console.log(task.tags);
        console.log(tags);
        if (tags.length >= 1) {
          if (joinTags(task.tags) !== tags) task.tags = splitTags(tags);
        } else {
          task.tags = tags;
        }
        return true;
      }
      return false;
    });

    console.log(tasks);

    setTasks(tasks);
    navigate(`${homePath}/tasks/${taskId}`);
  };

  return (
    <div className='w-full'>
      <form
        onSubmit={updateTasks}
        className='create-task-form'>
        <h2>Update task {nameInput}</h2>
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
            value={deadlineDate}
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
            value='Update task'
            className='btn btn-primary'
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateTask;
