import React from 'react';
import { useState, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import './SearchInput.scss';

const SearchInput = ({ getData, setData }) => {
  console.log('SearchInput component is running.');
  const [searchingText, setSearchingText] = useState('');
  const [filteredData, setFilteredData] = useState([...getData]);

  useEffect(() => {
    if (searchingText) {
      console.log('filled');
      const filteredInput = getData.filter((singleTask) => {
        return singleTask.name.toLowerCase().includes(searchingText.toLowerCase());
      });
      setFilteredData(...filteredInput);
    } else if (searchingText === '') {
      setFilteredData([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchingText]);

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
            placeholder='Hledat..'
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
