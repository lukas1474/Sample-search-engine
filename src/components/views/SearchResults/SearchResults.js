import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import styles from '../SearchResults/SearchResults.module.scss';

import { Container, Row, Col } from 'react-bootstrap';

const SearchResults = ({pics}) => {

  const [ modalIsOpen, setModalIsOpen] = useState(true);
  const [ photoDetails, setPhotoDetails ] = useState();

  const clickModal = (pic) => {
    setModalIsOpen(true);
    setPhotoDetails(pic);
  };
  console.log(photoDetails);
  return(
    <Container>
      <Row className={styles.cardList}>
        {pics && pics.map((pic) =>
          <Col className={styles.card}  key={pic.id} lg={4}>
            <button onClick={() => clickModal(pic)}>
              <img
                className={styles.cardImage}
                alt={pic.alt_description}
                src={pic.urls.regular}
              ></img>
            </button>
          </Col>
        )}
      </Row>
      {photoDetails ? (
        <Modal key={photoDetails.id} isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
        >
          <p>{photoDetails.id}</p>
          <img
            className={styles.cardImage}
            alt={photoDetails.alt_description}
            src={photoDetails.urls.regular}
          ></img>
        </Modal>
      ): null }
    </Container>
  );
};

SearchResults.propTypes = {
  pics: PropTypes.array,
};

export default SearchResults;
