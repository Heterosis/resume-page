import React from 'react';
import Carousel from 'react-multi-carousel';
import { Card, Button } from 'react-bootstrap';

import commonStyles from '../common.module.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Portfolio = () => (
  <div className={`${commonStyles.MarginX}`}>
    <h1 className={`text-center my-5 ${commonStyles.TitleText}`}>Portfolio</h1>
    <Carousel
      swipeable={false}
      draggable={false}
      showDots
      responsive={responsive}
      infinite
      autoPlay
      centerMode
      autoPlaySpeed={4000}
      keyBoardControl
      customTransition="transform 500ms ease-in-out"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={['tablet', 'mobile']}
      dotListClass="custom-dot-list-style"
    >
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card&apos;s content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
    </Carousel>
  </div>
);

export default Portfolio;
