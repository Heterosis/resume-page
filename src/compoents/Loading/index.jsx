import React from 'react';
import { Container, Spinner } from 'react-bootstrap';

import style from './index.module.css';

const Loading = (props) => {
  const { show = true } = props;

  return (
    <>
      {show && (
        <Container fluid className={`d-flex justify-content-center align-items-center ${style.H100}`}>
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
