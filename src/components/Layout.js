// Import scss
import './Layout.scss';

// Import components
import Header from './Header';
import Footer from './Footer';

// Import other react stuff
import { Outlet } from 'react-router-dom';

const Layout = () => {
  console.log('Layout component is running.');
  return (
    <div className='overall-wrapper'>
      <Header />
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
