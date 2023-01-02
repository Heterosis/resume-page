import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Portfolio.module.css';

const PortfolioCard = (props) => {
  const { portfolioData } = props;
  const {
    title, description, imgSrc, link, repository,
  } = portfolioData;

  return (
    <Card className={`${styles.PortfolioCard}`}>
      <Card.Body>
        <Card.Img variant="top" src={imgSrc} />
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Card.Link className={`${styles.PortfolioIcon}`} href={link} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={['fas', 'paper-plane']} />
        </Card.Link>
        <Card.Link className={`${styles.PortfolioIcon}`} href={repository} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={['fab', 'github']} />
        </Card.Link>
      </Card.Footer>
    </Card>
  );
};

export default PortfolioCard;
