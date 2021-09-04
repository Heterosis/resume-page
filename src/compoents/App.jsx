import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import { Navbar, Nav } from 'react-bootstrap';
import useScrollSpy from 'react-use-scrollspy';
import _ from 'lodash';
import hash from 'object-hash';

import LangBtn from './LangBtn';
import styles from './App.module.css';
import AboutMe from './AboutMe';
import Skills from './Skills';
import WorkExperience from './WorkExperience';
import Portfolio from './Portfolio';

const App = () => {
  const { t } = useTranslation();

  const sections = [
    { title: 'header', ref: useRef(null), showNav: false },
    { title: 'About Me', ref: useRef(null), showNav: true },
    { title: 'Skills', ref: useRef(null), showNav: true },
    { title: 'Work Experience', ref: useRef(null), showNav: true },
    { title: 'Portfolio', ref: useRef(null), showNav: true },
    { title: 'Contact', ref: useRef(null), showNav: true },
  ];

  const sectionRefs = _.map(sections, (section) => section.ref);

  const activeSection = useScrollSpy({
    sectionElementRefs: sectionRefs,
    offsetPx: -75,
  });

  const handleScrollto = (ref) => {
    const yOffset = -70;
    const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y });
  };

  return (
    <div>
      <Navbar fixed="top" className={`${activeSection > 0 ? styles.NavbarColor : styles.HeaderColor}`}>
        <Nav>
          {_.map(sections, (section) => {
            if (section.showNav) {
              return (
                <Nav.Item key={hash(_.omit(section, ['ref']))} className="d-flex align-items-center">
                  <Nav.Link
                    onClick={() => {
                      handleScrollto(section.ref);
                    }}
                  >
                    {section.title}
                  </Nav.Link>
                </Nav.Item>
              );
            }

            return null;
          })}
          <Nav.Item className="d-flex align-items-center">
            <Nav.Link href="https://github.com/Heterosis/resume-site" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={['fab', 'github']} style={{ fontSize: 30 }} />
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
      <header
        ref={sectionRefs[0]}
        className={`d-flex justify-content-center align-items-center ${styles.Header}`}
      >
        <div className={`${styles.HeaderAnimation}`}>
          <h1>Hi, I&apos;m Heterosis!</h1>
          <p className="text-center">在前端工程師的路上不斷努力</p>
        </div>
      </header>
      <section ref={sectionRefs[1]} className={`${styles.SectionWrapper}`}><AboutMe /></section>
      <section ref={sectionRefs[2]} className={`${styles.SectionWrapper}`}><Skills /></section>
      <section ref={sectionRefs[3]} className={`${styles.SectionWrapper}`}><WorkExperience /></section>
      <section ref={sectionRefs[4]} className={`${styles.SectionWrapper}`}><Portfolio /></section>
      <section ref={sectionRefs[5]} className={`${styles.SectionWrapper}`}><h1>Section 5</h1></section>
      <LangBtn />
      <h1>{t('title')}</h1>
    </div>
  );
};

export default App;
