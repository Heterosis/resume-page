import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import {
  Navbar, Nav, NavDropdown,
} from 'react-bootstrap';
import useScrollSpy from 'react-use-scrollspy';
import _ from 'lodash';
import hash from 'object-hash';

import styles from './App.module.css';
import AboutMe from './AboutMe';
import Skills from './Skills';
import WorkExperience from './WorkExperience';
import Portfolio from './Portfolio';
import Contact from './Contact';

const App = () => {
  const { t, i18n } = useTranslation();
  const [navExpand, setNavExpand] = useState(true);
  const navToggleRef = useRef(null);

  const sections = [
    { title: 'header', ref: useRef(null), showNav: false },
    { title: 'About Me', ref: useRef(null), showNav: true },
    { title: 'Skills', ref: useRef(null), showNav: true },
    { title: 'Experience', ref: useRef(null), showNav: true },
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

    if (navToggleRef.current && !navExpand) {
      navToggleRef.current.click();
    }
  };

  const handleResize = () => {
    if (window.innerWidth < 700) {
      setNavExpand(false);
    } else {
      setNavExpand(true);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return window.addEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <Navbar collapseOnSelect expand={navExpand} fixed="top" className={`${activeSection > 0 ? styles.NavbarColor : styles.TopNavbarColor} ${styles.Navbar}`}>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" ref={navToggleRef} className="ms-auto me-3" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-between align-items-center w-100">
            <div className={`d-flex justify-content-center align-items-center flex-wrap ${navExpand ? '' : 'flex-column'}`}>
              {_.map(sections, (section, index) => {
                if (section.showNav) {
                  return (
                    <Nav.Item
                      key={hash(`${_.toString(section)}${index}`)}
                      className="d-flex align-items-center mx-2"
                    >
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
            </div>
            <div className={`d-flex justify-content-center align-items-center ${navExpand ? '' : 'flex-column-reverse'}`}>
              <NavDropdown
                title={<FontAwesomeIcon icon={['fas', 'language']} style={{ fontSize: 30 }} />}
              >
                <NavDropdown.Item onClick={() => { i18n.changeLanguage('en'); }}>English</NavDropdown.Item>
                <NavDropdown.Item onClick={() => { i18n.changeLanguage('zh'); }}>中文</NavDropdown.Item>
              </NavDropdown>
              <Nav.Item className={`d-flex justify-content-center align-items-center ${styles.NavbarBtn}`}>
                <Nav.Link href="https://github.com/Heterosis/resume-site" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={['fab', 'github']} style={{ fontSize: 30 }} />
                </Nav.Link>
              </Nav.Item>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <header
        ref={sectionRefs[0]}
        className={`d-flex justify-content-center align-items-center ${styles.Header}`}
      >
        <div className={`${styles.HeaderAnimation}`}>
          <h1>Hi, I&apos;m Heterosis!</h1>
          <p className="text-center">{t('headerText')}</p>
        </div>
      </header>
      <section ref={sectionRefs[1]} className={`${styles.SectionWrapper}`}><AboutMe /></section>
      <section ref={sectionRefs[2]} className={`${styles.SectionWrapper}`}><Skills /></section>
      <section ref={sectionRefs[3]} className={`${styles.SectionWrapper}`}><WorkExperience /></section>
      <section ref={sectionRefs[4]} className={`${styles.SectionWrapper}`}><Portfolio /></section>
      <section ref={sectionRefs[5]} className={`${styles.SectionWrapper}`}><Contact navExpand={navExpand} /></section>
    </div>
  );
};

export default App;
