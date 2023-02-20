import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateTask = ({ updateData }) => {
  console.log('CreateTask component is running.');
  const [nameInput, setNameInput] = useState('');
  const [descInput, setDescInput] = useState('');
  const navigate = useNavigate();

  const addNewTask = (e) => {
    e.preventDefault();

    const updatedData = {
      id: Date.now(),
      name: nameInput,
      description: descInput,
      isCompleted: false,
    };

    updateData(updatedData);
    navigate('/tasks');
  };

  return (
    <div>
      <form onSubmit={addNewTask}>
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
          <input
            name='taskDescription'
            type='text'
            onChange={(e) => {
              setDescInput(e.target.value);
            }}
            value={descInput}
            placeholder='Add a task description'
          />
        </div>
        <div className='form-group'>
          <input
            type='submit'
            value='Add task'
          />
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
