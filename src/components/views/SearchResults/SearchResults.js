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

  return(
    <div>
      <Row className={styles.cardList}>
        {pics && pics.map((pic) =>
          <Col className={styles.card} key={pic.id} md={3} lg={3}>
            <button className={styles.modalButton} onClick={() => clickModal(pic)}>
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
        <Modal key={photoDetails.id} isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} className={styles.modalView}>
          <Container className={styles.modalContainer}>
            <h2 className={styles.author}>{photoDetails.user.name}</h2>
            <img className={styles.imageModal} alt={photoDetails.alt_description} src={photoDetails.urls.regular}/>
            <h3>{photoDetails.user.location}</h3>
            <h3>{photoDetails.description}</h3>
          </Container>
        </Modal>
      ): null }
    </div>
  );
};

SearchResults.propTypes = {
  pics: PropTypes.array,
};

export default SearchResults;
