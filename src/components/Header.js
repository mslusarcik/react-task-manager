import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.scss';
import Logo from '../assets/images/logo.png';

const Header = () => {
  console.log('Header component is running.');
  return (
    <header>
      <div className='inner-header'>
        <div className='logo-wrapper'>
          <Link
            to='/'
            className='flex items-center'>
            <img
              src={Logo}
              alt=''
              className='logo'
            />
            <span className='font-extrabold text-xl ml-4'>
              Task<span className='font-light pl-1'>Manager</span>
            </span>
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/tasks'>Tasks</NavLink>
            </li>
            <li>
              <NavLink
                to='/task/create'
                className='btn btn-primary'>
                Create task
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
