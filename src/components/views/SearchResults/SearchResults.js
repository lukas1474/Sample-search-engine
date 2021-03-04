import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import styles from '../SearchResults/SearchResults.module.scss';

import { Container, Row, Col } from 'react-bootstrap';

const SearchResults = ({pics}) => {

  const [ modalIsOpen, setModalIsOpen] = useState('');
  const [ photoDetails, setPhotoDetails ] = useState();

  const clickModal = (pic) => {
    setModalIsOpen(true);
    setPhotoDetails(pic);

    document.body.style.position = `fixed`;
    document.body.style.top = `-${window.scrollY}px`;
  };

  useEffect(() => {
    if (modalIsOpen === false) {
      const scrollY = document.body.style.top;
      document.body.style.position = ``;
      document.body.style.top = ``;
      window.scrollTo(0, parseInt(scrollY || 0) * -1);
    }
  });

  return(
    <div>
      <Row className={styles.cardList}>
        {pics && pics.map((pic) =>
          <Col className={styles.card} key={pic.id} md={3} lg={3}>
            <button className={styles.modalButton} onClick={() => clickModal(pic)}>
              <img className={styles.cardImage} alt={pic.alt_description} src={pic.urls.regular}/>
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
