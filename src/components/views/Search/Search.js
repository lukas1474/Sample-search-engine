import React, { useState } from 'react';
import styles from '../Search/Search.module.scss';

import { unsplashId } from '../../../config';

import { Container, Row, Col } from 'react-bootstrap';

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
      console.log(res);
    });
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };
  console.log(query);

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
        <Container>
          <Row className={styles.cardList}>
            {pics && pics.map((pic) =>
              <Col className={styles.card} key={pic.id} lg={4}>
                <img
                  className={styles.cardImage}
                  alt={pic.alt_description}
                  src={pic.urls.regular}
                ></img>
              </Col>
            )}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Search ;
