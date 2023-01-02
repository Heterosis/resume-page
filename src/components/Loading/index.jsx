import React from 'react';
import { Container, Spinner } from 'react-bootstrap';

import styles from './index.module.css';

const Loading = (props) => {
  const { show = true } = props;

  return (
    <>
      {show && (
        <Container fluid className={`d-flex justify-content-center align-items-center ${styles.H100}`}>
          <Spinner
            animation="border"
            variant="primary"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Container>
      )}
    </>
  );
};

export default Loading;
