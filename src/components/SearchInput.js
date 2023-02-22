// Import scss
import './SearchInput.scss';

// Import other reacts stuff
import { useState, useEffect } from 'react';

// Import icons
import { BsSearch } from 'react-icons/bs';

const SearchInput = ({ getData, setData }) => {
  console.log('SearchInput component is running.');
  // Stored states
  const [searchingText, setSearchingText] = useState('');
  const [filteredData, setFilteredData] = useState([...getData]);

  // Updates data by string in input
  useEffect(() => {
    if (searchingText) {
      const filteredInput = getData.filter((singleTask) => {
        return singleTask.name.toLowerCase().includes(searchingText.toLowerCase());
      });
      setFilteredData(...filteredInput);
    } else if (searchingText === '') {
      setFilteredData([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchingText]);

  // Returns data back to parent component
  useEffect(() => {
    if (searchingText) {
      setData([filteredData]);
    } else {
      setData([...getData]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredData]);

  return (
    <div className='search-form-wrapper'>
      <form className='search-form'>
        <div className='form-group search-wrapper'>
          <input
            type='text'
            placeholder='Find a task by title..'
            className='search-input'
            onChange={(e) => setSearchingText(e.target.value)}
          />
          <BsSearch className='search-icon' />
        </div>
      </form>
    </div>
  );
};

export default SearchInput;
