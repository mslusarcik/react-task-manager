// Import scss
import './Footer.scss';

const Footer = () => {
  console.log('Footer component is running.');
  return (
    <footer>
      <span>
        Made by Miroslav Slusarčík,{' '}
        <a href='https://github.com/mslusarcik/react-task-manager/tree/main'>github source code</a>.
      </span>
    </footer>
  );
};

export default Footer;
