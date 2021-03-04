import React from 'react';
import PropTypes from 'prop-types';

import styles from '../SearchResults/SearchResults.module.scss';

import { Container, Row, Col } from 'react-bootstrap';

const SearchResults = ({pics}) => {

  return(
    <Container>
      <Row className={styles.cardList}>
        {pics && pics.map((pic) =>
          <Col className={styles.card} key={pic.id} lg={4}>
            <img
              className={styles.cardImage}
              alt={pic.alt_description}
              src={pic.urls.regular}
            ></img>
            {console.log('test', pics)}
          </Col>
        )}
      </Row>
    </Container>
  );
};

SearchResults.propTypes = {
  pics: PropTypes.array,
};

export default SearchResults;
