import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  console.log('Error component is running.');
  return (
    <div>
      <h2>Whoopsie, stranka neexistuje</h2>
      <Link to={`/tasks/`}>Go to all tasks</Link>
    </div>
  );
};

export default Error;
