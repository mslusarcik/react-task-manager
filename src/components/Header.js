// Import scss
import './Header.scss';

// Import assets
import Logo from '../assets/images/logo.png';

// Import contexts
import { homePathContext } from '../context/HomePathContext';

// Import other react stuff
import { NavLink, Link } from 'react-router-dom';
import { useContext } from 'react';

const Header = () => {
  // Stored github path
  const homePath = useContext(homePathContext);

  return (
    <header>
      <div className='inner-header'>
        <div className='logo-wrapper'>
          <Link
            to={`${homePath}/tasks`}
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
            {/* TODO: <li>
              <NavLink
                to={`${homePath}`}
                end>
                Home
              </NavLink>
            </li> */}
            <li>
              <NavLink
                to={`${homePath}/tasks`}
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
