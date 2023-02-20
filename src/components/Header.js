import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.scss';
import Logo from '../assets/images/logo.png';

const Header = ({ homePath }) => {
  console.log('Header component is running.');
  return (
    <header>
      <div className='inner-header'>
        <div className='logo-wrapper'>
          <Link
            to={homePath}
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
              <NavLink
                to={homePath}
                end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={homePath + '/tasks'}
                end>
                Tasks
              </NavLink>
            </li>
            <li>
              <NavLink
                to={homePath + '/task/create'}
                className='btn btn-primary'
                end>
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
