import React from 'react';
import Carousel from 'react-multi-carousel';
import _ from 'lodash';
import hash from 'object-hash';

import resumeSiteImg from 'images/resume-site.png';
import randomQuoteMachineImg from 'images/random-quote-machine.png';
import ticTacToeImg from 'images/tic-tac-toe.png';
import toDoListImg from 'images/to-do-list.png';

import commonStyles from '../common.module.css';
import PortfolioCard from './PortfolioCard';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1600 },
    items: 3,
  },
  tabletAndmobile: {
    breakpoint: { max: 1600, min: 1024 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 1024, min: 0 },
    items: 1,
  },
};

const Portfolio = () => {
  const portfolioArr = [
    {
      title: 'My résumé site',
      description: 'My résumé site that constructed with React ecosystem libraries',
      imgSrc: resumeSiteImg,
      link: 'https://heterosis.github.io/resume-site/',
      repository: 'https://github.com/Heterosis/resume-site',
    },
    {
      title: 'Random Quote Machine',
      description: (
        <>
          A random quote machine utilizing API from
          {' '}
          <a href="https://quotesondesign.com/api/" target="_blank" rel="noreferrer">Quotes on Design</a>
          .
        </>
      ),
      imgSrc: randomQuoteMachineImg,
      link: 'https://heterosis.github.io/Random-Quote-Machine/',
      repository: 'https://github.com/Heterosis/Random-Quote-Machine',
    },
    {
      title: 'Tic-tac-toe',
      description: (
        <>
          A tic-tac-toe game constructed with React Hooks.
        </>
      ),
      imgSrc: ticTacToeImg,
      link: 'https://heterosis.github.io/Tic-Tac-Toe/',
      repository: 'https://github.com/Heterosis/Tic-Tac-Toe',
    },
    {
      title: 'To-do list with React',
      description: (
        <>
          A to-do list constructed with React Hooks.
        </>
      ),
      imgSrc: toDoListImg,
      link: 'https://heterosis.github.io/To-Do-List-with-React/',
      repository: 'https://github.com/Heterosis/To-Do-List-with-React',
    },
  ];

  return (
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
        {portfolioArr.map((portfolioData, index) => (
          <PortfolioCard
            key={hash(`${_.toString(portfolioData)}${index}`)}
            portfolioData={portfolioData}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default Portfolio;
