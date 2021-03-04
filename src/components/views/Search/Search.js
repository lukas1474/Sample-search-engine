import React, { useState } from 'react';
import styles from '../Search/Search.module.scss';

import { unsplashId } from '../../../config';
import SearchResults from '../SearchResults/SearchResults';

const Search = () => {
  const [query, setQuery] = useState('');
  const [pics, setPics] = useState([]);

  console.log('pics', pics);

  const searchPhotos = async (event) => {
    event.preventDefault();
    fetch(`https://api.unsplash.com/search/photos?page=2&per_page=20&query=${query}&client_id=${unsplashId}`, {
      'method': 'GET',
    }).then((res) => {
      return res.json();
    }).then(res => {
      setPics(res.results);
      console.log(res.results);
    });
    console.log(pics);
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return(
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.searchSection}>
          <h1 className={styles.title}>Unsplash</h1>
          <form className={styles.form} onSubmit={searchPhotos}>
            <input
              className={styles.input}
              type='text'
              name='photo'
              placeholder='Search for photos'
              value={query}
              onChange={handleChange}
            />
          </form>
        </div>
        <SearchResults pics={pics} />
      </div>
    </div>
  );
};

export default Search ;
