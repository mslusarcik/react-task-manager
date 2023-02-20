import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './Layout.scss';

const Layout = ({ homePath }) => {
  console.log('Layout component is running.');
  return (
    <div className='overall-wrapper'>
      <Header homePath={homePath} />
      <main>
        <div className='inner-content'>
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
