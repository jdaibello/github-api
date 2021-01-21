import React from 'react';
import Form from './components/Form';
import UserInfo from './components/UserInfo';
import './styles.css';

function Search() {

  const handleSearch = (search: string) => {
    console.log(search);
  }

  return (
    <div className="search-container">
      <Form onSearch={handleSearch} />
      <UserInfo />
    </div>
  );
}

export default Search;