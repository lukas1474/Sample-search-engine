import React, { useState } from 'react';
import styles from '../Search/Search.module.scss';

import  Unsplash, { toJson } from 'unsplash-js';

import { UNSPLASH_URL, unsplashId } from '../../../config';

const unsplash = new Unsplash({
  accessKey: unsplashId,
});

const Search = () => {
  const [photo, setPhotos] = useState('');
  const [search, setSearch] = useState('');
  const [name, setName] = useState();
  const [searchId, setSearchId] = useState('');
  const [query, setQuery] = useState('');
  const [pics, setPics] = useState([]);



  const searchPhotos = async (event) => {
    event.preventDefault();
    console.log('Submitting the Form');
    unsplash.search
      .photos(query)
      .then(toJson)
      .then((json) => {
        setPics(json.results);
      });
    console.log(pics);
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
    setSearch('');
  };
  console.log(query);

  const handleKeyPress = (pic) => {
    // setSearch(option.geometry.coordinates);
    setQuery(pic.tags.title);
    // setOptions([]);
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
            <ul className={styles.optionsUl}>
              {pics && pics.map(pic => (
                <li key={pic.id} className={styles.optionsLi}>
                  <button
                    onClick={() => handleKeyPress(pic)}
                  >
                    {pic.tags.title}
                  </button>
                </li>
              ))}
              {/* {console.log(options)} */}
            </ul>
          </form>
        </div>
        <div className={styles.cardList}>
          {pics.map((pic) =>
            <div className={styles.card} key={pic.id}>
              <img
                className={styles.cardImage}
                alt={pic.alt_description}
                src={pic.urls.full}
                width="100%"
                height="100%"
              ></img>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search ;
